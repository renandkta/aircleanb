// Runs after `react-router build`:
// 1. turns the prerendered /404 page into /404.html, which Vercel and GitHub
//    Pages both serve (with a 404 status) for unknown URLs;
// 2. writes sitemap.xml from the prerendered pages it finds (every index.html),
//    so a new page is in the sitemap as soon as it is added to
//    react-router.config.ts.
import { existsSync, readdirSync, renameSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = 'build/client';
const SITE_URL = 'https://www.aircleanb.com';
// Pages that should not be in the sitemap.
const EXCLUDE = new Set(['/404', '/thank-you']);

const notFound = join(OUT, '404', 'index.html');
if (!existsSync(notFound)) {
  console.error('postbuild: build/client/404/index.html is missing');
  process.exit(1);
}
renameSync(notFound, join(OUT, '404.html'));
rmSync(join(OUT, '404'), { recursive: true, force: true });

// Every folder with an index.html is a page: build/client/office-cleaning/index.html -> /office-cleaning
const findPages = (dir, base = '') =>
  readdirSync(join(dir, base), { withFileTypes: true }).flatMap((e) => {
    if (e.isDirectory() && e.name !== 'assets') return findPages(dir, `${base}/${e.name}`);
    return e.name === 'index.html' ? [base || '/'] : [];
  });
const pages = findPages(OUT).filter((p) => !EXCLUDE.has(p)).sort();

const today = new Date().toISOString().slice(0, 10);
const urls = pages
  .map((p) => `  <url><loc>${SITE_URL}${p === '/' ? '/' : p}</loc><lastmod>${today}</lastmod></url>`)
  .join('\n');
writeFileSync(
  join(OUT, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);
console.log(`postbuild: 404.html and sitemap.xml (${pages.length} URLs) written`);
