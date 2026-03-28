import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, f as renderSlot, b as renderTemplate } from './astro/server_B70G4lE6.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://developingdvlpr.com");
const $$Sectionhead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Sectionhead;
  const { align = "center" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["mt-16", align === "center" && "text-center"], "class:list")}> <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight"> ${renderSlot($$result, $$slots["title"], renderTemplate`Title`)} </h1> <p class="text-lg mt-4" style="color: var(--text-muted)"> ${renderSlot($$result, $$slots["desc"], renderTemplate`Some description goes here`)} </p> </div>`;
}, "/Users/nerandojohnson/Documents/Dev/Projects/Portfolio_Pieces/astro_portfolio_v3/src/components/sectionhead.astro", void 0);

export { $$Sectionhead as $ };
