/* empty css                                 */
import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, b as renderTemplate, d as renderScript, r as renderComponent, u as unescapeHTML, F as Fragment } from '../chunks/astro/server_B70G4lE6.mjs';
import 'kleur/colors';
import { $ as $$Layout, b as $$SEO, a as $$Container } from '../chunks/Layout_BBkzXZMq.mjs';
import { $ as $$Sectionhead } from '../chunks/sectionhead_BTl6n8qk.mjs';
import 'clsx';
import { g as getGrowthStatusConfig, p as projects } from '../chunks/projects_DAjy_oTK.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://developingdvlpr.com");
const $$Projectcard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Projectcard;
  const { project } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card group relative overflow-hidden transition-all duration-300"> <!-- Project Image --> <div class="relative overflow-hidden"> <img${addAttribute(project.image.src || "/placeholder.svg", "src")}${addAttribute(project.image.alt, "alt")} class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"> <div class="absolute top-3 right-3"> <span class="tag tag-primary">${project.status}</span> </div> </div> <!-- Project Content --> <div class="p-4"> <!-- Project Title & Description --> <div class="mb-4"> <h3 class="text-xl font-bold mb-2" style="color: var(--text-primary)"> ${project.name} </h3> <p class="text-sm leading-relaxed" style="color: var(--text-secondary)"> ${project.description} </p> </div> <!-- Tags --> <div class="flex flex-wrap gap-2 mb-4"> ${project.tags.map((tag) => renderTemplate`<span class="tag tag-primary">${tag}</span>`)} </div> <!-- Metrics (if available) -->  <!-- Last Updated -->  <!-- Action Buttons --> <div class="flex gap-2"> ${project.caseStudyUrl && renderTemplate`<a${addAttribute(project.caseStudyUrl, "href")} class="btn-primary flex-1 text-center py-2 px-3 rounded-lg text-sm">
Case Study
</a>`} <a${addAttribute(project.github, "href")} target="_blank" rel="noopener noreferrer" class="btn-secondary py-2 px-3 rounded-lg text-sm flex items-center justify-center gap-1"> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path> </svg>
Github Repo
</a> ${project.website && renderTemplate`<a${addAttribute(project.website, "href")} target="_blank" rel="noopener noreferrer" class="btn-secondary py-2 px-3 rounded-lg text-sm flex items-center justify-center gap-1"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path> </svg>
Live Version
</a>`} </div> </div> </div>`;
}, "/Users/nerandojohnson/Documents/Dev/Projects/Portfolio_Pieces/astro_portfolio_v3/src/components/projectcard.astro", void 0);

const $$Astro$1 = createAstro("https://developingdvlpr.com");
const $$Learningprojectcard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Learningprojectcard;
  const { project } = Astro2.props;
  project.case_study || {};
  const growthStatus = project.growth_status ? getGrowthStatusConfig(project.growth_status) : null;
  return renderTemplate`${maybeRenderHead()}<div class="card group relative overflow-hidden transition-all duration-300"> <!-- Project Image --> <div class="relative overflow-hidden"> ${project.image && renderTemplate`<img${addAttribute(project.image.src, "src")}${addAttribute(project.image.alt, "alt")} class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">`} <!-- Growth Status Badge --> ${growthStatus && renderTemplate`<div class="absolute top-3 right-3"> <span${addAttribute(`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${growthStatus.color}`, "class")}> <span class="text-sm">${growthStatus.icon}</span> <span>${growthStatus.label}</span> </span> </div>`} </div> <!-- Project Content --> <div class="p-6"> <!-- Project Title & Description --> <div class="mb-4"> <h3 class="text-xl font-bold mb-2" style="color: var(--text-primary)"> ${project.name || project.title} </h3> ${project.description && renderTemplate`<p class="text-sm leading-relaxed" style="color: var(--text-secondary)"> ${project.description} </p>`} </div> <!-- Tags --> ${project.tags && renderTemplate`<div class="flex flex-wrap gap-2 mb-4"> ${project.tags.map((tag) => renderTemplate`<span class="tag tag-primary">${tag}</span>`)} </div>`} <!-- Metrics (if available) -->  <!-- Last Updated -->  <!-- Action Buttons --> <div class="flex gap-2 mb-2"> <a${addAttribute(`/learning-projects/${project.id}`, "href")} class="btn-primary flex-1 text-center py-2 px-3 rounded-lg text-sm">
View Details
</a> <!-- {
        project.caseStudyUrl && (
          <a
            href={project.caseStudyUrl}
            class='flex-1 bg-blue-600 text-white text-center py-2 px-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors'>
            Case Study
          </a>
        )
      } --> ${project.github && renderTemplate`<a${addAttribute(project.github, "href")} target="_blank" rel="noopener noreferrer" class="btn-secondary py-2 px-3 rounded-lg text-sm flex items-center justify-center gap-1"> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path> </svg>
Github Repo
</a>`} ${project.demo && renderTemplate`<a${addAttribute(project.demo, "href")} target="_blank" rel="noopener noreferrer" class="btn-secondary py-2 px-3 rounded-lg text-sm flex items-center justify-center gap-1"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path> </svg>
Live Version
</a>`} </div> <!-- Last Updated -->  <!-- Learning-Specific Details --> <!-- <div class='border-t border-gray-200 dark:border-gray-700 pt-4 mt-4'>
      {
        caseStudy.images && caseStudy.images.length > 1 && (
          <div class='mb-4 flex flex-wrap gap-4'>
            {caseStudy.images
              .slice(1)
              .map((img, idx) =>
                img.endsWith('.mp4') ||
                (img.startsWith('http') && img.includes('youtu')) ? (
                  <video src={img} controls class='w-40 h-24 rounded-lg' />
                ) : (
                  <img
                    src={img}
                    alt={project.title + ' extra image ' + (idx + 1)}
                    class='w-40 h-24 object-cover rounded-lg'
                  />
                )
              )}
          </div>
        )
      }
      <p class='mb-2 text-gray-700 dark:text-gray-300'>
        <strong>Overview:</strong>
        {caseStudy.overview}
      </p>
      <p class='mb-2 text-gray-700 dark:text-gray-300'>
        <strong>Problem:</strong>
        {caseStudy.problem}
      </p>
      <p class='mb-2 text-gray-700 dark:text-gray-300'>
        <strong>Audience:</strong>
        {caseStudy.audience}
      </p>
      <div class='mb-2'>
        <strong class='text-gray-800 dark:text-gray-200'
          >Key Features / User Stories:</strong
        >
        <ul class='list-disc list-inside text-gray-700 dark:text-gray-300'>
          {caseStudy.features && caseStudy.features.map((f) => <li>{f}</li>)}
        </ul>
      </div>
      <div class='mb-2'>
        <strong class='text-gray-800 dark:text-gray-200'>Tech Stack:</strong>
        <span class='text-gray-700 dark:text-gray-300'>
          {
            Array.isArray(caseStudy.tech_stack)
              ? caseStudy.tech_stack.join(', ')
              : Object.values(caseStudy.tech_stack).flat().join(', ')
          }</span
        >
      </div>
      <p class='mb-2 text-gray-700 dark:text-gray-300'>
        <strong>Timeline:</strong>
        {caseStudy.timeline}
      </p>
      <div class='mb-2'>
        <strong class='text-gray-800 dark:text-gray-200'>Key Changes:</strong>
        <ul class='list-disc list-inside text-gray-700 dark:text-gray-300'>
          {
            caseStudy.key_changes &&
              caseStudy.key_changes.map((c) => <li>{c}</li>)
          }
        </ul>
      </div>
      <div class='mb-2'>
        <strong class='text-gray-800 dark:text-gray-200'>Stuff I Learnt:</strong
        >
        <ul class='list-disc list-inside text-gray-700 dark:text-gray-300'>
          {caseStudy.learnings && caseStudy.learnings.map((l) => <li>{l}</li>)}
        </ul>
      </div>
      <p class='mb-2 text-gray-700 dark:text-gray-300'>
        <strong>Results & Impact:</strong>
        {caseStudy.results}
      </p>
      <div class='mb-2'>
        <strong class='text-gray-800 dark:text-gray-200'
          >Tester Feedback:</strong
        >
        <ul class='list-disc list-inside text-gray-700 dark:text-gray-300'>
          {
            caseStudy.feedback &&
              caseStudy.feedback.map((fb) => (
                <li>
                  "{fb.quote}" — {fb.author}
                </li>
              ))
          }
        </ul>
      </div>
      <div>
        <strong class='text-gray-800 dark:text-gray-200'
          >Future Improvements:</strong
        >
        <ul class='list-disc list-inside text-gray-700 dark:text-gray-300'>
          {
            caseStudy.improvements &&
              caseStudy.improvements.map((i) => <li>{i}</li>)
          }
        </ul>
      </div>
    </div> --> </div> </div>`;
}, "/Users/nerandojohnson/Documents/Dev/Projects/Portfolio_Pieces/astro_portfolio_v3/src/components/learningprojectcard.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://developingdvlpr.com");
const $$Portfolio = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Portfolio;
  const allProjects = [
    ...projects.showcase_projects.filter(
      (project) => project.visible !== false
    ),
    ...projects.completed_projects.filter(
      (project) => project.visible !== false
    )
  ];
  const allTags = [
    ...new Set(allProjects.flatMap((project) => project.tags))
  ].sort();
  const seoConfig = {
    title: "Portfolio Projects | Nerando Johnson - Software Developer Case Studies",
    description: "Explore detailed case studies of technical projects, problem-solving processes, and real-world impact by Nerando Johnson. Vue3, React, and JavaScript development projects.",
    canonical: "https://developingdvlpr.com/portfolio",
    openGraph: {
      basic: {
        title: "Portfolio Projects | Nerando Johnson",
        type: "website",
        image: "https://developingdvlpr.com/images/og-portfolio.jpg",
        url: "https://developingdvlpr.com/portfolio"
      },
      optional: {
        description: "Explore detailed case studies of technical projects, problem-solving processes, and real-world impact. Vue3, React, JavaScript development.",
        siteName: "Developing Developer",
        locale: "en_US"
      }
    },
    twitter: {
      card: "summary_large_image",
      site: "@nerajno",
      creator: "@nerajno",
      title: "Portfolio Projects | Nerando Johnson",
      description: "Explore detailed case studies of technical projects by Nerando Johnson. Vue3, React, and JavaScript development.",
      image: "https://developingdvlpr.com/images/og-portfolio.jpg"
    },
    extend: {
      meta: [
        { name: "keywords", content: "portfolio, projects, case studies, developer, Nerando Johnson, Vue3, React, JavaScript, front-end development, software development" },
        { name: "author", content: "Nerando Johnson" },
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
    "@type": "CollectionPage",
    name: "Portfolio Projects - Nerando Johnson",
    description: "A collection of software development projects with detailed case studies showcasing problem-solving, technical decisions, and measurable outcomes.",
    url: "https://developingdvlpr.com/portfolio",
    author: {
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
        "Software Architecture",
        "Web Development"
      ],
      sameAs: [
        "https://github.com/Nerajno",
        "https://twitter.com/nerajno",
        "https://www.linkedin.com/in/nerando-johnson/"
      ]
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: allProjects.slice(0, 10).map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          name: project.title,
          description: project.description,
          url: `https://developingdvlpr.com/case-study/${project.id}`,
          author: {
            "@type": "Person",
            name: "Nerando Johnson"
          }
        }
      }))
    }
  };
  return renderTemplate(_a || (_a = __template(["", ' <!-- Structured Data for GEO --> <script type="application/ld+json">', "<\/script> ", "  ", ""])), renderComponent($$result, "AstroSEO", $$SEO, { "title": seoConfig.title, "description": seoConfig.description, "canonical": seoConfig.canonical, "openGraph": seoConfig.openGraph, "twitter": seoConfig.twitter, "extend": seoConfig.extend, "data-astro-cid-hcjuqwdu": true }), unescapeHTML(JSON.stringify(structuredData)), renderComponent($$result, "Layout", $$Layout, { "title": "Projects", "data-astro-cid-hcjuqwdu": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-hcjuqwdu": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Sectionhead", $$Sectionhead, { "data-astro-cid-hcjuqwdu": true }, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`
A detailed breakdown of my technical projects, showcasing the
        problem-solving process, technical decisions, and measurable outcomes
        that demonstrate real-world impact.
` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`Projects with Case Studies` })}` })}  ${maybeRenderHead()}<div class="max-w-screen-lg mx-auto mt-8 mb-12" data-astro-cid-hcjuqwdu> <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border border-blue-100 dark:border-gray-600" data-astro-cid-hcjuqwdu> <h3 class="text-xl font-semibold mb-4 text-center text-gray-900 dark:text-white" data-astro-cid-hcjuqwdu>
Beyond Just Code: An Evidence and Impact Approach
</h3> <div class="grid md:grid-cols-3 gap-6" data-astro-cid-hcjuqwdu> <div class="text-center" data-astro-cid-hcjuqwdu> <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-3" data-astro-cid-hcjuqwdu> <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-hcjuqwdu> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" data-astro-cid-hcjuqwdu></path> </svg> </div> <h4 class="font-semibold text-gray-900 dark:text-white mb-2" data-astro-cid-hcjuqwdu>
Problem-Solving Process
</h4> <p class="text-gray-600 dark:text-gray-300 text-sm" data-astro-cid-hcjuqwdu>
How I approach complex challenges and make technical decisions.
</p> </div> <div class="text-center" data-astro-cid-hcjuqwdu> <div class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-3" data-astro-cid-hcjuqwdu> <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-hcjuqwdu> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" data-astro-cid-hcjuqwdu></path> </svg> </div> <h4 class="font-semibold text-gray-900 dark:text-white mb-2" data-astro-cid-hcjuqwdu>
Measurable Impact
</h4> <p class="text-gray-600 dark:text-gray-300 text-sm" data-astro-cid-hcjuqwdu>
Real metrics and outcomes that demonstrate value delivered.
</p> </div> <div class="text-center" data-astro-cid-hcjuqwdu> <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-3" data-astro-cid-hcjuqwdu> <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-hcjuqwdu> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" data-astro-cid-hcjuqwdu></path> </svg> </div> <h4 class="font-semibold text-gray-900 dark:text-white mb-2" data-astro-cid-hcjuqwdu>
Technical Depth
</h4> <p class="text-gray-600 dark:text-gray-300 text-sm" data-astro-cid-hcjuqwdu>
Architecture decisions, trade-offs, and lessons learned
</p> </div> </div> </div> </div>  <div class="max-w-screen-lg mx-auto mt-8 mb-8" data-astro-cid-hcjuqwdu> <h3 class="text-lg font-semibold mb-4 text-center" data-astro-cid-hcjuqwdu>
Filter by Technology:
</h3> <div class="flex flex-wrap justify-center gap-2 mb-4" data-astro-cid-hcjuqwdu> <!-- Dynamic tag buttons --> ${allTags.map((tag) => renderTemplate`<button class="tag-filter-btn px-4 py-2 rounded-xl border-2 border-gray-300 text-slate-500 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"${addAttribute(tag.toLowerCase(), "data-tag")} data-astro-cid-hcjuqwdu> ${tag} </button>`)} </div> <!-- Clear filters button --> <div class="text-center" data-astro-cid-hcjuqwdu> <button id="clear-filters" class="px-6 py-2 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-100 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-900/50 transition-colors duration-300" data-astro-cid-hcjuqwdu>
Clear All Filters
</button> </div> </div>  <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12" id="projects-grid" data-astro-cid-hcjuqwdu> ${allProjects.map((project) => renderTemplate`<div class="project-item"${addAttribute(project.tags.map((tag) => tag.toLowerCase()).join(","), "data-tags")} data-astro-cid-hcjuqwdu> ${renderComponent($$result3, "Projectcard", $$Projectcard, { "project": project, "data-astro-cid-hcjuqwdu": true })} </div>`)} </div>  <div class="max-w-screen-lg mx-auto mt-10 text-center" data-astro-cid-hcjuqwdu> <button id="toggle-learning-showcase" class="px-6 py-2 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-100 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-900/50 transition-colors duration-300 mb-6" data-astro-cid-hcjuqwdu>
Show Learning Projects
</button> </div>  <div class="max-w-screen-lg mx-auto mt-4" id="learning-showcase-section" style="display: none;" data-astro-cid-hcjuqwdu> ${renderComponent($$result3, "Sectionhead", $$Sectionhead, { "data-astro-cid-hcjuqwdu": true }, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`
A collection of smaller projects built for learning new technologies,
          patterns, or new concepts. Each project details the motivation, process, and
          lessons learned.
` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`Learning Projects Showcase` })}` })} <div class="grid md:grid-cols-2 gap-10 mt-10" data-astro-cid-hcjuqwdu> ${projects.learning_projects.filter((project) => project.visible !== false).map((project) => renderTemplate`${renderComponent($$result3, "Learningprojectcard", $$Learningprojectcard, { "project": project, "data-astro-cid-hcjuqwdu": true })}`)} </div> </div>  <div class="max-w-screen-lg mx-auto mt-10 text-center" data-astro-cid-hcjuqwdu> <div class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700" data-astro-cid-hcjuqwdu> <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4" data-astro-cid-hcjuqwdu>
Want to See More?
</h3> <p class="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto" data-astro-cid-hcjuqwdu>
Each project represents the process of problem-solving, technical
          decision-making, and iterative improvement ( This applies to learning projects and Learnt). The case studies dive deep
          into the "why" and "how" behind each solution.
</p> <div class="flex justify-center gap-4" data-astro-cid-hcjuqwdu> <a href="/contact" class="bg-blue-600 dark:bg-blue-800 text-white dark:text-slate-300 px-6 py-3 rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-900 transition-color" data-astro-cid-hcjuqwdu>
Let's Discuss My Work
</a> <a href="/about" class="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors" data-astro-cid-hcjuqwdu>
Learn About My Process
</a> <a href="https://learnt.developingdvlpr.com/" class="bg-blue-600 dark:bg-blue-800 text-white dark:text-slate-300 px-6 py-3 rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-900 transition-colors" rel="noopener noreferrer" target="_blank" aria-label="Visit Learnt website (opens in new tab)" title="Visit Learnt" data-astro-cid-hcjuqwdu>
Learnt ~ My Learning Project Collection
</a> </div> </div> </div> ` })} ` }), renderScript($$result, "/Users/nerandojohnson/Documents/Dev/Projects/Portfolio_Pieces/astro_portfolio_v3/src/pages/portfolio.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/nerandojohnson/Documents/Dev/Projects/Portfolio_Pieces/astro_portfolio_v3/src/pages/portfolio.astro", void 0);

const $$file = "/Users/nerandojohnson/Documents/Dev/Projects/Portfolio_Pieces/astro_portfolio_v3/src/pages/portfolio.astro";
const $$url = "/portfolio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Portfolio,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
