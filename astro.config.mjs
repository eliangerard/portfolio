import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // Absolute URLs for canonical tags, Open Graph images and the sitemap.
  site: 'https://eliangerard.com',
  // The site is entirely static, so nothing runs on a Node runtime at request time.
  output: 'static',
  integrations: [sitemap()],
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  vite: {
    plugins: [tailwindcss()]
  }
});
