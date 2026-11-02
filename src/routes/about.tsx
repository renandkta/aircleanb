import type { MetaFunction } from 'react-router';
import About from '../components/About';
import { pageMeta } from '../seo';

export const meta: MetaFunction = () =>
  pageMeta({
    path: '/about',
    title: 'About AirCleanB - Cleaning Team in DC, MD & VA',
    description:
      'Our own cleaning team in the DMV for 2 years. Same crew, photo report after every clean, English, Portuguese and Spanish.',
  });

export default About;
