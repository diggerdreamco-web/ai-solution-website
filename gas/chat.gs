// ============================================================
//  AI Solution — Chat Widget Backend (Google Apps Script)
//  Deploy sebagai Web App:
//    Execute as: Me
//    Who has access: Anyone
//
//  Setup:
//    1. Pergi ke Extensions > Apps Script > Project Settings > Script Properties
//    2. Tambah property: ANTHROPIC_API_KEY = sk-ant-xxxx
//    3. Save & redeploy web app (New deployment atau manage deployments > new version)
// ============================================================

const NOTIFY_EMAIL = 'ruddenmohd@gmail.com';
const SHEET_NAME   = 'Chat Logs';

const SYSTEM_PROMPT =
  'Kamu adalah AI assistant untuk AI Solution, syarikat konsultansi AI yang berpusat di Kota Bharu, Kelantan, Malaysia. ' +
  'Tugas kamu: jawab soalan berkaitan perkhidmatan AI, harga, dan bagaimana AI boleh bantu perniagaan. ' +
  'Perkhidmatan kami: Machine Learning, NLP, Computer Vision, Predictive Analytics, Process Automation, AI Strategy & Governance. ' +
  'Harga bermula dari RM2,499/bulan (Starter), RM7,999/bulan (Professional), dan Enterprise (custom). ' +
  'Jawab dengan ringkas, mesra, dan profesional. ' +
  'Balas dalam bahasa yang sama dengan pengguna (BM atau Inggeris). ' +
  'Jangan buat janji spesifik — galakkan pengguna hubungi pasukan untuk butiran lanjut.';

function doGet(e) {
  try {
    const message = (e.parameter.message || '').trim();
    const page    = e.parameter.page || '—';

    if (!message) return jsonResponse({ ok: false, reply: '' });

    // Log ke Google Sheets
    logToSheet(message, page);

    // Hantar email notification (async — tak block response)
    try {
      MailApp.sendEmail({
        to: NOTIFY_EMAIL,
        subject: '💬 New chat — AI Solution Website',
        body:
          'Ada mesej baru dari chat widget:\n\n' +
          '"' + message + '"\n\n' +
          'Page: ' + page + '\n' +
          'Masa: ' + new Date().toLocaleString('ms-MY')
      });
    } catch (_) {}

    // Panggil Claude API
    const reply = callClaude(message);

    return jsonResponse({ ok: true, reply: reply });

  } catch (err) {
    return jsonResponse({ ok: false, reply: 'Maaf, ada gangguan. Cuba lagi sebentar.' });
  }
}

function doPost(e) {
  return doGet(e);
}

function callClaude(message) {
  const apiKey = PropertiesService.getScriptProperties().getProperty('ANTHROPIC_API_KEY');

  if (!apiKey) {
    return 'Terima kasih! Pasukan kami akan menghubungi anda dalam masa 1 hari bekerja.';
  }

  const payload = {
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 400,
    system: SYSTEM_PROMPT,
    messages: [{ role: 'user', content: message }]
  };

  const options = {
    method: 'post',
    contentType: 'application/json',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01'
    },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };

  const response = UrlFetchApp.fetch('https://api.anthropic.com/v1/messages', options);
  const json     = JSON.parse(response.getContentText());

  if (json.content && json.content[0] && json.content[0].text) {
    return json.content[0].text;
  }

  return 'Terima kasih! Pasukan kami akan menghubungi anda dalam masa 1 hari bekerja.';
}

function logToSheet(message, page) {
  try {
    const ss  = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(['Timestamp', 'Message', 'Page', 'Status']);
      sheet.setFrozenRows(1);
    }
    sheet.appendRow([new Date(), message, page, 'New']);
  } catch (_) {}
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
