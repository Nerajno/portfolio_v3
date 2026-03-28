/* empty css                                 */
import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, b as renderTemplate, d as renderScript, r as renderComponent, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_B70G4lE6.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Container, b as $$SEO } from '../chunks/Layout_BBkzXZMq.mjs';
import { $ as $$Sectionhead } from '../chunks/sectionhead_BTl6n8qk.mjs';
import 'clsx';
/* empty css                                    */
import { s as speakingData } from '../chunks/speakingData_DuHi2jAp.mjs';
export { renderers } from '../renderers.mjs';

function formatDate(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long"
    // day: 'numeric' // Disabled to display only year and month
  }).format(date);
}

const $$Astro$3 = createAstro("https://developingdvlpr.com");
const $$Eventcard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Eventcard;
  const {
    id,
    title,
    description,
    name,
    date,
    location,
    links,
    status,
    type,
    tags
  } = Astro2.props;
  function getStatusColor(status2) {
    return status2 === "upcoming" ? "tag tag-primary" : "tag tag-accent";
  }
  function getTypeColor(type2) {
    const colors = {
      conference: "tag tag-primary",
      workshop: "tag tag-accent",
      meetup: "tag tag-accent",
      webinar: "tag tag-primary",
      "lightning-talk": "tag tag-accent"
    };
    return colors[type2];
  }
  function getEventTypeIcon(type2) {
    switch (type2) {
      case "conference":
        return "\u{1F3A4}";
      case "workshop":
        return "\u{1F4BB}";
      case "meetup":
        return "\u{1F465}";
      case "webinar":
        return "\u{1F3A5}";
      case "lightning-talk":
        return "\u26A1";
      default:
        return "\u{1F4C5}";
    }
  }
  const statusColor = getStatusColor(status);
  const typeColor = getTypeColor(type);
  const formattedDate = formatDate(date);
  const locationString = [
    location.venue,
    location.city,
    location.state,
    location.country !== "USA" ? location.country : null
  ].filter(Boolean).join(", ");
  return renderTemplate`${maybeRenderHead()}<div class="card p-6" style="color: var(--text-secondary)"> <div class="flex items-start justify-between gap-4"> <div class="flex-1"> <div class="flex items-center gap-2 flex-wrap"> <span class="text-xl" aria-hidden="true">${getEventTypeIcon(type)}</span> <span${addAttribute(typeColor, "class")}>${type}</span> <span${addAttribute(statusColor, "class")}>${status === "upcoming" ? "Upcoming" : "Past"}</span> ${tags?.map((tag) => renderTemplate`<span class="tag tag-primary">${tag}</span>`)} </div> <h3 class="text-xl font-semibold mt-2" style="color: var(--text-primary)"> ${title} </h3> <h4 class="mt-2 font-semibold italic link">${name}</h4> <div class="mt-2" style="color: var(--text-muted)"> <time${addAttribute(date, "datetime")}>${formattedDate}</time> <span class="mx-2">•</span> <span>${locationString}</span> </div> <p class="mt-3" style="color: var(--text-secondary)">${description}</p> </div> </div> ${Object.entries(links).length > 0 && renderTemplate`<div class="mt-4 flex flex-wrap gap-3"> ${Object.entries(links).map(
    ([key, url]) => url && renderTemplate`<a${addAttribute(url, "href")} class="inline-flex items-center link" target="_blank" rel="noopener noreferrer"> ${key === "conferenceWebsite" ? "Event Details" : key === "video" ? "Watch Recording" : key === "slides" ? "View Slides" : key === "article" ? "Read Article" : key === "github" ? "View Code" : key.charAt(0).toUpperCase() + key.slice(1)}${" "}
→
</a>`
  )} </div>`} </div>`;
}, "/Users/nerandojohnson/Documents/Dev/Projects/Portfolio_Pieces/astro_portfolio_v3/src/components/eventcard.astro", void 0);

const $$Astro$2 = createAstro("https://developingdvlpr.com");
const $$Eventlistwithexpand = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Eventlistwithexpand;
  const { events } = Astro2.props;
  const upcomingEvents = events.filter((event) => event.status === "upcoming").sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const pastEvents = events.filter((event) => event.status === "past").sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const initialPastEvents = pastEvents.slice(0, 5);
  const remainingPastEvents = pastEvents.slice(5);
  return renderTemplate`${maybeRenderHead()}<div class="space-y-16" data-astro-cid-6wxhz5m2> ${upcomingEvents.length > 0 && renderTemplate`<section aria-labelledby="upcoming-events-heading" data-astro-cid-6wxhz5m2> <h2 id="upcoming-events-heading" class="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100" data-astro-cid-6wxhz5m2>
Upcoming Events
</h2> <div class="space-y-8" data-astro-cid-6wxhz5m2> ${upcomingEvents.map((event) => renderTemplate`${renderComponent($$result, "EventCard", $$Eventcard, { ...event, "data-astro-cid-6wxhz5m2": true })}`)} </div> </section>`} ${pastEvents.length > 0 && renderTemplate`<section aria-labelledby="past-events-heading" data-astro-cid-6wxhz5m2> <h2 id="past-events-heading" class="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100" data-astro-cid-6wxhz5m2>
Past Events
</h2> <!-- Initial visible past events --> <div class="space-y-8" id="initial-past-events" data-astro-cid-6wxhz5m2> ${initialPastEvents.map((event) => renderTemplate`${renderComponent($$result, "EventCard", $$Eventcard, { ...event, "data-astro-cid-6wxhz5m2": true })}`)} </div> <!-- Hidden remaining past events --> ${remainingPastEvents.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-6wxhz5m2": true }, { "default": ($$result2) => renderTemplate` <div class="space-y-8 hidden" id="remaining-past-events" data-astro-cid-6wxhz5m2> ${remainingPastEvents.map((event) => renderTemplate`${renderComponent($$result2, "EventCard", $$Eventcard, { ...event, "data-astro-cid-6wxhz5m2": true })}`)} </div>  <div class="mt-8 text-center" data-astro-cid-6wxhz5m2> <button id="toggle-past-events" class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900" aria-expanded="false" aria-controls="remaining-past-events" data-astro-cid-6wxhz5m2> <span class="button-text" data-astro-cid-6wxhz5m2>View All Past Events</span> <svg class="ml-2 w-5 h-5 transition-transform duration-200 expand-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-6wxhz5m2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-6wxhz5m2></path> </svg> </button>  </div> ` })}`} </section>`} ${events.length === 0 && renderTemplate`<p class="text-center text-gray-500 py-12" data-astro-cid-6wxhz5m2>No events found.</p>`} </div>  ${renderScript($$result, "/Users/nerandojohnson/Documents/Dev/Projects/Portfolio_Pieces/astro_portfolio_v3/src/components/eventlistwithexpand.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/nerandojohnson/Documents/Dev/Projects/Portfolio_Pieces/astro_portfolio_v3/src/components/eventlistwithexpand.astro", void 0);

const $$Astro$1 = createAstro("https://developingdvlpr.com");
const $$MediaAccordion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MediaAccordion;
  const { media, index } = Astro2.props;
  function getTypeIcon(type) {
    switch (type) {
      case "podcast":
        return "\u{1F399}\uFE0F";
      case "interview":
        return "\u{1F3A4}";
      case "video":
        return "\u{1F4F9}";
      case "workshop-recording":
        return "\u{1F3A5}";
      case "panel-discussion":
        return "\u{1F465}";
      default:
        return "\u{1F4F1}";
    }
  }
  function getTypeColor(type) {
    const colors = {
      "podcast": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
      "interview": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
      "video": "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-300",
      "workshop-recording": "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
      "panel-discussion": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300"
    };
    return colors[type] || "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
  }
  return renderTemplate`${maybeRenderHead()}<div class="accordion-item border border-gray-200 dark:border-slate-700 rounded-lg mb-4 overflow-hidden transition-shadow hover:shadow-md" data-astro-cid-kdxwyh3l> <button class="accordion-header w-full px-6 py-4 text-left bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900" aria-expanded="false"${addAttribute(`accordion-content-${index}`, "aria-controls")} data-accordion-button data-astro-cid-kdxwyh3l> <div class="flex items-center justify-between" data-astro-cid-kdxwyh3l> <div class="flex-1" data-astro-cid-kdxwyh3l> <div class="flex items-center gap-3 flex-wrap mb-2" data-astro-cid-kdxwyh3l> <span class="text-xl" aria-hidden="true" data-astro-cid-kdxwyh3l>${getTypeIcon(media.type)}</span> <h3 class="text-lg font-semibold text-gray-900 dark:text-slate-100 flex items-center gap-2 group" data-astro-cid-kdxwyh3l> ${media.title} ${media.links.primary && renderTemplate`<a${addAttribute(media.links.primary, "href")} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-blue-500 dark:text-gray-500 dark:hover:text-blue-400 transition-colors"${addAttribute(`Open ${media.title} in new tab`, "aria-label")} title="Open in new tab" data-astro-cid-kdxwyh3l> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-kdxwyh3l> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" data-astro-cid-kdxwyh3l></path> </svg> </a>`} </h3> </div> <div class="flex items-center gap-4 text-sm text-gray-600 dark:text-slate-400" data-astro-cid-kdxwyh3l> <span${addAttribute(`px-2 py-1 text-xs rounded-full ${getTypeColor(media.type)}`, "class")} data-astro-cid-kdxwyh3l> ${media.type.replace("-", " ")} </span> ${media.platform && renderTemplate`<span data-astro-cid-kdxwyh3l>${media.platform}</span>`} <span data-astro-cid-kdxwyh3l>${formatDate(media.date)}</span> ${media.duration && renderTemplate`<span data-astro-cid-kdxwyh3l>⏱️ ${media.duration}</span>`} </div> </div> <svg class="accordion-icon w-5 h-5 text-gray-500 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-kdxwyh3l> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-kdxwyh3l></path> </svg> </div> </button> <div${addAttribute(`accordion-content-${index}`, "id")} class="accordion-content hidden"${addAttribute(`accordion-header-${index}`, "aria-labelledby")} data-astro-cid-kdxwyh3l> <div class="px-6 py-4 bg-gray-50/50 dark:bg-slate-800/50 border-t border-gray-200 dark:border-slate-700" data-astro-cid-kdxwyh3l> <p class="text-gray-700 dark:text-slate-300 mb-4 leading-relaxed" data-astro-cid-kdxwyh3l> ${media.description} </p> ${media.host && renderTemplate`<p class="text-sm text-gray-600 dark:text-slate-400 mb-2" data-astro-cid-kdxwyh3l> <strong data-astro-cid-kdxwyh3l>Host:</strong> ${media.host} </p>`} ${media.publication && renderTemplate`<p class="text-sm text-gray-600 dark:text-slate-400 mb-2" data-astro-cid-kdxwyh3l> <strong data-astro-cid-kdxwyh3l>Published in:</strong> ${media.publication} </p>`} ${media.tags && media.tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2 mb-4" data-astro-cid-kdxwyh3l> ${media.tags.map((tag) => renderTemplate`<span class="text-xs px-2.5 py-1 bg-gray-100 dark:bg-slate-700/50 text-gray-700 dark:text-slate-300 rounded-full border border-gray-200 dark:border-slate-600" data-astro-cid-kdxwyh3l>
#${tag} </span>`)} </div>`} <div class="flex flex-wrap gap-3 mt-4" data-astro-cid-kdxwyh3l> ${media.links.primary && renderTemplate`<a${addAttribute(media.links.primary, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-700 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-900 dark:text-blue-100 dark:hover:bg-blue-800 transition-colors" data-astro-cid-kdxwyh3l> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-kdxwyh3l> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" data-astro-cid-kdxwyh3l></path> </svg>
View ${media.type} </a>`} ${media.links.secondary && renderTemplate`<a${addAttribute(media.links.secondary, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-200 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-600 transition-colors" data-astro-cid-kdxwyh3l> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-kdxwyh3l> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" data-astro-cid-kdxwyh3l></path> </svg>
Additional Link
</a>`} ${media.links.transcript && renderTemplate`<a${addAttribute(media.links.transcript, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-200 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-600 transition-colors" data-astro-cid-kdxwyh3l> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-kdxwyh3l> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-astro-cid-kdxwyh3l></path> </svg>
View Transcript
</a>`} </div> </div> </div>  ${renderScript($$result, "/Users/nerandojohnson/Documents/Dev/Projects/Portfolio_Pieces/astro_portfolio_v3/src/components/mediaAccordion.astro?astro&type=script&index=0&lang.ts")}</div>`;
}, "/Users/nerandojohnson/Documents/Dev/Projects/Portfolio_Pieces/astro_portfolio_v3/src/components/mediaAccordion.astro", void 0);

const otherMediaData = [
  {
    id: "virtual-coffee-podcast-2024",
    title: "Building Community Through Code - Virtual Coffee Podcast",
    description: "Discussion about the importance of developer communities, mentorship, and creating inclusive spaces for learning. We explored how beginners can leverage community involvement for career growth.",
    date: "2024-06-15",
    type: "podcast",
    platform: "Virtual Coffee",
    host: "Dan Ott & Bekah Hawrot Weigel",
    duration: "45 min",
    links: {
      primary: "https://virtualcoffee.io/podcast"
    },
    tags: ["community", "mentorship", "career-growth"]
  },
  //format
  // {
  //   id: "nerando-johnson-how-to-conference-2025",
  //   title: "How to Conference: A User Guide",
  //   description: "Nerando Johnson shares practical tips and guidance for making the most of tech conferences, from preparation to networking at events.",
  //   date: "2025-01-02",
  //   type: "video",
  //   platform: "YouTube",
  //   duration: "30 min",
  //   links: {
  //     primary: "https://www.youtube.com/watch?v=kpL0lGjem1I"
  //   },
  //   tags: ["conference", "career", "networking"]
  // },
  {
    id: "virtual-coffee-lightning-talk-2021",
    title: "Lightning Talk: Leveraging Developer Community",
    description: "Nerando Johnson shares insights on participating in developer communities for learning and mentorship. Part of the Virtual Coffee Lightning Talks series.",
    date: "2021-10-18",
    type: "video",
    platform: "Virtual Coffee",
    duration: "12 min",
    links: {
      primary: "https://www.youtube.com/playlist?list=PLh9uT23TA65infGqUUaVibI0IssI0G6NY"
    },
    tags: ["community", "lightning-talk", "virtual-coffee"]
  },
  {
    id: "devto-featured-talk-2022",
    title: "Featured Dev.to Community Lightning Talk with Nerando Johnson",
    description: "Nerando shares lessons and experience as part of Dev.to's ongoing YouTube community events, focused on peer learning and open sharing.",
    date: "2022-06-05",
    type: "video",
    platform: "Dev.to YouTube",
    duration: "10 min",
    links: {
      primary: "https://www.youtube.com/@devto-community"
    },
    tags: ["devto", "community", "developer"]
  }
];

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://developingdvlpr.com");
const $$Speaking = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Speaking;
  const seoConfig = {
    title: "Speaking & Media \u2013 Nerando Johnson - Tech Speaker & Educator",
    description: "Explore Nerando Johnson's speaking engagements, conference talks, workshops, podcasts, interviews, and other media appearances in tech, open source, and professional development.",
    canonical: "https://developingdvlpr.com/speaking",
    openGraph: {
      basic: {
        title: "Speaking & Media \u2013 Nerando Johnson",
        type: "website",
        image: "https://developingdvlpr.com/images/other_images/Speaker_me.jpeg",
        url: "https://developingdvlpr.com/speaking"
      },
      optional: {
        description: "Discover upcoming events, past talks, and media appearances by Nerando Johnson. Conference talks, workshops, podcasts, and interviews about JavaScript, Vue3, open source, and developer communities.",
        siteName: "Developing Developer",
        locale: "en_US"
      },
      image: {
        url: "https://developingdvlpr.com/images/other_images/Speaker_me.jpeg",
        width: 1200,
        height: 630,
        alt: "Nerando Johnson Speaking & Media"
      }
    },
    twitter: {
      card: "summary_large_image",
      site: "@nerajno",
      creator: "@nerajno",
      title: "Speaking & Media \u2013 Nerando Johnson",
      description: "Explore talks, workshops, podcasts, and media appearances by Nerando Johnson covering JavaScript, Vue3, open source, and building inclusive developer communities.",
      image: "https://developingdvlpr.com/images/other_images/Speaker_me.jpeg"
    },
    extend: {
      meta: [
        { name: "author", content: "Nerando Johnson" },
        { name: "keywords", content: "Nerando Johnson, tech speaker, conference talks, workshops, JavaScript, Vue.js, open source, developer communities, podcasts, tech interviews, public speaking, Atlanta speaker" },
        { name: "robots", content: "index, follow" },
        { property: "og:locale", content: "en_US" },
        { name: "theme-color", content: "#1e293b" },
        { name: "geo.region", content: "US-GA" },
        { name: "geo.placename", content: "Atlanta" },
        // OpenGraph profile meta tags
        { property: "profile:first_name", content: "Nerando" },
        { property: "profile:last_name", content: "Johnson" },
        { property: "profile:username", content: "nerajno" }
      ]
    }
  };
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Nerando Johnson",
      url: "https://developingdvlpr.com",
      image: "https://developingdvlpr.com/images/other_images/Speaker_me.jpeg",
      jobTitle: "Software Developer & Tech Speaker",
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
      knowsAbout: [
        "JavaScript",
        "Vue.js",
        "Vue3",
        "React",
        "Front-End Development",
        "Open Source",
        "Developer Experience",
        "Technical Speaking",
        "Developer Communities",
        "Inclusive Tech"
      ],
      sameAs: [
        "https://github.com/Nerajno",
        "https://twitter.com/nerajno",
        "https://www.linkedin.com/in/nerando-johnson/"
      ],
      description: "Software developer and tech speaker based in Atlanta. Speaks at conferences, meetups, and workshops about JavaScript fundamentals, Vue.js development, open source contribution, civic hacking, and building inclusive developer communities."
    },
    about: {
      "@type": "ItemList",
      name: "Speaking Topics",
      itemListElement: [
        {
          "@type": "Thing",
          name: "JavaScript Fundamentals"
        },
        {
          "@type": "Thing",
          name: "Vue.js Development"
        },
        {
          "@type": "Thing",
          name: "Open Source Contribution"
        },
        {
          "@type": "Thing",
          name: "Civic Hacking"
        },
        {
          "@type": "Thing",
          name: "Inclusive Developer Communities"
        }
      ]
    }
  };
  const now = /* @__PURE__ */ new Date();
  const processedEvents = speakingData.map((event) => {
    const eventDate = new Date(event.date);
    if (isNaN(eventDate.getTime())) {
      throw new Error(`Invalid date for event: ${event.title}`);
    }
    return {
      ...event,
      status: eventDate > now ? "upcoming" : "past"
    };
  });
  const sortedMedia = [...otherMediaData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Speaking & Media", "data-astro-cid-kfn7b65q": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '  <script type="application/ld+json">', "<\/script> ", " "])), renderComponent($$result2, "AstroSEO", $$SEO, { "title": seoConfig.title, "description": seoConfig.description, "canonical": seoConfig.canonical, "openGraph": seoConfig.openGraph, "twitter": seoConfig.twitter, "extend": seoConfig.extend, "data-astro-cid-kfn7b65q": true }), unescapeHTML(JSON.stringify(structuredData)), renderComponent($$result2, "Container", $$Container, { "data-astro-cid-kfn7b65q": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Sectionhead", $$Sectionhead, { "data-astro-cid-kfn7b65q": true }, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc", "class": "text-slate-500 dark:text-slate-400" }, { "default": ($$result5) => renderTemplate`
Discover my talks, workshops, and media appearances across the tech community.
` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`Speaking & Media` })}` })} ${maybeRenderHead()}<img src="/other_images/Speaker_me.jpeg" alt="Photo of Nerando Johnson giving a presentation at a tech event" class="mx-auto w-full max-w-md h-auto mt-16 rounded-lg shadow" data-astro-cid-kfn7b65q> <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16" data-astro-cid-kfn7b65q> <p class="text-lg leading-relaxed text-slate-500 dark:text-slate-400" data-astro-cid-kfn7b65q>
I regularly speak at conferences, meetups, and workshops at the
        intersection of software development, developer experience, and
        creating inclusive tech communities. I also share insights through
        podcasts, interviews, and written content. Here you'll find my upcoming
        speaking engagements, past events, and other media appearances.
</p> </div>  <div class="mx-auto max-w-4xl mt-16" data-astro-cid-kfn7b65q> <div class="mb-12" data-astro-cid-kfn7b65q> <h2 class="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100" data-astro-cid-kfn7b65q>
Speaking Engagements
</h2> <p class="text-gray-600 dark:text-gray-400" data-astro-cid-kfn7b65q>
Conference talks, workshops, and meetup presentations
</p> </div> ${renderComponent($$result3, "EventListWithExpand", $$Eventlistwithexpand, { "events": processedEvents, "data-astro-cid-kfn7b65q": true })} </div>  <div class="mx-auto max-w-4xl mt-20" data-astro-cid-kfn7b65q> <div class="border-t border-gray-200 dark:border-slate-700 pt-16" data-astro-cid-kfn7b65q> <div class="mb-12" data-astro-cid-kfn7b65q> <h2 class="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100" data-astro-cid-kfn7b65q>
Other Media
</h2> <p class="text-gray-600 dark:text-gray-400" data-astro-cid-kfn7b65q>
Podcasts, interviews, articles, and recorded content
</p> </div> <div class="space-y-3" data-astro-cid-kfn7b65q> ${sortedMedia.length > 0 ? sortedMedia.map((media, index) => renderTemplate`${renderComponent($$result3, "MediaAccordion", $$MediaAccordion, { "media": media, "index": index, "data-astro-cid-kfn7b65q": true })}`) : renderTemplate`<p class="text-center text-gray-500 py-8" data-astro-cid-kfn7b65q>
Media content coming soon...
</p>`} </div> </div> </div>  <div class="mx-auto max-w-4xl mt-20 mb-12" data-astro-cid-kfn7b65q> <div class="bg-blue-50/50 dark:bg-slate-800/50 rounded-xl p-8 text-center border border-blue-100 dark:border-slate-700 shadow-sm" data-astro-cid-kfn7b65q> <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100" data-astro-cid-kfn7b65q>
Interested in Having Me Speak?
</h3> <p class="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto leading-relaxed" data-astro-cid-kfn7b65q>
I'm available for speaking engagements on topics including JavaScript fundamentals,
          Vue.js development, open source contribution, civic hacking, and building inclusive
          developer communities.
</p> <div class="flex flex-wrap gap-4 justify-center" data-astro-cid-kfn7b65q> <a href="/contact" class="cta-button inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900" data-astro-cid-kfn7b65q> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-kfn7b65q> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-astro-cid-kfn7b65q></path> </svg>
Get in Touch
</a> <a href="https://linkedin.com/in/nerando-johnson" target="_blank" rel="noopener noreferrer" class="cta-button inline-flex items-center px-6 py-3 border border-gray-200 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-700/50 hover:border-gray-400 dark:hover:border-slate-500 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900" data-astro-cid-kfn7b65q> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-kfn7b65q> <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" data-astro-cid-kfn7b65q></path> </svg>
Connect on LinkedIn
</a> </div> </div> </div> ` })) })} `;
}, "/Users/nerandojohnson/Documents/Dev/Projects/Portfolio_Pieces/astro_portfolio_v3/src/pages/speaking.astro", void 0);

const $$file = "/Users/nerandojohnson/Documents/Dev/Projects/Portfolio_Pieces/astro_portfolio_v3/src/pages/speaking.astro";
const $$url = "/speaking";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Speaking,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
