/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_B70G4lE6.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Container, b as $$SEO } from '../chunks/Layout_BBkzXZMq.mjs';
import { $ as $$Sectionhead } from '../chunks/sectionhead_BTl6n8qk.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://developingdvlpr.com");
const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pricing;
  const seoConfig = {
    title: "Pricing & Services - Nerando Johnson | Software Development Consulting",
    description: "Explore pricing and services offered by Nerando Johnson. Technical consulting, mentoring, software development collaboration, and Vue3/React expertise in Atlanta.",
    canonical: "https://developingdvlpr.com/pricing",
    openGraph: {
      basic: {
        title: "Pricing & Services - Nerando Johnson",
        type: "website",
        image: "https://developingdvlpr.com/assets/Banner_for_site.png",
        url: "https://developingdvlpr.com/pricing"
      },
      optional: {
        description: "Professional software development services, technical consulting, and mentoring. Specializing in Vue3, React, and front-end development.",
        siteName: "Developing Developer",
        locale: "en_US"
      }
    },
    twitter: {
      card: "summary_large_image",
      site: "@nerajno",
      creator: "@nerajno",
      title: "Pricing & Services - Nerando Johnson",
      description: "Technical consulting, mentoring, and software development services. Vue3 and React expertise.",
      image: "https://developingdvlpr.com/assets/Banner_for_site.png"
    },
    extend: {
      meta: [
        { name: "author", content: "Nerando Johnson" },
        { name: "keywords", content: "software development pricing, technical consulting, developer mentoring, Vue3 consulting, React development, Atlanta software developer, freelance developer" },
        { name: "robots", content: "index, follow" },
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
    "@type": "ProfessionalService",
    name: "Nerando Johnson Software Development Services",
    description: "Professional software development consulting, technical mentoring, and collaboration services specializing in Vue3, React, and modern JavaScript.",
    url: "https://developingdvlpr.com/pricing",
    provider: {
      "@type": "Person",
      name: "Nerando Johnson",
      url: "https://developingdvlpr.com",
      jobTitle: "Software Developer",
      email: "nerando@developingdvlpr.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Atlanta",
        addressRegion: "GA",
        addressCountry: "US"
      },
      knowsAbout: [
        "Vue3",
        "React",
        "JavaScript",
        "Front-End Development",
        "Technical Consulting",
        "Developer Mentoring"
      ],
      sameAs: [
        "https://github.com/Nerajno",
        "https://twitter.com/nerajno",
        "https://www.linkedin.com/in/nerando-johnson/",
        "https://calendly.com/nerandojohnsontech/consults"
      ]
    },
    areaServed: {
      "@type": "City",
      name: "Atlanta",
      containedInPlace: {
        "@type": "State",
        name: "Georgia"
      }
    },
    serviceType: "Software Development Consulting",
    offers: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Technical Consulting",
          description: "Front-end development consulting specializing in Vue3 and React"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Developer Mentoring",
          description: "One-on-one mentorship for junior developers"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Software Development Collaboration",
          description: "Collaborative software development and project work"
        }
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Completed Projects" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '  <script type="application/ld+json">', "<\/script> ", " "])), renderComponent($$result2, "AstroSEO", $$SEO, { "title": seoConfig.title, "description": seoConfig.description, "canonical": seoConfig.canonical, "openGraph": seoConfig.openGraph, "twitter": seoConfig.twitter, "extend": seoConfig.extend }), unescapeHTML(JSON.stringify(structuredData)), renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`
Projects that I have completed or have had version one done.
` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`Projects` })}` })}  ` })) })}`;
}, "/Users/nerandojohnson/Documents/Dev/Projects/Portfolio_Pieces/astro_portfolio_v3/src/pages/pricing.astro", void 0);

const $$file = "/Users/nerandojohnson/Documents/Dev/Projects/Portfolio_Pieces/astro_portfolio_v3/src/pages/pricing.astro";
const $$url = "/pricing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pricing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
