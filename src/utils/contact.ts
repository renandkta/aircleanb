import { trackContact } from './analytics';

// Single source for every contact channel on the site, so the number, email and
// prefilled message never drift between pages.
export const PHONE_DISPLAY = '+1 (720) 352-9810';
export const PHONE_E164 = '+17203529810';
export const EMAIL = 'debora@aircleanb.com';

// Prefilled text for iMessage and WhatsApp. "(via website)" tells the owner the
// lead came from the site.
const QUOTE_MESSAGE =
  "Hi AirCleanB! I'd like a quote. Service: Airbnb turnover | Bedrooms: __ | City: __ | Checkout time: __ (via website)";

export const telUrl = `tel:${PHONE_E164}`;
export const whatsappUrl = `https://wa.me/${PHONE_E164.slice(1)}?text=${encodeURIComponent(QUOTE_MESSAGE)}`;
// "?&body=" is the form both iOS and Android Messages accept.
export const smsUrl = `sms:${PHONE_E164}?&body=${encodeURIComponent(QUOTE_MESSAGE)}`;
export const mailtoUrl = `mailto:${EMAIL}`;

// iPhone, iPad and Mac open sms: links in Messages (iMessage), so those
// visitors see iMessage first; everyone else sees WhatsApp first.
export const prefersIMessage = (): boolean =>
  typeof navigator !== 'undefined' && /iPhone|iPad|iPod|Macintosh/.test(navigator.userAgent);

// Each tracker sends the Google Ads conversion (where one exists) plus the
// GA4 / Meta Pixel contact event from analytics.ts.
export const trackCallClick = () => {
  trackContact('call');
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'AW-17464291569/PBzFCMektOQcEPHhz4dB',
    });
  }
};

export const trackWhatsAppClick = () => {
  trackContact('whatsapp');
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'AW-17464291569/nr1-CMSktOQcEPHhz4dB',
    });
  }
};

// No Google Ads conversion action for iMessage yet: it is counted in GA4 and
// can be imported into Google Ads from there.
export const trackIMessageClick = () => {
  trackContact('imessage');
};

// Form sent successfully (call from the Formspree success callback only).
export const trackFormLead = () => {
  trackContact('form');
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'AW-17464291569/dcJFCJeJ9OgcEPHhz4dB',
    });
  }
};
