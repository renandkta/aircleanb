import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { IMaskInput } from 'react-imask';
import { useForm } from '@formspree/react';
import { Send } from 'lucide-react';
import { SERVICE_NAMES } from '../translations';
import { trackFormLead, type ServiceKey } from '../utils/contact';

type FieldErrors = Partial<Record<'name' | 'email' | 'phone', string>>;

const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());

// The mask is "+1 (000) 000-0000", so a complete number has 11 digits with the
// leading country code 1.
const validatePhone = (phone: string) => {
  const digits = phone.replace(/\D/g, '');
  const local = digits.length === 11 && digits.startsWith('1') ? digits.substring(1) : digits;
  return local.length === 10;
};

interface QuoteFormProps {
  service: ServiceKey;
  // One of SERVICE_NAMES, picked by default.
  defaultServiceName: string;
  notesPlaceholder?: string;
}

// Quote form for the English pages (the home keeps its own, translated form).
// Sends to the same Formspree form, so leads keep arriving in the same inbox.
export default function QuoteForm({ service, defaultServiceName, notesPlaceholder = 'Anything we should know?' }: QuoteFormProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: defaultServiceName,
    city: '',
    notes: '',
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [state, handleSubmit] = useForm('xanjdbgn');
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (state.succeeded) {
      trackFormLead({ service, placement: 'form' });
      navigate('/thank-you');
    }
  }, [state.succeeded, navigate, service]);

  const findErrors = (data: typeof formData): FieldErrors => {
    const found: FieldErrors = {};
    if (data.name.trim() === '') found.name = 'Please enter your name.';
    if (!validateEmail(data.email)) found.email = 'Enter a valid email, like you@email.com.';
    if (!validatePhone(data.phone)) found.phone = 'Enter a 10-digit US phone number.';
    return found;
  };

  const updateField = (name: keyof typeof formData, value: string) => {
    const next = { ...formData, [name]: value };
    setFormData(next);
    // Once a field has shown an error, re-check it as the person types.
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

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    updateField(e.target.name as keyof typeof formData, e.target.value);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = findErrors(formData);
    setErrors(found);
    if (found.name) return nameRef.current?.focus();
    if (found.email) return emailRef.current?.focus();
    if (found.phone) return phoneRef.current?.focus();
    handleSubmit({ ...formData, subject: `AirCleanB Quote Request - ${formData.service}`, _page: service });
  };

  const inputClass = (hasError: boolean) =>
    `w-full min-h-[48px] px-4 py-2 bg-white border rounded-lg text-base text-brand-ink ${hasError ? 'border-2 border-red-700' : 'border-gray-400'}`;

  return (
    <form className="space-y-5" onSubmit={onSubmit} noValidate>
      {state.errors && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg" role="alert">
          <p className="font-bold">We couldn't send your request. Please try again or message us.</p>
        </div>
      )}
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="qf-name" className="block font-bold mb-2">Name</label>
          <input
            id="qf-name"
            ref={nameRef}
            type="text"
            name="name"
            autoComplete="name"
            className={inputClass(!!errors.name)}
            value={formData.name}
            onChange={onChange}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'qf-name-error' : undefined}
          />
          {errors.name && <p id="qf-name-error" className="mt-1 text-sm font-semibold text-red-700">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="qf-phone" className="block font-bold mb-2">Phone</label>
          <IMaskInput
            id="qf-phone"
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
            aria-describedby={errors.phone ? 'qf-phone-error' : undefined}
          />
          {errors.phone && <p id="qf-phone-error" className="mt-1 text-sm font-semibold text-red-700">{errors.phone}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="qf-email" className="block font-bold mb-2">Email</label>
        <input
          id="qf-email"
          ref={emailRef}
          type="email"
          name="email"
          autoComplete="email"
          className={inputClass(!!errors.email)}
          placeholder="you@email.com"
          value={formData.email}
          onChange={onChange}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'qf-email-error' : undefined}
        />
        {errors.email && <p id="qf-email-error" className="mt-1 text-sm font-semibold text-red-700">{errors.email}</p>}
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="qf-service" className="block font-bold mb-2">Service</label>
          <select id="qf-service" name="service" className={inputClass(false)} value={formData.service} onChange={onChange}>
            {SERVICE_NAMES.map((name) => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="qf-city" className="block font-bold mb-2">City (optional)</label>
          <input
            id="qf-city"
            type="text"
            name="city"
            autoComplete="address-level2"
            className={inputClass(false)}
            placeholder="Arlington, VA"
            value={formData.city}
            onChange={onChange}
          />
        </div>
      </div>
      <div>
        <label htmlFor="qf-notes" className="block font-bold mb-2">Anything else? (optional)</label>
        <textarea
          id="qf-notes"
          rows={3}
          name="notes"
          className="w-full px-4 py-3 bg-white border border-gray-400 rounded-lg text-base text-brand-ink"
          placeholder={notesPlaceholder}
          value={formData.notes}
          onChange={onChange}
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 min-h-[52px] bg-brand text-white font-bold hover:bg-brand-dark transition"
        aria-busy={state.submitting}
      >
        <Send className="h-5 w-5" aria-hidden="true" />
        {state.submitting ? 'Sending...' : 'Send request'}
      </button>
      <p className="text-sm text-brand-muted">
        By sending, you agree we may text or email you about your quote.{' '}
        <Link to="/terms" className="underline text-brand-dark">Terms</Link> ·{' '}
        <Link to="/privacy" className="underline text-brand-dark">Privacy</Link>
      </p>
    </form>
  );
}
