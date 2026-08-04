// @ts-check

import mdx from "@astrojs/mdx";
import { unified } from "@astrojs/markdown-remark";
import sitemap from "@astrojs/sitemap";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "astro/config";
import remarkDirective from "remark-directive";
import remarkCallouts from "./src/plugins/remark-callouts.mjs";

const site = process.env.SITE_URL ?? "https://blog-from2026.pages.dev/";

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [mdx(), sitemap()],

  markdown: {
    processor: unified({
      remarkPlugins: [remarkDirective, remarkCallouts],
    }),
  },

  vite: {
    plugins: [vanillaExtractPlugin()],
  },
});
