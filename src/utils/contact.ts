import { useEffect, useState } from 'react';
import { trackContact, type ContactContext } from './analytics';

// Single source for every contact channel on the site, so the number, email and
// prefilled messages never drift between pages.
export const PHONE_DISPLAY = '+1 (720) 352-9810';
export const PHONE_E164 = '+17203529810';
export const EMAIL = 'debora@aircleanb.com';

// Shown next to the phone number everywhere: the 720 area code is not local to
// the DMV, so visitors see right away where we work.
export const SERVING_LINE = 'Serving Washington DC, Arlington, Alexandria, Bethesda, Silver Spring and Northern Virginia.';

// Which service a page sells. Sent with every contact event (GA4 "service").
export type ServiceKey = 'airbnb' | 'office' | 'post_construction' | 'upholstery_mattress' | 'general';

// Prefilled text for iMessage/SMS and WhatsApp, one per service. "(via website)"
// tells the owner the lead came from the site.
const MESSAGES: Record<ServiceKey, string> = {
  airbnb:
    "Hi AirCleanB! I'd like a turnover quote. Bedrooms: __ | Bathrooms: __ | City: __ | Checkout time: __ (via website)",
  office:
    "Hi AirCleanB! I'd like a free office walkthrough. Office size (sq ft): __ | City: __ | How often: __ (via website)",
  post_construction:
    "Hi AirCleanB! I need a post-construction clean. Sq ft: __ | City: __ | Ready date: __. I can send photos. (via website)",
  upholstery_mattress:
    "Hi AirCleanB! I'd like a quote for: __ (sofa, chair or mattress) | City: __. Photo attached. (via website)",
  general: "Hi AirCleanB! I'd like a quote. Service: __ | City: __ (via website)",
};

export const telUrl = `tel:${PHONE_E164}`;
export const mailtoUrl = `mailto:${EMAIL}`;
export const whatsappUrlFor = (service: ServiceKey) =>
  `https://wa.me/${PHONE_E164.slice(1)}?text=${encodeURIComponent(MESSAGES[service])}`;
// "?&body=" is the form both iOS and Android Messages accept.
export const smsUrlFor = (service: ServiceKey) =>
  `sms:${PHONE_E164}?&body=${encodeURIComponent(MESSAGES[service])}`;

// iPhone, iPad and Mac open sms: links in Messages (iMessage), so those
// visitors see iMessage first; everyone else sees WhatsApp first.
const detectIMessage = (): boolean =>
  typeof navigator !== 'undefined' && /iPhone|iPad|iPod|Macintosh/.test(navigator.userAgent);

// Pages are prerendered at build time, where there is no browser, so the HTML
// always starts with WhatsApp first and switches after it loads on Apple devices.
// Reading navigator during render would make the first browser render differ
// from the HTML and break hydration.
export const usePrefersIMessage = (): boolean => {
  const [prefers, setPrefers] = useState(false);
  useEffect(() => setPrefers(detectIMessage()), []);
  return prefers;
};

// Each tracker sends the GA4 / Meta event from analytics.ts plus the Google Ads
// conversion where one exists.
const adsConversion = (sendTo: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', { send_to: sendTo });
  }
};

export const trackCallClick = (ctx: ContactContext) => {
  trackContact('call', ctx);
  adsConversion('AW-17464291569/PBzFCMektOQcEPHhz4dB');
};

export const trackWhatsAppClick = (ctx: ContactContext) => {
  trackContact('whatsapp', ctx);
  adsConversion('AW-17464291569/nr1-CMSktOQcEPHhz4dB');
};

// No Google Ads conversion action for iMessage/SMS yet: it is counted in GA4
// (sms_click) and can be imported into Google Ads from there.
export const trackSmsClick = (ctx: ContactContext) => {
  trackContact('sms', ctx);
};

export const trackEmailClick = (ctx: ContactContext) => {
  trackContact('email', ctx);
};

// Form sent successfully (call from the Formspree success callback only).
export const trackFormLead = (ctx: ContactContext) => {
  trackContact('form', ctx);
  adsConversion('AW-17464291569/dcJFCJeJ9OgcEPHhz4dB');
};
