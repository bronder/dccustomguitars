import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// When deploying to a custom domain (e.g. https://dccustomguitars.com), set
// SITE_URL=https://dccustomguitars.com BASE_PATH=/  in the build env.
const site = process.env.SITE_URL ?? 'https://bronder.github.io/dccustomguitars';
const base = process.env.BASE_PATH ?? '/dccustomguitars';

export default defineConfig({
  site,
  base,
  compressHTML: true,
  integrations: [sitemap()],
  image: {
    // Auto-generate responsive srcset + dimensions for all <Image>/<Picture>.
    // 'constrained' = max-width:100%, scales down on smaller viewports.
    layout: 'constrained',
    responsiveStyles: true,
  },
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssCodeSplit: true,
    },
  },
});
