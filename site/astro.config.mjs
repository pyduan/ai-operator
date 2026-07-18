import { defineConfig } from 'astro/config';

export default defineConfig({
  // Set during setup, once the domain is known (used for canonical URLs and sitemaps):
  // site: 'https://yourdomain.com',

  // The design tokens live outside site/ (in source/brand/), so allow the dev
  // server to read one level up.
  vite: { server: { fs: { allow: ['..'] } } },
});
