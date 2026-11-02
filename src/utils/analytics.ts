// Visit and contact measurement: Google Analytics 4 and Meta Pixel, on top of
// the Google Ads tag that root.tsx loads.
//
// Leave an ID empty and that tool stays off. Fill it in, merge, and it starts
// counting on the next deploy.
// GA4 itself is configured in the <head> written by root.tsx (the tag has to be
// in the HTML for Search Console verification); this ID is only used to address
// its events. Route changes are counted by GA4's enhanced measurement (history
// events).
export const GA4_ID = 'G-4HPTZC7DK7';
export const META_PIXEL_ID = ''; // e.g. '1234567890123456' (Meta Events Manager)

// Production domain only, same rule as the Google tag in root.tsx, so
// localhost and previews never pollute the numbers.
export const isProduction = () =>
  typeof location !== 'undefined' &&
  (location.hostname === 'aircleanb.com' || location.hostname.endsWith('.aircleanb.com'));

export type ContactChannel = 'whatsapp' | 'sms' | 'call' | 'email' | 'form';

// Where the tap happened, so GA4 shows which page and which button bring contacts.
// Register "service" and "placement" as custom dimensions in GA4 to see them.
export interface ContactContext {
  service: 'airbnb' | 'office' | 'post_construction' | 'upholstery_mattress' | 'general';
  placement: 'header' | 'hero' | 'sticky_bar' | 'cta_band' | 'contact' | 'pricing' | 'footer' | 'thank_you' | 'form';
}

// GA4 event per channel. whatsapp_click, sms_click, call_click and quote_submit
// are the ones to mark as key events in GA4 (Admin > Events).
const GA4_EVENT: Record<ContactChannel, string> = {
  whatsapp: 'whatsapp_click',
  sms: 'sms_click',
  call: 'call_click',
  email: 'email_click',
  form: 'quote_submit',
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: ((...args: unknown[]) => void) & { queue?: unknown[]; loaded?: boolean; version?: string; push?: unknown; callMethod?: (...args: unknown[]) => void };
    _fbq?: unknown;
  }
}

export const initAnalytics = () => {
  if (!isProduction()) return;

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

// One contact attempt: a tap on WhatsApp, iMessage/SMS, Call or email, or a form sent.
export const trackContact = (channel: ContactChannel, ctx: ContactContext) => {
  if (!isProduction()) return;
  if (GA4_ID && typeof window.gtag === 'function') {
    window.gtag('event', GA4_EVENT[channel], {
      send_to: GA4_ID,
      service: ctx.service,
      placement: ctx.placement,
    });
  }
  if (META_PIXEL_ID && window.fbq && channel !== 'email') {
    window.fbq('track', channel === 'form' ? 'Lead' : 'Contact', { content_name: channel });
  }
};
