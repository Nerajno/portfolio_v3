/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_BTznwTSM.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Container, b as $$SEO } from '../chunks/Layout_DBvnNXX8.mjs';
import { $ as $$Sectionhead } from '../chunks/sectionhead_DtY1p5l_.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from '../chunks/_astro_assets_CKSOT1eQ.mjs';
import { h as heroImage } from '../chunks/Banner_for_site_TfOznMJm.mjs';
export { renderers } from '../renderers.mjs';

const funFacts = [
    "I like to drink my coffee black, with no sugar or cream and just a pinch of salt.",
    "I learnt how to use Stack Overflow the hard way — by asking a question first.",
    "I once debugged a CSS issue for 3 days that was caused by a missing semicolon.",
    "I got voluntold to be a speaker at a conference and ended up loving it."

  ];

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://developingdvlpr.com");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const today = /* @__PURE__ */ new Date();
  const dayOfYear = Math.floor(
    (today - new Date(today.getFullYear(), 0, 0)) / 1e3 / 60 / 60 / 24
  );
  const factOfTheDay = funFacts[dayOfYear % funFacts.length];
  const seoConfig = {
    title: "About Nerando Johnson - Software Developer & Tech Community Builder & Consultant",
    description: "Learn about Nerando Johnson, a passionate junior front-end developer in Atlanta specializing in Vue3, and building impactful tech experiences. Discover my journey from curiosity to code.",
    canonical: "https://developingdvlpr.com/about",
    openGraph: {
      basic: {
        title: "About Nerando Johnson - Software Developer",
        type: "website",
        image: "https://developingdvlpr.com/assets/Banner_for_site.png",
        url: "https://developingdvlpr.com/about"
      },
      optional: {
        description: "Passionate software developer in Atlanta currently working in the front-end space. I currently specialize in Vue3, some open-source contributing, consulting, and mentorship. Building thoughtful tech experiences.",
        siteName: "Developing Developer",
        locale: "en_US"
      }
    },
    twitter: {
      card: "summary_large_image",
      site: "@nerajno",
      creator: "@nerajno",
      title: "About Nerando Johnson - Software Developer",
      description: "Front-end developer in Atlanta passionate about Vue3, some open-source contributing, consulting, and building impactful tech experiences.",
      image: "https://developingdvlpr.com/assets/Banner_for_site.png"
    },
    extend: {
      meta: [
        { name: "author", content: "Nerando Johnson" },
        { name: "keywords", content: "front-end developer, software developer, Vue3, Atlanta developer, software engineer, open source, mentoring" },
        { name: "robots", content: "index, follow" },
        { property: "og:locale", content: "en_US" },
        { name: "theme-color", content: "#1e293b" },
        // GEO-specific meta tags
        { name: "article:author", content: "Nerando Johnson" },
        { property: "profile:first_name", content: "Nerando" },
        { property: "profile:last_name", content: "Johnson" }
      ]
    }
  };
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nerando Johnson",
    url: "https://developingdvlpr.com",
    image: "https://developingdvlpr.com/assets/Banner_for_site.png",
    jobTitle: "Junior Front-End Developer",
    worksFor: {
      "@type": "Organization",
      name: "Software Development Industry"
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Atlanta",
      addressRegion: "GA",
      addressCountry: "US"
    },
    alumniOf: "freeCodeCamp, Bootcamp",
    knowsAbout: [
      "Vue3",
      "React",
      "JavaScript",
      "Front-End Development",
      "Open Source",
      "Mentorship",
      "Technical Consulting"
    ],
    sameAs: [
      "https://github.com/Nerajno",
      "https://twitter.com/nerajno",
      "https://www.linkedin.com/in/nerando-johnson/"
    ],
    description: "Junior front-end developer in Atlanta specializing in Vue3, React, and building impactful tech experiences. Passionate about open-source contribution, mentorship, and community building."
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '  <script type="application/ld+json">', "<\/script> ", " "])), renderComponent($$result2, "AstroSEO", $$SEO, { "title": seoConfig.title, "description": seoConfig.description, "canonical": seoConfig.canonical, "openGraph": seoConfig.openGraph, "twitter": seoConfig.twitter, "extend": seoConfig.extend }), unescapeHTML(JSON.stringify(structuredData)), renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`  ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`
Software professional, learner, software developer, and community builder. Specializing in front-end development with Vue3, TypeScript and some React in Atlanta, GA.
` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`About Nerando Johnson - Software Developer` })}` })} ${maybeRenderHead()}<div class="max-w-4xl mx-auto mt-16"> <div class="md:flex md:items-center gap-16 mb-10"> <div class="text-pretty leading-9"> <!-- GEO: Use semantic HTML with clear hierarchy --> <h1 class="text-4xl font-bold mb-4">Hey <span aria-hidden="true">👋</span>, I'm Nerando Johnson</h1> <div class="text-lg text-slate-500 dark:text-slate-400"> <!-- GEO: Direct, factual statements for AI parsing --> <section aria-label="Current Role and Expertise"> <h2 class="sr-only">Current Role and Expertise</h2> <p class="mb-4"> <strong>Current role:</strong> Junior front-end developer based in Atlanta, GA.
</p> <p class="mb-4"> <strong>Specializations:</strong> Vue3, TypeScript, some React experience, JavaScript, open-source contribution, technical consulting, and developer mentorship.
</p> <p class="mb-4">
I build thoughtful, impactful tech experiences at the intersection of code, design, creativity, problem-solving, and community.
</p> </section> <!-- GEO: Clear background story with timeline markers --> <section aria-label="Professional Journey"> <h2 class="sr-only">Professional Journey</h2> <p class="mb-4"> <strong>Background:</strong> My path into technology started with curiosity—breaking things, learning how to fix them, and discovering a passion for turning ideas into code.
</p> <p class="mb-4"> <strong>Experience includes:</strong> hobbyist, mentee, freeCodeCamp learner, technical software consultant, tinkerer, and bootcamp graduate.
                This diverse journey shaped my focus on software engineering, collaborative development, and helping others grow in tech.
</p> </section> <!-- GEO: Clear call-to-action with explicit links --> <section aria-label="Portfolio and Contact"> <h2 class="sr-only">Portfolio and Social Links</h2> <p class="mb-4"> <strong>View my work:</strong> Check out my <a href="https://developingdvlpr.com/portfolio" class="text-blue-700 dark:text-blue-400 font-semibold underline hover:no-underline" target="_blank" rel="noopener">portfolio</a> for featured projects and MVPs.
</p> <p class="mb-4"> <strong>Connect with me:</strong> Find me on <a href="https://github.com/Nerajno" class="font-semibold hover:underline" target="_blank" rel="noopener">GitHub</a>,
<a href="https://twitter.com/nerajno" class="font-semibold hover:underline" target="_blank" rel="noopener">Twitter</a>, and
<a href="https://www.linkedin.com/in/nerando-johnson/" class="font-semibold hover:underline" target="_blank" rel="noopener">LinkedIn</a>.
</p> </section> </div> </div> ${renderComponent($$result3, "Image", $$Image, { "src": heroImage, "alt": "Professional photo of Nerando Johnson, front-end developer", "width": 300, "class": "rounded-3xl rotate-3 mx-4 md:mx-0" })} </div> <!-- GEO: Clear technical skills section --> <section aria-label="Current Focus and Skills" class="mt-12 text-lg text-slate-500 dark:text-slate-400"> <h2 class="text-2xl font-bold mb-4 text-slate-700 dark:text-slate-300">
Current Focus Areas
</h2> <p class="mb-2"> <strong>Technical focus:</strong> Front-end development with Vue3 (and some experience with React) tooling, building scalable applications, and understanding modern JavaScript frameworks.
</p> <p class="mb-2"> <strong>Professional development:</strong> Mentoring junior developers, technical consulting, completed customer-facing products and contributing to open-source projects.
</p> <p class="mb-2"> <strong>Philosophy:</strong> Great software is equally about people and code—effective solutions solve real problems for real users.
</p> <p class="mb-2"> <strong>Learning approach:</strong> I believe in learning in public. Follow my journey on <a href="https://www.linkedin.com/in/nerando-johnson/recent-activity/all/" class="text-blue-600 dark:text-blue-400 underline hover:no-underline" target="_blank" rel="noopener noreferrer">LinkedIn</a> or read my articles on my <a href="https://developingdvlpr.com/blog" class="text-blue-600 dark:text-blue-400 underline hover:no-underline" target="_blank" rel="noopener noreferrer">blog</a>.
</p> <p> <strong>Beyond code:</strong> I enjoy exploring new ideas, tinkering with technology, cooking, continuous learning, working with purpose, and building things that matter to real people.
</p> </section> <!-- GEO: FAQ-style content for better AI comprehension --> <section aria-label="Quick Facts" class="mt-12 bg-slate-100 dark:bg-slate-800 p-6 rounded-xl"> <h2 class="text-2xl font-bold mb-4 text-slate-700 dark:text-slate-300">
Quick Facts
</h2> <dl class="space-y-3 text-slate-600 dark:text-slate-400"> <div> <dt class="font-semibold inline">Current Main Location:</dt> <dd class="inline ml-2">Atlanta, Georgia, USA</dd> </div> <div> <dt class="font-semibold inline">Primary Used Technologies:</dt> <dd class="inline ml-2">Vue3, TypeScript, JavaScript and Tailwind CSS</dd> </div> <div> <dt class="font-semibold inline">Areas of Expertise:</dt> <dd class="inline ml-2">Front-end development, some back-end development, and architecture, UI/UX implementation, open-source contribution, technical mentorship, and community building</dd> </div> <div> <dt class="font-semibold inline">Professional Services:</dt> <dd class="inline ml-2">Software product development, technical consulting, code mentorship</dd> </div> </dl> </section> <!-- Random fact section --> <div class="mt-12 bg-slate-300 dark:bg-slate-700 p-6 rounded-xl shadow-sm border border-slate-500 dark:border-slate-400 text-slate-500 dark:text-slate-400"> <h3 class="text-2xl font-semibold mb-4">Random Fact about Me</h3> <p>${factOfTheDay}</p> </div> </div> ` })) })}`;
}, "/Users/nerandojohnson/Documents/Dev/Projects/Portfolio_Pieces/astro_portfolio_v3/src/pages/about.astro", void 0);

const $$file = "/Users/nerandojohnson/Documents/Dev/Projects/Portfolio_Pieces/astro_portfolio_v3/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
