import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ufukdemir.github.io/ArapcaOgrenirken',
  base: '/ArapcaOgrenirken',
  integrations: [tailwind()],
  outDir: './dist',
});
