import type { ServiceContent } from './types';

// Facts from the owner's briefing: post-renovation cleaning is sold today with
// "text us a photo for a quote" (no fixed price yet). Same own team, photo
// report, reply within 30 minutes.
// TODO(owner): confirm the "What's included" list (debris removal? exterior
// windows?) and add 2-3 real before/after photos before launch.
export const postConstructionCleaning: ServiceContent = {
  key: 'post_construction',
  path: '/post-construction-cleaning',
  name: 'Post-Construction Cleaning',
  formServiceName: 'Post-Renovation Cleaning',
  serviceType: 'Post-construction cleaning',
  metaTitle: 'Post-Construction Cleaning in DC, MD & VA | AirCleanB',
  metaDescription:
    'Cleanup after construction or renovation in the DMV: dust, debris, windows and floors, ready for move-in or listing photos. Text photos for a quote.',
  eyebrow: 'After a renovation or new build',
  h1: 'Post-Construction Cleaning in DC, MD & VA',
  intro:
    'The work is done but the dust is everywhere. We clean the space so it is ready for move-in, guests or listing photos, and send you photos of every room when we finish.',
  priceLine: 'Text us photos of the space for a quote',
  included: {
    title: "What's included",
    intro: 'We agree on the list from your photos before we start. A typical post-renovation clean covers:',
    groups: [
      {
        heading: 'Dust',
        items: ['Construction dust removed from surfaces', 'Baseboards, doors and frames wiped', 'Vents and light fixtures dusted'],
      },
      {
        heading: 'Kitchen and bathrooms',
        items: ['Cabinets cleaned inside and out', 'Counters, sinks and fixtures cleaned', 'Appliances wiped inside and out'],
      },
      {
        heading: 'Floors and windows',
        items: ['Floors vacuumed and mopped', 'Interior windows and sills cleaned', 'Photos of every room when we finish'],
      },
    ],
  },
  process: {
    title: 'How it works',
    steps: [
      { title: 'Send photos', description: 'Text us photos of the space, the size (sq ft), the city and when it will be ready.' },
      { title: 'Get a quote', description: 'We reply within 30 minutes, 8am to 8pm, with a price and a date.' },
      { title: 'We clean', description: 'Our own team cleans the space once the contractors are out.' },
      { title: 'Photo report', description: 'Photos of every room as soon as we finish.' },
    ],
  },
  area: {
    title: 'Where we clean',
    intro:
      'Homes, rentals and small offices in Washington DC, Northern Virginia and Montgomery County, Maryland. Text us the address and we will tell you right away if we cover it.',
  },
  faqs: [
    {
      q: 'How much does a post-construction clean cost?',
      a: 'It depends on the size of the space and how much dust the work left. Text us photos and the square footage and we send you a price.',
    },
    {
      q: 'When should you come in?',
      a: 'After the contractors finish and take their tools out. If more work is still planned, it is better to wait so the dust does not come back.',
    },
    {
      q: 'Do you clean rentals after a renovation?',
      a: 'Yes. Many of our clients are Airbnb hosts, so we can get a renovated unit ready for photos and the first guests, then keep doing the turnovers.',
    },
    {
      q: 'How fast do you reply?',
      a: 'Within 30 minutes, 8am to 8pm, 7 days a week.',
    },
  ],
  quote: {
    title: 'Get a post-construction quote',
    subtitle: "Leave your details and we'll text you within 30 minutes, 8am to 8pm. Photos help: you can send them by text after.",
    notesPlaceholder: 'Size (sq ft), type of work done, date the space is ready...',
  },
  cta: {
    title: 'Renovation done?',
    subtitle: 'Text us a few photos and the size of the space. We reply with a quote within 30 minutes.',
  },
};
