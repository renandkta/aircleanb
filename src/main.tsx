import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Detecta o base path automaticamente baseado na URL
const getBaseName = () => {
  if (import.meta.env.DEV) {
    return '';
  }
  // Para produção, detecta o base path da URL atual
  const pathname = window.location.pathname;
  if (pathname.startsWith('/aircleanb')) {
    return '/aircleanb';
  }
  return '';
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={getBaseName()}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
