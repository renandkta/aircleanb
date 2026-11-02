import type { MetaFunction } from 'react-router';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import StickyContactBar from '../components/StickyContactBar';
import ContactButtons from '../components/ContactButtons';
import { Breadcrumbs, ServiceArea } from '../components/service/sections';
import { SITE_URL, breadcrumbSchema, pageMeta } from '../seo';

const PATH = '/services';
const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: PATH },
];

interface Card {
  title: string;
  price: string;
  text: string;
  to?: string;
  linkLabel?: string;
}

const CARDS: Card[] = [
  {
    title: 'Airbnb Turnover Cleaning',
    price: 'From $110 per turnover',
    text: 'Cleaning between guests: fresh beds, on-site laundry, restocking and photos of every room.',
    to: '/airbnb-cleaning',
    linkLabel: 'See Airbnb cleaning',
  },
  {
    title: 'Deep Clean Reset',
    price: 'From $230',
    text: 'For a new listing, after a party or a long stay: inside appliances, baseboards, kitchen and bathrooms.',
    to: '/airbnb-cleaning#deep-clean',
    linkLabel: 'See Deep Clean Reset',
  },
  {
    title: 'Office Cleaning',
    price: 'Free walkthrough, flat monthly price',
    text: 'Small offices up to about 3,000 sq ft, evenings or weekends, same crew every visit.',
    to: '/office-cleaning',
    linkLabel: 'See office cleaning',
  },
  {
    title: 'Post-Renovation Cleaning',
    price: 'Text us photos for a quote',
    text: 'Dust and debris cleanup after construction or a renovation, before move-in or listing photos.',
  },
  {
    title: 'Upholstery & Mattress Cleaning',
    price: 'Text us a photo for a quote',
    text: 'Sofas, chairs and mattresses, for homes and short-term rentals.',
  },
];

export const meta: MetaFunction = () =>
  pageMeta({
    path: PATH,
    title: 'Cleaning Services in DC, MD & VA | AirCleanB',
    description:
      'Airbnb turnovers, office cleaning, post-construction cleanup and upholstery & mattress cleaning in DC, Maryland and Virginia.',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'OfferCatalog',
        name: 'AirCleanB cleaning services',
        url: `${SITE_URL}${PATH}`,
        itemListElement: CARDS.map((c) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: c.title, ...(c.to ? { url: `${SITE_URL}${c.to}` } : {}) },
        })),
      },
      breadcrumbSchema(crumbs),
    ],
  });

export default function Services() {
  return (
    <div className="min-h-screen bg-brand-soft">
      <SiteHeader />
      <main>
        <Breadcrumbs crumbs={crumbs} />
        <section className="container mx-auto px-4 pt-6 pb-10 md:py-14 max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-[1.08] tracking-tight mb-4">
            Cleaning Services in DC, Maryland &amp; Virginia
          </h1>
          <p className="text-lg md:text-xl text-brand-muted">
            Our own team cleans Airbnb units and small offices across the DMV. Pick a service below, or text us what you
            need and we reply within 30 minutes, 8am to 8pm.
          </p>
        </section>
        <section className="container mx-auto px-4 pb-14">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CARDS.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl border border-brand-line p-6 md:p-8 flex flex-col">
                <h2 className="font-display text-xl font-extrabold mb-1">{c.title}</h2>
                <p className="font-bold text-brand-dark mb-3">{c.price}</p>
                <p className="text-brand-muted flex-1">{c.text}</p>
                {c.to && (
                  <Link
                    to={c.to}
                    className="mt-6 inline-flex items-center justify-center gap-2 min-h-[48px] rounded-full bg-brand text-white font-bold hover:bg-brand-dark transition"
                  >
                    {c.linkLabel}
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>
        <ServiceArea
          area={{
            title: 'Where we clean',
            intro: 'Washington DC, Northern Virginia and Montgomery County, Maryland.',
          }}
        />
        <section className="bg-white py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-xl">
            <h2 className="font-display text-3xl font-extrabold mb-6 text-center">Not sure which one you need?</h2>
            <ContactButtons service="general" placement="contact" />
          </div>
        </section>
      </main>
      <SiteFooter />
      <StickyContactBar label="Text us for a quote" />
    </div>
  );
}
