import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import ImageCarousel from './ImageCarousel';
import LeadForm from './LeadForm';
import { loadCarouselImages } from '../utils/carouselLoader';

const AirbnbCleaningLanding: React.FC = () => {
  const [carouselImages, setCarouselImages] = useState<Array<{ src: string; alt: string; title?: string }>>([]);

  useEffect(() => {
    loadCarouselImages().then(setCarouselImages).catch(() => {
      // Silencia erros de carregamento; a landing continua funcional mesmo sem carrossel.
    });
  }, []);

  const scrollToForm = () => {
    const el = document.getElementById('airbnb-cleaning-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-[#008CBA] text-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex space-x-6 text-sm md:text-base">
            <a href="#how-it-works" className="hover:text-blue-200">How it works</a>
            <a href="#benefits" className="hover:text-blue-200">Benefits</a>
            <a href="#airbnb-cleaning-form" className="hover:text-blue-200">Get a quote</a>
          </nav>
        </div>
      </header>

      {/* Hero + Form above the fold */}
      <main className="flex-1">
        <section className="bg-[#008CBA] text-white">
          <div className="container mx-auto px-4 py-10 md:py-16 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                Airbnb Turnover Cleaning in DC, MD &amp; VA
              </h1>
              <p className="text-lg md:text-xl mb-4">
                Fast, reliable turnovers and Deep Clean Resets for Airbnb and short-term rentals across the DMV.
              </p>
              <ul className="space-y-2 text-sm md:text-base mb-6">
                <li>✓ Guest–ready turnovers between stays</li>
                <li>✓ Deep Clean Reset to bring units back to 5-star standard</li>
                <li>✓ Photo proof and damage reporting after every visit</li>
              </ul>
              <button
                onClick={scrollToForm}
                className="bg-white text-[#008CBA] px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition text-sm md:text-base"
              >
                Get my cleaning quote
              </button>
            </div>
            <div className="hidden md:block">
              <ImageCarousel images={carouselImages} />
            </div>
          </div>
        </section>

        {/* How it works (resumido) */}
        <section id="how-it-works" className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">How our Airbnb cleaning works</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-sm md:text-base">
              <div>
                <h3 className="font-semibold mb-2">1. Free assessment</h3>
                <p className="text-gray-700">
                  You share your listing, cleaning needs and typical turnover schedule so we can recommend the right plan.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">2. Deep Clean Reset (optional)</h3>
                <p className="text-gray-700">
                  We bring the unit back to 5-star standard, then create a simple checklist for every future turnover.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">3. Ongoing turnovers</h3>
                <p className="text-gray-700">
                  We handle cleanings between guests, send photos after each visit and flag any issues that need your attention.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section id="benefits" className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Built for busy Airbnb hosts</h2>
            <div className="grid md:grid-cols-3 gap-8 text-sm md:text-base">
              <div>
                <h3 className="font-semibold mb-2">Less cleaning stress</h3>
                <p className="text-gray-700">
                  We align with your check–in/check–out windows so you don&apos;t have to rush to clean between guests.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">More 5-star reviews</h3>
                <p className="text-gray-700">
                  Consistent standards help prevent complaints about cleanliness, linens or bathrooms.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Remote peace of mind</h3>
                <p className="text-gray-700">
                  Photo proof and issue reports after each visit make it easier to manage your listing from anywhere.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lead form section */}
        <section
          id="airbnb-cleaning-form"
          className="py-12 md:py-16 bg-gradient-to-r from-blue-50 to-blue-100"
        >
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Tell us about your Airbnb
            </h2>
            <p className="text-center text-gray-700 mb-8 text-sm md:text-base">
              Share a few details and we&apos;ll follow up with pricing and availability for your property in the DC, MD or VA area.
            </p>
            <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
              <LeadForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AirbnbCleaningLanding;

