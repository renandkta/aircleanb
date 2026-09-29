import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { FormspreeProvider } from '@formspree/react';
import App from './App.tsx';
import './index.css';

// Google Ads call tracking ("Phone Call — From Website (60s+)").
// The base gtag config lives in index.html; this follow-up config asks Google
// for a forwarding number and swaps it into the page via the callback. We use a
// callback (not Google's default text replacement) because the "Call Us"
// buttons rely on href="tel:..." — on mobile the call goes through the href,
// which text-only replacement never touches, so the conversion would be missed
// on the main path. Elements opt in with data-phone-text / data-phone-link.
// Production domain only (index.html also skips gtag elsewhere).
const isProduction =
  location.hostname === 'aircleanb.com' ||
  location.hostname.endsWith('.aircleanb.com');
if (isProduction && typeof window.gtag === 'function') {
  window.gtag('config', 'AW-17464291569/AoS2CMeHq-QcEPHhz4dB', {
    phone_conversion_number: '+1 (720) 352-9810',
    phone_conversion_callback: (formatted: string, plain: string) => {
      document
        .querySelectorAll<HTMLElement>('[data-phone-text]')
        .forEach((el) => {
          el.textContent = formatted;
        });
      document
        .querySelectorAll<HTMLAnchorElement>('a[data-phone-link]')
        .forEach((a) => {
          a.href = 'tel:+' + plain;
        });
    },
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FormspreeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FormspreeProvider>
  </StrictMode>
);
