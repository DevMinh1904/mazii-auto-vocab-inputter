/**
 * Mazii Vocabulary Automation Bot
 * Automates entering vocabulary into Mazii Notebook (https://mazii.net/)
 */

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const puppeteer = require('puppeteer-core');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const DEFAULT_URL = 'https://mazii.net/vi-VN/learning-hub/notebook/6926430?source=my-notebook';

// Parse CSV with quotes handling
function parseCsvFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8').replace(/^\uFEFF/, '');
  const lines = content.split(/\r?\n/).filter(line => line.trim().length > 0);
  
  if (lines.length < 2) return [];

  function parseCsvLine(text) {
    const result = [];
    let cur = '';
    let inQuotes = false;
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char === '"') {
        if (inQuotes && text[i + 1] === '"') {
          cur += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (char === ',' && !inQuotes) {
        result.push(cur.trim());
        cur = '';
      } else {
        cur += char;
      }
    }
    result.push(cur.trim());
    return result;
  }

  const header = parseCsvLine(lines[0]);
  const colWord = header.findIndex(h => h.includes('Từ vựng'));
  const colPhonetic = header.findIndex(h => h.includes('Phonetic'));
  const colMean = header.findIndex(h => h.includes('Nghĩa'));
  const colNote = header.findIndex(h => h.includes('Ghi chú'));

  const items = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = parseCsvLine(lines[i]);
    const word = cols[colWord >= 0 ? colWord : 0] || '';
    const phonetic = cols[colPhonetic >= 0 ? colPhonetic : 1] || '';
    const meaning = cols[colMean >= 0 ? colMean : 2] || '';
    const note = cols[colNote >= 0 ? colNote : 3] || '';

    if (word) {
      items.push({
        index: i,
        word,
        phonetic,
        meaning,
        note
      });
    }
  }

  return items;
}

const args = process.argv.slice(2);
const getArg = (name, def) => {
  const arg = args.find(a => a.startsWith(`--${name}=`));
  return arg ? arg.split('=')[1] : def;
};

const csvFile = getArg('csv', 'vocab2_mazii_ready.csv');
const startIndex = parseInt(getArg('start', '0'), 10);
const limit = parseInt(getArg('limit', '0'), 10);
const delayMs = parseInt(getArg('delay', '1200'), 10);

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function ensureChromeRunning() {
  try {
    const browser = await puppeteer.connect({ browserURL: 'http://127.0.0.1:9222' });
    browser.disconnect();
    return;
  } catch (e) {
    console.log('Chrome not running with remote debugging. Launching Chrome...');
    spawn(CHROME_PATH, [
      '--remote-debugging-port=9222',
      DEFAULT_URL
    ], { detached: true, stdio: 'ignore' }).unref();

    for (let i = 0; i < 20; i++) {
      await sleep(1000);
      try {
        const browser = await puppeteer.connect({ browserURL: 'http://127.0.0.1:9222' });
        browser.disconnect();
        console.log('Chrome launched successfully.');
        return;
      } catch (err) {
        // waiting
      }
    }
    throw new Error('Could not connect to Chrome on port 9222 after launching');
  }
}

async function getNotebookPage(browser) {
  const pages = await browser.pages();
  let page = pages.find(p => p.url().includes('notebook'));
  if (!page) {
    page = pages[0] || await browser.newPage();
    if (!page.url().includes('notebook')) {
      await page.goto(DEFAULT_URL, { waitUntil: 'domcontentloaded' });
    }
  }
  return page;
}

async function run() {
  console.log('====================================================');
  console.log('           MAZII VOCABULARY AUTO-ENTRY BOT          ');
  console.log('====================================================');
  console.log(`Loading vocabulary from: ${csvFile}`);

  if (!fs.existsSync(csvFile)) {
    console.error(`Error: File not found: ${csvFile}`);
    process.exit(1);
  }

  const allWords = parseCsvFile(csvFile);
  console.log(`Total words loaded: ${allWords.length}`);

  let wordsToProcess = allWords.slice(startIndex);
  if (limit > 0) {
    wordsToProcess = wordsToProcess.slice(0, limit);
  }

  console.log(`Processing ${wordsToProcess.length} words (Start offset: ${startIndex}, Delay: ${delayMs}ms)...`);

  await ensureChromeRunning();
  const browser = await puppeteer.connect({ browserURL: 'http://127.0.0.1:9222' });
  let page = await getNotebookPage(browser);
  console.log(`Target Page: "${await page.title()}" (${page.url()})`);

  let client = await page.target().createCDPSession();

  // Helper to re-acquire page and client if frame detaches
  async function refreshPageHandle() {
    try {
      page = await getNotebookPage(browser);
      client = await page.target().createCDPSession();
    } catch (e) {
      console.log('Error refreshing page handle:', e.message);
    }
  }

  async function typeViaCDP(selector, text) {
    await page.click(selector);
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyA');
    await page.keyboard.up('Control');
    await page.keyboard.press('Backspace');
    if (text) {
      await client.send('Input.insertText', { text });
    }
    await sleep(80);
  }

  async function closeModal() {
    try {
      await page.evaluate(() => {
        const cancelBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.trim() === 'Huỷ' || b.textContent.trim() === 'Hủy');
        if (cancelBtn) cancelBtn.click();
        const closeBtn = document.querySelector('.modal-close, button[aria-label="Close"], .modal-ds__close');
        if (closeBtn) closeBtn.click();
        // Remove backdrop if stuck
        const backdrops = document.querySelectorAll('.modal-backdrop, .overlay');
        backdrops.forEach(b => b.remove());
      });
      await sleep(300);
    } catch (e) {}
  }

  async function ensureModalOpen() {
    try {
      let wordVisible = await page.evaluate(() => {
        const w = document.querySelector('input#word');
        return w ? (w.offsetParent !== null) : false;
      });

      if (wordVisible) return true;

      // Close any stray backdrops or alerts
      await page.keyboard.press('Escape');
      await sleep(200);

      // Check if dropdown menu is already open
      let menuOpen = await page.evaluate(() => {
        const el = Array.from(document.querySelectorAll('.option-label')).find(e => e.textContent.trim() === 'Tự thêm từ');
        return el && el.offsetParent !== null;
      });

      if (!menuOpen) {
        // Click the + button in the toolbar
        const clicked = await page.evaluate(() => {
          const icon = document.querySelector('.ai-icon--add-notebook');
          if (!icon) return false;
          const btn = icon.closest('button');
          if (!btn) return false;
          btn.click();
          return true;
        });

        if (!clicked) {
          await page.evaluate(() => {
            const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('Thêm từ mới'));
            if (btn) btn.click();
          });
        }

        await sleep(400);
      }

      // Now click "Tự thêm từ"
      await page.evaluate(() => {
        const el = Array.from(document.querySelectorAll('.option-label')).find(e => e.textContent.trim() === 'Tự thêm từ');
        if (el) {
          const opt = el.closest('.filter-option') || el;
          opt.click();
        }
      });

      // Wait for input#word to be visible
      const startTime = Date.now();
      while (Date.now() - startTime < 3000) {
        wordVisible = await page.evaluate(() => {
          const w = document.querySelector('input#word');
          return w ? (w.offsetParent !== null) : false;
        });
        if (wordVisible) return true;
        await sleep(100);
      }

      return false;
    } catch (err) {
      if (err.message.includes('detached')) {
        await refreshPageHandle();
      }
      return false;
    }
  }

  const results = {
    total: wordsToProcess.length,
    success: 0,
    failed: 0,
    entries: []
  };

  for (let i = 0; i < wordsToProcess.length; i++) {
    const item = wordsToProcess[i];
    const currentNum = startIndex + i + 1;
    process.stdout.write(`[${currentNum}/${allWords.length}] Adding "${item.word}" (${item.phonetic} - ${item.meaning})... `);

    let success = false;
    let errorMsg = '';

    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        const modalReady = await ensureModalOpen();
        if (!modalReady) {
          throw new Error('Failed to open modal');
        }

        await typeViaCDP('input#word', item.word);
        if (item.phonetic) {
          await typeViaCDP('input#phonetic', item.phonetic);
        }
        await typeViaCDP('textarea#mean', item.meaning);

        await sleep(250);

        const submitResult = await page.evaluate(() => {
          const btns = Array.from(document.querySelectorAll('button'));
          const submitBtn = btns.find(b => b.textContent.trim() === 'Thêm' && b.type === 'submit');
          if (submitBtn && !submitBtn.disabled) {
            submitBtn.click();
            return { clicked: true };
          }
          return { clicked: false, disabled: submitBtn ? submitBtn.disabled : true };
        });

        if (!submitResult.clicked) {
          throw new Error(`Submit button not ready (disabled: ${submitResult.disabled})`);
        }

        const submitTime = Date.now();
        let modalClosed = false;
        while (Date.now() - submitTime < 3000) {
          const open = await page.evaluate(() => {
            const w = document.querySelector('input#word');
            return w ? (w.offsetParent !== null) : false;
          });
          if (!open) {
            modalClosed = true;
            break;
          }
          await sleep(100);
        }

        if (!modalClosed) {
          await closeModal();
        }

        success = true;
        break;
      } catch (err) {
        errorMsg = err.message;
        if (err.message.includes('detached')) {
          await refreshPageHandle();
        }
        await closeModal();
        await sleep(500);
      }
    }

    if (success) {
      results.success++;
      console.log('✓ Success');
      results.entries.push({ word: item.word, phonetic: item.phonetic, meaning: item.meaning, status: 'SUCCESS' });
    } else {
      results.failed++;
      console.log(`✗ Failed (${errorMsg})`);
      results.entries.push({ word: item.word, phonetic: item.phonetic, meaning: item.meaning, status: 'FAILED', error: errorMsg });
    }

    if ((i + 1) % 10 === 0 || i === wordsToProcess.length - 1) {
      fs.writeFileSync('import_progress_sheet2.json', JSON.stringify({
        processedCount: i + 1,
        totalToProcess: wordsToProcess.length,
        successCount: results.success,
        failedCount: results.failed,
        lastWord: item.word,
        timestamp: new Date().toISOString()
      }, null, 2), 'utf8');
    }

    await sleep(delayMs);
  }

  console.log('\n====================================================');
  console.log('                EXECUTION SUMMARY                   ');
  console.log('====================================================');
  console.log(`Total Processed: ${wordsToProcess.length}`);
  console.log(`Successful:      ${results.success}`);
  console.log(`Failed:          ${results.failed}`);
  console.log('====================================================');

  const reportLines = [
    '# Mazii Vocabulary Import Report (Sheet 2)',
    '',
    `- **Date**: ${new Date().toLocaleString()}`,
    `- **File Processed**: \`${csvFile}\``,
    `- **Total Entries in Batch**: ${wordsToProcess.length}`,
    `- **Successfully Added**: ${results.success}`,
    `- **Failed Entries**: ${results.failed}`,
    '',
    '## Failed Entries (if any)',
    ''
  ];

  const failedItems = results.entries.filter(e => e.status === 'FAILED');
  if (failedItems.length === 0) {
    reportLines.push('*All items were imported successfully without errors!*');
  } else {
    reportLines.push('| # | Từ vựng | Phiên âm | Nghĩa | Lỗi |');
    reportLines.push('|---|---|---|---|---|');
    failedItems.forEach((f, idx) => {
      reportLines.push(`| ${idx + 1} | ${f.word} | ${f.phonetic} | ${f.meaning} | ${f.error || 'N/A'} |`);
    });
  }

  fs.writeFileSync('import_summary_sheet2.md', reportLines.join('\n'), 'utf8');
  console.log('Report saved to import_summary_sheet2.md');

  browser.disconnect();
}

run().catch(err => {
  console.error('Fatal execution error:', err);
});
