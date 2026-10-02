# 🎌 Mazii Auto Vocab Inputter

> Automated, resilient vocabulary entry bot for **[Mazii](https://mazii.net/)** notebooks. Supports large datasets with full Japanese Kanji / Hiragana / Katakana and Vietnamese phonetic/meaning preservation.

---

## ✨ Features

- **⚡ Two Execution Modes**:
  1. **Instant Browser Console Snippet**: Run directly inside Chrome Console with a sleek, floating on-screen UI overlay (Pause, Resume, Stop buttons, and live progress bar).
  2. **Node.js Puppeteer CLI Runner**: Full background CLI automation connecting directly to Chrome via Chrome DevTools Protocol (CDP).
- **🇯🇵 Full Unicode & IME Compatibility**: Seamlessly inputs Kanji, Hiragana, Katakana, and Vietnamese accents without character dropping or encoding corruption.
- **🛡️ Mazii Notebook Limit Awareness**: Mazii limits notebooks to 500 words. Built-in offset resumption (`--start=<index>`) allows splitting lists seamlessly across multiple notebooks.
- **⏱️ Intelligent Rate Limiting**: Built-in 1.2s delay between submissions to respect Mazii server limits and ensure 100% modal closure & save reliability.
- **📊 Real-time Progress & Reporting**: Outputs live status, incremental JSON checkpoints (`import_progress.json`), and comprehensive Markdown summary reports (`import_summary.md`).

---

## 📁 Project Structure

```text
├── mazii_bot.js                # Main Node.js Puppeteer automation runner
├── generate_snippet.js         # Generator for standalone browser console snippets
├── export_csv.js               # Parser to extract vocab sheets from .xlsx to clean CSV
├── import_snippet_sheet2.js    # Pre-bundled console runner for Sheet 2 (465 words)
├── vocab1_mazii_ready.csv      # Lessons 2–7 vocabulary list (474 words)
├── vocab2_mazii_ready.csv      # Lessons 8–14 vocabulary list (495 words)
├── vocab.xlsx                  # Original multi-sheet Excel file
└── README.md                   # Documentation & usage instructions
```

---

## 🚀 Quick Start Guide

### Option 1: Instant Browser Console (Zero Setup — Recommended)

No Node.js or command line required! You can run the automation directly inside your existing logged-in Mazii tab:

1. Open your Mazii notebook in Google Chrome:
   - Example: `https://mazii.net/vi-VN/learning-hub/notebook/<notebook_id>?source=my-notebook`
2. Press **`F12`** (or right-click $\rightarrow$ **Inspect**) and navigate to the **Console** tab.
3. Open [`import_snippet_sheet2.js`](./import_snippet_sheet2.js), copy the entire code, paste it into the Console, and press **`Enter`**.
4. A floating **Mazii Vocab Importer** widget will appear in the bottom-right corner:
   - Displays real-time progress: `Word X of Y (Z%)`
   - Shows the active word being typed
   - Includes **Tạm dừng** (Pause) and **Dừng** (Stop) buttons

---

### Option 2: Node.js Puppeteer CLI Runner

#### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- Google Chrome installed

#### 2. Install Dependencies
```bash
npm install
```

#### 3. Launch Chrome with Remote Debugging
Close all Chrome instances, then launch Chrome with debugging enabled:

**Windows PowerShell:**
```powershell
& "C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222 "https://mazii.net/vi-VN/learning-hub/notebook/<notebook_id>?source=my-notebook"
```

**macOS:**
```bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222 "https://mazii.net/vi-VN/learning-hub/notebook/<notebook_id>?source=my-notebook"
```

**Linux:**
```bash
google-chrome --remote-debugging-port=9222 "https://mazii.net/vi-VN/learning-hub/notebook/<notebook_id>?source=my-notebook"
```

#### 4. Run the Bot
Import all words from a CSV:
```bash
node mazii_bot.js --csv=vocab1_mazii_ready.csv
```

---

## ⚙️ CLI Command Line Options

| Flag | Default | Description |
| :--- | :--- | :--- |
| `--csv=<file>` | `vocab1_mazii_ready.csv` | Path to CSV data file |
| `--start=<n>` | `0` | Starting row offset (0-indexed) |
| `--limit=<n>` | `0` (all) | Maximum number of words to import in this run |
| `--delay=<ms>` | `1200` | Delay between consecutive submissions (in ms) |
| `--url=<url>` | Notebook URL | Target Mazii notebook URL |

### Examples:
- **Test with first 5 words**:
  ```bash
  node mazii_bot.js --csv=vocab1_mazii_ready.csv --limit=5
  ```
- **Resume from word #31** (useful when splitting after the 500-word limit):
  ```bash
  node mazii_bot.js --csv=vocab2_mazii_ready.csv --start=30
  ```
- **Custom notebook URL**:
  ```bash
  node mazii_bot.js --csv=vocab2_mazii_ready.csv --url=https://mazii.net/vi-VN/learning-hub/notebook/6926430?source=my-notebook
  ```

---

## 📄 CSV Data Format

The CSV file must contain the following header row (UTF-8 encoded):

```csv
"Từ vựng (Bắt buộc)","Phonetic","Nghĩa (Bắt buộc)","Ghi chú"
"ほん","ほん","Sách","Bài 2 - Danh từ"
"ノート","のーと","Vở","Bài 2 - Danh từ"
"ざっし","ざっし","Tạp chí","Bài 2 - Danh từ"
```

To convert an Excel spreadsheet (`.xlsx`) to ready-to-use CSVs:
```bash
node export_csv.js
```

---

## 💡 Mazii 500-Word Limit Workaround

Mazii enforces a maximum limit of **500 words per notebook**. When your list exceeds 500 words:
1. Import the first notebook until it reaches 500 words.
2. In Mazii, click **Quay lại** $\rightarrow$ create a new notebook (e.g. `vocab_part2`).
3. Copy the URL of the new notebook.
4. Run `mazii_bot.js` specifying the `--start` offset and the new notebook `--url`.

---

## 🛡️ License

MIT License. Created for Japanese language learners and automated study workflow.
