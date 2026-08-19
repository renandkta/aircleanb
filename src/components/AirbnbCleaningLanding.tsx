import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, Check, X } from 'lucide-react';
import Logo from './Logo';
import ImageCarousel from './ImageCarousel';
import LeadForm from './LeadForm';
import { loadCarouselImages } from '../utils/carouselLoader';

const AirbnbCleaningLanding: React.FC = () => {
  const [carouselImages, setCarouselImages] = useState<Array<{ src: string; alt: string; title?: string }>>([]);
  const [showContactHint, setShowContactHint] = useState(false);

  useEffect(() => {
    loadCarouselImages().then(setCarouselImages).catch(() => {
      // Silencia erros de carregamento; a landing continua funcional mesmo sem carrossel.
    });
  }, []);

  useEffect(() => {
    const showTimer = setTimeout(() => setShowContactHint(true), 1500);
    const hideTimer = setTimeout(() => setShowContactHint(false), 7500);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const scrollToForm = () => {
    const el = document.getElementById('airbnb-cleaning-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const trackCallClick = () => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-17464291569/PBzFCMektOQcEPHhz4dB',
      });
    }
  };

  const trackWhatsAppClick = () => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-17464291569/nr1-CMSktOQcEPHhz4dB',
      });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-[#008CBA] text-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>
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
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 flex-shrink-0" />
                  Guest–ready turnovers between stays
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 flex-shrink-0" />
                  Deep Clean Reset to bring units back to 5-star standard
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 flex-shrink-0" />
                  Photo proof and damage reporting after every visit
                </li>
              </ul>
              <button
                onClick={scrollToForm}
                className="bg-white text-[#008CBA] px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition text-sm md:text-base"
              >
                Get my cleaning quote
              </button>
              <div className="flex flex-wrap gap-3 mt-4">
                <a
                  href="tel:+17203529810"
                  onClick={trackCallClick}
                  className="flex items-center justify-center px-5 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-[#008CBA] transition text-sm md:text-base"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/17203529810"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackWhatsAppClick}
                  className="flex items-center justify-center px-5 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition text-sm md:text-base"
                >
                  <MessageSquare className="h-5 w-5 mr-2" />
                  WhatsApp
                </a>
              </div>
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

      {/* Minimal footer: legal links and a way back to the main site, without diluting the campaign focus */}
      <footer className="bg-gray-900 text-white pt-6 pb-20 md:pb-6">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <Link to="/" className="hover:text-blue-300">
            Back to homepage
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-blue-300">
              Privacy Policy
            </Link>
            <span className="text-gray-500">© 2024 AirCleanB. All rights reserved.</span>
          </div>
        </div>
      </footer>

      {/* Contact hint, appears briefly above the sticky bar to draw attention to it */}
      {showContactHint && (
        <div className="fixed bottom-16 left-4 right-4 z-50 md:hidden transition-opacity duration-300">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 px-4 py-3 flex items-center justify-between gap-3">
            <p className="text-sm text-gray-800">
              Prefer to talk instead? Call or WhatsApp us directly.
            </p>
            <button
              type="button"
              onClick={() => setShowContactHint(false)}
              aria-label="Dismiss"
              className="text-gray-400 hover:text-gray-600 flex-shrink-0"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Sticky mobile contact bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 gap-px bg-gray-200 md:hidden">
        <a
          href="tel:+17203529810"
          onClick={trackCallClick}
          className="flex items-center justify-center py-4 bg-[#008CBA] text-white font-semibold"
        >
          <Phone className="h-5 w-5 mr-2" />
          Call Now
        </a>
        <a
          href="https://wa.me/17203529810"
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackWhatsAppClick}
          className="flex items-center justify-center py-4 bg-green-500 text-white font-semibold"
        >
          <MessageSquare className="h-5 w-5 mr-2" />
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default AirbnbCleaningLanding;

