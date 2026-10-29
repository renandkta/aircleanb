import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, MessageSquare } from 'lucide-react';
import { translations } from '../translations';
import { prefersIMessage, smsUrl, trackIMessageClick, trackWhatsAppClick, whatsappUrl } from '../utils/contact';

export default function ThankYou() {
  const [language, setLanguage] = useState<'en' | 'pt' | 'es'>('en');
  const t = translations[language];
  const useIMessage = prefersIMessage();

  // The lead conversion fires once in the form success callback (LeadForm /
  // MainPage). It is intentionally NOT fired here: /thank-you would also count
  // refreshes, back-button hits and direct visits, inflating the numbers.

  return (
    <div className="min-h-screen bg-brand-soft flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center p-8 flex flex-col items-center gap-4">
        <h1 className="font-display text-4xl font-extrabold text-brand-ink">{t.thankYou.title}</h1>
        <p className="text-lg text-brand-muted">{t.thankYou.subtitle}</p>
        <a
          href={useIMessage ? smsUrl : whatsappUrl}
          target={useIMessage ? undefined : '_blank'}
          rel={useIMessage ? undefined : 'noopener noreferrer'}
          onClick={useIMessage ? trackIMessageClick : trackWhatsAppClick}
          className="inline-flex items-center justify-center gap-2 min-h-[52px] px-6 rounded-full bg-brand text-white font-bold hover:bg-brand-dark transition"
        >
          <MessageSquare className="h-5 w-5" aria-hidden="true" />
          {t.thankYou.hurry}
        </a>
        <Link to="/" className="font-bold text-brand-dark underline py-3">
          {t.thankYou.backToHome}
        </Link>
      </div>
      <div className="absolute top-4 right-4">
        <label className="flex items-center gap-2">
          <Globe className="h-5 w-5 text-brand-ink" aria-hidden="true" />
          <span className="sr-only">Language</span>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as 'en' | 'pt' | 'es')}
            className="bg-transparent text-brand-ink font-semibold py-2"
          >
            <option value="en">English</option>
            <option value="pt">Português</option>
            <option value="es">Español</option>
          </select>
        </label>
      </div>
    </div>
  );
}
