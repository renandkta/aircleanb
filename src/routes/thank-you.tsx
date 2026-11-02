import type { MetaFunction } from 'react-router';
import ThankYou from '../components/ThankYou';
import { pageMeta } from '../seo';

export const meta: MetaFunction = () =>
  pageMeta({
    path: '/thank-you',
    title: 'Thank you - AirCleanB',
    description: "We got your request and will text you within 30 minutes, 8am to 8pm.",
    noindex: true,
  });

export default ThankYou;
