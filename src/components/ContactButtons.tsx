import { MessageSquare, Phone } from 'lucide-react';
import {
  PHONE_DISPLAY,
  SERVING_LINE,
  smsUrlFor,
  telUrl,
  trackCallClick,
  trackSmsClick,
  trackWhatsAppClick,
  usePrefersIMessage,
  whatsappUrlFor,
  type ServiceKey,
} from '../utils/contact';
import type { ContactContext } from '../utils/analytics';

interface ContactButtonsProps {
  service: ServiceKey;
  placement: ContactContext['placement'];
  // "light" for white/soft backgrounds, "dark" for the blue CTA band.
  tone?: 'light' | 'dark';
  showServingLine?: boolean;
}

// iMessage and WhatsApp side by side (iMessage first on Apple devices), then
// Call with the number and the "Serving ..." line, so the 720 area code never
// looks out of place.
export default function ContactButtons({ service, placement, tone = 'light', showServingLine = true }: ContactButtonsProps) {
  const useIMessage = usePrefersIMessage();
  const ctx = { service, placement };

  const primary = tone === 'light'
    ? 'bg-brand text-white hover:bg-brand-dark'
    : 'bg-white text-brand-dark hover:bg-brand-soft';
  const secondary = tone === 'light'
    ? 'bg-white text-brand-dark border-2 border-brand hover:bg-brand-soft'
    : 'bg-transparent text-white border-2 border-white hover:bg-white/10';
  const base = 'flex-1 inline-flex items-center justify-center gap-2 min-h-[52px] px-6 rounded-full font-bold transition';

  const imessage = (cls: string) => (
    <a key="imessage" href={smsUrlFor(service)} onClick={() => trackSmsClick(ctx)} className={`${base} ${cls}`}>
      <MessageSquare className="h-5 w-5" aria-hidden="true" />
      iMessage
    </a>
  );
  const whatsapp = (cls: string) => (
    <a
      key="whatsapp"
      href={whatsappUrlFor(service)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick(ctx)}
      className={`${base} ${cls}`}
    >
      <MessageSquare className="h-5 w-5" aria-hidden="true" />
      WhatsApp
    </a>
  );

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row gap-3">
        {useIMessage ? [imessage(primary), whatsapp(secondary)] : [whatsapp(primary), imessage(secondary)]}
      </div>
      <a
        href={telUrl}
        data-phone-link
        onClick={() => trackCallClick(ctx)}
        className={`inline-flex items-center justify-center gap-2 min-h-[52px] px-6 rounded-full font-bold transition ${
          tone === 'light' ? 'bg-white text-brand-ink hover:bg-brand-line' : 'bg-brand-dark text-white hover:bg-brand-ink'
        }`}
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        Call <span data-phone-text>{PHONE_DISPLAY}</span>
      </a>
      {showServingLine && (
        <p className={`text-sm ${tone === 'light' ? 'text-brand-muted' : 'text-white/85'}`}>{SERVING_LINE}</p>
      )}
    </div>
  );
}
