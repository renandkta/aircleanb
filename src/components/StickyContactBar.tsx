import { MessageSquare, Phone } from 'lucide-react';
import {
  PHONE_DISPLAY,
  prefersIMessage,
  smsUrl,
  telUrl,
  trackCallClick,
  trackWhatsAppClick,
  whatsappUrl,
} from '../utils/contact';

interface StickyContactBarProps {
  label: string;
}

// Mobile-only bar pinned to the bottom of the screen: message in front (iMessage
// on Apple devices, WhatsApp elsewhere) and call as a round icon. Pages that use
// it need bottom padding on mobile so the footer is not covered.
export default function StickyContactBar({ label }: StickyContactBarProps) {
  const useIMessage = prefersIMessage();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex items-center gap-3 px-3 py-2.5 bg-white border-t border-brand-line shadow-[0_-4px_16px_rgba(11,42,58,0.10)]">
      <a
        href={useIMessage ? smsUrl : whatsappUrl}
        target={useIMessage ? undefined : '_blank'}
        rel={useIMessage ? undefined : 'noopener noreferrer'}
        onClick={useIMessage ? undefined : trackWhatsAppClick}
        className="flex-1 flex items-center justify-center gap-2 min-h-[52px] rounded-full bg-brand text-white font-bold"
      >
        <MessageSquare className="h-5 w-5" aria-hidden="true" />
        {label}
      </a>
      <a
        href={telUrl}
        data-phone-link
        onClick={trackCallClick}
        aria-label={`Call ${PHONE_DISPLAY}`}
        className="w-[52px] h-[52px] flex-none flex items-center justify-center rounded-full bg-brand-soft text-brand-ink"
      >
        <Phone className="h-6 w-6" aria-hidden="true" />
      </a>
    </div>
  );
}
