import React, { useState } from 'react';
import { Camera, Home, CheckCircle, Shield, Star, ArrowRight, Calendar, Sparkles, Clock, Users, Globe } from 'lucide-react';
import { translations } from './translations';

function App() {
  const [language, setLanguage] = useState<'en' | 'pt' | 'es'>('en');
  const t = translations[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-red-50 to-red-100">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-red-600" />
              <span className="text-2xl font-bold text-red-900">AirCleanB</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#como-funciona" className="text-gray-600 hover:text-red-600">{t.nav.howItWorks}</a>
              <a href="#servicos" className="text-gray-600 hover:text-red-600">{t.nav.services}</a>
              <a href="#beneficios" className="text-gray-600 hover:text-red-600">{t.nav.benefits}</a>
              <a href="#agendamento" className="text-gray-600 hover:text-red-600">{t.nav.scheduling}</a>
              <a href="#contato" className="text-gray-600 hover:text-red-600">{t.nav.contact}</a>
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
              <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition">
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
                <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition flex items-center">
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
            <div className="text-center p-6">
              <Camera className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">{t.howItWorks.steps.record.title}</h3>
              <p className="text-gray-600">
                {t.howItWorks.steps.record.description}
              </p>
            </div>
            <div className="text-center p-6">
              <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">{t.howItWorks.steps.analyze.title}</h3>
              <p className="text-gray-600">
                {t.howItWorks.steps.analyze.description}
              </p>
            </div>
            <div className="text-center p-6">
              <CheckCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">{t.howItWorks.steps.validate.title}</h3>
              <p className="text-gray-600">
                {t.howItWorks.steps.validate.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="py-20 bg-red-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t.services.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Sparkles className="h-12 w-12 text-red-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">{t.services.standard.title}</h3>
              <ul className="space-y-3 text-gray-600">
                {t.services.standard.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
                {t.services.button}
              </button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Users className="h-12 w-12 text-red-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">{t.services.postEvent.title}</h3>
              <ul className="space-y-3 text-gray-600">
                {t.services.postEvent.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
                {t.services.button}
              </button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Clock className="h-12 w-12 text-red-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">{t.services.express.title}</h3>
              <ul className="space-y-3 text-gray-600">
                {t.services.express.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
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
            <div className="flex items-start space-x-4">
              <Star className="h-6 w-6 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{t.benefits.items.quality.title}</h3>
                <p className="text-gray-600">
                  {t.benefits.items.quality.description}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Star className="h-6 w-6 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{t.benefits.items.time.title}</h3>
                <p className="text-gray-600">
                  {t.benefits.items.time.description}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Star className="h-6 w-6 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{t.benefits.items.ratings.title}</h3>
                <p className="text-gray-600">
                  {t.benefits.items.ratings.description}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Star className="h-6 w-6 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{t.benefits.items.history.title}</h3>
                <p className="text-gray-600">
                  {t.benefits.items.history.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scheduling */}
      <section id="agendamento" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t.scheduling.title}</h2>
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t.scheduling.form.name}</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder={t.scheduling.form.name}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t.scheduling.form.email}</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder={t.scheduling.form.email}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t.scheduling.form.phone}</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder={t.scheduling.form.phone}
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t.scheduling.form.date}</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t.scheduling.form.time}</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                    <option>{t.scheduling.timeOptions.morning}</option>
                    <option>{t.scheduling.timeOptions.afternoon}</option>
                    <option>{t.scheduling.timeOptions.evening}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t.scheduling.form.propertyType}</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                    <option>{t.scheduling.propertyOptions.apartment}</option>
                    <option>{t.scheduling.propertyOptions.house}</option>
                    <option>{t.scheduling.propertyOptions.flat}</option>
                    <option>{t.scheduling.propertyOptions.other}</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.scheduling.form.notes}</label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                rows={4}
                placeholder={t.scheduling.form.notes}
              ></textarea>
            </div>
            <button className="mt-6 w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition flex items-center justify-center">
              <Calendar className="h-5 w-5 mr-2" />
              {t.scheduling.form.button}
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-red-600 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              {t.cta.title}
            </h2>
            <p className="text-xl text-red-100 mb-8">
              {t.cta.subtitle}
            </p>
            <button className="bg-white text-red-600 px-8 py-3 rounded-full hover:bg-red-50 transition">
              {t.cta.button}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Home className="h-6 w-6 text-red-600" />
              <span className="text-xl font-bold text-red-900">AirCleanB</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-red-600">{t.footer.terms}</a>
              <a href="#" className="text-gray-600 hover:text-red-600">{t.footer.privacy}</a>
              <a href="#" className="text-gray-600 hover:text-red-600">{t.footer.contact}</a>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-500">
            {t.footer.rights}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
