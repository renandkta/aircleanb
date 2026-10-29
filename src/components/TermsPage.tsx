import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { EMAIL, PHONE_DISPLAY, mailtoUrl } from '../utils/contact';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-soft">
      <header className="bg-brand-soft border-b border-brand-line">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" aria-label="AirCleanB home">
            <Logo size={28} tone="dark" />
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 md:py-16 max-w-3xl">
        <h1 className="font-display text-3xl md:text-4xl font-extrabold mb-2">Terms of Service</h1>
        <p className="text-brand-muted mb-8 text-sm">Last updated: October 29, 2026</p>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">1. Quotes and prices</h2>
          <p>
            Prices on this site are starting prices. Your final price depends on the size of the unit, the number
            of bathrooms and the work needed, and we confirm it in writing before the first clean.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">2. First-turnover offer</h2>
          <p>
            New clients get 30% off their first turnover, for one unit per new client. The discount appears in your
            written quote.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">3. Cancellations</h2>
          <p>
            You can cancel or reschedule for free up to 24 hours before the scheduled clean. If you cancel with less
            than 24 hours' notice, we charge 50% of the cleaning price.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">4. Access and photo reports</h2>
          <p>
            You give us the access details for the unit (lock code, key or lockbox). After each clean we send photos
            of every room and report any damage or missing items we find.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">5. Messages</h2>
          <p>
            By sending a quote request or messaging us, you agree that we may reply by text message (SMS, iMessage or
            WhatsApp) or email about your quote and cleanings. See our{' '}
            <Link to="/privacy" className="underline text-brand-dark">Privacy Policy</Link>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">6. Contact</h2>
          <p>
            Questions about these terms: <a href={mailtoUrl} className="underline text-brand-dark">{EMAIL}</a> or{' '}
            {PHONE_DISPLAY}.
          </p>
        </section>
      </main>
    </div>
  );
};

export default TermsPage;
