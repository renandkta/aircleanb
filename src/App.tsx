import React, { useState } from 'react';
import { Camera, CheckCircle, Shield, Star, ArrowRight, Calendar, Sparkles, Clock, Users, Globe, MapPin, AlertTriangle, WashingMachine, FileText, ThumbsUp } from 'lucide-react';
import { translations } from './translations';
import Logo from './components/Logo';
import ImageCarousel from './components/ImageCarousel';

function App() {
  const [language, setLanguage] = useState<'en' | 'pt' | 'es'>('en');
  const t = translations[language];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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
  
  // Estados para feedback do formulário
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Array de imagens para o carrossel - portfólio de limpezas realizadas
  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800",
      alt: "Limpeza profissional de cozinha",
      title: "Impeccable Kitchens"
    },
    {
      src: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800",
      alt: "Banheiro limpo e organizado",
      title: "Sanitized Bathrooms"
    },
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800",
      alt: "Sala de estar limpa e arrumada",
      title: "Perfect Living Rooms"
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800",
      alt: "Quarto limpo e organizado",
      title: "Comfortable Bedrooms"
    },
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      alt: "Área de trabalho limpa",
      title: "Organized Workspaces"
    }
  ];

  // Função para atualizar dados do formulário
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Função para enviar formulário para Formspree
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/xanjdbgn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          subject: 'AirCleanB Assessment Request',
          _language: language
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
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
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToScheduling = (e: React.MouseEvent) => {
    e.preventDefault();
    const schedulingSection = document.getElementById('agendamento');
    if (schedulingSection) {
      schedulingSection.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const servicesSection = document.getElementById('servicos');
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
              <a href="#como-funciona" className="text-white hover:text-blue-200">{t.nav.howItWorks}</a>
              <a href="#servicos" className="text-white hover:text-blue-200">{t.nav.services}</a>
              <a href="#beneficios" className="text-white hover:text-blue-200">{t.nav.benefits}</a>
              <a href="#agendamento" className="text-white hover:text-blue-200">{t.nav.scheduling}</a>
              <a href="#contato" className="text-white hover:text-blue-200">{t.nav.contact}</a>
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
                <a href="#como-funciona" className="text-white hover:text-blue-200 py-2" onClick={() => setMobileMenuOpen(false)}>{t.nav.howItWorks}</a>
                <a href="#servicos" className="text-white hover:text-blue-200 py-2" onClick={() => setMobileMenuOpen(false)}>{t.nav.services}</a>
                <a href="#beneficios" className="text-white hover:text-blue-200 py-2" onClick={() => setMobileMenuOpen(false)}>{t.nav.benefits}</a>
                <a href="#agendamento" className="text-white hover:text-blue-200 py-2" onClick={() => setMobileMenuOpen(false)}>{t.nav.scheduling}</a>
                <a href="#contato" className="text-white hover:text-blue-200 py-2" onClick={() => setMobileMenuOpen(false)}>{t.nav.contact}</a>
                
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
                📍 Fast, flexible scheduling — we're available anytime you need.
              </p>
              <p className="text-lg md:text-xl text-white mb-8">
                ✨ First cleaning 50% off so you can try us with confidence.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                <button 
                  className="bg-white text-[#008CBA] px-6 py-3 rounded-full hover:bg-blue-50 transition flex items-center justify-center text-sm md:text-base"
                  onClick={scrollToScheduling}
                >
                  👉 Book Now
                </button>
                <button 
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

      {/* How It Works Section */}
      <section id="como-funciona" className="py-16 md:py-20 bg-gray-50">
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
      <section id="servicos" className="py-16 md:py-20">
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
      <section id="beneficios" className="py-16 md:py-20 bg-gray-50">
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

      {/* Scheduling Section */}
      <section id="agendamento" className="py-16 md:py-20 bg-gradient-to-r from-blue-50 to-blue-100">
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
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Mensagens de feedback */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        <span>Thank you! Your assessment request has been sent successfully. We'll contact you soon!</span>
                      </div>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                      <div className="flex items-center">
                        <Shield className="h-5 w-5 mr-2" />
                        <span>Sorry, there was an error sending your request. Please try again or contact us directly.</span>
                      </div>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.scheduling.form.name}
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="John Doe"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.scheduling.form.email}
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="john@example.com"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.scheduling.form.phone}
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.scheduling.form.date}
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.scheduling.form.time}
                      </label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" name="time" value={formData.time} onChange={handleInputChange}>
                        <option value="morning">{t.scheduling.timeOptions.morning}</option>
                        <option value="afternoon">{t.scheduling.timeOptions.afternoon}</option>
                        <option value="evening">{t.scheduling.timeOptions.evening}</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.scheduling.form.propertyType}
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" name="propertyType" value={formData.propertyType} onChange={handleInputChange}>
                      <option value="apartment">{t.scheduling.propertyOptions.apartment}</option>
                      <option value="house">{t.scheduling.propertyOptions.house}</option>
                      <option value="flat">{t.scheduling.propertyOptions.flat}</option>
                      <option value="other">{t.scheduling.propertyOptions.other}</option>
                    </select>
                  </div>
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
                    className="w-full bg-[#008CBA] text-white px-4 py-3 rounded-full hover:bg-blue-600 transition font-medium text-sm md:text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : t.scheduling.form.button}
                  </button>
                </form>
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
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 mb-4 md:mb-0">
              <a href="#" className="hover:text-blue-400 text-sm md:text-base">{t.footer.terms}</a>
              <a href="#" className="hover:text-blue-400 text-sm md:text-base">{t.footer.privacy}</a>
              <a href="#" className="hover:text-blue-400 text-sm md:text-base">{t.footer.contact}</a>
            </div>
            <p className="text-gray-400 text-sm md:text-base text-center md:text-right">{t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
