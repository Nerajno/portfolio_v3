---
draft: false
seoTitle: "Finding Your Route: Mastering Vue Router | Nerando Johnson"
seoDescription: "Learn how to add client-side routing to your Vue 3 app with Vue Router — route setup, dynamic segments, navigation guards, and the router-link component."
author: "Nerando Johnson"
title: "Finding Your Route: Mastering Vue Router"
snippet: "A single-page app without routing is just a page. In this article we wire up Vue Router, define routes, navigate with router-link and useRouter, and handle dynamic segments — so your Vue app can go anywhere."
image: {
    src: "/images/blog_covers/Vue3 Image.png",
    alt: "Vue.js logo on a light blue background with geometric shapes"
}
publishDate: "2026-04-22 00:00"
category: "Vue, JavaScript, Tutorials"
tags: [vue3, javascript, frontend, tutorial, vue-router, composition-api]
keywords: [Vue Router tutorial, Vue 3 routing, router-link, useRouter, useRoute, dynamic routes, navigation guards, Vue 3 SPA routing, Vue Router setup, Vue 3 tutorial]
series:
  name: "Vue 3 Fundamentals"
  order: 5

# GEO-Enhanced Fields
schema: {
  type: "TechArticle",
  about: "Client-side routing in Vue 3 using Vue Router — setup, dynamic segments, and navigation",
  genre: "Educational Tutorial",
  educationalLevel: "Beginner",
  teaches: ["Vue Router Installation", "Route Definition", "router-link", "useRouter", "useRoute", "Dynamic Route Segments", "Navigation Guards"],
  audience: {
    type: "ProfessionalAudience",
    audienceType: "Frontend Developers and JavaScript Learners"
  }
}

entities: {
  primary: ["Vue.js", "Vue 3", "Vue Router"],
  secondary: ["router-link", "router-view", "useRouter", "useRoute", "Dynamic Segments", "Navigation Guards"],
  people: ["Evan You"],
  organizations: ["Vue.js Core Team"],
  tools: ["Vue 3", "Vue Router", "Vite", "VS Code", "Volar"],
  concepts: ["Client-Side Routing", "Single-Page Application", "Dynamic Route Segments", "Programmatic Navigation", "Navigation Guards", "Nested Routes"]
}

contentStructure: {
  type: "Conceptual + Step-by-Step Tutorial",
  difficulty: "Beginner",
  timeToComplete: "10-12 minutes read",
  prerequisites: ["Basic HTML", "Basic JavaScript", "Article 2 — Your First Vue 3 App", "Article 3 — Reactivity in Vue 3"],
  outcomes: ["Install and configure Vue Router in a Vue 3 project", "Define static and dynamic routes", "Navigate with router-link and useRouter", "Read route params with useRoute", "Protect routes with navigation guards"]
}

semanticContext: {
  topic: "Adding client-side routing to a Vue 3 application with Vue Router",
  subtopics: ["createRouter and createWebHistory", "route definition objects", "router-view", "router-link", "useRouter push and replace", "useRoute params", "beforeEach guards"],
  relatedConcepts: ["React Router", "Next.js App Router", "History API", "SPA Navigation", "URL Parameters"],
  practicalApplication: true
}

citationMetadata: {
  citableAs: "Johnson, N. (2026). Finding Your Route: Mastering Vue Router",
  lastReviewed: "2026-04-15",
  version: "1.0",
  originalPublisher: "Nerando Johnson's Blog"
}

aiOptimization: {
  summaryPrompt: "This article introduces Vue Router to beginners building Vue 3 apps. It covers installation, defining a route config, adding router-view to the app shell, navigating with router-link and useRouter, reading dynamic segments with useRoute, and adding a simple beforeEach navigation guard.",
  keyTakeaways: [
    "Vue Router is the official routing library for Vue 3 and turns a single-page app into a multi-view experience",
    "Routes are defined as an array of objects mapping path strings to components",
    "router-view is the outlet where matched components render; router-link replaces anchor tags for navigation",
    "useRouter gives programmatic navigation (push, replace, back); useRoute exposes the current route's params and query",
    "Dynamic segments like /city/:id let one route handle many URLs — the param is read from useRoute().params",
    "Navigation guards like beforeEach run before every route change and can redirect or cancel navigation"
  ],
  technicalDepth: "low",
  codeExamples: true
}
---


## Finding Your Route: Mastering Vue Router

*Part 5 of the **Vue 3 Fundamentals** series — adding client-side routing to your Vue 3 app.*

---

A single-page app without routing is just a page.

You can build a lot with one view — but the moment your app needs a home screen, a detail view, a settings panel, or a 404 page, you need routing. Routing is what transforms a component tree into a navigable application.

Vue Router is Vue's official solution. It's tightly integrated with Vue's reactivity system, plays nicely with `<script setup>`, and gives you everything you need — from simple path matching to dynamic segments to navigation guards — without pulling in a third-party library.

Let's wire it up.

---

## What Vue Router Does

<img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2FqcHQza3VmMWJtNWt3azNmNTdxNDkzeHQya2YzNGd5cTZtZm04ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1oGXIfkeF4P4w3zPxk/giphy.gif" alt="Finding the right path" width="960" />

In a traditional multi-page site, clicking a link sends a new HTTP request and the browser loads a fresh HTML page. In a single-page app, the page never reloads. Vue Router intercepts navigation, matches the URL to a route config, and renders the matching component — all in the browser.

The URL still changes. The back button still works. Deep links still work. It just happens entirely on the client.

---

## Installing Vue Router

<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzU4MnFnajU1Z292dWptNnpkdjZtaTJ6ZHcxYWF1cG96Y3dmMGQzayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oDyDSmr7StLCBKucHM/giphy.gif" alt="Setting up the tools" width="960" />

If you scaffolded your project with `create-vue` and selected Vue Router during setup, it's already configured. If not, add it now:

```bash
npm install vue-router@4
```

Then create your router file at `src/router/index.js`:

```js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
```

And register it in `src/main.js`:

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
```

Two things to notice:
- `createWebHistory()` uses the HTML5 History API — clean URLs like `/about` instead of `/#/about`
- `.use(router)` makes Vue Router available everywhere in the app

---

## `router-view`: The Outlet

<img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnVxYnlwYjRhZWI1aTdncHJoZmFob3VqcXpzcmkyZmNud2FwMWZtcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ge91zAgmwUqLMqiH2c/giphy.gif" alt="The outlet where views render" width="960" />

Vue Router renders the matched component into a `<router-view />` tag. Think of it as a slot in your layout that gets swapped out depending on the current URL.

In `src/App.vue`:

```vue
<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>

  <router-view />
</template>
```

`<router-link>` renders as an `<a>` tag but intercepts the click to do client-side navigation. It also automatically adds an `active` class when the route matches — useful for highlighting the current nav item.

`<router-view />` is where the matched component appears. When you navigate to `/about`, the `AboutView` component renders here.

---

## Dynamic Route Segments

<img src="https://media0.giphy.com/media/xT0xeuOy2Fcl9vDGiA/giphy.gif" alt="Dynamic routes — one path, many destinations" width="960" />

Static routes are fine for pages that don't change. But most apps have detail pages — a city view, a user profile, a blog post. These need dynamic segments.

A colon (`:`) in a route path marks a dynamic segment:

```js
const routes = [
  { path: '/', component: HomeView },
  { path: '/city/:id', component: CityView },
]
```

Now `/city/atlanta`, `/city/new-york`, and `/city/seattle` all match the same route. The matched value is available inside `CityView` via `useRoute`:

```vue
<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const cityId = route.params.id   // 'atlanta', 'new-york', etc.
</script>

<template>
  <h1>Weather for {{ cityId }}</h1>
</template>
```

`useRoute()` returns a reactive object representing the current route. `route.params` holds the dynamic segments, `route.query` holds URL query params (`?unit=C`), and `route.path` is the full path string.

---

## Programmatic Navigation with `useRouter`

<img src="https://media0.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif" alt="Navigating programmatically" width="960" />

`router-link` covers declarative navigation. For code-driven navigation — after a form submit, after an API call, on a button click — use `useRouter`:

```vue
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goToCity(id) {
  router.push(`/city/${id}`)
}

function goBack() {
  router.back()
}
</script>

<template>
  <button @click="goToCity('seattle')">View Seattle</button>
  <button @click="goBack()">Back</button>
</template>
```

`router.push()` adds a new entry to the history stack — the back button returns to the previous page. `router.replace()` swaps the current entry instead, so the back button skips over the current page. Use `replace` for redirects.

You can also pass an object instead of a string path:

```js
router.push({ name: 'city', params: { id: 'seattle' } })
```

Named routes (`name: 'city'` in your route config) make programmatic navigation more refactor-safe than hardcoded strings.

---

## Navigation Guards

<img src="https://media0.giphy.com/media/OK27wINdQS5YQ/giphy.gif" alt="Guards at the gate" width="960" />

Navigation guards let you run logic before a route change completes — checking authentication, logging analytics, or redirecting based on app state.

The global `beforeEach` guard runs before every navigation:

```js
router.beforeEach((to, from) => {
  const isAuthenticated = !!localStorage.getItem('token')

  if (to.meta.requiresAuth && !isAuthenticated) {
    return { path: '/login' }   // redirect to login
  }
  // return nothing or true to allow the navigation
})
```

Mark protected routes with `meta`:

```js
const routes = [
  { path: '/', component: HomeView },
  { path: '/dashboard', component: DashboardView, meta: { requiresAuth: true } },
  { path: '/login', component: LoginView },
]
```

Guards receive the destination route (`to`) and the origin route (`from`). Return a route location to redirect, return `false` to cancel, or return nothing to allow.

---

## Seeing It All Together

<img src="https://media0.giphy.com/media/13HgwGsXF0aiGY/giphy.gif" alt="All the pieces clicking into place" width="960" />

Here's a mini router config for the weather dashboard we've been building toward:

```js
// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/DashboardView.vue'),
  },
  {
    path: '/city/:id',
    name: 'city',
    component: () => import('../views/CityView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFoundView.vue'),
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
```

A few things to note here:
- `() => import(...)` is lazy loading — Vue only downloads a view's code when the user navigates to it, keeping the initial bundle small.
- `/:pathMatch(.*)*` is the catch-all 404 route — it matches anything that didn't match above.

And the city detail view:

```vue
<!-- src/views/CityView.vue -->
<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route  = useRoute()
const router = useRouter()

const cityId = computed(() => route.params.id)
</script>

<template>
  <button @click="router.back()">← Back to Dashboard</button>
  <h1>{{ cityId }}</h1>
  <!-- weather data would render here -->
</template>
```

---

## The Mental Model

<img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbG1hNWV0YW9qZ25lMnQzNGxpdGY4bDltOXF3a21seXJkMmMzNnVwMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/65ATdpi3clAdjomZ39/giphy.gif" alt="Building the mental model" width="960" />

- **Route config** → maps URL paths to components
- **`router-view`** → the outlet where matched components render
- **`router-link`** → declarative navigation that stays in sync with the active route
- **`useRouter`** → programmatic navigation from inside `<script setup>`
- **`useRoute`** → read the current URL's params, query, and path
- **Guards** → intercept navigation to check conditions before allowing or redirecting

---

## Your Turn

Before moving to Article 6, try this:

1. Add a named route for `/city/:id` and navigate to it from a list using `router.push({ name: 'city', params: { id } })`
2. Add a `query` param like `?unit=C` and read it with `route.query.unit`
3. Add a `beforeEach` guard that logs `"Navigating to: <path>"` for every route change

If you can do all three, you understand how Vue Router fits into a real application.

---

## What's Next

<img src="https://media0.giphy.com/media/wR4bJk4jF5Tl6/giphy.gif" alt="What's next in the series" width="960" />

In **Article 6**, we bring it all together — building out the full weather dashboard using everything from the series: reactive state, components, and routing working as one.

You know how to move between pages. Now let's build what lives on them.

---

*This is Part 5 of the Vue 3 Fundamentals series. Sources: [Vue Router Official Docs](https://router.vuejs.org/guide/), [Vue Router — Dynamic Route Matching](https://router.vuejs.org/guide/essentials/dynamic-matching.html).*
