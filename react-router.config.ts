import type { Config } from '@react-router/dev/config';

// Static site: every page below is rendered to its own HTML file at build time
// (text, title, description, Open Graph and JSON-LD included), then React takes
// over in the browser. No server is needed, so it runs on any static host.
// Add a new page here; scripts/postbuild.mjs puts it in sitemap.xml.
const PRERENDER_PATHS = [
  '/',
  '/airbnb-cleaning',
  '/office-cleaning',
  '/post-construction-cleaning', '/upholstery-mattress-cleaning',
  '/services',
  '/pricing',
  '/about',
  '/privacy',
  '/terms',
  '/thank-you',
  // Rendered once and copied to /404.html by scripts/postbuild.mjs.
  '/404',
];

export default {
  appDirectory: 'src',
  buildDirectory: 'build',
  ssr: false,
  prerender: PRERENDER_PATHS,
} satisfies Config;
