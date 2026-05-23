/* ============================================================
   AI Solution — Cloudflare Worker (Claude AI Proxy)

   Setup:
   1. cloudflare.com → Workers & Pages → Create Worker
   2. Paste kod ni, klik Save & Deploy
   3. Settings → Variables → Add: ANTHROPIC_API_KEY = sk-ant-xxxx
   4. Copy URL worker (contoh: https://ai-chat.namako.workers.dev)
   5. Letak URL tu dalam js/main.js → CHAT_WORKER_URL
   ============================================================ */

const SYSTEM_PROMPT =
  'Kamu adalah AI assistant untuk AI Solution, syarikat konsultansi AI berpusat di Kota Bharu, Kelantan, Malaysia. ' +
  'Tugas kamu: jawab soalan berkaitan perkhidmatan AI, harga, dan bagaimana AI boleh bantu perniagaan. ' +
  'Perkhidmatan kami: Machine Learning, NLP, Computer Vision, Predictive Analytics, Process Automation, AI Strategy & Governance. ' +
  'Harga bermula dari RM2,499/bulan (Starter), RM7,999/bulan (Professional), Enterprise (custom). ' +
  'Jawab ringkas, mesra, dan profesional. ' +
  'Balas dalam bahasa yang sama dengan pengguna (BM atau Inggeris). ' +
  'Galakkan pengguna hubungi pasukan untuk butiran lanjut.';

export default {
  async fetch(request, env) {

    /* CORS preflight */
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
        }
      });
    }

    const url     = new URL(request.url);
    const message = (url.searchParams.get('message') || '').trim();

    if (!message) {
      return json({ ok: false, reply: '' });
    }

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

      const data  = await res.json();
      const reply = data.content?.[0]?.text
                 || 'Terima kasih! Pasukan kami akan menghubungi anda dalam masa 1 hari bekerja.';

      return json({ ok: true, reply });

    } catch {
      return json({ ok: false, reply: 'Maaf, ada gangguan. Cuba lagi sebentar.' });
    }
  }
};

function json(obj) {
  return new Response(JSON.stringify(obj), {
    headers: {
      'Content-Type':                'application/json',
      'Access-Control-Allow-Origin': '*',
    }
  });
}
