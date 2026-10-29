/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Approved palette "Azul AirCleanB + verde" (business spec RN-10.6)
      colors: {
        brand: {
          DEFAULT: '#00739A',
          dark: '#005A78',
          ink: '#0B2A3A',
          soft: '#E3F2F8',
          line: '#CFE6EF',
          green: '#1E7B47',
          muted: '#46606C',
        },
      },
      fontFamily: {
        sans: ['Figtree', 'system-ui', 'sans-serif'],
        display: ['Figtree', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
