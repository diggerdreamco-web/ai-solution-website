// ============================================================
//  AI Solution — Chat Logger (Google Apps Script)
//
//  Tugas: terima {message, reply, page} dari Cloudflare Pages Function
//         dan log ke Google Sheet + hantar email notification.
//
//  Deploy sebagai Web App:
//    Execute as: Me
//    Who has access: Anyone
//
//  Lepas deploy, copy URL → set sebagai env variable di Cloudflare Pages:
//    GAS_LOG_URL = https://script.google.com/macros/s/.../exec
// ============================================================

const NOTIFY_EMAIL = 'ruddenmohd@gmail.com';
const SHEET_NAME   = 'Chat Logs';

function doGet(e) {
  try {
    const message = (e.parameter.message || '').trim();
    const reply   = (e.parameter.reply   || '').trim();
    const page    = e.parameter.page || '—';

    if (!message) return jsonResponse({ ok: false });

    // Log ke Sheet
    const ss  = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(['Timestamp', 'Message', 'AI Reply', 'Page']);
      sheet.setFrozenRows(1);
    }
    sheet.appendRow([new Date(), message, reply, page]);

    // Email notification
    try {
      MailApp.sendEmail({
        to: NOTIFY_EMAIL,
        subject: '💬 New chat — AI Solution',
        body:
          'Mesej pelanggan:\n"' + message + '"\n\n' +
          'AI reply:\n"' + reply + '"\n\n' +
          'Page: ' + page + '\n' +
          'Masa: ' + new Date().toLocaleString('ms-MY')
      });
    } catch (_) {}

    return jsonResponse({ ok: true });

  } catch (err) {
    return jsonResponse({ ok: false });
  }
}

function doPost(e) {
  return doGet(e);
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
