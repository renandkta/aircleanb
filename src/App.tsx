import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import MainPage from './components/MainPage';
import ThankYou from './components/ThankYou';
import PrivacyPolicy from './components/PrivacyPolicy';
import About from './components/About';
import ServicesPage from './components/ServicesPage';
import PricingPage from './components/PricingPage';
import TermsPage from './components/TermsPage';
import AirbnbCleaningLanding from './components/AirbnbCleaningLanding';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Title and description per page, so each page shows its own line in Google.
// The home values match index.html. Pages not listed keep the home values.
const DEFAULT_META = {
  title: 'AirCleanB - Airbnb Turnover Cleaning in DC, MD & VA',
  description:
    'Airbnb turnover cleaning in DC, Maryland and Virginia. Done before check-in, photos of every room, problems flagged right away. Turnovers from $110.',
};
const PAGE_META: Record<string, { title: string; description: string }> = {
  '/airbnb-cleaning': {
    title: 'Airbnb Turnover Cleaning in DC, MD & VA | From $110 - AirCleanB',
    description:
      'Turnover cleaning for Airbnb and short-term rentals in DC, Arlington, Alexandria, Bethesda and the DMV. Beds, laundry, restocking and photos of every room.',
  },
  '/services': {
    title: 'Cleaning Services in DC, MD & VA - AirCleanB',
    description:
      'Airbnb turnover cleaning, deep clean reset, office cleaning, post-renovation cleaning and upholstery & mattress cleaning in the DMV.',
  },
  '/pricing': {
    title: 'Pricing - Airbnb Turnovers from $110 - AirCleanB',
    description:
      'Turnover prices: studio from $110, 2 bedrooms from $140, 3 bedrooms from $180. Same-day at no extra fee. 30% off your first turnover.',
  },
  '/about': {
    title: 'About AirCleanB - Cleaning Team in DC, MD & VA',
    description:
      'Our own cleaning team in the DMV for 2 years. Same crew, photo report after every clean, English, Portuguese and Spanish.',
  },
  '/privacy': { title: 'Privacy Policy - AirCleanB', description: DEFAULT_META.description },
  '/terms': { title: 'Terms of Service - AirCleanB', description: DEFAULT_META.description },
  '/thank-you': { title: 'Thank you - AirCleanB', description: DEFAULT_META.description },
};

function App() {
  const location = useLocation();

  useEffect(() => {
    const meta = PAGE_META[location.pathname] ?? DEFAULT_META;
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
  }, [location.pathname]);

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'AW-17464291569', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/airbnb-cleaning" element={<AirbnbCleaningLanding />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
