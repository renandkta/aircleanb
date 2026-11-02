import { defineConfig } from 'vite';
import { reactRouter } from '@react-router/dev/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRouter()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    assetsInlineLimit: 0, // Ensures images are processed as assets
  },
  server: {
    port: 5173,
    host: true,
  },
});
