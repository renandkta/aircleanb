import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { FormspreeProvider } from '@formspree/react';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FormspreeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FormspreeProvider>
  </StrictMode>
);
