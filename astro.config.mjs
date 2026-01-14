import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import netlify from "@astrojs/netlify";
import icon from "astro-icon";
import partytown from "@astrojs/partytown";
import clarityIntegration from 'astro-microsoft-clarity-integration';

import db from "@astrojs/db";

export default defineConfig({
  site: "https://developingdvlpr.com",
  output: "server",
  adapter: netlify(),
  integrations: [
    tailwind(),
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US', // The `defaultLocale` value must be present as a key in `locales`
          es: 'es-ES',
          fr: 'fr-CA',
        },
      },
    }),
    icon({
      include: {
        bx: ["*"],
        "simple-icons": ["*"],
        mdi: ["*"],
      },
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    clarityIntegration({
      projectId: 's7v3rqipza',  // Required: Replace with your Clarity project ID
      enabled: true,                  // Optional: Enable the integration (defaults to true)
      scriptStage: 'head-inline',     // Optional: Set scriptStage to 'head-inline', 'body-inline'
      debug: false,                   // Optional: Enable debug (set to true if you want to log script injections)
      async: true,                    // Optional: Enable async loading
      defer: true,                    // Optional: Enable defer for script loading
    }),
  ],
  image: {
    domains: ["picsum.photos"],
    service: { entrypoint: "astro/assets/services/sharp" },
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "**.giphy.com",
      },
      {
        protocol: "https",
        hostname: "**.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**.github.com",
      },
      {
        protocol: "https",
        hostname: "**.dev.to",
      },
      {
        protocol: "https",
        hostname: "**.pexels.com",
      },
      {
        protocol: "https",
        hostname: "**.smugmug.com",
      },
    ],
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
