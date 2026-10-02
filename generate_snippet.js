const fs = require('fs');

function parseCsvFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8').replace(/^\uFEFF/, '');
  const lines = content.split(/\r?\n/).filter(line => line.trim().length > 0);
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
    if (word) items.push({ index: i, word, phonetic, meaning, note });
  }
  return items;
}

// All remaining words starting from index 30 (word 31: おもしろい)
const allWords = parseCsvFile('vocab2_mazii_ready.csv');
const remainingWords = allWords.slice(30);

const snippetCode = `/**
 * Mazii Direct Console Importer
 * Open Mazii Notebook: https://mazii.net/vi-VN/learning-hub/notebook/6926430?source=my-notebook
 * Press F12 -> Console -> Paste this entire script -> Press Enter!
 */
(async () => {
  const words = ${JSON.stringify(remainingWords, null, 2)};
  const DELAY_MS = 1200;
  let isPaused = false;
  let isStopped = false;

  // Create UI overlay
  const overlay = document.createElement('div');
  overlay.id = 'mazii-importer-overlay';
  overlay.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:999999;background:#1e1e2f;color:#fff;padding:16px 20px;border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,0.4);font-family:sans-serif;font-size:14px;min-width:320px;border:1px solid #3b82f6;';
  overlay.innerHTML = \`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
      <b style="color:#60a5fa;font-size:15px;">Mazii Vocab Importer</b>
      <span id="mazii-status-badge" style="background:#10b981;color:#fff;font-size:11px;padding:2px 8px;border-radius:99px;">Running</span>
    </div>
    <div id="mazii-progress-text" style="margin-bottom:6px;font-size:13px;">Starting...</div>
    <div style="background:#374151;height:8px;border-radius:4px;overflow:hidden;margin-bottom:12px;">
      <div id="mazii-progress-bar" style="background:#3b82f6;height:100%;width:0%;transition:width 0.2s;"></div>
    </div>
    <div id="mazii-current-word" style="font-size:12px;color:#9ca3af;margin-bottom:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"></div>
    <div style="display:flex;gap:8px;">
      <button id="mazii-pause-btn" style="flex:1;padding:6px;background:#f59e0b;color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:bold;">Tạm dừng</button>
      <button id="mazii-stop-btn" style="flex:1;padding:6px;background:#ef4444;color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:bold;">Dừng</button>
    </div>
  \`;
  document.body.appendChild(overlay);

  const pauseBtn = document.getElementById('mazii-pause-btn');
  const stopBtn = document.getElementById('mazii-stop-btn');
  const statusBadge = document.getElementById('mazii-status-badge');
  const progressText = document.getElementById('mazii-progress-text');
  const progressBar = document.getElementById('mazii-progress-bar');
  const currentWordDiv = document.getElementById('mazii-current-word');

  pauseBtn.onclick = () => {
    isPaused = !isPaused;
    pauseBtn.textContent = isPaused ? 'Tiếp tục' : 'Tạm dừng';
    pauseBtn.style.background = isPaused ? '#10b981' : '#f59e0b';
    statusBadge.textContent = isPaused ? 'Paused' : 'Running';
    statusBadge.style.background = isPaused ? '#f59e0b' : '#10b981';
  };

  stopBtn.onclick = () => {
    isStopped = true;
    overlay.remove();
    console.log('Importer stopped by user.');
  };

  function sleep(ms) {
    return new Promise(r => setTimeout(r, ms));
  }

  function setInputValue(el, value) {
    el.focus();
    const nativeSetter = Object.getOwnPropertyDescriptor(
      el instanceof HTMLTextAreaElement ? window.HTMLTextAreaElement.prototype : window.HTMLInputElement.prototype, 'value'
    )?.set;
    if (nativeSetter) {
      nativeSetter.call(el, value);
    } else {
      el.value = value;
    }
    el.dispatchEvent(new Event('input', { bubbles: true, cancelable: true }));
    el.dispatchEvent(new Event('change', { bubbles: true, cancelable: true }));
    el.dispatchEvent(new Event('blur', { bubbles: true, cancelable: true }));
  }

  async function ensureModalOpen() {
    let wordInput = document.querySelector('input#word');
    if (wordInput && wordInput.offsetParent !== null) return true;

    // Check empty notebook button first: "Thêm từ mới"
    const emptyBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('Thêm từ mới') && b.offsetParent !== null);
    if (emptyBtn) {
      emptyBtn.click();
      await sleep(500);
      wordInput = document.querySelector('input#word');
      if (wordInput && wordInput.offsetParent !== null) return true;
    }

    // Try + icon in top bar
    const plusIcon = document.querySelector('.ai-icon--add-notebook');
    if (plusIcon) {
      plusIcon.closest('button').click();
      await sleep(400);

      // Click "Tự thêm từ"
      const opt = Array.from(document.querySelectorAll('.option-label')).find(e => e.textContent.trim() === 'Tự thêm từ');
      if (opt) {
        opt.closest('.filter-option').click();
      }
    }

    const start = Date.now();
    while (Date.now() - start < 3000) {
      wordInput = document.querySelector('input#word');
      if (wordInput && wordInput.offsetParent !== null) return true;
      await sleep(100);
    }
    return false;
  }

  async function closeModal() {
    const cancel = Array.from(document.querySelectorAll('button')).find(b => b.textContent.trim() === 'Huỷ' || b.textContent.trim() === 'Hủy');
    if (cancel) cancel.click();
    const close = document.querySelector('.modal-ds__close, button[aria-label="Close"], .modal-close');
    if (close) close.click();
    await sleep(200);
  }

  console.log(\`Starting import of \${words.length} vocabulary words...\`);
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < words.length; i++) {
    if (isStopped) break;
    while (isPaused) {
      await sleep(200);
      if (isStopped) break;
    }

    const item = words[i];
    const pct = Math.round(((i + 1) / words.length) * 100);
    progressText.textContent = \`Word \${i + 1} of \${words.length} (\${pct}%)\`;
    progressBar.style.width = \`\${pct}%\`;
    currentWordDiv.textContent = \`\${item.word} (\${item.phonetic}) - \${item.meaning}\`;

    let success = false;
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        const opened = await ensureModalOpen();
        if (!opened) throw new Error('Could not open modal');

        const wordInput = document.querySelector('input#word');
        const phoneticInput = document.querySelector('input#phonetic');
        const meanInput = document.querySelector('textarea#mean');

        setInputValue(wordInput, item.word);
        if (phoneticInput && item.phonetic) setInputValue(phoneticInput, item.phonetic);
        if (meanInput && item.meaning) setInputValue(meanInput, item.meaning);

        await sleep(300);

        const submitBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.trim() === 'Thêm' && b.type === 'submit');
        if (!submitBtn || submitBtn.disabled) throw new Error('Submit button disabled');

        submitBtn.click();

        // Wait for modal to disappear
        const t0 = Date.now();
        while (Date.now() - t0 < 3000) {
          const w = document.querySelector('input#word');
          if (!w || w.offsetParent === null) break;
          await sleep(100);
        }

        success = true;
        break;
      } catch (err) {
        await closeModal();
        await sleep(500);
      }
    }

    if (success) {
      successCount++;
      console.log(\`[\${i + 1}/\${words.length}] Added: \${item.word} ✓\`);
    } else {
      failCount++;
      console.warn(\`[\${i + 1}/\${words.length}] Failed: \${item.word} ✗\`);
    }

    await sleep(DELAY_MS);
  }

  statusBadge.textContent = 'Finished';
  statusBadge.style.background = '#10b981';
  progressText.textContent = \`Completed: \${successCount} added, \${failCount} failed.\`;
  currentWordDiv.textContent = 'All vocabulary entries processed!';
  pauseBtn.remove();
  stopBtn.textContent = 'Đóng';
  stopBtn.style.background = '#3b82f6';
  stopBtn.onclick = () => overlay.remove();
  console.log(\`Import finished! Total: \${words.length}, Success: \${successCount}, Failed: \${failCount}\`);
})();
`;

fs.writeFileSync('import_snippet_sheet2.js', snippetCode, 'utf8');
console.log(`Generated import_snippet_sheet2.js with ${remainingWords.length} words!`);
