import type { Guide } from './types';
import { airbnbCleaningCost } from './airbnb-cleaning-cost';

// Every guide, newest first. A new guide is one content file, one entry here,
// one route in routes.ts and one path in react-router.config.ts.
export const guides: Guide[] = [airbnbCleaningCost];

export const guidePath = (g: Guide) => `/guides/${g.slug}`;
