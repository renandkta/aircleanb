import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    assetsInlineLimit: 0, // Ensures images are processed as assets
    rollupOptions: {
      output: {
        manualChunks: undefined,
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
  // Base path - configurado para produção (GitHub Pages)
  // Se o site estiver em renandkta.github.io/aircleanb, use: base: '/aircleanb/'
  // Se o site estiver em um domínio customizado ou subdomínio, use: base: '/'
  base: process.env.NODE_ENV === 'production' ? '/aircleanb/' : '/',
  server: {
    // Configuração para desenvolvimento local
    port: 5173,
    host: true
  }
});
