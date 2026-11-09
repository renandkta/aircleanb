import type { MetaFunction } from 'react-router';
import GuidePage from '../components/GuidePage';
import { guideMeta } from '../components/guideMeta';
import { airbnbCleaningCost } from '../content/guides/airbnb-cleaning-cost';

export const meta: MetaFunction = () => guideMeta(airbnbCleaningCost);

export default function AirbnbCleaningCostGuide() {
  return <GuidePage guide={airbnbCleaningCost} />;
}
