/* empty css                                 */
import { c as createAstro, a as createComponent, m as maybeRenderHead, s as spreadAttributes, e as addAttribute, f as renderSlot, b as renderTemplate, r as renderComponent, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_B70G4lE6.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                   */
import { $ as $$Layout, a as $$Container, c as $$Icon, b as $$SEO } from '../chunks/Layout_BBkzXZMq.mjs';
import { $ as $$Sectionhead } from '../chunks/sectionhead_BTl6n8qk.mjs';
import { jsx } from 'react/jsx-runtime';
import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://developingdvlpr.com");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    size = "md",
    style = "primary",
    block,
    class: className,
    ...rest
  } = Astro2.props;
  const sizes = {
    md: "px-5 py-2.5",
    lg: "px-6 py-3"
  };
  const styles = {
    outline: "btn-secondary border-2",
    primary: "btn-primary border-2 border-transparent",
    inverted: "btn-secondary border-2"
  };
  return renderTemplate`${maybeRenderHead()}<button${spreadAttributes(rest)}${addAttribute([
    "rounded text-center transition focus-ring",
    block && "w-full",
    sizes[size],
    styles[style],
    className
  ], "class:list")}>${renderSlot($$result, $$slots["default"])}</button>`;
}, "/Users/nerandojohnson/Documents/Dev/Projects/Portfolio_Pieces/astro_portfolio_v3/src/components/ui/button.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Contactform = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<form action="https://api.web3forms.com/submit" method="POST" id="form" class="needs-validation" data-astro-reload novalidate data-astro-cid-uwnxe3i2> <!-- Add your Web3Forms Access Key --> <input type="hidden" name="access_key" value="1ad33f96-46a7-40aa-b0f0-aa9d6f8f65fa" data-astro-cid-uwnxe3i2> <input type="checkbox" class="hidden" style="display:none" name="botcheck" data-astro-cid-uwnxe3i2> <div class="mb-5" data-astro-cid-uwnxe3i2> <input type="text" placeholder="Name" required class="w-full px-4 py-3 border placeholder:text-slate-400 rounded-md outline-none focus:ring-4 border-slate-300 focus:border-slate-600 ring-slate-100 dark:text-slate-900 dark:border-slate-700 dark:ring-slate-800 dark:focus:ring-slate-900" name="name" data-astro-cid-uwnxe3i2> <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1" data-astro-cid-uwnxe3i2>\nPlease provide your full name.\n</div> </div> <div class="mb-5" data-astro-cid-uwnxe3i2> <label for="email_address" class="sr-only" data-astro-cid-uwnxe3i2>Email Address</label><input id="email_address" type="email" placeholder="Email Address" name="email" required class="w-full px-4 py-3 border placeholder:text-slate-400 rounded-md outline-none focus:ring-4 border-slate-300 focus:border-slate-600 ring-slate-100 dark:text-slate-900 dark:border-slate-700 dark:ring-slate-800 dark:focus:ring-slate-900" data-astro-cid-uwnxe3i2> <div class="empty-feedback text-red-400 text-sm mt-1" data-astro-cid-uwnxe3i2>\nPlease provide your email address.\n</div> <div class="invalid-feedback text-red-400 text-sm mt-1" data-astro-cid-uwnxe3i2>\nPlease provide a valid email address.\n</div> </div> <div class="mb-3" data-astro-cid-uwnxe3i2> <textarea name="message" required placeholder="Your Message" class="w-full px-4 py-3 border placeholder:text-slate-400 rounded-md outline-none h-36 focus:ring-4 border-slate-300 focus:border-slate-600 ring-slate-100 dark:text-slate-900 dark:border-slate-700 dark:ring-slate-800 dark:focus:ring-slate-900" data-astro-cid-uwnxe3i2></textarea> <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1" data-astro-cid-uwnxe3i2>\nPlease enter your message.\n</div> </div> ', ' <div id="result" class="mt-3 text-center" data-astro-cid-uwnxe3i2></div> </form>  <script>\n\n  // use astro:page-load event if you are using View Transitions\n\n  document.addEventListener("DOMContentLoaded", () => {\n\n      const form = document.getElementById("form");\n      const result = document.getElementById("result");\n\n      form.addEventListener("submit", function (e) {\n        e.preventDefault();\n        form.classList.add("was-validated");\n        if (!form.checkValidity()) {\n          form.querySelectorAll(":invalid")[0].focus();\n          return;\n        }\n        const formData = new FormData(form);\n        const object = Object.fromEntries(formData);\n        const json = JSON.stringify(object);\n\n        result.innerHTML = "Sending...";\n\n        fetch("https://api.web3forms.com/submit", {\n          method: "POST",\n          headers: {\n            "Content-Type": "application/json",\n            Accept: "application/json",\n          },\n          body: json,\n        })\n          .then(async (response) => {\n            let json = await response.json();\n            if (response.status == 200) {\n              result.classList.add("text-green-500");\n              result.innerHTML = json.message;\n            } else {\n              console.log(response);\n              result.classList.add("text-red-500");\n              result.innerHTML = json.message;\n            }\n          })\n          .catch((error) => {\n            console.log(error);\n            result.innerHTML = "Something went wrong!";\n          })\n          .then(function () {\n            location.reload(true)\n            form.reset();\n            form.classList.remove("was-validated");\n            setTimeout(() => {\n              result.style.display = "none";\n            }, 5000);\n          });\n      });\n    },\n    { once: true },\n  );\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Button", $$Button, { "type": "submit", "size": "lg", "block": true, "data-astro-cid-uwnxe3i2": true }, { "default": async ($$result2) => renderTemplate`Send Message` }));
}, "/Users/nerandojohnson/Documents/Dev/Projects/Portfolio_Pieces/astro_portfolio_v3/src/components/contactform.astro", void 0);

function CalBooking() {
  useEffect(() => {
    (async function() {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return /* @__PURE__ */ jsx(
    Cal,
    {
      namespace: "30min",
      calLink: "nerando-johnson-asleqm/30min",
      style: { width: "100%", height: "100%", overflow: "scroll" },
      config: { layout: "month_view", useSlotsViewOnSmallScreen: true }
    }
  );
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://developingdvlpr.com");
const prerender = false;
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const seoConfig = {
    title: "Contact Nerando Johnson - Let's Connect & Collaborate",
    description: "Get in touch with Nerando Johnson, software developer in Atlanta. Available for collaboration, mentoring, technical consulting, or just to chat about tech and development.",
    canonical: "https://developingdvlpr.com/contact",
    openGraph: {
      basic: {
        title: "Contact Nerando Johnson - Software Developer",
        type: "website",
        image: "https://developingdvlpr.com/assets/Banner_for_site.png",
        url: "https://developingdvlpr.com/contact"
      },
      optional: {
        description: "Connect with Nerando Johnson for collaboration, mentoring, or technical consulting. Software developer currently specializing in Vue3 and operating as a junior.",
        siteName: "Developing Developer",
        locale: "en_US"
      }
    },
    twitter: {
      card: "summary_large_image",
      site: "@nerajno",
      creator: "@nerajno",
      title: "Contact Nerando Johnson - Let's Connect",
      description: "Get in touch for collaboration, mentoring, or technical consulting. Front-end developer in Atlanta.",
      image: "https://developingdvlpr.com/assets/Banner_for_site.png"
    },
    extend: {
      meta: [
        { name: "author", content: "Nerando Johnson" },
        {
          name: "keywords",
          content: "contact developer, front-end developer Atlanta, software developer, Vue3 developer, technical consulting, mentoring, collaboration"
        },
        { name: "robots", content: "index, follow" },
        { property: "og:locale", content: "en_US" },
        { name: "theme-color", content: "#1e293b" },
        { name: "geo.region", content: "US-GA" },
        { name: "geo.placename", content: "Atlanta" },
        { name: "contact:email", content: "nerando@developingdvlpr.com" },
        // GEO-specific meta tags
        { property: "og:type", content: "profile" },
        { property: "profile:first_name", content: "Nerando" },
        { property: "profile:last_name", content: "Johnson" },
        { property: "profile:username", content: "nerajno" }
      ]
    }
  };
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "Person",
      name: "Nerando Johnson",
      url: "https://developingdvlpr.com",
      email: "nerando@developingdvlpr.com",
      jobTitle: "Software Developer",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Atlanta",
        addressRegion: "GA",
        addressCountry: "US"
      },
      sameAs: [
        "https://www.linkedin.com/in/nerando-johnson/",
        "https://twitter.com/nerajno",
        "https://github.com/Nerajno",
        "https://calendly.com/nerandojohnsontech/consults"
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Professional",
        email: "nerando@developingdvlpr.com",
        availableLanguage: "English"
      }
    },
    about: {
      "@type": "Service",
      serviceType: "Software Development",
      provider: {
        "@type": "Person",
        name: "Nerando Johnson"
      },
      areaServed: {
        "@type": "City",
        name: "Atlanta",
        containedInPlace: {
          "@type": "State",
          name: "Georgia"
        }
      },
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
            name: "Collaboration",
            description: "Software development collaboration and project work"
          }
        }
      ]
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '  <script type="application/ld+json">', "<\/script> ", " "])), renderComponent($$result2, "AstroSEO", $$SEO, { "title": seoConfig.title, "description": seoConfig.description, "canonical": seoConfig.canonical, "openGraph": seoConfig.openGraph, "twitter": seoConfig.twitter, "extend": seoConfig.extend }), unescapeHTML(JSON.stringify(structuredData)), renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`You might have something to teach me, need to ask something, want to tell me something, or I may be able to help.` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`Contact` })}` })} ${maybeRenderHead()}<div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16"> <div> <h2 class="font-medium text-2xl text-slate-500 dark:text-slate-400">
Lets Talk
</h2> <p class="text-lg leading-relaxed text-slate-500 mt-3 text-slate-500 dark:text-slate-400">
If this form is too much, you can always <strong>email me at</strong> <a href="mailto:nerando@developingdvlpr.com" class="text-gray-600 hover:text-gray-900 dark:text-blue-300 dark:hover:text-blue-300" itemprop="email">nerando@developingdvlpr.com</a>. These socials work too <span role="img" aria-label="pointing down">👇🏽</span>:
</p> <div class="mt-5"> <ul class="flex space-x-4"> <li> <a href="https://www.linkedin.com/in/nerando-johnson/" target="_blank" rel="noopener noreferrer me" class="text-gray-600 hover:text-gray-900 dark:text-blue-300 dark:hover:text-blue-300" aria-label="Connect with Nerando Johnson on LinkedIn"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-6 h-6", "name": "mdi:linkedin" })} <span class="sr-only">LinkedIn</span> </a> </li> <li> <a href="https://calendly.com/nerandojohnsontech/consults" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-900 dark:text-blue-300 dark:hover:text-blue-300" aria-label="Schedule a consultation with Nerando Johnson on Calendly"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-6 h-6", "name": "mdi:calendar" })} <span class="sr-only">Calendly</span> </a> </li> <li> <a href="https://twitter.com/nerajno" target="_blank" rel="noopener noreferrer me" class="text-gray-600 hover:text-gray-900 dark:text-blue-300 dark:hover:text-blue-300" aria-label="Follow Nerando Johnson on Twitter"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-6 h-6", "name": "mdi:twitter" })} <span class="sr-only">Twitter</span> </a> </li> </ul> </div> </div> <div> ${renderComponent($$result3, "Contactform", $$Contactform, {})} </div> </div>  <div class="mx-auto max-w-4xl mt-20"> <h2 class="font-medium text-3xl text-slate-800 dark:text-slate-200 text-center mb-3">
Schedule a Coffee Chat
</h2> <p class="text-lg text-center text-slate-500 dark:text-slate-400 mb-8">
Book a 30-minute session to discuss opportunities, get advice, or just chat about tech.
</p> <div class="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-2" style="min-height: 600px;"> ${renderComponent($$result3, "CalBooking", CalBooking, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/CalBooking.tsx", "client:component-export": "default" })} </div> </div> ` })) })}`;
}, "/Users/nerandojohnson/Documents/Dev/Projects/Portfolio_Pieces/astro_portfolio_v3/src/pages/contact.astro", void 0);

const $$file = "/Users/nerandojohnson/Documents/Dev/Projects/Portfolio_Pieces/astro_portfolio_v3/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
