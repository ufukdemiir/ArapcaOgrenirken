import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ufukdemir.github.io',
  base: '/arapca-ogrenirken',
  integrations: [tailwind()],
  outDir: './dist',
});