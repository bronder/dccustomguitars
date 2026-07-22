import { defineConfig } from 'astro/config';

// When deploying to a custom domain (e.g. https://dccustomguitars.com), set
// SITE_URL=https://dccustomguitars.com BASE_PATH=/  in the build env.
const site = process.env.SITE_URL ?? 'https://bronder.github.io/dccustomguitars';
const base = process.env.BASE_PATH ?? '/dccustomguitars';

export default defineConfig({
  site,
  base,
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssCodeSplit: true,
    },
  },
});
