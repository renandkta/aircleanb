import React from 'react';
import Logo from './Logo';

const About: React.FC = () => {
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

      <main className="container mx-auto px-4 py-10 md:py-16 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About AirCleanB</h1>
        <p className="text-gray-700 mb-6 text-sm md:text-base">
          AirCleanB is a specialized Airbnb and short–term rental cleaning partner serving hosts across
          Washington DC, Maryland and Northern Virginia. Our mission is simple: keep your property guest–ready
          on every turnover, with photo–verified results you can trust.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">What We Do</h2>
          <p className="text-gray-700 text-sm md:text-base mb-3">
            We focus exclusively on turnover and deep cleaning for furnished rentals. That means our checklists,
            training and quality controls are built around guest expectations: spotless bathrooms, hotel–grade
            beds, restocked essentials and a welcoming first impression every time.
          </p>
          <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-1">
            <li>Turnover cleaning between guests</li>
            <li>Deep Clean Reset to bring units back to 5-star standard</li>
            <li>Photo and video documentation after each visit</li>
            <li>Damage and issue reporting to hosts</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Service Area</h2>
          <p className="text-gray-700 text-sm md:text-base mb-3">
            We currently serve hosts in the broader DMV area, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-1">
            <li>Washington, DC</li>
            <li>Arlington, Alexandria and Northern Virginia</li>
            <li>Silver Spring, Bethesda and surrounding areas in Maryland</li>
            <li>Select neighborhoods in Baltimore (by arrangement)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Why Hosts Choose Us</h2>
          <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-1">
            <li>Consistent 5-star turnover standards</li>
            <li>Reliable scheduling around check–in/check–out times</li>
            <li>Photo proof of every clean for your records</li>
            <li>Clear WhatsApp, SMS and phone communication</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Get in Touch</h2>
          <p className="text-gray-700 text-sm md:text-base mb-2">
            Ready to hand off your turnovers to a dedicated partner?
          </p>
          <p className="text-gray-700 text-sm md:text-base">
            Email us at{' '}
            <a href="mailto:aircleanb.dc@gmail.com" className="text-[#008CBA] underline">
              aircleanb.dc@gmail.com
            </a>{' '}
            or call/text{' '}
            <a href="tel:+17203529810" className="text-[#008CBA] underline">
              +1 (720) 352-9810
            </a>{' '}
            to discuss your property and cleaning needs.
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;

