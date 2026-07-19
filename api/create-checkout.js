import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const PLANS = {
  '30min': {
    amount: 5000,
    name: 'Consultoría 30 minutos — Elevate 7 IA',
    calLink: 'https://cal.com/elevate-zeven/30min',
  },
  '60min': {
    amount: 12000,
    name: 'Consultoría 1 hora — Elevate 7 IA',
    calLink: 'https://cal.com/elevate-zeven/1hour',
  },
};

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

  const { plan } = req.body ?? {};

  if (!PLANS[plan]) return res.status(400).json({ error: 'Plan inválido' });

  const planData = PLANS[plan];
  const cancelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/contacto#opciones`
    : `${process.env.VITE_SITE_URL || 'https://elevatezevenia.com'}/contacto#opciones`;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: { name: planData.name },
            unit_amount: planData.amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: planData.calLink,
      cancel_url: cancelUrl,
      metadata: { plan },
    });

    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('Stripe error:', err);
    res.status(500).json({ error: err.message || 'Error creando sesión de pago' });
  }
}
