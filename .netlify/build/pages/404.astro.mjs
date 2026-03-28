/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_B70G4lE6.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Container, b as $$SEO } from '../chunks/Layout_BBkzXZMq.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://developingdvlpr.com");
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const seoConfig = {
    title: "404 - Page Not Found | Nerando Johnson",
    description: "The page you are looking for could not be found. Return to the homepage to explore Nerando Johnson's portfolio, projects, and blog.",
    canonical: "https://developingdvlpr.com/404",
    openGraph: {
      basic: {
        title: "404 - Page Not Found | Nerando Johnson",
        type: "website",
        image: "https://developingdvlpr.com/assets/Banner_for_site.png",
        url: "https://developingdvlpr.com/404"
      },
      optional: {
        description: "The page you are looking for could not be found. Return to explore projects, blog posts, and developer resources.",
        siteName: "Developing Developer",
        locale: "en_US"
      }
    },
    twitter: {
      card: "summary_large_image",
      site: "@nerajno",
      creator: "@nerajno",
      title: "404 - Page Not Found",
      description: "This page could not be found. Return to Nerando Johnson's portfolio homepage.",
      image: "https://developingdvlpr.com/assets/Banner_for_site.png"
    },
    extend: {
      meta: [
        { name: "author", content: "Nerando Johnson" },
        { name: "robots", content: "noindex, follow" },
        // Don't index 404 pages
        { property: "og:locale", content: "en_US" },
        { name: "theme-color", content: "#1e293b" },
        { name: "geo.region", content: "US-GA" },
        { name: "geo.placename", content: "Atlanta" },
        // GEO-specific meta tags
        { property: "profile:first_name", content: "Nerando" },
        { property: "profile:last_name", content: "Johnson" },
        { property: "profile:username", content: "nerajno" }
      ]
    }
  };
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "404 - Page Not Found",
    description: "The requested page could not be found.",
    url: "https://developingdvlpr.com/404",
    author: {
      "@type": "Person",
      name: "Nerando Johnson",
      url: "https://developingdvlpr.com",
      jobTitle: "Software Developer",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Atlanta",
        addressRegion: "GA",
        addressCountry: "US"
      },
      sameAs: [
        "https://github.com/Nerajno",
        "https://twitter.com/nerajno",
        "https://www.linkedin.com/in/nerando-johnson/"
      ]
    },
    mainEntityOfPage: {
      "@type": "WebSite",
      name: "Developing Developer",
      url: "https://developingdvlpr.com"
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 Not Found" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '  <script type="application/ld+json">', "<\/script> ", " "])), renderComponent($$result2, "AstroSEO", $$SEO, { "title": seoConfig.title, "description": seoConfig.description, "canonical": seoConfig.canonical, "openGraph": seoConfig.openGraph, "twitter": seoConfig.twitter, "extend": seoConfig.extend }), unescapeHTML(JSON.stringify(structuredData)), renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<main> <div class="min-h-[calc(100vh-16rem)] flex items-center justify-center"> <div class="mt-16 text-center"> <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">404</h1> <img src="/src/assets/other_images/404.jpg" alt="404 Not Found" class="mx-auto my-6 max-w-2xl w-full rounded shadow"> <p class="text-lg mt-4 text-slate-600 dark:text-slate-300">
Zilch, Nyet, Nope, Nada
</p> <p class="text-lg mt-4 text-slate-600 dark:text-slate-300">
Page not found.
</p> <a href="/" class="inline-block mt-6 px-6 py-2 bg-blue-600 dark:bg-blue-800 text-white dark:text-slate-300 rounded hover:bg-blue-700 dark:hover:bg-blue-900 transition-colors">Beam Me Up Scotty || Home</a> </div> </div> </main> ` })) })}`;
}, "/Users/nerandojohnson/Documents/Dev/Projects/Portfolio_Pieces/astro_portfolio_v3/src/pages/404.astro", void 0);

const $$file = "/Users/nerandojohnson/Documents/Dev/Projects/Portfolio_Pieces/astro_portfolio_v3/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
