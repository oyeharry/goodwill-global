// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// SITE_URL and BASE_PATH are injected by the GitHub Pages workflow, so the
// same build works on <user>.github.io/<repo>/ and on a custom domain.
export default defineConfig({
  site: process.env.SITE_URL || 'https://oyeharry.github.io',
  base: process.env.BASE_PATH || '/',
  // One-page site: inlining the CSS removes a render-blocking request.
  build: { inlineStylesheets: 'always' },
  vite: {
    plugins: [tailwindcss()],
  },
});
