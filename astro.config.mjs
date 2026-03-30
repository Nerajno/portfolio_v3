import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { remarkReadingTime } from './remark-reading-time.mjs';
import netlify from "@astrojs/netlify";

export default defineConfig({
  // Sets Astro.site — used for canonical URLs, OG image absolute URLs, RSS href
  site: "https://developingdvlpr.com",

  output: "server",
  adapter: netlify(),

  integrations: [
    tailwind({
      // Prevents Tailwind base/components/utilities from being injected twice —
      // global.css already has those directives.
      applyBaseStyles: false,
    }),
    mdx({
      remarkPlugins: [remarkReadingTime],
    }),
    sitemap(),
  ],

  image: {
    domains: ["picsum.photos"],
  },

  markdown: {
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      themes: {
        light: "github-light",
        dark:  "github-dark-dimmed",
      },
      wrap: true,
    },
  },
});
