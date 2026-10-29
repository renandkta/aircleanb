import { build } from 'vite';
import { resolve } from 'path';

// Run the build
build({
  configFile: resolve(process.cwd(), 'vite.config.ts'),
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
