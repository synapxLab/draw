import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src/demo',
  build: {
    outDir: resolve(__dirname, 'httpdocs/dist'),
    emptyOutDir: true,
  },
});
