import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import { remarkGifPassthrough } from "./remark-gif-passthrough.mjs";
import netlify from "@astrojs/netlify";
import icon from "astro-icon";
import partytown from "@astrojs/partytown";
import clarityIntegration from "astro-microsoft-clarity-integration";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://developingdvlpr.com",
  output: "server",
  adapter: netlify(),
  integrations: [
    react(),
    mdx({
      remarkPlugins: [],
    }),
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
        proxyUrl: "/api/partytown-proxy",
      },
    }),
    ...(import.meta.env.PUBLIC_CLARITY_ID
      ? [
          clarityIntegration({
            projectId: import.meta.env.PUBLIC_CLARITY_ID,
            enabled: true,
            scriptStage: "head-inline",
            debug: false,
            async: true,
            defer: true,
          }),
        ]
      : []),
  ],
  image: {
    domains: ["picsum.photos"],
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        limitInputPixels: false,
      },
    },
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
    remarkPlugins: [remarkReadingTime, remarkGifPassthrough],
    shikiConfig: {
      themes: { light: "vitesse-light", dark: "vitesse-dark" },
      langs: ["astro", "bash", "html", "javascript", "markdown", "text", "typescript", "vue"],
      langAlias: { js: "javascript", ts: "typescript", md: "markdown" },
    },
  },
  vite: {
    ssr: {
      noExternal: ["astro-social-share"],
    },
  },
});
