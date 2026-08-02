import { geolocation, next } from '@vercel/functions';

export const config = {
  matcher: ['/', '/contacto'],
};

// English-speaking markets we redirect to the /en pages on first visit.
const EN_COUNTRIES = ['US'];

// Search/AI crawlers must always see the default Spanish pages so indexing
// stays consistent regardless of the datacenter the crawler request comes from.
const BOT_UA =
  /bot|crawler|spider|slurp|googlebot|bingbot|duckduckbot|baiduspider|yandexbot|gptbot|claudebot|perplexitybot|facebookexternalhit|ia_archiver/i;

const ONE_YEAR = 60 * 60 * 24 * 365;

function englishPathFor(pathname) {
  return pathname === '/contacto' ? '/en/contacto' : '/en';
}

function redirectResponse(destinationUrl, setCookie) {
  const headers = { Location: destinationUrl.toString() };
  if (setCookie) headers['Set-Cookie'] = setCookie;
  return new Response(null, { status: 307, headers });
}

export default function middleware(request) {
  const userAgent = request.headers.get('user-agent') || '';
  if (BOT_UA.test(userAgent)) return next();

  const url = new URL(request.url);
  const cookieHeader = request.headers.get('cookie') || '';
  const prefMatch = /lang_pref=(es|en)/.exec(cookieHeader);

  if (prefMatch) {
    if (prefMatch[1] === 'en') {
      return redirectResponse(new URL(englishPathFor(url.pathname), url));
    }
    return next();
  }

  const { country } = geolocation(request);

  if (country && EN_COUNTRIES.includes(country)) {
    return redirectResponse(
      new URL(englishPathFor(url.pathname), url),
      `lang_pref=en; Path=/; Max-Age=${ONE_YEAR}`
    );
  }

  return next({ headers: { 'Set-Cookie': `lang_pref=es; Path=/; Max-Age=${ONE_YEAR}` } });
}
