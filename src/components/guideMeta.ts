import type { Guide } from '../content/guides/types';
import { guidePath } from '../content/guides';
import { BUSINESS_ID, SITE_URL, breadcrumbSchema, faqSchema, pageMeta, type Crumb } from '../seo';

export const crumbsFor = (guide: Guide): Crumb[] => [
  { name: 'Home', path: '/' },
  { name: 'Guides', path: '/guides' },
  { name: guide.shortTitle, path: guidePath(guide) },
];

export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

// Meta tags and JSON-LD (Article, BreadcrumbList, FAQPage) for a guide.
export const guideMeta = (guide: Guide) =>
  pageMeta({
    path: guidePath(guide),
    title: guide.metaTitle,
    description: guide.metaDescription,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: guide.h1,
        description: guide.metaDescription,
        url: `${SITE_URL}${guidePath(guide)}`,
        mainEntityOfPage: `${SITE_URL}${guidePath(guide)}`,
        datePublished: guide.published,
        dateModified: guide.updated,
        image: `${SITE_URL}/og-image.jpg`,
        author: { '@id': BUSINESS_ID, '@type': 'Organization', name: 'AirCleanB' },
        publisher: { '@id': BUSINESS_ID, '@type': 'Organization', name: 'AirCleanB' },
      },
      breadcrumbSchema(crumbsFor(guide)),
      faqSchema(guide.faqs),
    ],
  });

