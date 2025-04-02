import { build } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

// Ensure the dist directory exists
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Copy the logo directly to the dist folder as a fallback
fs.copyFileSync('src/assets/logo.png', 'dist/logo.png');

// Run the build
build({
  configFile: resolve(process.cwd(), 'vite.config.ts'),
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
