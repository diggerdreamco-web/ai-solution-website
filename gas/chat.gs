// ============================================================
//  AI Solution — Chat Widget Backend (Google Apps Script)
//  Deploy sebagai Web App:
//    Execute as: Me
//    Who has access: Anyone
// ============================================================

const NOTIFY_EMAIL = 'ruddenmohd@gmail.com';
const SHEET_NAME   = 'Chat Logs';

function doGet(e) {
  try {
    const message = (e.parameter.message || '').trim();
    const page    = e.parameter.page || '—';

    if (!message) return jsonResponse({ ok: false });

    // Simpan dalam Google Sheets
    const ss    = SpreadsheetApp.getActiveSpreadsheet();
    let sheet   = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(['Timestamp', 'Message', 'Page', 'Status']);
      sheet.setFrozenRows(1);
    }
    sheet.appendRow([new Date(), message, page, 'New']);

    // Email notification
    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: '💬 New chat — AI Solution Website',
      body:
        'Ada mesej baru dari chat widget:\n\n' +
        '"' + message + '"\n\n' +
        'Page: ' + page + '\n' +
        'Masa: ' + new Date().toLocaleString('ms-MY')
    });

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
