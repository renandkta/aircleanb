import type { MetaFunction } from 'react-router';
import { Link } from 'react-router';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

// Unknown URLs used to redirect to the home, which Google reads as a "soft 404".
// This page is built once as /404.html (scripts/postbuild.mjs) and the host
// serves it with a real 404 status.
export const meta: MetaFunction = () => [
  { title: 'Page not found - AirCleanB' },
  { name: 'robots', content: 'noindex' },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-soft flex flex-col">
      <SiteHeader />
      <main className="flex-1 container mx-auto px-4 py-16 max-w-2xl text-center">
        <h1 className="font-display text-4xl font-extrabold mb-4">We couldn't find that page.</h1>
        <p className="text-lg text-brand-muted mb-8">It may have moved. These are the pages people look for most:</p>
        <ul className="flex flex-col sm:flex-row gap-3 justify-center">
          <li><Link to="/airbnb-cleaning" className="inline-flex min-h-[48px] items-center px-6 rounded-full bg-brand text-white font-bold">Airbnb cleaning</Link></li>
          <li><Link to="/office-cleaning" className="inline-flex min-h-[48px] items-center px-6 rounded-full bg-white border-2 border-brand text-brand-dark font-bold">Office cleaning</Link></li>
          <li><Link to="/" className="inline-flex min-h-[48px] items-center px-6 rounded-full bg-white border-2 border-brand text-brand-dark font-bold">Home</Link></li>
        </ul>
      </main>
      <SiteFooter />
    </div>
  );
}
