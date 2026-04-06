/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_BTznwTSM.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Container, c as $$Icon, b as $$SEO } from '../chunks/Layout_DBvnNXX8.mjs';
import { $ as $$Sectionhead } from '../chunks/sectionhead_DtY1p5l_.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from '../chunks/_astro_assets_CKSOT1eQ.mjs';
export { renderers } from '../renderers.mjs';

const Ava = new Proxy({"src":"/_astro/gardening.QdQ9QAxq.png","width":1280,"height":853,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nerandojohnson/Documents/Dev/Projects/Portfolio_Pieces/astro_portfolio_v3/src/assets/images/gardening.png";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://developingdvlpr.com");
const $$DigitalGarden = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DigitalGarden;
  const seoConfig = {
    title: "Digital Garden - Nerando Johnson | Growing Ideas and Knowledge in Software Development",
    description: "Explore Nerando Johnson's digital garden - a dynamic space for cultivating software development ideas, tracking learning progress, and sharing knowledge. Discover insights on Vue3, JavaScript, front-end development, and the journey of continuous learning.",
    canonical: "https://developingdvlpr.com/digital_garden",
    openGraph: {
      basic: {
        title: "Digital Garden - Growing Ideas and Knowledge | Nerando Johnson",
        type: "article",
        image: "https://developingdvlpr.com/images/gardening.png",
        url: "https://developingdvlpr.com/digital_garden"
      },
      optional: {
        description: "A curated space where software development thoughts are planted, nurtured, and grown. Join Nerando Johnson in exploring the digital garden approach to knowledge management and continuous learning.",
        siteName: "Developing Developer",
        locale: "en_US"
      },
      article: {
        publishedTime: "2025-06-01T00:00:00Z",
        modifiedTime: "2025-09-01T00:00:00Z",
        author: "Nerando Johnson",
        section: "Technology",
        tag: ["digital garden", "knowledge management", "learning", "software development", "Vue3", "personal growth"]
      }
    },
    twitter: {
      card: "summary_large_image",
      site: "@nerajno",
      creator: "@nerajno",
      title: "Digital Garden - Growing Ideas & Knowledge in Software Development",
      description: "Discover my digital garden approach to learning and knowledge sharing. A place where software development ideas grow organically.",
      image: "https://developingdvlpr.com/images/gardening.png"
    },
    extend: {
      meta: [
        { name: "author", content: "Nerando Johnson" },
        {
          name: "keywords",
          content: "digital garden, knowledge management, personal growth, learning in public, software development, Vue3, JavaScript, front-end development, note-taking, Zettelkasten, second brain, continuous learning, developer blog, Atlanta developer"
        },
        { name: "robots", content: "index, follow" },
        { property: "og:locale", content: "en_US" },
        { name: "theme-color", content: "#1e293b" },
        { name: "geo.region", content: "US-GA" },
        { name: "geo.placename", content: "Atlanta" },
        // Article-specific meta tags
        { property: "article:author", content: "Nerando Johnson" },
        { property: "article:section", content: "Technology" },
        { property: "article:published_time", content: "2025-06-01T00:00:00Z" },
        { property: "article:modified_time", content: "2025-09-01T00:00:00Z" }
      ]
    }
  };
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Digital Garden - Growing Ideas and Knowledge",
    description: "Explore the concept of a digital garden and how it helps track progress, grow ideas, and share knowledge in software development.",
    image: "https://developingdvlpr.com/images/gardening.png",
    datePublished: "2025-06-01T00:00:00Z",
    dateModified: "2025-09-01T00:00:00Z",
    author: {
      "@type": "Person",
      "@id": "https://developingdvlpr.com/#nerando-johnson",
      name: "Nerando Johnson",
      jobTitle: "Software Developer",
      url: "https://developingdvlpr.com",
      sameAs: [
        "https://www.linkedin.com/in/nerando-johnson/",
        "https://twitter.com/nerajno",
        "https://github.com/Nerajno"
      ]
    },
    publisher: {
      "@type": "Person",
      name: "Nerando Johnson",
      url: "https://developingdvlpr.com"
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://developingdvlpr.com/digital_garden"
    },
    keywords: [
      "digital garden",
      "knowledge management",
      "learning",
      "software development",
      "personal growth",
      "Vue3",
      "JavaScript",
      "front-end development",
      "note-taking",
      "Atlanta software developer",
      "Nerando Johnson"
    ],
    about: [
      {
        "@type": "Thing",
        name: "Digital Garden",
        description: "A method of organizing and sharing knowledge that emphasizes growth and exploration over formal publication"
      },
      {
        "@type": "Thing",
        name: "Knowledge Management",
        description: "Systems and practices for capturing, developing, sharing, and effectively using knowledge"
      }
    ],
    mentions: [
      {
        "@type": "WebSite",
        name: "Nerando Johnson's Digital Garden",
        url: "https://garden.developingdvlpr.com/"
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Digital Garden" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["  ", '  <script type="application/ld+json">', "<\/script> ", " "])), renderComponent($$result2, "AstroSEO", $$SEO, { "title": seoConfig.title, "description": seoConfig.description, "canonical": seoConfig.canonical, "openGraph": seoConfig.openGraph, "twitter": seoConfig.twitter, "extend": seoConfig.extend }), unescapeHTML(JSON.stringify(structuredData)), renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`Discontent is the first step in the progress of a man or a nation. -
        Oscar Wilde` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`What is a Digital Garden ?` })}` })} ${maybeRenderHead()}<div class="max-w-4xl mx-auto mt-16"> <div class="md:flex md:items-center gap-16 mb-10"> <div class="text-pretty leading-9"> <h2 class="text-4xl font-bold mb-4">Progress is a process.</h2> <div class="text-lg text-slate-500"> <p class="mb-4">
I have started and stopped over the years a couple times well,
              ended up with flashcards, notes and github repos with half
              finished or unexplained ideas. This kinda left a bitter taste in
              my mouth, as I was not able to track my progress/growth and it
              comes off as somewhat unprofessional. Let's not even talk about
              the imposter syndrome that comes with it. Coming across the
              concept of a digital garden and with a background in agriculture,
              I was intrigued by the idea of a place to grow ideas, record my
              thoughts and share them with the world, a digital garden.
</p> <p class="mb-4">
My digital garden is a place where I can plant, nuture and grow my
              thoughts, ideas, and notes. It is a place where I can grow my
              knowledge and share it with the world. It is a place where I can
              be myself and express myself freely~ish. Here is a link to its
              current iteration, <a href="https://garden.developingdvlpr.com/" class="text-blue-700 dark:text-blue-400 font-semibold underline hover:no-underline" target="_blank" rel="noopener noreferrer" aria-label="Visit Nerando Johnson\" s digital garden'>
my digital garden.</a> </p> <p class="mb-4">
So here are some resources that I have found useful in creating my
              digital garden:
</p> <ul class="list-inside mb-4"> <li> <a href="https://maggieappleton.com/garden-history" target="_blank" rel="noopener noreferrer" class="text-blue-500 animate-bounce dark:text-blue-400 font-semibold hover:underline" aria-label="Read about the history and importance of digital gardens by Maggie Appleton">Why it's important to have a digital garden ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-5 h-5", "style": "display: inline;", "name": "bx:link-external" })}</a> </li> <li> <a href="https://joelhooks.com/digital-garden" target="_blank" rel="noopener noreferrer" class="text-blue-500 dark:text-blue-400 font-semibold hover:underline" aria-label="Explore Joel Hooks digital garden example">A good example of a digital garden ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-5 h-5", "style": "display: inline;", "name": "bx:link-external" })}</a> </li> <li> <a href="https://nesslabs.com/digital-garden-setup" target="_blank" rel="noopener noreferrer" class="text-blue-500 dark:text-blue-400 font-semibold hover:underline" aria-label="Learn how to set up your own digital garden from Ness Labs">Resources for setting up a digital garden ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-5 h-5", "style": "display: inline;", "name": "bx:link-external" })}</a> </li> </ul> </div> </div> ${renderComponent($$result3, "Image", $$Image, { "src": Ava, "alt": "image of a garden", "height": 700, "width": 400, "class": "rounded-3xl mx-4 md:mx-0" })} </div> </div> ` })) })}`;
}, "/Users/nerandojohnson/Documents/Dev/Projects/Portfolio_Pieces/astro_portfolio_v3/src/pages/digital_garden.astro", void 0);

const $$file = "/Users/nerandojohnson/Documents/Dev/Projects/Portfolio_Pieces/astro_portfolio_v3/src/pages/digital_garden.astro";
const $$url = "/digital_garden";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$DigitalGarden,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
