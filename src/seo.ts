import type { MetaDescriptor } from 'react-router';
import { EMAIL } from './utils/contact';

export const SITE_URL = 'https://www.aircleanb.com';
export const BUSINESS_ID = `${SITE_URL}/#business`;
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

// Cities in the schema and in "Where we clean". Add a city here only once we
// actually take jobs there.
export const SERVICE_AREA = [
  'Washington, DC',
  'Arlington, VA',
  'Alexandria, VA',
  'Fairfax, VA',
  'Tysons, VA',
  'Reston, VA',
  'Silver Spring, MD',
  'Bethesda, MD',
];

// Google Business Profile link. Leave empty until the profile is live; once it
// is set it goes into the schema (sameAs) and the footer.
export const GOOGLE_BUSINESS_PROFILE_URL = '';

interface PageMetaInput {
  path: string;
  title: string;
  description: string;
  noindex?: boolean;
  jsonLd?: object[];
}

// Title, description, canonical, Open Graph and JSON-LD for one page. These end
// up in the prerendered HTML, so Google and link previews (WhatsApp, iMessage)
// see each page's own values without running JavaScript.
export const pageMeta = ({ path, title, description, noindex, jsonLd = [] }: PageMetaInput): MetaDescriptor[] => {
  const url = `${SITE_URL}${path === '/' ? '/' : path}`;
  const tags: MetaDescriptor[] = [
    { title },
    { name: 'description', content: description },
    { tagName: 'link', rel: 'canonical', href: url },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'AirCleanB' },
    { property: 'og:url', content: url },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: OG_IMAGE },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ];
  if (noindex) tags.push({ name: 'robots', content: 'noindex' });
  for (const data of jsonLd) tags.push({ 'script:ld+json': data });
  return tags;
};

// Business details for Google, on every page (no street address: service-area
// business). Never add insurance, licenses or ratings here.
export const localBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': BUSINESS_ID,
  name: 'AirCleanB',
  description:
    'Airbnb turnover cleaning and office cleaning in DC, Maryland and Virginia. Photos of every room after each clean.',
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/apple-touch-icon.png`,
  image: OG_IMAGE,
  telephone: '+1-720-352-9810',
  email: EMAIL,
  priceRange: '$$',
  knowsLanguage: ['en', 'pt', 'es'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '20:00',
    },
  ],
  areaServed: SERVICE_AREA.map((name) => ({ '@type': 'City', name })),
  ...(GOOGLE_BUSINESS_PROFILE_URL ? { sameAs: [GOOGLE_BUSINESS_PROFILE_URL], hasMap: GOOGLE_BUSINESS_PROFILE_URL } : {}),
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Airbnb Turnover Cleaning', url: `${SITE_URL}/airbnb-cleaning` } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Deep Clean Reset', url: `${SITE_URL}/airbnb-cleaning` } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Office Cleaning', url: `${SITE_URL}/office-cleaning` } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Post-Renovation Cleaning', url: `${SITE_URL}/post-construction-cleaning` } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Upholstery & Mattress Cleaning' } },
  ],
});

export interface Crumb {
  name: string;
  path: string;
}

export const breadcrumbSchema = (crumbs: Crumb[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: `${SITE_URL}${c.path}`,
  })),
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const serviceSchema = (opts: {
  name: string;
  serviceType: string;
  path: string;
  description: string;
  minPrice?: number;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: opts.name,
  serviceType: opts.serviceType,
  url: `${SITE_URL}${opts.path}`,
  description: opts.description,
  provider: { '@id': BUSINESS_ID },
  areaServed: SERVICE_AREA.map((name) => ({ '@type': 'City', name })),
  ...(opts.minPrice
    ? {
        offers: {
          '@type': 'Offer',
          priceSpecification: {
            '@type': 'PriceSpecification',
            minPrice: opts.minPrice,
            priceCurrency: 'USD',
          },
        },
      }
    : {}),
});
