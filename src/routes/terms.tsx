import type { MetaFunction } from 'react-router';
import TermsPage from '../components/TermsPage';
import { pageMeta } from '../seo';

export const meta: MetaFunction = () =>
  pageMeta({
    path: '/terms',
    title: 'Terms of Service - AirCleanB',
    description: 'Terms for AirCleanB cleaning services in DC, Maryland and Virginia: booking and cancellation.',
  });

export default TermsPage;
