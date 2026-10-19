import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Netlify sets URL at build time (your primary domain). For a custom domain, set SITE_URL in
// Netlify > Site configuration > Environment variables.
export default defineConfig({
  site: process.env.SITE_URL || process.env.URL || 'https://haley-nguyen.netlify.app',
  output: 'static',
  build: { inlineStylesheets: 'always' },
  integrations: [sitemap({ filter: (p) => !p.includes('/404') })],
  vite: { plugins: [tailwindcss()] },
});
