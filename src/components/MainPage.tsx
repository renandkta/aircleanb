import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { IMaskInput } from 'react-imask';
import { useForm } from '@formspree/react';
import { CheckCircle, Shield, Star, ArrowRight, Calendar, Clock, Users, Globe, MapPin, AlertTriangle, WashingMachine, FileText, ThumbsUp, Mail, Phone, MessageSquare } from 'lucide-react';
import { translations } from '../translations';
import Logo from './Logo';
import ImageCarousel from './ImageCarousel';
import { loadCarouselImages } from '../utils/carouselLoader';
import PromotionalModal from './PromotionalModal';

export default function MainPage() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState<'en' | 'pt' | 'es'>('en');
  const t = translations[language];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [carouselImages, setCarouselImages] = useState<Array<{ src: string, alt: string, title?: string }>>([]);
  const [isPromoModalOpen, setIsPromoModalOpen] = useState(false);

  const openPromoModal = () => setIsPromoModalOpen(true);
  const closePromoModal = () => setIsPromoModalOpen(false);

  // Estado do formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    propertyType: '',
    notes: ''
  });
  // Formspree useForm hook
  const [state, handleSubmit] = useForm("xanjdbgn");



  // Função para carregar imagens dinamicamente
  useEffect(() => {
    const loadImages = async () => {
      try {
        const images = await loadCarouselImages();
        setCarouselImages(images);
      } catch (error) {
        console.error('Erro ao carregar imagens do carrossel:', error);
      }
    };

    loadImages();
  }, []);

  // Estados para feedback do formulário
  // isSubmitting is now state.submitting
  // submitStatus is derived from state

  const [isFormValid, setIsFormValid] = useState(false);
  const phoneMaskRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (state.succeeded) {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/57506d10-07bc-4603-9bc4-e9627cd018b7', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: `log_${Date.now()}_main_form_conversion`,
          timestamp: Date.now(),
          location: 'src/components/MainPage.tsx:60',
          message: 'Main scheduling form succeeded, firing conversion and navigating to thank-you.',
          data: { source: 'main_form' },
          runId: 'sprint1',
          hypothesisId: 'H1'
        })
      }).catch(() => {});
      // #endregion agent log

      if (window.gtag) {
        window.gtag('event', 'conversion', {
          send_to: 'AW-17464291569/lBYMCJ-s3b8bEPHhz4dB'
        });
      }

      // Limpar formulário
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        propertyType: '',
        notes: ''
      });
      navigate('/thank-you');
    }
  }, [state.succeeded, navigate]);

  // Função para validar email
  const validateEmail = (email: string) => {
    if (!email || email.trim() === '') return false;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email.trim()).toLowerCase());
  };

  // Função para validar telefone - valida diretamente do valor formatado ou não mascarado
  const validatePhone = (phone: string, unmaskedValue?: string) => {
    // Se temos o valor não mascarado, usa diretamente
    if (unmaskedValue !== undefined) {
      return unmaskedValue.length === 10;
    }

    // Caso contrário, extrai do valor formatado
    if (!phone || phone.trim() === '') return false;
    // Remove todos os caracteres não numéricos
    const digitsOnly = phone.replace(/\D/g, '');
    // Para a máscara "+1 (000) 000-0000", pode ter 10 ou 11 dígitos (com código do país)
    // Aceitamos se tiver pelo menos 10 dígitos (removendo o código do país se presente)
    const phoneDigits = digitsOnly.length === 11 && digitsOnly.startsWith('1')
      ? digitsOnly.substring(1)
      : digitsOnly;
    // Precisamos de exatamente 10 dígitos
    return phoneDigits.length === 10;
  };

  useEffect(() => {
    const nameValid = formData.name.trim() !== '';
    const emailValid = validateEmail(formData.email);
    const phoneValid = validatePhone(formData.phone);

    const isValid = nameValid && emailValid && phoneValid;

    setIsFormValid(isValid);
  }, [formData]);

  // Função para atualizar dados do formulário
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhoneChange = (value: string) => {
    // Atualiza o estado com o valor formatado
    setFormData(prev => ({
      ...prev,
      phone: value
    }));
  };

  // Função para enviar formulário para Formspree
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit({
      ...formData,
      subject: 'AirCleanB Assessment Request',
      _language: language
    });
  };

  const scrollToScheduling = (e: React.MouseEvent) => {
    e.preventDefault();
    const schedulingSection = document.getElementById('schedule');
    if (schedulingSection) {
      schedulingSection.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-[#008CBA]">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Logo size={32} />

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              <a href="#how-it-works" className="text-white hover:text-blue-200">{t.nav.howItWorks}</a>
              <a href="#services" className="text-white hover:text-blue-200">{t.nav.services}</a>
              <a href="#benefits" className="text-white hover:text-blue-200">{t.nav.benefits}</a>
              <a href="#schedule" className="text-white hover:text-blue-200">{t.nav.scheduling}</a>
              <a href="#contact" className="text-white hover:text-blue-200">{t.nav.contact}</a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
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
              <button
                className="bg-white text-[#008CBA] px-4 py-2 rounded-full hover:bg-blue-50 transition text-sm md:text-base"
                onClick={scrollToScheduling}
              >
                {t.hero.scheduleDemo}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 bg-[#0079a1] rounded-lg p-4">
              <div className="flex flex-col space-y-3">
                <a href="#how-it-works" className="text-white hover:text-blue-200 py-2" onClick={() => setMobileMenuOpen(false)}>{t.nav.howItWorks}</a>
                <a href="#services" className="text-white hover:text-blue-200 py-2" onClick={() => setMobileMenuOpen(false)}>{t.nav.services}</a>
                <a href="#benefits" className="text-white hover:text-blue-200 py-2" onClick={() => setMobileMenuOpen(false)}>{t.nav.benefits}</a>
                <a href="#schedule" className="text-white hover:text-blue-200 py-2" onClick={() => setMobileMenuOpen(false)}>{t.nav.scheduling}</a>
                <a href="#contact" className="text-white hover:text-blue-200 py-2" onClick={() => setMobileMenuOpen(false)}>{t.nav.contact}</a>

                <div className="flex items-center space-x-2 py-2">
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

                <button
                  className="bg-white text-[#008CBA] px-4 py-2 rounded-full hover:bg-blue-50 transition w-full"
                  onClick={scrollToScheduling}
                >
                  {t.hero.scheduleDemo}
                </button>
              </div>
            </div>
          )}
        </nav>

        <div className="container mx-auto px-4 py-10 md:py-20">
          <div className="flex flex-col items-center text-center">
            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Expert cleaning that turns your Airbnb into a 5-star experience — Guaranteed!
              </h1>

              {/* Carrossel centralizado e maior */}
              <div className="w-full max-w-6xl px-4 mb-8">
                <ImageCarousel images={carouselImages} />
              </div>

              <p className="text-lg md:text-xl text-white mb-4">
                Your space, always guest-ready and sparkling clean.
              </p>
              <p className="text-lg md:text-xl text-white mb-4">
                📍 Serving Washington DC, Maryland &amp; Virginia (DMV area) with expert Airbnb turnover cleaning.
              </p>
              <div className="bg-blue-950 text-white rounded-lg p-4 my-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold">✨ Get 50% OFF Your First Turnover! ✨</h3>
                <p className="text-lg">Unlock this deal by booking an initial Deep Clean to reset your property standards.</p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                <button
                  className="bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition flex items-center justify-center text-lg font-bold shadow-lg animate-pulse"
                  onClick={openPromoModal}
                >
                  Claim My Offer
                </button>                              <button
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white hover:bg-opacity-10 transition flex items-center justify-center text-sm md:text-base"
                  onClick={scrollToServices}
                >
                  🔍 See Our Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* How It Works Section */}      <section id="how-it-works" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 md:mb-16">{t.howItWorks.title}</h2>

          {/* 5 Steps Process */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-5 gap-6 md:gap-8">
              {/* Step 1: Property Registration */}
              <div className="text-center group">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <MapPin className="h-8 w-8 text-[#008CBA]" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">{t.howItWorks.steps.register.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t.howItWorks.steps.register.description}</p>
              </div>

              {/* Step 2: Damage Report */}
              <div className="text-center group">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <AlertTriangle className="h-8 w-8 text-[#008CBA]" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">{t.howItWorks.steps.report.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t.howItWorks.steps.report.description}</p>
              </div>

              {/* Step 3: Cleaning & Linen Change */}
              <div className="text-center group">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <WashingMachine className="h-8 w-8 text-[#008CBA]" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">{t.howItWorks.steps.cleaning.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t.howItWorks.steps.cleaning.description}</p>
              </div>

              {/* Step 4: Cleaning Record */}
              <div className="text-center group">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <FileText className="h-8 w-8 text-[#008CBA]" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">{t.howItWorks.steps.record.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t.howItWorks.steps.record.description}</p>
              </div>

              {/* Step 5: Client Validation */}
              <div className="text-center group">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <ThumbsUp className="h-8 w-8 text-[#008CBA]" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">{t.howItWorks.steps.validation.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t.howItWorks.steps.validation.description}</p>
              </div>
            </div>

            {/* Connection Lines for Desktop */}
            <div className="hidden md:block mt-8">
              <div className="flex justify-center items-center space-x-4">
                <div className="w-16 h-0.5 bg-[#008CBA] opacity-30"></div>
                <div className="w-16 h-0.5 bg-[#008CBA] opacity-30"></div>
                <div className="w-16 h-0.5 bg-[#008CBA] opacity-30"></div>
                <div className="w-16 h-0.5 bg-[#008CBA] opacity-30"></div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-12">
              <button
                className="bg-[#008CBA] text-white px-8 py-3 rounded-full hover:bg-blue-600 transition flex items-center mx-auto"
                onClick={scrollToScheduling}
              >
                Start Your Cleaning Process
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 md:mb-16">{t.services.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Standard Service */}
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4">{t.services.standard.title}</h3>
              <ul className="space-y-4">
                {t.services.standard.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className="mt-8 w-full bg-[#008CBA] text-white px-4 py-3 rounded-full hover:bg-blue-600 transition text-sm md:text-base"
                onClick={scrollToScheduling}
              >
                {t.services.button}
              </button>
            </div>

            {/* Post-Event Service */}
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4">{t.services.postEvent.title}</h3>
              <ul className="space-y-4">
                {t.services.postEvent.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className="mt-8 w-full bg-[#008CBA] text-white px-4 py-3 rounded-full hover:bg-blue-600 transition text-sm md:text-base"
                onClick={scrollToScheduling}
              >
                {t.services.button}
              </button>
            </div>

            {/* Express Service */}
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4">{t.services.express.title}</h3>
              <ul className="space-y-4">
                {t.services.express.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className="mt-8 w-full bg-[#008CBA] text-white px-4 py-3 rounded-full hover:bg-blue-600 transition text-sm md:text-base"
                onClick={scrollToScheduling}
              >
                {t.services.button}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 md:mb-16">{t.benefits.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                <Shield className="h-6 w-6 text-[#008CBA]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t.benefits.items.quality.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{t.benefits.items.quality.description}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                <Clock className="h-6 w-6 text-[#008CBA]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t.benefits.items.time.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{t.benefits.items.time.description}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                <Star className="h-6 w-6 text-[#008CBA]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t.benefits.items.ratings.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{t.benefits.items.ratings.description}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                <Users className="h-6 w-6 text-[#008CBA]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t.benefits.items.history.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{t.benefits.items.history.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">What Airbnb Hosts Say</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "The Deep Clean Reset was worth every penny. My place looked brand new and my guest ratings went up immediately."
              </p>
              <p className="text-right text-sm font-semibold">
                <span className="font-bold">Mark T.</span> — Arlington, VA
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "Finally, a reliable team in DC! They handle the turnover seamlessly, and the photo reports give me total peace of mind."
              </p>
              <p className="text-right text-sm font-semibold">
                <span className="font-bold">Emily R.</span> — Capitol Hill, Washington DC
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "I manage 3 units in Baltimore and AirCleanB is the only partner I trust. Consistent quality every single time."
              </p>
              <p className="text-right text-sm font-semibold">
                <span className="font-bold">David K.</span> — Fells Point, Baltimore
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "Super professional service. They arrived on time in Silver Spring and the cleaning was spotless. Highly recommend!"
              </p>
              <p className="text-right text-sm font-semibold">
                <span className="font-bold">Sarah L.</span> — Silver Spring, MD
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scheduling Section */}
      <section id="schedule" className="py-16 md:py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">{t.scheduling.title}</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-sm md:text-base">
            Schedule a free assessment to see how AirCleanB can help improve your property's cleanliness and guest satisfaction.
          </p>
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-[#008CBA] p-6 md:p-8 text-white flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-bold mb-4">Contact Us</h3>
                <p className="mb-6 text-sm md:text-base">Our team is ready to help you get started with AirCleanB.</p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-3 flex-shrink-0" />
                    <span className="text-sm md:text-base">Quick response time</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                    <span className="text-sm md:text-base">Free consultation</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 flex-shrink-0" />
                    <span className="text-sm md:text-base">Privacy guaranteed</span>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 p-6 md:p-8">
                <form className="space-y-6" onSubmit={handleFormSubmit}>
                  {/* Mensagens de feedback */}
                  {state.succeeded && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        <span>Thank you! Your assessment request has been sent successfully. We'll contact you soon!</span>
                      </div>
                    </div>
                  )}

                  {state.errors && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                      <div className="flex flex-col">
                        <div className="flex items-center mb-1">
                          <Shield className="h-5 w-5 mr-2" />
                          <span className="font-bold">Error sending request:</span>
                        </div>
                        <ul className="list-disc pl-9 text-sm">
                          {state.errors.getAllFieldErrors().map((error, index) => (
                            <li key={`field-${index}`}>{error[0]}: {error[1].map(e => e.message).join(', ')}</li>
                          ))}
                          {state.errors.getFormErrors().map((error, index) => (
                            <li key={`form-${index}`}>{error.message}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.scheduling.form.name}*
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="John Doe"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.scheduling.form.email}*
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="john@example.com"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.scheduling.form.phone}*
                    </label>
                    <IMaskInput
                      ref={phoneMaskRef}
                      mask="+1 (000) 000-0000"
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onAccept={(value: string) => {
                        handlePhoneChange(value);
                      }}
                      required
                    />
                  </div>
                  {/* Campos opcionais (data, horário, tipo de imóvel) removidos da UI para deixar o formulário mais leve no mobile.
                      Permanecem disponíveis para uso futuro via follow-up manual, se necessário. */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.scheduling.form.notes}
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your property and specific needs..."
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#008CBA] text-white px-4 py-3 rounded-full hover:bg-blue-600 transition font-medium text-sm md:text-base disabled:bg-gray-400"
                    disabled={!isFormValid || state.submitting}
                  >
                    {state.submitting ? 'Submitting...' : t.scheduling.form.button}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact Section */}
      <section id="contact" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{t.directContact.title}</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-sm md:text-base">
            Prefer to get in touch directly? Here's how you can reach us.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Email */}
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4 text-gray-700">Via Email</h3>
                <a href="mailto:aircleanb.dc@gmail.com" className="inline-flex items-center justify-center p-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition w-full">
                  <Mail className="h-6 w-6 text-[#008CBA] mr-3" />
                  <span className="text-lg text-gray-800">aircleanb.dc@gmail.com</span>
                </a>
              </div>

              {/* Phone Actions */}
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4 text-gray-700">Via Phone</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <a href="tel:+17203529810" className="flex items-center justify-center p-3 bg-[#008CBA] text-white rounded-lg hover:bg-blue-700 transition">
                    <Phone className="h-5 w-5 mr-2" />
                    <span>{t.directContact.call}</span>
                  </a>
                  <a href="sms:+17203529810" className="flex items-center justify-center p-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    <span>{t.directContact.sms}</span>
                  </a>
                  {/* Using a green color for WhatsApp to differentiate. Lucide doesn't have a WhatsApp icon. */}
                  <a href="https://wa.me/17203529810" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    <span>{t.directContact.whatsapp}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#008CBA] py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{t.cta.title}</h2>
          <p className="text-lg md:text-xl text-white mb-8">{t.cta.subtitle}</p>
          <button
            onClick={scrollToScheduling}
            className="bg-white text-[#008CBA] px-6 py-3 rounded-full hover:bg-blue-50 transition text-sm md:text-base"
          >
            {t.cta.button}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <Logo />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">{t.nav.services}</h4>
              <ul className="space-y-2 text-sm md:text-base">
                <li>{t.services.standard.title}</li>
                <li>{t.services.postEvent.title}</li>
                <li>{t.services.express.title}</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">{t.nav.howItWorks}</h4>
              <ul className="space-y-2 text-sm md:text-base">
                <li>{t.howItWorks.steps.register.title}</li>
                <li>{t.howItWorks.steps.report.title}</li>
                <li>{t.howItWorks.steps.cleaning.title}</li>
                <li>{t.howItWorks.steps.record.title}</li>
                <li>{t.howItWorks.steps.validation.title}</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">{t.nav.contact}</h4>
              <ul className="space-y-2 text-sm md:text-base">
                <li>aircleanb.dc@gmail.com</li>
                <li>+1 (720) 352-9810</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm md:text-base">
                <li><a href="/about" className="hover:text-blue-400">About</a></li>
                <li><a href="/services" className="hover:text-blue-400">Services</a></li>
                <li><a href="/pricing" className="hover:text-blue-400">Pricing</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 mb-4 md:mb-0">
              <a href="#" className="hover:text-blue-400 text-sm md:text-base">{t.footer.terms}</a>
              <a href="/privacy" className="hover:text-blue-400 text-sm md:text-base">{t.footer.privacy}</a>
              <a href="#contact" className="hover:text-blue-400 text-sm md:text-base">{t.footer.contact}</a>
            </div>
            <p className="text-gray-400 text-sm md:text-base text-center md:text-right">{t.footer.rights}</p>
          </div>
        </div>
      </footer>
      <PromotionalModal isOpen={isPromoModalOpen} onClose={closePromoModal} />
    </div>
  );
}
