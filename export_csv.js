const fs = require('fs');

function parseSharedStrings() {
  const shared = fs.readFileSync('temp_xlsx/xl/sharedStrings.xml', 'utf8');
  const strings = [];
  const siRegex = /<si>([\s\S]*?)<\/si>/g;
  let match;
  while ((match = siRegex.exec(shared)) !== null) {
    const tMatches = [...match[1].matchAll(/<t[^>]*>([\s\S]*?)<\/t>/g)].map(x => x[1]).join('');
    strings.push(tMatches);
  }
  return strings;
}

function parseSheet(sheetPath, strings) {
  const xml = fs.readFileSync(sheetPath, 'utf8');
  const rowRegex = /<row r="(\d+)"[^>]*>([\s\S]*?)<\/row>/g;
  const rows = [];
  let rowMatch;
  while ((rowMatch = rowRegex.exec(xml)) !== null) {
    const rowNum = parseInt(rowMatch[1], 10);
    const cellRegex = /<c\b([^>]*)>(?:<v>([\s\S]*?)<\/v>)?/g;
    const rowObj = { rowNum };
    let cellMatch;
    while ((cellMatch = cellRegex.exec(rowMatch[2])) !== null) {
      const attrs = cellMatch[1];
      const val = cellMatch[2];
      const rAttr = /r="([A-Z]+)\d+"/.exec(attrs);
      const tAttr = /t="([^"]+)"/.exec(attrs);
      if (rAttr && val !== undefined) {
        const col = rAttr[1];
        const isString = tAttr && tAttr[1] === 's';
        rowObj[col] = isString ? strings[parseInt(val, 10)] : val;
      }
    }
    rows.push(rowObj);
  }
  return rows;
}

function toCsvValue(val) {
  if (val === undefined || val === null) return '""';
  const str = String(val).replace(/"/g, '""');
  return `"${str}"`;
}

const strings = parseSharedStrings();
const sheet1Rows = parseSheet('temp_xlsx/xl/worksheets/sheet1.xml', strings);
const sheet2Rows = parseSheet('temp_xlsx/xl/worksheets/sheet2.xml', strings);

function saveCsv(rows, outPath) {
  const lines = [];
  lines.push(['"Từ vựng (Bắt buộc)"', '"Phonetic"', '"Nghĩa (Bắt buộc)"', '"Ghi chú"'].join(','));
  for (let i = 1; i < rows.length; i++) {
    const r = rows[i];
    const word = r.A || '';
    const phonetic = r.B || '';
    const meaning = r.C || '';
    const note = r.D || '';
    if (!word && !meaning) continue;
    lines.push([toCsvValue(word), toCsvValue(phonetic), toCsvValue(meaning), toCsvValue(note)].join(','));
  }
  fs.writeFileSync(outPath, '\uFEFF' + lines.join('\n'), 'utf8');
  console.log(`Saved ${lines.length - 1} rows to ${outPath}`);
}

saveCsv(sheet1Rows, 'vocab1_mazii_ready.csv');
saveCsv(sheet2Rows, 'vocab2_mazii_ready.csv');

// Also save json for easy automation loading
const s1Data = sheet1Rows.slice(1).map(r => ({
  word: r.A || '',
  phonetic: r.B || '',
  meaning: r.C || '',
  note: r.D || ''
})).filter(x => x.word);

fs.writeFileSync('vocab1.json', JSON.stringify(s1Data, null, 2), 'utf8');
console.log('Saved vocab1.json with items:', s1Data.length);
