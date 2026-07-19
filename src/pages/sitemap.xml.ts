import type { APIRoute } from 'astro';

const SITE_URL = 'https://elevatezevenia.com';

interface Entry {
  loc: string;
  changefreq: string;
  priority: string;
}

const staticPages: Entry[] = [
  { loc: '/', changefreq: 'weekly', priority: '1.0' },
  { loc: '/servicios/', changefreq: 'monthly', priority: '0.8' },
  { loc: '/nosotros/', changefreq: 'monthly', priority: '0.7' },
  { loc: '/casos/', changefreq: 'monthly', priority: '0.8' },
  { loc: '/contacto/', changefreq: 'monthly', priority: '0.7' },
  { loc: '/privacidad/', changefreq: 'yearly', priority: '0.3' },
  { loc: '/blog/', changefreq: 'weekly', priority: '0.8' },
];

// Priority override per blog slug. Any post not listed here (e.g. a new
// article added later) still gets picked up automatically via the glob
// below and falls back to the default priority/changefreq.
const blogPriority: Record<string, string> = {
  'automatizacion-ia-empresas': '0.8',
  'como-elegir-agencia-ia': '0.8',
  'como-implementar-ia-empresa': '0.8',
  'automatizacion-ia-colombia': '0.7',
  'ai-automation-agency': '0.7',
};

const blogPostModules = import.meta.glob('./blog/*.astro');

const blogPages: Entry[] = Object.keys(blogPostModules)
  .map((path) => path.match(/\.\/blog\/(.+)\.astro$/)?.[1])
  .filter((slug): slug is string => Boolean(slug) && slug !== 'index')
  .sort()
  .map((slug) => ({
    loc: `/blog/${slug}/`,
    changefreq: 'monthly',
    priority: blogPriority[slug] ?? '0.7',
  }));

const entries = [...staticPages, ...blogPages];

function buildSitemap(): string {
  const urls = entries
    .map(
      (entry) =>
        `  <url><loc>${SITE_URL}${entry.loc}</loc><changefreq>${entry.changefreq}</changefreq><priority>${entry.priority}</priority></url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export const GET: APIRoute = () => {
  return new Response(buildSitemap(), {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
