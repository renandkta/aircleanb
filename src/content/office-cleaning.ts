import type { ServiceContent } from './types';

// Facts from the owner's briefing: small offices (up to about 3,000 sq ft),
// evenings and weekends, same crew, free walkthrough, flat monthly price (no
// number until the market research is done). No insurance claims: we target
// small offices and spaces run by property managers who already know our work.
// TODO(owner): confirm the "What's included" list and frequencies before launch.
export const officeCleaning: ServiceContent = {
  key: 'office',
  path: '/office-cleaning',
  name: 'Office Cleaning',
  formServiceName: 'Office Cleaning',
  serviceType: 'Office cleaning',
  metaTitle: 'Office Cleaning in DC & Northern Virginia | AirCleanB',
  metaDescription:
    'Recurring cleaning for small offices in DC, Arlington and Northern Virginia. Same crew every visit, evenings or weekends. Free walkthrough.',
  eyebrow: 'For small offices up to about 3,000 sq ft',
  h1: 'Office Cleaning for Small Offices in DC, MD & VA',
  intro:
    'Same crew every visit, after your team goes home. We walk through your office for free, then send one flat monthly price.',
  priceLine: 'Free walkthrough · flat monthly price',
  included: {
    title: "What's included",
    intro: 'We agree on the list during the walkthrough. A typical visit covers:',
    groups: [
      {
        heading: 'Work areas',
        icon: 'desk',
        items: ['Desks and shared surfaces wiped', 'Trash and recycling emptied', 'Floors vacuumed and mopped'],
      },
      {
        heading: 'Kitchen and break room',
        icon: 'kitchen',
        items: ['Counters, sink and table cleaned', 'Microwave and fridge handles wiped', 'Trash taken out'],
      },
      {
        heading: 'Restrooms',
        icon: 'bath',
        items: ['Toilets, sinks and mirrors cleaned', 'Floors mopped', 'Paper and soap refilled from your supplies'],
      },
    ],
  },
  process: {
    title: 'How it works',
    steps: [
      { title: 'Free walkthrough', description: 'We visit your office, see the space and agree on what gets cleaned and how often.' },
      { title: 'One flat monthly price', description: 'You get a fixed monthly price. No surprises per visit.' },
      { title: 'Same crew, your schedule', description: 'The same crew comes every visit, evenings or weekends, so your team is never in the way.' },
    ],
  },
  area: {
    title: 'Where we clean offices',
    intro:
      'Small offices in Washington DC, Northern Virginia and Montgomery County, Maryland. Text us your address and we will tell you right away if we cover it.',
  },
  faqs: [
    {
      q: 'What size offices do you clean?',
      a: 'Small offices, up to about 3,000 sq ft. If yours is bigger, text us and we will tell you honestly if we are a good fit.',
    },
    {
      q: 'When do you clean?',
      a: 'Evenings or weekends, so the cleaning never gets in the way of your team. We agree on the schedule during the walkthrough.',
    },
    {
      q: 'How much does it cost?',
      a: 'It depends on the size of the space and how often you need us. After a free walkthrough we send one flat monthly price.',
    },
    {
      q: 'Will it be the same people every time?',
      a: 'Yes. We send the same crew every visit, so they learn your office and you always know who is coming in.',
    },
    {
      q: 'How fast do you reply?',
      a: 'Within 30 minutes, 8am to 8pm, 7 days a week.',
    },
  ],
  quote: {
    title: 'Book a free walkthrough',
    subtitle: "Leave your details and we'll text you within 30 minutes, 8am to 8pm, to set a time.",
    notesPlaceholder: 'Office size, city, how often you need cleaning...',
  },
  cta: {
    title: 'Want a cleaner office without managing it?',
    subtitle: 'Text us your office size and city. We set up a free walkthrough.',
  },
};
