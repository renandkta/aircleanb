import type { ReactNode } from 'react';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import type { LinksFunction } from 'react-router';
import { FormspreeProvider } from '@formspree/react';
import stylesheet from './index.css?url';
import { localBusinessSchema } from './seo';

export const links: LinksFunction = () => [
  { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/favicon.png' },
  { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
  { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;800&display=swap' },
  { rel: 'stylesheet', href: stylesheet },
];

// Google tag (gtag.js) for GA4 (G-4HPTZC7DK7) and Google Ads.
// The script tag is written straight into the HTML (not added by JS) so Search
// Console can verify the site through Google Analytics. Loading the library
// alone sends nothing: the config calls run on the production domain only, so
// previews and localhost never send visits or conversions. Off production
// window.gtag stays undefined; every call site checks for it before calling.
const GOOGLE_TAG_INIT = `(function () {
  var h = location.hostname;
  if (h !== 'aircleanb.com' && !h.endsWith('.aircleanb.com')) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', 'G-4HPTZC7DK7');
  gtag('config', 'AW-17464291569');
})();`;

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#00739A" />
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4HPTZC7DK7"></script>
        <script dangerouslySetInnerHTML={{ __html: GOOGLE_TAG_INIT }} />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <FormspreeProvider>
      <Outlet />
    </FormspreeProvider>
  );
}

// Shown only if a page crashes in the browser: keep a way to reach us.
export function ErrorBoundary() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-brand-soft px-4 text-center">
      <div>
        <h1 className="font-display text-3xl font-extrabold mb-3">Something went wrong.</h1>
        <p className="text-brand-muted mb-6">Please reload the page, or text or call us at +1 (720) 352-9810.</p>
        <a href="/" className="inline-flex items-center min-h-[48px] px-6 rounded-full bg-brand text-white font-bold">
          Back to home
        </a>
      </div>
    </main>
  );
}
