// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "astro/config";

const site = process.env.SITE_URL ?? "https://example.com";

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [mdx(), sitemap()],

  vite: {
    plugins: [vanillaExtractPlugin()],
  },
});
