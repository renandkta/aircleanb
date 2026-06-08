import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import MainPage from './components/MainPage';
import ThankYou from './components/ThankYou';
import PrivacyPolicy from './components/PrivacyPolicy';
import About from './components/About';
import ServicesPage from './components/ServicesPage';
import PricingPage from './components/PricingPage';
import AirbnbCleaningLanding from './components/AirbnbCleaningLanding';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function App() {
  const location = useLocation();

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
    </Routes>
  );
}

export default App;
