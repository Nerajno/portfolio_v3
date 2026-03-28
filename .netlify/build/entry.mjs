import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_lDez9wN8.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/send-email.astro.mjs');
const _page4 = () => import('./pages/api/views/_slug_.astro.mjs');
const _page5 = () => import('./pages/blog/_slug_.astro.mjs');
const _page6 = () => import('./pages/blog.astro.mjs');
const _page7 = () => import('./pages/case-study/_slug_.astro.mjs');
const _page8 = () => import('./pages/contact.astro.mjs');
const _page9 = () => import('./pages/digital_garden.astro.mjs');
const _page10 = () => import('./pages/events/_id_.astro.mjs');
const _page11 = () => import('./pages/learning-plot/_slug_.astro.mjs');
const _page12 = () => import('./pages/learning-projects/_slug_.astro.mjs');
const _page13 = () => import('./pages/portfolio.astro.mjs');
const _page14 = () => import('./pages/pricing.astro.mjs');
const _page15 = () => import('./pages/robots.txt.astro.mjs');
const _page16 = () => import('./pages/series/_seriesname_.astro.mjs');
const _page17 = () => import('./pages/speaking.astro.mjs');
const _page18 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/send-email.ts", _page3],
    ["src/pages/api/views/[slug].ts", _page4],
    ["src/pages/blog/[slug].astro", _page5],
    ["src/pages/blog.astro", _page6],
    ["src/pages/case-study/[slug].astro", _page7],
    ["src/pages/contact.astro", _page8],
    ["src/pages/digital_garden.astro", _page9],
    ["src/pages/events/[id].astro", _page10],
    ["src/pages/learning-plot/[slug].astro", _page11],
    ["src/pages/learning-projects/[slug].astro", _page12],
    ["src/pages/portfolio.astro", _page13],
    ["src/pages/pricing.astro", _page14],
    ["src/pages/robots.txt.ts", _page15],
    ["src/pages/series/[seriesName].astro", _page16],
    ["src/pages/speaking.astro", _page17],
    ["src/pages/index.astro", _page18]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "948b8902-2a6a-4c04-bdc4-7370439e56e2"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
