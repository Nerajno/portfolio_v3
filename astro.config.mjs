import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import netlify from "@astrojs/netlify";
import icon from "astro-icon";
import partytown from "@astrojs/partytown";
import clarityIntegration from 'astro-microsoft-clarity-integration';

export default defineConfig({
  site: "https://radiant-sprinkles-d2960e.netlify.app",
  output: "server",
  adapter: netlify(),
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
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
      projectId: 'stp4iad9du',  // Required: Replace with your Clarity project ID
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
    ],
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
