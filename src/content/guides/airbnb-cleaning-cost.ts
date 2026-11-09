import type { Guide } from './types';

// Every price here is the one on /pricing and /airbnb-cleaning (owner's
// briefing, Oct 2026). Change prices there and here together.
export const airbnbCleaningCost: Guide = {
  slug: 'airbnb-cleaning-cost',
  metaTitle: 'How Much Does Airbnb Cleaning Cost in DC, MD & VA? (2026) | AirCleanB',
  metaDescription:
    'Airbnb turnover cleaning in the DMV: our prices by unit size, what changes the price, deep clean vs. turnover, and how to set your cleaning fee.',
  h1: 'How much does Airbnb cleaning cost in DC, Maryland and Virginia?',
  shortTitle: 'Airbnb cleaning cost',
  summary: 'Turnover prices by unit size, what changes the price, and how to set your cleaning fee.',
  intro:
    'Short answer: at AirCleanB a turnover starts at $110 for a studio or 1 bedroom, $140 for 2 bedrooms and $180 for 3 bedrooms. Below is what goes into that price, what makes it go up, and how hosts usually turn it into a cleaning fee.',
  published: '2026-11-09',
  updated: '2026-11-09',
  sections: [
    {
      heading: 'Turnover prices by unit size',
      paragraphs: [
        'These are our prices for new clients in Washington DC, Northern Virginia and Montgomery County, Maryland. We confirm the final price after you send us your listing.',
      ],
      table: {
        head: ['Unit', 'Turnover price'],
        rows: [
          ['Studio or 1 bedroom', 'from $110'],
          ['2 bedrooms', 'from $140'],
          ['3 bedrooms', 'from $180'],
          ['Each extra full bathroom', '+$20'],
          ['Each extra half bathroom', '+$10'],
          ['Same-day turnover', 'no extra fee'],
        ],
      },
    },
    {
      heading: 'What a turnover includes',
      paragraphs: [
        'A turnover is the clean between one guest checking out and the next one checking in. Ours includes:',
      ],
      list: [
        'Full kitchen and bathroom cleaning, surfaces wiped down and trash taken out',
        'Beds made with fresh linens and laundry done on site',
        'Agreed essentials restocked',
        'Photos of every room when we finish, and damage or missing items reported with photos',
      ],
    },
    {
      heading: 'What changes the price',
      paragraphs: [
        'Bedrooms and bathrooms set most of the price, because they set how many beds to make, how much laundry to run and how many bathrooms to scrub. A few other things matter too:',
      ],
      list: [
        'Extra bathrooms: +$20 for each extra full bathroom, +$10 for each extra half bathroom.',
        'How the unit was left: a unit after a party or a long stay may need a Deep Clean Reset first.',
        'Laundry: we do it on site, so a washer and dryer in the unit keeps the turnover simple.',
        'Timing: same-day turnovers have no extra fee with us, but they need to be scheduled.',
      ],
    },
    {
      heading: 'Turnover vs. Deep Clean Reset',
      paragraphs: [
        'A Deep Clean Reset is for a new listing, after a party or after a long stay: kitchen, bathrooms, inside appliances and baseboards, then back to regular turnovers. It costs about twice a turnover.',
      ],
      table: {
        head: ['Unit', 'Deep Clean Reset'],
        rows: [
          ['Studio or 1 bedroom', 'from $230'],
          ['2 bedrooms', 'from $280'],
          ['3 bedrooms', 'from $360'],
        ],
      },
    },
    {
      heading: 'How to set your Airbnb cleaning fee',
      paragraphs: [
        'Airbnb lets you add a cleaning fee to each booking. Many hosts start from what the turnover costs them and adjust from there: a fee well above your cost can make your total price look high in search, and a fee below it means each short stay costs you money.',
        'If you get a lot of one-night stays, keep in mind that every checkout is a full turnover, whatever the length of the stay.',
      ],
    },
    {
      heading: 'What to ask any cleaner before you hire',
      paragraphs: ['Whoever you hire, these questions save you a bad review later:'],
      list: [
        'Do you send photos of every room after each clean?',
        'Will the same crew come each time?',
        'Do you do the laundry on site, and do you restock supplies?',
        'Can you do same-day turnovers, and is there a fee?',
        'What is your cancellation policy?',
      ],
    },
  ],
  faqs: [
    {
      q: 'How much is an Airbnb turnover cleaning in DC?',
      a: 'At AirCleanB, from $110 for a studio or 1 bedroom, $140 for 2 bedrooms and $180 for 3 bedrooms, plus $20 for each extra full bathroom. Same-day turnovers have no extra fee.',
    },
    {
      q: 'Is there a discount for the first clean?',
      a: 'Yes. New clients get 30% off their first turnover, one unit per new client. Mention it when you message us.',
    },
    {
      q: 'How much does a deep clean cost?',
      a: 'A Deep Clean Reset starts at $230 for a studio or 1 bedroom, $280 for 2 bedrooms and $360 for 3 bedrooms.',
    },
    {
      q: 'Which areas do these prices cover?',
      a: 'Washington DC, Arlington, Alexandria, Fairfax, Tysons, Reston, Silver Spring and Bethesda. Not sure we cover your address? Text us the city.',
    },
  ],
  next: { label: 'See Airbnb turnover cleaning', to: '/airbnb-cleaning', service: 'airbnb' },
};
