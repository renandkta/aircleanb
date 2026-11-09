import type { MetaFunction } from 'react-router';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import StickyContactBar from '../components/StickyContactBar';
import { Breadcrumbs } from '../components/service/sections';
import { guides, guidePath } from '../content/guides';
import { breadcrumbSchema, pageMeta } from '../seo';

const PATH = '/guides';
const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Guides', path: PATH },
];

export const meta: MetaFunction = () =>
  pageMeta({
    path: PATH,
    title: 'Guides for Airbnb Hosts in DC, MD & VA | AirCleanB',
    description:
      'Practical guides for Airbnb hosts and property managers in the DMV: cleaning costs, cleaning fees and turnovers.',
    jsonLd: [breadcrumbSchema(crumbs)],
  });

export default function Guides() {
  return (
    <div className="min-h-screen bg-brand-soft">
      <SiteHeader />
      <main>
        <Breadcrumbs crumbs={crumbs} />
        <section className="container mx-auto px-4 pt-6 pb-14 max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-[1.08] tracking-tight mb-4">
            Guides for Airbnb hosts
          </h1>
          <p className="text-lg md:text-xl text-brand-muted mb-10">
            What we have learned cleaning short-term rentals in DC, Maryland and Virginia.
          </p>
          <ul className="space-y-6">
            {guides.map((g) => (
              <li key={g.slug}>
                <Link
                  to={guidePath(g)}
                  className="block bg-white rounded-2xl border border-brand-line p-6 md:p-8 hover:border-brand transition"
                >
                  <h2 className="font-display text-xl md:text-2xl font-extrabold mb-2">{g.h1}</h2>
                  <p className="text-brand-muted mb-4">{g.summary}</p>
                  <span className="inline-flex items-center gap-2 font-bold text-brand-dark">
                    Read the guide <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
      <StickyContactBar label="Text us for a quote" />
    </div>
  );
}
