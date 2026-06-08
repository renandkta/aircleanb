import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { translations } from '../translations';
import Logo from './Logo';

const PrivacyPolicy: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'pt' | 'es'>('en');
  const t = translations[language];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#008CBA] text-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo />
          <div className="flex items-center space-x-2">
            <Globe className="h-5 w-5 text-white" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'en' | 'pt' | 'es')}
              className="bg-transparent text-white focus:outline-none"
            >
              <option value="en">English</option>
              <option value="pt">Português</option>
              <option value="es">Español</option>
            </select>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 md:py-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {t.footer.privacy} Policy
        </h1>
        <p className="text-gray-600 mb-8 text-sm md:text-base">
          This Privacy Policy explains how AirCleanB collects, uses, and protects your information when you
          use our website and services.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Information We Collect</h2>
          <p className="text-gray-700 text-sm md:text-base">
            We collect information that you provide directly to us through our contact and scheduling forms,
            including your name, email address, phone number, property details, and any additional notes you
            choose to share.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">2. How We Use Your Information</h2>
          <p className="text-gray-700 text-sm md:text-base">
            We use your information to respond to your inquiries, schedule assessments and cleanings, provide
            our services, and improve our operations. We may also use aggregated, non-identifiable data for
            analytics and service optimization.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Third-Party Services</h2>
          <p className="text-gray-700 text-sm md:text-base">
            Our website uses third-party services such as Formspree for form processing and Google Ads/Analytics
            for measurement. These services may collect certain technical information in accordance with their
            own privacy policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Data Security</h2>
          <p className="text-gray-700 text-sm md:text-base">
            We take reasonable measures to protect your personal information against unauthorized access, use,
            or disclosure. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Your Rights</h2>
          <p className="text-gray-700 text-sm md:text-base">
            If you would like to review, update, or delete the personal information we hold about you, you can
            contact us at&nbsp;
            <a href="mailto:aircleanb.dc@gmail.com" className="text-[#008CBA] underline">
              aircleanb.dc@gmail.com
            </a>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Updates to This Policy</h2>
          <p className="text-gray-700 text-sm md:text-base">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
            updated revision date.
          </p>
        </section>

        <p className="text-gray-600 text-sm md:text-base">
          If you have any questions about this Privacy Policy, please contact us at the email above.
        </p>
      </main>
    </div>
  );
};

export default PrivacyPolicy;

