import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IMaskInput } from 'react-imask';
import { useForm } from '@formspree/react';
import { Check, CheckCircle, Users, Clock, Camera, AlertTriangle, Globe, MapPin, WashingMachine, ThumbsUp, Mail, Phone, MessageSquare, Send, ArrowRight } from 'lucide-react';
import { translations, SERVICE_NAMES } from '../translations';
import Logo from './Logo';
import ImageCarousel from './ImageCarousel';
import StickyContactBar from './StickyContactBar';
import { carouselImages } from '../utils/carouselLoader';
import {
  EMAIL,
  PHONE_DISPLAY,
  mailtoUrl,
  prefersIMessage,
  smsUrl,
  telUrl,
  trackCallClick,
  trackWhatsAppClick,
  whatsappUrl,
} from '../utils/contact';

type FieldErrors = Partial<Record<'name' | 'email' | 'phone', string>>;

const validateEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());

// The mask is "+1 (000) 000-0000", so a complete number has 11 digits with the
// leading country code 1.
const validatePhone = (phone: string) => {
  const digits = phone.replace(/\D/g, '');
  const local = digits.length === 11 && digits.startsWith('1') ? digits.substring(1) : digits;
  return local.length === 10;
};

const testimonials = [
  {
    quote: "The Deep Clean Reset was worth every penny. My place looked brand new and my guest ratings went up immediately.",
    name: "Mark T.",
    place: "Arlington, VA",
  },
  {
    quote: "Finally, a reliable team in DC! They handle the turnover seamlessly, and the photo reports give me total peace of mind.",
    name: "Emily R.",
    place: "Capitol Hill, Washington DC",
  },
  {
    quote: "I manage 3 units in Baltimore and AirCleanB is the only partner I trust. Consistent quality every single time.",
    name: "David K.",
    place: "Fells Point, Baltimore",
  },
  {
    quote: "Super professional service. They arrived on time in Silver Spring and the cleaning was spotless. Highly recommend!",
    name: "Sarah L.",
    place: "Silver Spring, MD",
  },
];

export default function MainPage() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState<'en' | 'pt' | 'es'>('en');
  const t = translations[language];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const useIMessage = prefersIMessage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: SERVICE_NAMES[0],
    city: '',
    notes: '',
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [state, handleSubmit] = useForm("xanjdbgn");
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (state.succeeded) {
      if (window.gtag) {
        window.gtag('event', 'conversion', {
          send_to: 'AW-17464291569/dcJFCJeJ9OgcEPHhz4dB'
        });
      }
      navigate('/thank-you');
    }
  }, [state.succeeded, navigate]);

  const findErrors = (data: typeof formData): FieldErrors => {
    const found: FieldErrors = {};
    if (data.name.trim() === '') found.name = t.scheduling.form.errors.name;
    if (!validateEmail(data.email)) found.email = t.scheduling.form.errors.email;
    if (!validatePhone(data.phone)) found.phone = t.scheduling.form.errors.phone;
    return found;
  };

  const updateField = (name: keyof typeof formData, value: string) => {
    const next = { ...formData, [name]: value };
    setFormData(next);
    // Once a field has shown an error, re-check it as the person types so the
    // message disappears as soon as it is fixed.
    if (name in errors) {
      setErrors((prev) => {
        const remaining = { ...prev };
        const stillWrong = findErrors(next)[name as keyof FieldErrors];
        if (stillWrong) remaining[name as keyof FieldErrors] = stillWrong;
        else delete remaining[name as keyof FieldErrors];
        return remaining;
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    updateField(e.target.name as keyof typeof formData, e.target.value);
  };

  // The submit button is never disabled: tapping it either sends the form or
  // marks the fields that need fixing and moves focus to the first one.
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = findErrors(formData);
    setErrors(found);
    if (found.name) return nameRef.current?.focus();
    if (found.email) return emailRef.current?.focus();
    if (found.phone) return phoneRef.current?.focus();
    handleSubmit({
      ...formData,
      subject: 'AirCleanB Quote Request',
      _language: language,
    });
  };

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'how-it-works', label: t.nav.howItWorks },
    { id: 'services', label: t.nav.services },
    { id: 'benefits', label: t.nav.benefits },
    { id: 'contact', label: t.nav.contact },
  ];

  const languageSelect = (
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
  );

  const imessageButton = (className: string) => (
    <a key="imessage" href={smsUrl} className={className}>
      <MessageSquare className="h-5 w-5" aria-hidden="true" />
      {t.directContact.sms}
    </a>
  );
  const whatsappButton = (className: string) => (
    <a key="whatsapp" href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick} className={className}>
      <MessageSquare className="h-5 w-5" aria-hidden="true" />
      {t.directContact.whatsapp}
    </a>
  );
  const primaryBtn = "flex-1 inline-flex items-center justify-center gap-2 min-h-[52px] px-6 rounded-full bg-brand text-white font-bold hover:bg-brand-dark transition";
  const outlineBtn = "flex-1 inline-flex items-center justify-center gap-2 min-h-[52px] px-6 rounded-full bg-white text-brand-dark font-bold border-2 border-brand hover:bg-brand-soft transition";
  // Apple devices see iMessage first, everyone else WhatsApp first.
  const messageButtons = useIMessage
    ? [imessageButton(primaryBtn), whatsappButton(outlineBtn)]
    : [whatsappButton(primaryBtn), imessageButton(outlineBtn)];

  const inputClass = (hasError: boolean) =>
    `w-full min-h-[48px] px-4 py-2 bg-white border rounded-lg text-base text-brand-ink ${hasError ? 'border-2 border-red-700' : 'border-gray-400'}`;

  const steps = [
    { icon: MapPin, step: t.howItWorks.steps.register },
    { icon: AlertTriangle, step: t.howItWorks.steps.report },
    { icon: WashingMachine, step: t.howItWorks.steps.cleaning },
    { icon: Camera, step: t.howItWorks.steps.record },
    { icon: ThumbsUp, step: t.howItWorks.steps.validation },
  ];

  const benefits = [
    { icon: Users, item: t.benefits.items.quality },
    { icon: Clock, item: t.benefits.items.time },
    { icon: Camera, item: t.benefits.items.ratings },
    { icon: AlertTriangle, item: t.benefits.items.history },
  ];

  const services = [t.services.standard, t.services.postEvent, t.services.express];

  return (
    <div className="min-h-screen bg-brand-soft pb-20 md:pb-0">
      {/* Offer bar */}
      <div className="bg-brand text-white text-center text-sm md:text-base font-bold px-4 py-2">
        {t.hero.offerTitle} <span className="font-normal">· {t.hero.offerNote}</span>
      </div>

      <header className="bg-white border-b border-brand-line">
        <nav className="container mx-auto px-4 py-3" aria-label="Main">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" aria-label="AirCleanB home">
              <Logo size={28} tone="dark" />
            </Link>

            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a key={link.id} href={`#${link.id}`} onClick={scrollTo(link.id)} className="text-brand-ink font-semibold hover:text-brand py-2">
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              {languageSelect}
              <a
                href="#schedule"
                onClick={scrollTo('schedule')}
                className="inline-flex items-center min-h-[44px] px-5 rounded-full bg-brand text-white font-bold hover:bg-brand-dark transition"
              >
                {t.hero.getQuote}
              </a>
            </div>

            <button
              type="button"
              className="md:hidden w-11 h-11 flex items-center justify-center text-brand-ink"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {mobileMenuOpen && (
            <div id="mobile-menu" className="md:hidden mt-3 pb-2 flex flex-col">
              {navLinks.map((link) => (
                <a key={link.id} href={`#${link.id}`} onClick={scrollTo(link.id)} className="text-brand-ink font-semibold py-3 border-t border-brand-line">
                  {link.label}
                </a>
              ))}
              <div className="border-t border-brand-line pt-2">{languageSelect}</div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-4 pt-6 pb-10 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-bold uppercase tracking-wide text-brand-dark">{t.hero.eyebrow}</p>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-[1.05] text-brand-ink">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-brand-muted">{t.hero.subtitle}</p>
            <p className="text-lg text-brand-ink">
              {t.hero.priceFrom} <strong>$110</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              {messageButtons}
            </div>
            <a
              href={telUrl}
              data-phone-link
              onClick={trackCallClick}
              className="inline-flex items-center justify-center gap-2 min-h-[52px] px-6 rounded-full bg-white text-brand-ink font-bold hover:bg-brand-line transition"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {t.hero.call} <span data-phone-text>{PHONE_DISPLAY}</span>
            </a>
            <p className="text-sm text-brand-muted">{t.hero.replyTime}</p>
          </div>
          <ImageCarousel images={carouselImages} sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="bg-brand-ink text-white py-10 md:py-14">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-8">{t.benefits.title}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map(({ icon: Icon, item }) => (
              <div key={item.title} className="flex gap-3">
                <span className="w-10 h-10 flex-none flex items-center justify-center rounded-full bg-brand-green">
                  <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-white/85">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-center mb-10 md:mb-14">{t.howItWorks.title}</h2>
          <ol className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {steps.map(({ icon: Icon, step }, index) => (
              <li key={step.title} className="flex md:flex-col gap-4 md:text-center md:items-center">
                <span className="relative w-14 h-14 flex-none flex items-center justify-center rounded-full bg-brand-soft">
                  <Icon className="h-7 w-7 text-brand" aria-hidden="true" />
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                </span>
                <div>
                  <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                  <p className="text-brand-muted">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-center mb-10 md:mb-14">{t.services.title}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-2xl border border-brand-line p-6 md:p-8 flex flex-col">
                <h3 className="font-display text-xl font-extrabold mb-1">{service.title}</h3>
                <p className="font-bold text-brand-dark mb-4">{service.price}</p>
                <ul className="space-y-3 flex-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#schedule"
                  onClick={scrollTo('schedule')}
                  className="mt-6 inline-flex items-center justify-center gap-2 min-h-[48px] rounded-full bg-brand text-white font-bold hover:bg-brand-dark transition"
                >
                  {t.services.button}
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-brand-muted max-w-2xl mx-auto">
            <strong className="text-brand-ink">{t.services.alsoAvailable}:</strong> {t.services.alsoAvailableList}
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-center mb-10">{t.testimonials.title}</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {testimonials.map((item) => (
              <figure key={item.name} className="bg-brand-soft rounded-2xl p-6">
                <blockquote className="text-brand-ink text-lg mb-4">"{item.quote}"</blockquote>
                <figcaption className="text-sm font-semibold text-brand-muted">
                  <span className="font-bold text-brand-ink">{item.name}</span> · {item.place}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section id="schedule" className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-brand-line p-6 md:p-10">
            <h2 className="font-display text-3xl font-extrabold mb-2">{t.scheduling.title}</h2>
            <p className="text-brand-muted mb-6">{t.scheduling.subtitle}</p>

            <form className="space-y-5" onSubmit={handleFormSubmit} noValidate>
              {state.errors && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg" role="alert">
                  <p className="font-bold">We couldn't send your request. Please try again or message us.</p>
                  <ul className="list-disc pl-6 text-sm">
                    {state.errors.getFormErrors().map((error, index) => (
                      <li key={`form-${index}`}>{error.message}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="quote-name" className="block font-bold mb-2">{t.scheduling.form.name}</label>
                  <input
                    id="quote-name"
                    ref={nameRef}
                    type="text"
                    name="name"
                    autoComplete="name"
                    className={inputClass(!!errors.name)}
                    value={formData.name}
                    onChange={handleInputChange}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'quote-name-error' : undefined}
                  />
                  {errors.name && <p id="quote-name-error" className="mt-1 text-sm font-semibold text-red-700">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="quote-phone" className="block font-bold mb-2">{t.scheduling.form.phone}</label>
                  <IMaskInput
                    id="quote-phone"
                    inputRef={phoneRef}
                    mask="+1 (000) 000-0000"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    className={inputClass(!!errors.phone)}
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onAccept={(value: string) => updateField('phone', value)}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'quote-phone-error' : undefined}
                  />
                  {errors.phone && <p id="quote-phone-error" className="mt-1 text-sm font-semibold text-red-700">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="quote-email" className="block font-bold mb-2">{t.scheduling.form.email}</label>
                <input
                  id="quote-email"
                  ref={emailRef}
                  type="email"
                  name="email"
                  autoComplete="email"
                  className={inputClass(!!errors.email)}
                  placeholder="you@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'quote-email-error' : undefined}
                />
                {errors.email && <p id="quote-email-error" className="mt-1 text-sm font-semibold text-red-700">{errors.email}</p>}
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="quote-service" className="block font-bold mb-2">{t.scheduling.form.service}</label>
                  <select
                    id="quote-service"
                    name="service"
                    className={inputClass(false)}
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    {SERVICE_NAMES.map((name) => (
                      <option key={name} value={name}>{name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="quote-city" className="block font-bold mb-2">{t.scheduling.form.city}</label>
                  <input
                    id="quote-city"
                    type="text"
                    name="city"
                    autoComplete="address-level2"
                    className={inputClass(false)}
                    placeholder="Arlington, VA"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="quote-notes" className="block font-bold mb-2">{t.scheduling.form.notes}</label>
                <textarea
                  id="quote-notes"
                  rows={3}
                  name="notes"
                  className="w-full px-4 py-3 bg-white border border-gray-400 rounded-lg text-base text-brand-ink"
                  placeholder={t.scheduling.form.notesPlaceholder}
                  value={formData.notes}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 min-h-[52px] bg-brand text-white font-bold hover:bg-brand-dark transition"
                aria-busy={state.submitting}
              >
                <Send className="h-5 w-5" aria-hidden="true" />
                {state.submitting ? t.scheduling.form.sending : t.scheduling.form.button}
              </button>
              <p className="text-sm text-brand-muted">
                {t.scheduling.form.consent}{' '}
<Link to="/terms" className="underline text-brand-dark">{t.footer.terms}</Link> · <Link to="/privacy" className="underline text-brand-dark">{t.footer.privacy}</Link>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Direct contact */}
      <section id="contact" className="bg-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-3">{t.directContact.title}</h2>
          <p className="text-brand-muted max-w-2xl mx-auto mb-8">{t.directContact.subtitle}</p>
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            {messageButtons}
            <a
              href={telUrl}
              data-phone-link
              onClick={trackCallClick}
              className="inline-flex items-center justify-center gap-2 min-h-[52px] px-6 rounded-full bg-brand-soft text-brand-ink font-bold hover:bg-brand-line transition"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {t.directContact.call} <span data-phone-text>{PHONE_DISPLAY}</span>
            </a>
            <a
              href={mailtoUrl}
              className="inline-flex items-center justify-center gap-2 min-h-[52px] px-6 rounded-full bg-brand-soft text-brand-ink font-bold hover:bg-brand-line transition"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
              {EMAIL}
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand py-12 md:py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-3">{t.cta.title}</h2>
          <p className="text-lg md:text-xl mb-8">{t.cta.subtitle}</p>
          <a
            href="#schedule"
            onClick={scrollTo('schedule')}
            className="inline-flex items-center justify-center min-h-[52px] px-8 rounded-full bg-white text-brand-dark font-bold hover:bg-brand-soft transition"
          >
            {t.cta.button}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-ink text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <Link to="/" aria-label="AirCleanB home">
                <Logo size={28} />
              </Link>
              <p className="text-white/85 text-sm">{t.footer.area}</p>
            </div>
            <div>
              <h3 className="font-bold mb-3">{t.nav.services}</h3>
              <ul className="space-y-2 text-white/85">
                {SERVICE_NAMES.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">{t.nav.contact}</h3>
              <ul className="space-y-2 text-white/85">
                <li><a href={telUrl} data-phone-link onClick={trackCallClick} className="hover:text-white"><span data-phone-text>{PHONE_DISPLAY}</span></a></li>
                <li><a href={mailtoUrl} className="hover:text-white">{EMAIL}</a></li>
                <li>{t.footer.hours}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">AirCleanB</h3>
              <ul className="space-y-2 text-white/85">
                <li><Link to="/about" className="hover:text-white">About</Link></li>
                <li><Link to="/services" className="hover:text-white">Services</Link></li>
                <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link to="/privacy" className="hover:text-white">{t.footer.privacy}</Link></li>
                <li><Link to="/terms" className="hover:text-white">{t.footer.terms}</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/15 mt-10 pt-6 flex flex-col md:flex-row justify-between gap-2 text-sm text-white/75">
            <span className="flex items-center gap-2"><Check className="h-4 w-4" aria-hidden="true" />English · Português · Español</span>
            <span>© {new Date().getFullYear()} {t.footer.rights}</span>
          </div>
        </div>
      </footer>

      <StickyContactBar label={t.hero.getQuote} />
    </div>
  );
}
