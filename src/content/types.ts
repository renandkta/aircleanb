import type { ServiceKey } from '../utils/contact';

// Small icon shown next to each "What's included" group.
export type IncludedIcon = 'desk' | 'kitchen' | 'bath' | 'dust' | 'floor' | 'bed' | 'restock' | 'spray';

export interface Faq {
  q: string;
  a: string;
}

// Everything one service page says. A new service page is one of these plus a
// small route file; the layout lives in components/service/ServicePage.tsx.
// Only real facts go here: no invented reviews, numbers, insurance or
// certifications.
export interface ServiceContent {
  key: ServiceKey;
  path: string;
  // Short name for breadcrumbs, schema and the quote form's service field.
  name: string;
  formServiceName: string;
  serviceType: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  // e.g. "Turnovers from $110" or "Free walkthrough, flat monthly price".
  priceLine: string;
  // Lowest real "from" price, for the schema. Leave out if there is none.
  minPrice?: number;
  included: {
    title: string;
    intro?: string;
    groups: { heading: string; icon?: IncludedIcon; items: string[] }[];
  };
  process: {
    title: string;
    steps: { title: string; description: string }[];
  };
  pricing?: {
    title: string;
    intro?: string;
    rows: { label: string; price: string }[];
    notes: string[];
  };
  area: {
    title: string;
    intro: string;
  };
  faqs: Faq[];
  quote: {
    title: string;
    subtitle: string;
    notesPlaceholder: string;
  };
  cta: {
    title: string;
    subtitle: string;
  };
}
