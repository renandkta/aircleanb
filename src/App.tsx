import React, { useState } from 'react';
import { Camera, CheckCircle, Shield, Star, ArrowRight, Calendar, Sparkles, Clock, Users, Globe } from 'lucide-react';
import { translations } from './translations';
import Logo from './components/Logo';

function App() {
  const [language, setLanguage] = useState<'en' | 'pt' | 'es'>('en');
  const t = translations[language];

  // Function to scroll to the scheduling section
  const scrollToScheduling = (e: React.MouseEvent) => {
    e.preventDefault();
    const schedulingSection = document.getElementById('agendamento');
    if (schedulingSection) {
      schedulingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-[#008CBA]"> {/* Alterado para Azul Cerúleo sólido */}
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Logo />
            <div className="hidden md:flex space-x-8">
              <a href="#como-funciona" className="text-white hover:text-blue-200">{t.nav.howItWorks}</a>
              <a href="#servicos" className="text-white hover:text-blue-200">{t.nav.services}</a>
              <a href="#beneficios" className="text-white hover:text-blue-200">{t.nav.benefits}</a>
              <a href="#agendamento" className="text-white hover:text-blue-200">{t.nav.scheduling}</a>
              <a href="#contato" className="text-white hover:text-blue-200">{t.nav.contact}</a>
            </div>
            <div className="flex items-center space-x-4">
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
                className="bg-white text-[#008CBA] px-6 py-2 rounded-full hover:bg-blue-50 transition"
                onClick={scrollToScheduling}
              >
                {t.hero.scheduleDemo}
              </button>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {t.hero.title}
              </h1>
              <p className="text-xl text-white mb-8">
                {t.hero.subtitle}
              </p>
              <div className="flex space-x-4">
                <button 
                  className="bg-white text-[#008CBA] px-8 py-3 rounded-full hover:bg-blue-50 transition flex items-center"
                  onClick={scrollToScheduling}
                >
                  {t.hero.scheduleDemo} <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800"
                alt="Professional cleaning service"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Resto do código permanece igual */}
    </div>
  );
}

export default App;
