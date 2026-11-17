// Decision records (#460). Each entry is sourced from an issue, PR, or commit in this repo;
// add new records here, newest first. Status: accepted | superseded.
const repo = "https://github.com/Nerajno/portfolio_v3";

const decisions = [
  {
    id: "adr-002",
    title: "One token spine, four dialects",
    artifact: "portfolio_v3",
    status: "accepted",
    date: "2026-11",
    context:
      "Each site carried its own CSS, and the redesign was heading toward a second bespoke palette (Emerald + Amber). Four surfaces (portfolio, learn, teach, build) needed one consistent, accessible base.",
    options: "Keep per-site CSS · Emerald + Amber palette for this site only · One shared token layer (Dialects)",
    decision:
      "Adopt Dialects: one token layer all four surfaces consume. Class names stay the same on every surface and in both colour modes; only five dial variables change per surface.",
    consequences:
      "Pinned dependency on a tagged release; missing tokens are added upstream, not here. The legacy palette files were deleted and the Emerald PR closed. Contrast is checked with axe per surface and mode.",
    sources: [
      { label: "#423 proposal", href: `${repo}/issues/423` },
      { label: "#464 adoption", href: `${repo}/pull/464` },
      { label: "#465 legacy removed", href: `${repo}/pull/465` },
    ],
  },
  {
    id: "adr-001",
    title: "Native <details> over JS accordions for collapsible home sections",
    artifact: "portfolio_v3",
    status: "superseded",
    supersededBy: { label: "#475 home rebuild", href: `${repo}/pull/475` },
    date: "2026-11",
    context:
      "The homepage opened with long Features and Technologies sections, pushing the hero's message down.",
    options: "Leave sections expanded · JS accordion component · Native <details>/<summary>",
    decision: "Wrap both sections in native <details>/<summary> so the page leads with the hero and sections expand on demand.",
    consequences:
      "No JavaScript; keyboard and screen-reader support come from the element, and content stays in the HTML for crawlers. Superseded when the home rebuild removed both sections.",
    sources: [{ label: "commit c5fc7c2", href: `${repo}/commit/c5fc7c2` }],
  },
];

export default decisions;
