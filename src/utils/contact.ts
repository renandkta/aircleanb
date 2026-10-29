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

export const trackCallClick = () => {
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'AW-17464291569/PBzFCMektOQcEPHhz4dB',
    });
  }
};

export const trackWhatsAppClick = () => {
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'AW-17464291569/nr1-CMSktOQcEPHhz4dB',
    });
  }
};
