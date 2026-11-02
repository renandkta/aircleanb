import { startTransition, StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { HydratedRouter } from 'react-router/dom';
import { initAnalytics, isProduction } from './utils/analytics';
import { PHONE_DISPLAY } from './utils/contact';

// Google Ads call tracking ("Phone Call — From Website (60s+)").
// The base gtag config lives in root.tsx; this follow-up config asks Google for
// a forwarding number and swaps it into the page via the callback. We use a
// callback (not Google's default text replacement) because the "Call" buttons
// rely on href="tel:..." — on mobile the call goes through the href, which
// text-only replacement never touches, so the conversion would be missed on the
// main path. Elements opt in with data-phone-text / data-phone-link.
// Production domain only (root.tsx also skips gtag elsewhere).
if (isProduction() && typeof window.gtag === 'function') {
  window.gtag('config', 'AW-17464291569/AoS2CMeHq-QcEPHhz4dB', {
    phone_conversion_number: PHONE_DISPLAY,
    phone_conversion_callback: (formatted: string, plain: string) => {
      document.querySelectorAll<HTMLElement>('[data-phone-text]').forEach((el) => {
        el.textContent = formatted;
      });
      document.querySelectorAll<HTMLAnchorElement>('a[data-phone-link]').forEach((a) => {
        a.href = 'tel:+' + plain;
      });
    },
  });
}

initAnalytics();

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <HydratedRouter />
    </StrictMode>
  );
});
