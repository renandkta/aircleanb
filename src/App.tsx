import React, { useState } from 'react';
import { Camera, CheckCircle, Shield, Star, ArrowRight, Calendar, Sparkles, Clock, Users, Globe } from 'lucide-react';
import { translations } from './translations';
import Logo from './components/Logo';

function App() {
  const [language, setLanguage] = useState<'en' | 'pt' | 'es'>('en');
  const t = translations[language];

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
      <header className="bg-[#008CBA]">
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

      {/* How It Works Section */}
      <section id="como-funciona" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">{t.howItWorks.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="h-8 w-8 text-[#008CBA]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{t.howItWorks.steps.record.title}</h3>
              <p className="text-gray-600">{t.howItWorks.steps.record.description}</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-8 w-8 text-[#008CBA]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{t.howItWorks.steps.analyze.title}</h3>
              <p className="text-gray-600">{t.howItWorks.steps.analyze.description}</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-[#008CBA]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{t.howItWorks.steps.validate.title}</h3>
              <p className="text-gray-600">{t.howItWorks.steps.validate.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">{t.services.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Standard Service */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-4">{t.services.standard.title}</h3>
              <ul className="space-y-4">
                {t.services.standard.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full bg-[#008CBA] text-white px-6 py-3 rounded-full hover:bg-blue-600 transition">
                {t.services.button}
              </button>
            </div>

            {/* Post-Event Service */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-4">{t.services.postEvent.title}</h3>
              <ul className="space-y-4">
                {t.services.postEvent.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full bg-[#008CBA] text-white px-6 py-3 rounded-full hover:bg-blue-600 transition">
                {t.services.button}
              </button>
            </div>

            {/* Express Service */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-4">{t.services.express.title}</h3>
              <ul className="space-y-4">
                {t.services.express.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full bg-[#008CBA] text-white px-6 py-3 rounded-full hover:bg-blue-600 transition">
                {t.services.button}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">{t.benefits.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Shield className="h-6 w-6 text-[#008CBA]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t.benefits.items.quality.title}</h3>
                <p className="text-gray-600">{t.benefits.items.quality.description}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Clock className="h-6 w-6 text-[#008CBA]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t.benefits.items.time.title}</h3>
                <p className="text-gray-600">{t.benefits.items.time.description}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Star className="h-6 w-6 text-[#008CBA]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t.benefits.items.ratings.title}</h3>
                <p className="text-gray-600">{t.benefits.items.ratings.description}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Users className="h-6 w-6 text-[#008CBA]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t.benefits.items.history.title}</h3>
                <p className="text-gray-600">{t.benefits.items.history.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scheduling Section */}
      <section id="agendamento" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">{t.scheduling.title}</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.scheduling.form.name}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.scheduling.form.email}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.scheduling.form.date}
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.scheduling.form.time}
                  </label>
                  <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
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
                <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
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
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#008CBA] text-white px-6 py-3 rounded-full hover:bg-blue-600 transition"
              >
                {t.scheduling.form.button}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#008CBA] py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t.cta.title}</h2>
          <p className="text-xl text-white mb-8">{t.cta.subtitle}</p>
          <button
            onClick={scrollToScheduling}
            className="bg-white text-[#008CBA] px-8 py-3 rounded-full hover:bg-blue-50 transition"
          >
            {t.cta.button}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Logo />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">{t.nav.services}</h4>
              <ul className="space-y-2">
                <li>{t.services.standard.title}</li>
                <li>{t.services.postEvent.title}</li>
                <li>{t.services.express.title}</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">{t.nav.howItWorks}</h4>
              <ul className="space-y-2">
                <li>{t.howItWorks.steps.record.title}</li>
                <li>{t.howItWorks.steps.analyze.title}</li>
                <li>{t.howItWorks.steps.validate.title}</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">{t.nav.contact}</h4>
              <ul className="space-y-2">
                <li>contact@aircleanb.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="hover:text-blue-400">{t.footer.terms}</a>
              <a href="#" className="hover:text-blue-400">{t.footer.privacy}</a>
              <a href="#" className="hover:text-blue-400">{t.footer.contact}</a>
            </div>
            <p className="text-gray-400">{t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
