import type { ServiceKey } from '../../utils/contact';
import type { Faq } from '../types';

// One block of a guide: a heading, then paragraphs, an optional list and an
// optional two-column table. Links inside the text are not supported on
// purpose: each guide ends with its own "next step" link to a service page.
export interface GuideSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
  table?: { head: [string, string]; rows: [string, string][] };
}

// A guide answers a question hosts or office managers search for, using only
// our own facts (prices, how the team works). No invented market numbers,
// reviews, insurance or certifications.
export interface Guide {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  // Short name for the breadcrumb.
  shortTitle: string;
  // Short line for the guides list.
  summary: string;
  intro: string;
  // ISO dates for the Article schema and the "Updated" line.
  published: string;
  updated: string;
  sections: GuideSection[];
  faqs: Faq[];
  // Where the reader goes next.
  next: { label: string; to: string; service: ServiceKey };
}
