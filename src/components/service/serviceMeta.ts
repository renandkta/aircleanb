import type { ServiceContent } from '../../content/types';
import { pageMeta, serviceSchema, breadcrumbSchema, faqSchema, type Crumb } from '../../seo';

export const crumbsFor = (content: ServiceContent): Crumb[] => [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: content.name, path: content.path },
];

// Meta tags and JSON-LD (Service, BreadcrumbList, FAQPage) for a service page.
export const serviceMeta = (content: ServiceContent) =>
  pageMeta({
    path: content.path,
    title: content.metaTitle,
    description: content.metaDescription,
    jsonLd: [
      serviceSchema({
        name: content.name,
        serviceType: content.serviceType,
        path: content.path,
        description: content.metaDescription,
        minPrice: content.minPrice,
      }),
      breadcrumbSchema(crumbsFor(content)),
      faqSchema(content.faqs),
    ],
  });
