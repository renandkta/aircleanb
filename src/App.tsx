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
      <header className="bg-gradient-to-r from-blue-50 to-blue-100">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Logo />
            <div className="hidden md:flex space-x-8">
              <a href="#como-funciona" className="text-gray-600 hover:text-blue-600">{t.nav.howItWorks}</a>
              <a href="#servicos" className="text-gray-600 hover:text-blue-600">{t.nav.services}</a>
              <a href="#beneficios" className="text-gray-600 hover:text-blue-600">{t.nav.benefits}</a>
              <a href="#agendamento" className="text-gray-600 hover:text-blue-600">{t.nav.scheduling}</a>
              <a href="#contato" className="text-gray-600 hover:text-blue-600">{t.nav.contact}</a>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-gray-600" />
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as 'en' | 'pt' | 'es')}
                  className="bg-transparent text-gray-600 focus:outline-none"
                >
                  <option value="en">English</option>
                  <option value="pt">Português</option>
                  <option value="es">Español</option>
                </select>
              </div>
              <button 
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
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
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t.hero.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {t.hero.subtitle}
              </p>
              <div className="flex space-x-4">
                <button 
                  className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition flex items-center"
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

      {/* How It Works */}
      <section id="como-funciona" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t.howItWorks.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
                <Camera className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t.howItWorks.steps.record.title}</h3>
              <p className="text-gray-600">{t.howItWorks.steps.record.description}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t.howItWorks.steps.analyze.title}</h3>
              <p className="text-gray-600">{t.howItWorks.steps.analyze.description}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t.howItWorks.steps.validate.title}</h3>
              <p className="text-gray-600">{t.howItWorks.steps.validate.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t.services.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">{t.services.standard.title}</h3>
              <ul className="space-y-3 mb-6">
                {t.services.standard.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition"
                onClick={scrollToScheduling}
              >
                {t.services.button}
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transform md:scale-105 z-10 border-2 border-blue-500">
              <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-bold">
                Popular
              </div>
              <h3 className="text-xl font-bold mb-4">{t.services.postEvent.title}</h3>
              <ul className="space-y-3 mb-6">
                {t.services.postEvent.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition"
                onClick={scrollToScheduling}
              >
                {t.services.button}
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">{t.services.express.title}</h3>
              <ul className="space-y-3 mb-6">
                {t.services.express.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition"
                onClick={scrollToScheduling}
              >
                {t.services.button}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="beneficios" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t.benefits.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Star className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{t.benefits.items.quality.title}</h3>
                <p className="text-gray-600">{t.benefits.items.quality.description}</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{t.benefits.items.time.title}</h3>
                <p className="text-gray-600">{t.benefits.items.time.description}</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Star className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{t.benefits.items.ratings.title}</h3>
                <p className="text-gray-600">{t.benefits.items.ratings.description}</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{t.benefits.items.history.title}</h3>
                <p className="text-gray-600">{t.benefits.items.history.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scheduling */}
      <section id="agendamento" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t.scheduling.title}</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <form className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">{t.scheduling.form.name}</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">{t.scheduling.form.email}</label>
                <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">{t.scheduling.form.phone}</label>
                <input type="tel" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">{t.scheduling.form.date}</label>
                <input type="date" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">{t.scheduling.form.time}</label>
                <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">{t.scheduling.form.time}</option>
                  <option value="morning">{t.scheduling.timeOptions.morning}</option>
                  <option value="afternoon">{t.scheduling.timeOptions.afternoon}</option>
                  <option value="evening">{t.scheduling.timeOptions.evening}</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">{t.scheduling.form.propertyType}</label>
                <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">{t.scheduling.form.propertyType}</option>
                  <option value="apartment">{t.scheduling.propertyOptions.apartment}</option>
                  <option value="house">{t.scheduling.propertyOptions.house}</option>
                  <option value="flat">{t.scheduling.propertyOptions.flat}</option>
                  <option value="other">{t.scheduling.propertyOptions.other}</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2">{t.scheduling.form.notes}</label>
                <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"></textarea>
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition">
                  {t.scheduling.form.button}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.cta.title}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{t.cta.subtitle}</p>
          <button 
            className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition"
            onClick={scrollToScheduling}
          >
            {t.cta.button}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Logo className="mb-6 md:mb-0" />
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-400">{t.footer.terms}</a>
              <a href="#" className="hover:text-blue-400">{t.footer.privacy}</a>
              <a href="#" className="hover:text-blue-400">{t.footer.contact}</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            {t.footer.rights}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
