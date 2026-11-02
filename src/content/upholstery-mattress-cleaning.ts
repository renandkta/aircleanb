import type { ServiceContent } from './types';

// Facts from the owner (2026-11-02): this service is done by a specialist
// partner and sold under AirCleanB, so the page never says "our own team".
// Prices are the owner's "from" prices: the highest published price found
// among 7 DMV companies for each piece (owner's choice, 2026-11-02).
// TODO(owner): confirm the partner's method, drying time and what each clean
// includes, then add them to "What's included" and the FAQ.
export const upholsteryMattressCleaning: ServiceContent = {
  key: 'upholstery_mattress',
  path: '/upholstery-mattress-cleaning',
  name: 'Upholstery & Mattress Cleaning',
  formServiceName: 'Upholstery & Mattress Cleaning',
  serviceType: 'Upholstery and mattress cleaning',
  metaTitle: 'Upholstery & Mattress Cleaning in DC, MD & VA | AirCleanB',
  metaDescription:
    'Sofa, chair and mattress cleaning in DC, Maryland and Virginia. Sofas from $160, queen mattresses from $160. Text us a photo for your price.',
  eyebrow: 'Sofas, chairs and mattresses',
  h1: 'Upholstery & Mattress Cleaning in DC, MD & VA',
  intro:
    'Sofas, chairs and mattresses for homes and short-term rentals. Text us a photo and we confirm the price and a date within 30 minutes.',
  priceLine: 'Sofas from $160 · mattresses from $130',
  minPrice: 20,
  included: {
    title: 'What we clean',
    intro: 'Send a photo of each piece and we tell you the price before we book.',
    groups: [
      {
        heading: 'Sofas and chairs',
        icon: 'spray',
        items: ['Sofas and loveseats', 'Armchairs and dining chairs', 'Sectionals and large pieces'],
      },
      {
        heading: 'Mattresses',
        icon: 'bed',
        items: ['Twin, full, queen and king', 'For homes and rental units', 'Booked on a date that works for you'],
      },
      {
        heading: 'For Airbnb hosts',
        icon: 'restock',
        items: ['Text one photo per piece for a price', 'Same contact as your turnovers', 'Several units in one visit, quoted together'],
      },
    ],
  },
  process: {
    title: 'How it works',
    steps: [
      { title: 'Send a photo', description: 'Text us a photo of each piece, its size and your city.' },
      { title: 'Get your price', description: 'We reply within 30 minutes, 8am to 8pm, with the price and a date.' },
      { title: 'We clean', description: 'An upholstery cleaning specialist we work with cleans the pieces on the date you picked.' },
    ],
  },
  pricing: {
    title: 'Prices',
    intro: 'Prices for each piece. We confirm the final price from your photo.',
    rows: [
      { label: 'Sofa (3 seats)', price: 'from $160' },
      { label: 'Loveseat (2 seats)', price: 'from $125' },
      { label: 'Armchair', price: 'from $80' },
      { label: 'Dining chair', price: 'from $20' },
      { label: 'Sectional', price: 'from $249' },
      { label: 'Twin mattress', price: 'from $130' },
      { label: 'Full mattress', price: 'from $150' },
      { label: 'Queen mattress', price: 'from $160' },
      { label: 'King mattress', price: 'from $170' },
    ],
    notes: [
      'Size, fabric and stains can change the price. We always tell you the final price before we book.',
      'Free cancellation up to 24 hours before the clean. After that, 50% of the price.',
    ],
  },
  area: {
    title: 'Where we clean',
    intro:
      'Homes and rental units in Washington DC, Northern Virginia and Montgomery County, Maryland. Text us the address and we will tell you right away if we cover it.',
  },
  faqs: [
    {
      q: 'How much does it cost to clean a sofa?',
      a: 'A 3-seat sofa starts at $160 and a loveseat at $125. Text us a photo and we confirm the final price, which depends on size, fabric and stains.',
    },
    {
      q: 'How much does mattress cleaning cost?',
      a: 'From $130 for a twin, $150 for a full, $160 for a queen and $170 for a king.',
    },
    {
      q: 'Who does the cleaning?',
      a: 'An upholstery cleaning specialist we work with. You book and pay through AirCleanB, and we stay your contact from the quote to the end of the job.',
    },
    {
      q: 'Can you clean the furniture in my Airbnb?',
      a: 'Yes. Send a photo of each piece and the units, and we quote everything together.',
    },
    {
      q: 'How fast do you reply?',
      a: 'Within 30 minutes, 8am to 8pm, 7 days a week.',
    },
  ],
  quote: {
    title: 'Get your upholstery or mattress price',
    subtitle: "Leave your details and we'll text you within 30 minutes, 8am to 8pm. You can send the photos by text after.",
    notesPlaceholder: 'What needs cleaning (sofa, chairs, mattress size), city...',
  },
  cta: {
    title: 'Sofa or mattress need a clean?',
    subtitle: 'Text us a photo and your city. We reply with a price within 30 minutes.',
  },
};
