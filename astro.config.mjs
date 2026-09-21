import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ufukdemiir.github.io',
  base: '/ArapcaOgrenirken',
  integrations: [tailwind()],
  outDir: './dist',
});