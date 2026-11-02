import type { ServiceContent } from './types';

// Facts here come from the owner's briefing (Oct 2026): prices, offer,
// cancellation, reply time, own team, photo report. Change them here only.
export const airbnbCleaning: ServiceContent = {
  key: 'airbnb',
  path: '/airbnb-cleaning',
  name: 'Airbnb Cleaning',
  formServiceName: 'Airbnb Turnover Cleaning',
  serviceType: 'Airbnb turnover cleaning',
  metaTitle: 'Airbnb Turnover Cleaning in DC, MD & VA | AirCleanB',
  metaDescription:
    'Turnover cleaning for Airbnb hosts in DC, Arlington, Tysons and the DMV. Beds, laundry, restocking and a photo report after every clean. From $110.',
  eyebrow: 'For Airbnb hosts and property managers',
  h1: 'Airbnb Turnover Cleaning in DC, MD & VA',
  intro:
    'We clean between guests, restock what runs out and send you photos of every room before your next check-in. If something is broken or missing, you hear from us right away.',
  priceLine: 'Turnovers from $110 · 30% off your first one',
  minPrice: 110,
  included: {
    title: "What's in every turnover",
    intro: 'The same crew cleans your unit each time, so they already know where things go.',
    groups: [
      {
        heading: 'Kitchen and bathrooms',
        icon: 'spray',
        items: ['Full kitchen and bathroom cleaning', 'Surfaces wiped down', 'Trash taken out'],
      },
      {
        heading: 'Beds and laundry',
        icon: 'bed',
        items: ['Beds made with fresh linens', 'On-site laundry'],
      },
      {
        heading: 'Restock and report',
        icon: 'restock',
        items: [
          'Agreed essentials restocked',
          'Photos of every room when we finish',
          'Damage or missing items reported with photos',
        ],
      },
    ],
  },
  process: {
    title: 'How it works',
    steps: [
      { title: 'Send your listing', description: 'Bedrooms, city, checkout time and how we get in (keys or smart lock).' },
      { title: 'Clean and restock', description: 'Full clean, fresh beds, on-site laundry and supplies refilled.' },
      { title: 'Photo report', description: 'Photos of every room, sent as soon as we finish. Problems flagged right away.' },
      { title: 'Guest-ready', description: 'Done before check-in, ready for your next guest.' },
    ],
  },
  pricing: {
    title: 'Turnover prices',
    intro: 'Prices for new clients. We confirm the final price after you send your listing.',
    rows: [
      { label: 'Studio or 1 bedroom', price: 'from $110' },
      { label: '2 bedrooms', price: 'from $140' },
      { label: '3 bedrooms', price: 'from $180' },
      { label: 'Each extra full bathroom', price: '+$20' },
      { label: 'Each extra half bathroom', price: '+$10' },
      { label: 'Same-day turnover', price: 'no extra fee' },
    ],
    notes: [
      '30% off your first turnover, one unit per new client. Mention it when you message us.',
      'Free cancellation up to 24 hours before the clean. After that, 50% of the price.',
    ],
  },
  area: {
    title: 'Where we clean',
    intro:
      'We clean Airbnb and short-term rental units across Washington DC, Northern Virginia and Montgomery County, Maryland. Not sure we cover your address? Text us the city.',
  },
  faqs: [
    {
      q: 'How fast do you reply?',
      a: 'Within 30 minutes, 8am to 8pm, 7 days a week. Text, WhatsApp or call, whichever you prefer.',
    },
    {
      q: 'Can you do a same-day turnover?',
      a: 'Yes. Same-day turnovers have no extra fee.',
    },
    {
      q: 'Do you do the laundry?',
      a: 'Yes, on-site laundry is part of the turnover: we wash, dry and make the beds with fresh linens.',
    },
    {
      q: 'How do I know the unit is ready?',
      a: 'We send photos of every room as soon as we finish. If anything is damaged or missing, we message you with photos right away.',
    },
    {
      q: 'Will it be the same cleaners every time?',
      a: 'We use our own team and send the same crew to your unit whenever we can, so they learn how you like it.',
    },
    {
      q: 'What is your cancellation policy?',
      a: 'Free cancellation up to 24 hours before the clean. Cancellations after that are charged 50% of the price.',
    },
    {
      q: 'What languages does your team speak?',
      a: 'English, Portuguese and Spanish.',
    },
  ],
  quote: {
    title: 'Tell us about your unit',
    subtitle: "Leave your details and we'll text you within 30 minutes, 8am to 8pm.",
    notesPlaceholder: 'Bedrooms, bathrooms, checkout time, number of units...',
  },
  cta: {
    title: 'Ready for your next checkout?',
    subtitle: 'Send us your bedrooms, city and checkout time. We reply within 30 minutes.',
  },
};
