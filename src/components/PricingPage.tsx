import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#00739A] text-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>
          <span className="text-sm md:text-base font-semibold">
            Transparent pricing for Airbnb hosts
          </span>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 md:py-16 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Pricing</h1>
        <p className="text-gray-700 mb-6 text-sm md:text-base">
          Exact pricing depends on the size of your property, linen needs and frequency of turnovers. The ranges
          below are typical for most 1–3 bedroom units in the DC, Maryland and Northern Virginia area.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
            <h2 className="text-xl font-semibold mb-2">Standard Turnover</h2>
            <p className="text-3xl font-bold text-[#00739A] mb-2">From $110</p>
            <p className="text-gray-700 text-sm md:text-base mb-3 flex-1">
              Per turnover for a studio or 1 bedroom. 2 bedrooms from $140, 3 bedrooms from $180. Extra full bathroom +$20, half bathroom +$10.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-1 mb-4">
              <li>Cleaning between guests</li>
              <li>Bed making with clean linens</li>
              <li>Trash removal and basic restock</li>
            </ul>
            <p className="text-xs text-gray-500">
              Same-day at no extra cost. 30% off your first turnover, one unit per new client.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col border-2 border-[#00739A]">
            <h2 className="text-xl font-semibold mb-2">Deep Clean Reset</h2>
            <p className="text-3xl font-bold text-[#00739A] mb-2">From $230</p>
            <p className="text-gray-700 text-sm md:text-base mb-3 flex-1">
              Studio or 1 bedroom. 2 bedrooms from $280, 3 bedrooms from $360.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-1 mb-4">
              <li>Detailed bathroom &amp; kitchen scrubbing</li>
              <li>Inside appliances and baseboards</li>
              <li>Ideal before launching ads or new listing</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
            <h2 className="text-xl font-semibold mb-2">Multi–Unit / Custom</h2>
            <p className="text-3xl font-bold text-[#00739A] mb-2">Custom</p>
            <p className="text-gray-700 text-sm md:text-base mb-3 flex-1">
              For hosts or co–hosts managing several listings in the DMV area.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-1 mb-4">
              <li>Portfolio–based pricing</li>
              <li>Priority scheduling</li>
              <li>Reporting tailored to your needs</li>
            </ul>
            <p className="text-xs text-gray-500">
              Share your listings and average turnover volume for a custom quote.
            </p>
          </div>
        </div>

        <section className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Next Steps</h2>
          <p className="text-gray-700 text-sm md:text-base mb-2">
            To receive an exact quote, schedule a free assessment using the form on our homepage or contact us
            directly:
          </p>
          <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-1 mb-2">
            <li>
              Email:{' '}
              <a href="mailto:debora@aircleanb.com" className="text-[#00739A] underline">
                debora@aircleanb.com
              </a>
            </li>
            <li>
              Phone / SMS / WhatsApp:{' '}
              <a
                href="tel:+17203529810"
                data-phone-link
                data-phone-text
                className="text-[#00739A] underline"
              >
                +1 (720) 352-9810
              </a>
            </li>
          </ul>
          <p className="text-gray-700 text-sm md:text-base">
            We will confirm details about your property, linen preferences and schedule so you can start hosting
            with less stress.
          </p>
        </section>
      </main>
    </div>
  );
};

export default PricingPage;

