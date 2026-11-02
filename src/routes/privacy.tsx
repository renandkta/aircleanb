import type { MetaFunction } from 'react-router';
import PrivacyPolicy from '../components/PrivacyPolicy';
import { pageMeta } from '../seo';

export const meta: MetaFunction = () =>
  pageMeta({
    path: '/privacy',
    title: 'Privacy Policy - AirCleanB',
    description: 'How AirCleanB handles the contact details you send us through the website, text or WhatsApp.',
  });

export default PrivacyPolicy;
