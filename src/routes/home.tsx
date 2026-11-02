import type { LinksFunction, MetaFunction } from 'react-router';
import MainPage from '../components/MainPage';
import { pageMeta } from '../seo';

export const meta: MetaFunction = () =>
  pageMeta({
    path: '/',
    title: 'AirCleanB - Airbnb Turnover Cleaning in DC, MD & VA',
    description:
      'Airbnb turnover cleaning in DC, Maryland and Virginia. Done before check-in, photos of every room, problems flagged right away. Turnovers from $110.',
  });

// First carousel photo, so the hero image starts downloading before the JS runs.
export const links: LinksFunction = () => [
  {
    rel: 'preload',
    as: 'image',
    href: '/images/carousel/bedroom-bright-800.webp',
    imageSrcSet: '/images/carousel/bedroom-bright-800.webp 800w, /images/carousel/bedroom-bright-1600.webp 1600w',
    imageSizes: '(max-width: 768px) 100vw, 50vw',
  },
];

export default MainPage;
