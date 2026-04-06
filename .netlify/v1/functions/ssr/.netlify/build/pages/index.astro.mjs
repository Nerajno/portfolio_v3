/* empty css                                 */
import { a as createComponent, m as maybeRenderHead, r as renderComponent, u as unescapeHTML, e as addAttribute, b as renderTemplate, c as createAstro, s as spreadAttributes, f as renderSlot } from '../chunks/astro/server_BTznwTSM.mjs';
import 'kleur/colors';
import { c as $$Icon, $ as $$Layout, a as $$Container, b as $$SEO } from '../chunks/Layout_DBvnNXX8.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { a as $$Picture } from '../chunks/_astro_assets_CKSOT1eQ.mjs';
import { h as heroImage } from '../chunks/Banner_for_site_TfOznMJm.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Features = createComponent(($$result, $$props, $$slots) => {
  const features = [
    {
      title: "Problem Solver",
      description: "Lets take a look with extensive full-stack development experience across diverse projects and technologies, to see how we can collaborate to solve problems (even the complicated ones). My skills range from building simple web sites to working on award-winning ad technologies. This showcases adaptability in tackling various challenges.",
      icon: "bx:bxs-briefcase",
      skills: ["Full-stack development", "Problem solving", "Adaptability"]
    },
    {
      title: "Tech Community Builder",
      description: "Beyond growing my technical expertise, I have been committed to mentoring and civic engagement demonstrates a holistic approach to problem-solving in both professional and community contexts. I have had a hand in the Atlanta tech community, in one way, shape or form, for the last 5+ years.",
      icon: "bx:bxs-window-alt",
      skills: ["Mentoring", "Community leadership", "Civic engagement"]
    },
    {
      title: "Tech Speaker",
      description: 'I have been a speaker at tech conferences and meetups. I have been granted the opportunity to share and grow my knowledge and skills on various tech conferences and meetups, examples of such includes, Vue Conf 2024, ConnectTech 2023 among <a href="/speaking" class="underline hover:text-blue-600 dark:hover:text-blue-400" aria-label="View all speaking engagements">other events.</a>',
      icon: "bx:bxs-data",
      skills: ["Public speaking", "Knowledge sharing", "Vue.js expertise"]
    },
    {
      title: "Learner and Facilitator",
      description: "I am a product and results-driven learner; simply put, I learn best by building. Since entering this field, I have primarily focused on hands-on, practical learning. I have also made it a priority to become an effective knowledge transfer agent, sharing my technical skillset with others.",
      icon: "bx:bxs-bot",
      skills: ["Continuous learning", "Teaching", "Knowledge transfer"]
    },
    {
      title: "Tech Consultant",
      description: "Over the past 5 years, I have worked on various tech projects providing solutions to small and medium sized companies, in a range of roles all tooled to solving customer facing problems.",
      icon: "bx:bxs-file-find",
      skills: ["Consulting", "Client solutions", "Business analysis"]
    },
    {
      title: "Tinker",
      description: "Want to figure out the smallest Linux distro that still offers a decent experience? I can help! With sufficient experience in the software development space, I can assist in solving most problems or knowing where to look for help.",
      icon: "bx:bxs-user",
      skills: ["Linux systems", "System optimization", "Technical troubleshooting"]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="mt-16 md:mt-0" aria-labelledby="features-heading" itemscope itemtype="https://schema.org/Person"> <header class="mb-16"> <h2 id="features-heading" class="text-4xl lg:text-5xl font-bold lg:tracking-tight dark:text-white" itemprop="jobTitle">
Current Craft Characteristics
</h2> <p class="text-lg mt-4 text-slate-600 dark:text-slate-400" itemprop="description">
Writing code moved from an interest to a passionate hobby to my current
      career/craft. I am currently working in the front-end space as a
<span itemprop="jobTitle">junior front-end developer</span> focusing on
<span itemprop="knowsAbout">Vue and TypeScript</span>. My skills/ toolset include:
</p> </header> <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-8 md:gap-16" role="list" aria-label="Professional skills and characteristics"> ${features.map((item, index) => renderTemplate`<article class="flex flex-col gap-4 items-start group" role="listitem" itemscope itemtype="https://schema.org/Skill"> <header class="flex items-center gap-3"> <div class="bg-slate-100 dark:bg-slate-800 rounded-full p-3 flex items-center justify-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": item.icon, "class": "text-slate-500 dark:text-slate-300 h-[1.5em] w-[1.5em]", "aria-hidden": "true" })} </div> <h3 class="font-semibold text-lg dark:text-white" itemprop="name"> ${item.title} </h3> </header> <p class="text-slate-500 dark:text-slate-400 leading-relaxed" itemprop="description">${unescapeHTML(item.description)}</p> <!-- Hidden structured data for skills --> ${item.skills.map((skill) => renderTemplate`<meta itemprop="skills"${addAttribute(skill, "content")}>`)} </article>`)} </div> <!-- Additional structured data --> <meta itemprop="workLocation" content="Atlanta, Georgia"> <meta itemprop="hasOccupation" content="Software Developer"> </section>`;
}, "/Users/nerandojohnson/Documents/Dev/Projects/Portfolio_Pieces/astro_portfolio_v3/src/components/features.astro", void 0);

const $$Astro$2 = createAstro("https://developingdvlpr.com");
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Link;
  const {
    href,
    block,
    size = "lg",
    style = "primary",
    class: className,
    ...rest
  } = Astro2.props;
  const sizes = {
    lg: "px-5 py-2.5",
    md: "px-4 py-2"
  };
  const styles = {
    outline: "bg-white border-2 border-black hover:bg-gray-100 text-black ",
    primary: "bg-black text-white hover:bg-gray-800  border-2 border-transparent",
    inverted: "bg-white text-black   border-2 border-transparent",
    muted: "bg-gray-100 hover:bg-gray-200   border-2 border-transparent"
  };
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${spreadAttributes(rest)}${addAttribute([
    "rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200",
    block && "w-full",
    sizes[size],
    styles[style],
    className
  ], "class:list")}>${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/nerandojohnson/Documents/Dev/Projects/Portfolio_Pieces/astro_portfolio_v3/src/components/ui/link.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24" role="main" aria-labelledby="hero-heading"> <div class="py-6 md:order-1"> ${renderComponent($$result, "Picture", $$Picture, { "src": heroImage, "alt": "Professional headshot of Nerando, a software developer specializing in Vue.js and JavaScript front-end development", "widths": [200, 400, 600], "sizes": "(max-width: 800px) 100vw, 620px", "loading": "eager", "format": "avif" })} </div> <div itemscope itemtype="https://schema.org/Person"> <h1 id="hero-heading" class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter dark:text-white" itemprop="name">
Hi, I am Nerando
</h1> <h2 class="sr-only">Software Developer & Frontend Specialist</h2> <p class="text-medium mt-4 text-black-400 dark:text-gray-300 max-w-xl" itemprop="description">
I am a <span itemprop="jobTitle">software developer</span> currently working in the front-end in
<span itemprop="knowsAbout">Vue and JavaScript</span> space. Previously worked on the
<span itemprop="knowsAbout">MERN stack</span> with a little
<span itemprop="knowsAbout">PM and DevOps</span> skills thrown in. Outside of tech, I am a bookworm with a spatula
      among other things.
</p> <div class="mt-6 flex flex-col sm:flex-row gap-3"> ${renderComponent($$result, "Link", $$Link, { "href": "https://garden.developingdvlpr.com/note/crops-growing", "target": "_blank", "rel": "noopener noreferrer", "class": "text-slate-300 hover:font-bold bg-slate-900 dark:text-slate-700 dark:hover:text-slate-500 dark:bg-slate-200 flex gap-1 items-center justify-center", "aria-label": "View what Nerando is currently learning in his digital garden" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "class": "text-slate-300 hover:text-slate-600 dark:text-slate-700 dark:hover:text-slate-500 w-5 h-5", "name": "bx:bxs-cloud-download", "aria-hidden": "true" })}
Currently Learning
` })} ${renderComponent($$result, "Link", $$Link, { "style": "outline", "href": "https://garden.developingdvlpr.com/note/stuff-building-2025", "target": "_blank", "rel": "noopener noreferrer", "class": "flex gap-1 items-center justify-center border dark:hover:bg-gray-700 border-slate-500 dark:border-slate-300 dark:text-slate-300 hover:text-slate-600 hover:font-bold dark:bg-gray-600", "aria-label": "View what Nerando is currently building in 2025" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "class": "text-slate-500 dark:text-slate-300 w-4 h-4", "name": "bx:bxl-github", "aria-hidden": "true" })}
Currently Building
` })} </div> <!-- Hidden structured data for better SEO --> <meta itemprop="url" content="https://developingdvlpr.com"> <meta itemprop="sameAs" content="https://garden.developingdvlpr.com"> </div> </main>`;
}, "/Users/nerandojohnson/Documents/Dev/Projects/Portfolio_Pieces/astro_portfolio_v3/src/components/hero.astro", void 0);

const $$Astro$1 = createAstro("https://developingdvlpr.com");
const $$Logos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Logos;
  const technologies = [
    { name: "simple-icons:vuedotjs", label: "Vue.js", color: "#4FC08D", darkColor: "#66D99A", category: "Frontend Framework", experience: "Advanced" },
    { name: "simple-icons:react", label: "React", color: "#61DAFB", darkColor: "#7EC0EE", category: "Frontend Framework", experience: "Intermediate" },
    { name: "simple-icons:javascript", label: "JavaScript", color: "#F7DF1E", darkColor: "#FFEA00", category: "Programming Language", experience: "Advanced" },
    { name: "simple-icons:ruby", label: "Ruby", color: "#CC342D", darkColor: "#E55044", category: "Programming Language", experience: "Intermediate" },
    { name: "simple-icons:rubyonrails", label: "Ruby on Rails", color: "#D30001", darkColor: "#FF4433", category: "Backend Framework", experience: "Intermediate" },
    { name: "simple-icons:vercel", label: "Vercel", color: "#000000", darkColor: "#FFFFFF", category: "Deployment Platform", experience: "Intermediate" },
    { name: "simple-icons:astro", label: "Astro", color: "#BC52EE", darkColor: "#D077FF", category: "Static Site Generator", experience: "Advanced" },
    { name: "simple-icons:python", label: "Python", color: "#3776AB", darkColor: "#508AC9", category: "Programming Language", experience: "Intermediate" },
    { name: "simple-icons:typescript", label: "TypeScript", color: "#3178C6", darkColor: "#4A90E2", category: "Programming Language", experience: "Advanced" },
    { name: "simple-icons:mongodb", label: "MongoDB", color: "#47A248", darkColor: "#5CA95F", category: "Database", experience: "Intermediate" },
    { name: "simple-icons:confluence", label: "Confluence", color: "#172B4D", darkColor: "#B0B8C4", category: "Documentation Tool", experience: "Intermediate" },
    { name: "simple-icons:netlify", label: "Netlify", color: "#00C7B7", darkColor: "#00E0D0", category: "Deployment Platform", experience: "Intermediate" },
    { name: "simple-icons:git", label: "Git", color: "#F05032", darkColor: "#FF6B4A", category: "Version Control", experience: "Advanced" },
    { name: "simple-icons:nodedotjs", label: "Node.js", color: "#339933", darkColor: "#4CCB4C", category: "Runtime Environment", experience: "Advanced" },
    { name: "simple-icons:asana", label: "Asana", color: "#273347", darkColor: "#D1D5DB", category: "Project Management", experience: "Intermediate" },
    { name: "simple-icons:figma", label: "Figma", color: "#F24E1E", darkColor: "#FF6B35", category: "Design Tool", experience: "Intermediate" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="mt-24 text-center" aria-labelledby="technologies-heading" itemscope itemtype="https://schema.org/Person"> <header> <h2 id="technologies-heading" class="text-xl font-semibold text-slate-700 dark:text-slate-200">
Technologies & Tools I've Worked With
</h2> <p class="sr-only">
A comprehensive list of programming languages, frameworks, tools, and platforms
      that Nerando has experience with as a full-stack developer.
</p> </header> <div class="flex gap-6 md:gap-8 flex-wrap items-center justify-center mt-10 max-w-4xl mx-auto" role="list" aria-label="Technology stack and tools"> ${technologies.map((tech) => {
    const iconStyle = `color: ${tech.color};`;
    const labelStyle = `color: ${tech.darkColor || tech.color};`;
    return renderTemplate`<div class="group flex flex-col items-center gap-2 p-3 rounded-lg transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-800/70 hover:scale-105 transform" role="listitem" itemscope itemtype="https://schema.org/Skill"> <!-- Icon --> ${renderComponent($$result, "Icon", $$Icon, { "name": tech.name, "style": iconStyle, "class": "h-[2em] w-[2em] transition-colors duration-300 group-hover:scale-110", "aria-hidden": "true" })} <!-- Label --> <span${addAttribute(labelStyle, "style")} class="text-sm font-medium transition-all duration-300 opacity-0 group-hover:opacity-100 px-2 py-0.5 rounded-md group-hover:bg-white/20 dark:group-hover:bg-black/20 text-center max-w-[80px]" itemprop="name"${addAttribute(`${tech.label} - ${tech.category}, ${tech.experience} level`, "aria-label")}> ${tech.label} </span> <!-- Hidden structured data --> <meta itemprop="skillType"${addAttribute(tech.category, "content")}> <meta itemprop="proficiencyLevel"${addAttribute(tech.experience, "content")}> <meta itemprop="description"${addAttribute(`${tech.experience} level experience with ${tech.label}, a ${tech.category}`, "content")}> </div>`;
  })} </div> <!-- Additional structured data for skills overview --> <div class="sr-only" itemprop="hasSkill"> <span itemprop="name">Frontend Development</span> <span itemprop="name">Backend Development</span> <span itemprop="name">Full Stack Development</span> <span itemprop="name">JavaScript Development</span> <span itemprop="name">Vue.js Development</span> <span itemprop="name">TypeScript Development</span> <span itemprop="name">Node.js Development</span> </div> <!-- Hidden keyword-rich content for SEO --> <div class="sr-only"> <p>
Nerando is proficient in modern web development technologies including frontend frameworks like Vue.js and React among other things,
      backend technologies like Node.js and Ruby on Rails, databases like MongoDB, and deployment platforms like Vercel and Netlify.
      Experience spans across JavaScript, TypeScript, Python, and Ruby programming languages with expertise in full-stack development.
</p> </div> </section>`;
}, "/Users/nerandojohnson/Documents/Dev/Projects/Portfolio_Pieces/astro_portfolio_v3/src/components/logos.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://developingdvlpr.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const seoConfig = {
    title: "Nerando Johnson - Software Developer | Vue3 Specialist | Tech Community Organizer in Atlanta",
    description: "Welcome to Nerando Johnson's portfolio. Atlanta-based software developer specializing in Vue3, JavaScript, and front-end development. Explore my digital garden, projects, technical insights, and community contributions. Available for consulting, mentoring, and collaboration.",
    canonical: "https://developingdvlpr.com",
    openGraph: {
      basic: {
        title: "Nerando Johnson - Software Developer & Vue3 Specialist in Atlanta",
        type: "website",
        image: "https://developingdvlpr.com/assets/Banner_for_site.png",
        url: "https://developingdvlpr.com"
      },
      optional: {
        description: "Portfolio of Nerando Johnson, a junior software developer in Atlanta specializing in Vue3 and modern JavaScript. Discover projects, technical writings, digital garden, and professional services.",
        siteName: "Developing Developer",
        locale: "en_US"
      }
    },
    twitter: {
      card: "summary_large_image",
      site: "@nerajno",
      creator: "@nerajno",
      title: "Nerando Johnson - Software Developer | Vue3 Specialist",
      description: "Atlanta-based developer specializing in Vue3 & JavaScript. Tech community organizer, mentor, and consultant. Explore my portfolio and digital garden.",
      image: "https://developingdvlpr.com/assets/Banner_for_site.png"
    },
    extend: {
      meta: [
        { name: "author", content: "Nerando Johnson" },
        {
          name: "keywords",
          content: "Nerando Johnson, software developer Atlanta, Vue3 developer, JavaScript developer, front-end developer, web development, digital garden, tech community organizer, developer mentor, Atlanta tech community, software consultant, Vue3 specialist, React developer, modern JavaScript, portfolio"
        },
        { name: "robots", content: "index, follow" },
        { property: "og:locale", content: "en_US" },
        { name: "theme-color", content: "#1e293b" },
        { name: "geo.region", content: "US-GA" },
        { name: "geo.placename", content: "Atlanta" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        // GEO-specific meta tags
        { name: "classification", content: "Business" },
        { name: "category", content: "Software Development" },
        { name: "coverage", content: "Worldwide" },
        { name: "distribution", content: "Global" },
        { name: "rating", content: "General" }
      ]
    }
  };
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://developingdvlpr.com/#nerando-johnson",
    name: "Nerando Johnson",
    givenName: "Nerando",
    familyName: "Johnson",
    alternateName: "nerajno",
    url: "https://developingdvlpr.com",
    image: "https://developingdvlpr.com/assets/Banner_for_site.png",
    jobTitle: "Software Developer",
    description: "Software developer specializing in Vue3 and front-end development, tech community organizer, mentor, and consultant based in Atlanta, Georgia.",
    email: "nerando@developingdvlpr.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Atlanta",
      addressRegion: "GA",
      addressCountry: "US"
    },
    alumniOf: {
      "@type": "Organization",
      name: "General Assembly"
    },
    knowsAbout: [
      "Vue3",
      "JavaScript",
      "Front-end Development",
      "Web Development",
      "React",
      "TypeScript",
      "Astro",
      "Software Architecture",
      "Mentoring",
      "Community Organization"
    ],
    sameAs: [
      "https://www.linkedin.com/in/nerando-johnson/",
      "https://twitter.com/nerajno",
      "https://github.com/Nerajno",
      "https://calendly.com/nerandojohnsontech/consults",
      "https://garden.developingdvlpr.com/"
    ],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://developingdvlpr.com"
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Professional",
      email: "nerando@developingdvlpr.com",
      availableLanguage: ["English"],
      url: "https://developingdvlpr.com/contact"
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Software Developer",
      occupationLocation: {
        "@type": "City",
        name: "Atlanta"
      },
      skills: "Vue3, JavaScript, React, TypeScript, Front-end Development, Web Development"
    },
    owns: {
      "@type": "WebSite",
      name: "Developing Developer",
      url: "https://developingdvlpr.com",
      description: "Portfolio and digital garden showcasing software development projects, insights, and resources",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://developingdvlpr.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seoConfig.title }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["  ", '  <script type="application/ld+json">', "<\/script> ", " "])), renderComponent($$result2, "AstroSEO", $$SEO, { "title": seoConfig.title, "description": seoConfig.description, "canonical": seoConfig.canonical, "openGraph": seoConfig.openGraph, "twitter": seoConfig.twitter, "extend": seoConfig.extend }), unescapeHTML(JSON.stringify(structuredData)), renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, {})} ${renderComponent($$result3, "Features", $$Features, {})} ${renderComponent($$result3, "Logos", $$Logos, {})} ` })) })}`;
}, "/Users/nerandojohnson/Documents/Dev/Projects/Portfolio_Pieces/astro_portfolio_v3/src/pages/index.astro", void 0);

const $$file = "/Users/nerandojohnson/Documents/Dev/Projects/Portfolio_Pieces/astro_portfolio_v3/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
