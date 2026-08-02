const TO_EMAIL = 'elevate7.contact@gmail.com';
const FROM_EMAIL = 'Elevate 7 IA <onboarding@resend.dev>';

const ALLOWED_ORIGINS = [
  'https://elevatezevenia.com',
  'https://www.elevatezevenia.com',
  'https://elevate-zeven-web.vercel.app',
  process.env.VITE_SITE_URL,
].filter(Boolean);

const PREVIEW_PROJECT_HINTS = ['elevate-zeven', 'elevate7web', 'elevate7ia'];

function isAllowedOrigin(origin) {
  if (!origin) return false;
  if (origin.endsWith('.vercel.app') && PREVIEW_PROJECT_HINTS.some((hint) => origin.includes(hint))) {
    return true;
  }
  return ALLOWED_ORIGINS.includes(origin);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export default async function handler(req, res) {
  const origin = req.headers['origin'] || '';

  if (isAllowedOrigin(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  if (!isAllowedOrigin(origin)) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, company, email, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Faltan campos requeridos' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `Nuevo contacto: ${name}${company ? ` (${company})` : ''}`,
        html: `
          <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
          ${company ? `<p><strong>Empresa:</strong> ${escapeHtml(company)}</p>` : ''}
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
        `,
      }),
    });

    if (!response.ok) {
      const errBody = await response.text();
      console.error('Resend error:', errBody);
      return res.status(502).json({ error: 'No se pudo enviar el correo' });
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('send-contact error:', err);
    res.status(500).json({ error: err.message || 'Error enviando el mensaje' });
  }
}
