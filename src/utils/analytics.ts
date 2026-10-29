// Visit and contact measurement: Google Analytics 4 and Meta Pixel, on top of
// the Google Ads tag that index.html already loads.
//
// Leave an ID empty and that tool stays off. Fill it in, merge, and it starts
// counting on the next deploy.
export const GA4_ID = ''; // e.g. 'G-ABC123XYZ' (GA4 > Admin > Data streams)
export const META_PIXEL_ID = ''; // e.g. '1234567890123456' (Meta Events Manager)

// Production domain only, same rule as the Google Ads tag in index.html, so
// localhost and previews never pollute the numbers.
export const isProduction =
  typeof location !== 'undefined' &&
  (location.hostname === 'aircleanb.com' || location.hostname.endsWith('.aircleanb.com'));

export type ContactChannel = 'whatsapp' | 'imessage' | 'call' | 'form';

declare global {
  interface Window {
    fbq?: ((...args: unknown[]) => void) & { queue?: unknown[]; loaded?: boolean; version?: string; push?: unknown; callMethod?: (...args: unknown[]) => void };
    _fbq?: unknown;
  }
}

export const initAnalytics = () => {
  if (!isProduction) return;

  // GA4 reuses the gtag.js loaded by index.html. Route changes in this
  // single-page app are counted by GA4's enhanced measurement ("page changes
  // based on browser history events", on by default).
  if (GA4_ID && typeof window.gtag === 'function') {
    window.gtag('config', GA4_ID);
  }

  // Meta Pixel base code. The Pixel also counts route changes on its own
  // (history pushState), so PageView is sent only once here.
  if (META_PIXEL_ID && !window.fbq) {
    const fbq = function (...args: unknown[]) {
      if (fbq.callMethod) fbq.callMethod(...args);
      else fbq.queue!.push(args);
    } as NonNullable<Window['fbq']>;
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = '2.0';
    fbq.queue = [];
    window.fbq = fbq;
    window._fbq = fbq;
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(s);
    fbq('init', META_PIXEL_ID);
    fbq('track', 'PageView');
  }
};

// One contact attempt: a tap on WhatsApp, iMessage or Call, or a form sent.
// GA4 gets "contact_click" (taps) or "generate_lead" (form) with the channel;
// Meta gets "Contact" (taps) or "Lead" (form).
export const trackContact = (channel: ContactChannel) => {
  if (!isProduction) return;
  if (GA4_ID && typeof window.gtag === 'function') {
    if (channel === 'form') {
      window.gtag('event', 'generate_lead', { send_to: GA4_ID, method: 'form' });
    } else {
      window.gtag('event', 'contact_click', { send_to: GA4_ID, method: channel });
    }
  }
  if (META_PIXEL_ID && window.fbq) {
    window.fbq('track', channel === 'form' ? 'Lead' : 'Contact', { content_name: channel });
  }
};
