import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import { remarkGifPassthrough } from "./remark-gif-passthrough.mjs";
import netlify from "@astrojs/netlify";
import icon from "astro-icon";
import partytown from "@astrojs/partytown";
import clarityIntegration from 'astro-microsoft-clarity-integration';
import react from "@astrojs/react";
import rehypePrettyCode from "rehype-pretty-code";


export default defineConfig({
  // Sets Astro.site — used for canonical URLs, OG image absolute URLs, RSS href
  site: "https://developingdvlpr.com",
  output: "server",
  adapter: netlify(),
  integrations: [
    react(),
    tailwind({
      // Prevents Tailwind base/components/utilities from being injected twice —
      // global.css already has those directives.
      applyBaseStyles: false,
    }),
    mdx({
      syntaxHighlight: false,
      rehypePlugins: [
        [
          rehypePrettyCode,
          {
            theme: {
              dark: "github-dark",
              light: "github-light",
            },
            keepBackground: true,
          },
        ],
      ],
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
      },
    }),
    clarityIntegration({
      projectId: import.meta.env.PUBLIC_CLARITY_ID,
      enabled: true,
      scriptStage: 'head-inline',
      debug: false,
      async: true,
      defer: true,
    }),
  ],
  image: {
    domains: ["picsum.photos"],
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        limitInputPixels: false,
      }
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
    syntaxHighlight: false,
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: {
            dark: "github-dark",
            light: "github-light",
          },
          keepBackground: true,
        },
      ],
    ],
  },
  vite: {
    ssr: {
      noExternal: ['astro-social-share'],
    },
  },
});
