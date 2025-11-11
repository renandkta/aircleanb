import React, { useState } from 'react';
import { translations } from '../translations';
import { Globe } from 'lucide-react';

export default function ThankYou() {
  const [language, setLanguage] = useState<'en' | 'pt' | 'es'>('en');
  const t = translations[language];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="max-w-2xl mx-auto text-center p-8">
        {/* Onde adicionar o rastreamento */}
        <h1 className="text-4xl font-bold text-[#008CBA] mb-4">{t.thankYou.title}</h1>
        <p className="text-lg text-gray-600 mb-8">{t.thankYou.subtitle}</p>
        <a
          href="/"
          className="bg-[#008CBA] text-white px-6 py-3 rounded-full hover:bg-blue-600 transition"
        >
          {t.thankYou.backToHome}
        </a>
      </div>
      <div className="absolute top-4 right-4">
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
      </div>
    </div>
  );
}
