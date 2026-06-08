import React from 'react';
import Logo from './Logo';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#008CBA] text-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo />
          <span className="text-sm md:text-base font-semibold">
            Airbnb Turnover Cleaning in DC, MD &amp; VA
          </span>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 md:py-16 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Services</h1>
        <p className="text-gray-700 mb-8 text-sm md:text-base">
          We offer a simple set of services designed specifically for Airbnb and short–term rental hosts. Every
          visit follows a detailed checklist and includes photo documentation so you always know the property was
          cleaned to standard.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-3">Turnover Cleaning</h2>
            <p className="text-gray-700 text-sm md:text-base mb-3">
              Fast, reliable cleaning between guest stays to keep your listing ready for check–in.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-1">
              <li>Full bathroom and kitchen cleaning</li>
              <li>Bed making with fresh linens</li>
              <li>Trash removal and surface wipe–down</li>
              <li>Restocking of agreed essentials</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-3">Deep Clean Reset</h2>
            <p className="text-gray-700 text-sm md:text-base mb-3">
              Recommended before the first booking or after heavy use to bring the unit back to 5-star standard.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-1">
              <li>Detailed scrubbing of high–touch areas</li>
              <li>Baseboards, grout and inside appliances</li>
              <li>Decluttering and organizing common areas</li>
              <li>Ideal to unlock the 50% OFF turnover offer</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-3">Photo &amp; Issue Reporting</h2>
            <p className="text-gray-700 text-sm md:text-base mb-3">
              Visual confirmation after each visit so you can manage your property remotely with confidence.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-1">
              <li>Photos of key rooms after cleaning</li>
              <li>Damage or missing–item reports</li>
              <li>Notes about supplies and maintenance</li>
              <li>Optional short video walkthrough</li>
            </ul>
          </div>
        </div>

        <section className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Ideal for Busy Hosts &amp; Co-Hosts</h2>
          <p className="text-gray-700 text-sm md:text-base mb-3">
            Whether you manage one listing or several, our goal is to remove cleaning stress from your calendar.
            We work with fixed check–in/check–out windows, coordinate keys or smart locks, and keep you updated
            after each visit.
          </p>
          <p className="text-gray-700 text-sm md:text-base">
            To discuss a custom plan for your property or portfolio, reach out at{' '}
            <a href="mailto:aircleanb.dc@gmail.com" className="text-[#008CBA] underline">
              aircleanb.dc@gmail.com
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
};

export default ServicesPage;

