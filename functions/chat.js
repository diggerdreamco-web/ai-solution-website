/* ============================================================
   Cloudflare Pages Function — /chat

   Flow:
     1. Browser hantar message → /chat
     2. /chat call Claude API → dapat reply
     3. /chat log {message, reply, page} ke GAS → simpan dalam Sheet
     4. /chat return reply ke browser

   Setup di Cloudflare Pages → Settings → Environment Variables:
     ANTHROPIC_API_KEY = sk-ant-xxxx
     GAS_LOG_URL       = https://script.google.com/macros/s/.../exec   (optional)
   ============================================================ */

const SYSTEM_PROMPT =
  'Kamu adalah AI assistant untuk AI Solution, syarikat konsultansi AI berpusat di Kota Bharu, Kelantan, Malaysia. ' +
  'Tugas kamu: jawab soalan berkaitan perkhidmatan AI, harga, dan bagaimana AI boleh bantu perniagaan. ' +
  'Perkhidmatan kami: Machine Learning, NLP, Computer Vision, Predictive Analytics, Process Automation, AI Strategy & Governance. ' +
  'Harga bermula dari RM2,499/bulan (Starter), RM7,999/bulan (Professional), Enterprise (custom). ' +
  'Jawab ringkas, mesra, dan profesional. ' +
  'Balas dalam bahasa yang sama dengan pengguna (BM atau Inggeris). ' +
  'Galakkan pengguna hubungi pasukan untuk butiran lanjut.';

export async function onRequestGet({ request, env }) {
  const url     = new URL(request.url);
  const message = (url.searchParams.get('message') || '').trim();
  const page    = url.searchParams.get('page') || '—';

  if (!message) {
    return json({ ok: false, reply: '' });
  }

  let reply = 'Terima kasih! Pasukan kami akan menghubungi anda dalam masa 1 hari bekerja.';

  /* 1. Call Claude */
  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type':      'application/json',
        'x-api-key':         env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model:      'claude-haiku-4-5-20251001',
        max_tokens: 400,
        system:     SYSTEM_PROMPT,
        messages:   [{ role: 'user', content: message }]
      })
    });

    const data = await res.json();
    if (data.content?.[0]?.text) reply = data.content[0].text;
  } catch {}

  /* 2. Log to Google Sheet via GAS (fire-and-forget, server-to-server takde CORS) */
  if (env.GAS_LOG_URL) {
    const params = new URLSearchParams({ message, reply, page });
    fetch(`${env.GAS_LOG_URL}?${params}`).catch(() => {});
  }

  return json({ ok: true, reply });
}

function json(obj) {
  return new Response(JSON.stringify(obj), {
    headers: { 'Content-Type': 'application/json' }
  });
}
