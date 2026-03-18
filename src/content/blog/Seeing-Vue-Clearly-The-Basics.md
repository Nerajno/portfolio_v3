---
draft: false
seoTitle: "Seeing Vue Clearly: Introduction to Vue 3 Basics | Nerando Johnson"
seoDescription: "A no-fluff introduction to Vue 3 for beginners. Learn what Vue is, why it's progressive, how it compares to React and Angular, and what makes Vue 3 different from Vue 2."
author: "Nerando Johnson"
title: "Seeing Vue Clearly: The Basics - Introduction to Vue 3"
snippet: "A no-fluff introduction to building modern UIs with Vue 3. Learn what makes Vue progressive, how it compares to other frameworks, and why the Composition API matters for new developers starting their frontend journey."
image: {
    src: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?&fit=crop&w=430&h=240",
    alt: "Frontend developer coding on laptop with multiple screens"
}
publishDate: "2024-03-18 00:00"
category: "Vue, JavaScript, Tutorials"
tags: [vue, vue3, javascript, frontend, tutorial, composition-api, web-development]
keywords: [Vue 3 tutorial, Vue basics, Vue vs React, Composition API, Vue 3 fundamentals, progressive framework, declarative rendering, reactivity, Vue beginner guide, learn Vue 3]
series:
  name: "Vue 3 Fundamentals"
  order: 1

# GEO-Enhanced Fields
schema: {
  type: "Article",
  about: "Introduction to Vue 3 framework fundamentals for beginners",
  genre: "Educational Tutorial",
  educationalLevel: "Beginner",
  teaches: ["Vue 3 Basics", "Progressive Framework Concepts", "Declarative Rendering", "Reactivity", "Composition API", "Component Architecture"],
  audience: {
    type: "ProfessionalAudience",
    audienceType: "Frontend Developers and JavaScript Learners"
  }
}

entities: {
  primary: ["Vue.js", "Vue 3", "JavaScript Frameworks", "Frontend Development"],
  secondary: ["Composition API", "Options API", "Reactivity System", "Declarative Rendering"],
  people: ["Evan You"],
  organizations: ["Vue.js Core Team", "Vue School", "W3Schools"],
  tools: ["Vue 3", "Vite", "Vue Router", "Pinia", "Nuxt.js", "TypeScript"],
  concepts: ["Progressive Framework", "Single-Page Application", "Server-Side Rendering", "Component-Based Architecture", "Reactive Programming"]
}

contentStructure: {
  type: "Series Introduction and Tutorial Foundation",
  difficulty: "Beginner",
  timeToComplete: "12-15 minutes read",
  prerequisites: ["Basic HTML", "Basic CSS", "Basic JavaScript (variables, functions, arrays, objects)"],
  outcomes: ["Understand what Vue 3 is and how it works", "Learn why Vue is called progressive", "Compare Vue to React and Angular", "Understand Vue 2 vs Vue 3 differences", "Grasp Options API vs Composition API concepts", "Prepare for hands-on Vue development"]
}

semanticContext: {
  topic: "Introduction to Vue 3 framework for building modern user interfaces",
  subtopics: ["Vue 3 Overview", "Progressive Framework Benefits", "Framework Comparisons", "Composition API vs Options API", "Declarative Rendering and Reactivity"],
  relatedConcepts: ["React", "Angular", "Svelte", "Component-Based Development", "Modern JavaScript", "TypeScript", "SPA Development"],
  practicalApplication: true
}

citationMetadata: {
  citableAs: "Johnson, N. (2025). Seeing Vue Clearly: The Basics - Introduction to Vue 3",
  lastReviewed: "2025-03-18",
  version: "1.0",
  originalPublisher: "Nerando Johnson's Blog"
}

aiOptimization: {
  summaryPrompt: "This article introduces Vue 3 as a progressive JavaScript framework for beginners, explaining its core concepts (declarative rendering and reactivity), comparing it to React and Angular, and outlining the differences between Vue 2 and Vue 3, including the Composition API and script setup syntax.",
  keyTakeaways: [
    "Vue 3 is a progressive framework that extends HTML, CSS, and JavaScript without replacing them",
    "Vue's two core concepts are declarative rendering and reactivity - you describe what you want, Vue handles the updates",
    "Vue can start as a simple script tag or scale to full SPAs with SSR, making it beginner-friendly",
    "Vue 3 introduced the Composition API, better TypeScript support, and improved performance over Vue 2",
    "The Composition API with script setup is the recommended modern approach for Vue 3 development",
    "Vue sits between React's flexibility and Angular's opinionated structure, offering approachability with power"
  ],
  technicalDepth: "low",
  codeExamples: true
}
---


**What Is Vue 3? (And Why It Might Be the Framework You've Been Looking For)**

*Part 1 of the Vue 3 Fundamentals series — a no-fluff introduction to building modern UIs with Vue.*

---

Let me be honest with you: the first time someone told me to "just pick a framework," I froze.

React, Angular, Svelte, Vue — they all promised to make building UIs easier, but the learning curves looked steep from where I was standing. What nobody told me was that choosing the right starting point matters. If you pick something that clicks with the way you already think, everything becomes easier.

Vue 3 clicked for me. And in this series, I want to show you why it might click for you too.

---

**So What Actually Is Vue?**

Vue (pronounced like the English word *view*) is a JavaScript framework for building user interfaces. That's the official one-liner, but let's unpack what it actually means.

You already know HTML. You know it structures a page. You know CSS makes it look good. And you know JavaScript makes things happen. Vue sits on top of all three of those — it doesn't replace them, it extends them.

Here's the simplest possible Vue example:

```html
<div id="app">
  <button @click="count++">
    Clicked {{ count }} times
  </button>
</div>
```

```js
import { createApp, ref } from 'vue'

createApp({
  setup() {
    return {
      count: ref(0)
    }
  }
}).mount('#app')
```

That's it. A button that tracks how many times it's been clicked, with the UI updating automatically every time. No manual DOM manipulation. No `document.getElementById`. Vue handles all of that behind the scenes.

Let's slow down and look at what's actually happening in that JavaScript:

- `createApp` is Vue's entry point. It takes your component configuration and creates a Vue application instance.
- `ref(0)` creates a reactive value — in this case, a counter starting at zero. The `ref` wrapper is what tells Vue to watch this value and react when it changes.
- `setup()` is where you define everything your component needs — data, functions, computed values — and return what the template should have access to.
- `.mount('#app')` connects your Vue application to the `<div id="app">` in your HTML. Everything inside that div is now under Vue's control.

Two things are happening in that example that are fundamental to how Vue works:

**Declarative Rendering** means you describe what you want the UI to look like based on your data, and Vue figures out how to make the HTML match it. You're not writing instructions — you're writing descriptions.

**Reactivity** means Vue watches your data. When it changes, Vue automatically updates the parts of the UI that depend on it. You change `count`, the number in the button updates. Done.

---

**Why "Progressive" Is Vue's Superpower**

Vue describes itself as "The Progressive Framework," and this isn't marketing copy — it's genuinely one of the most practical things about it.

Most frameworks want to own your entire project. Vue doesn't. You can start small:

- **Drop a script tag into an existing HTML page** and add interactivity without touching your build setup. This is genuinely useful if you're working on an existing site — a WordPress theme, a marketing page, anything — and just need a dynamic dropdown or a form with live validation. No Vite, no CLI, no config files.
- **Build a full Single-Page Application** with routing, state management, and TypeScript when you're ready to scale. This is the setup most tutorials show you, and it's where Vue really shines for building app-like experiences.
- **Use SSR (Server-Side Rendering)** with Nuxt.js when you need better SEO, faster initial page loads, or both. SSR means the HTML is generated on the server before it reaches the browser, which helps search engines index your content and users see something faster.
- **Target desktop or mobile** with the right ecosystem tools like Tauri or Capacitor when your product needs to go beyond the browser.

This matters for beginners because it means you don't have to understand the entire ecosystem before you write your first line. The framework meets you where you are. Start with a script tag. Graduate to a full project setup when it makes sense. Nothing you learn in the simpler version is wasted.

---

**How Does Vue Compare to the Others?**

You've probably heard people debate React vs Vue like it's a sports rivalry. Here's a more useful framing:

**React** is technically a library, not a full framework. It handles rendering and component logic, but you're responsible for picking your own routing, state management, and tooling. That flexibility is powerful, but it can be paralyzing when you're just starting out. React tends to suit developers who like assembling their own stack and are already comfortable with JavaScript patterns like higher-order functions and hooks.

**Angular** is an opinionated, batteries-included framework maintained by Google. It has strong TypeScript integration and works great for large enterprise teams with defined conventions. It also has a steeper learning curve than Vue or React — Angular tends to suit teams where consistency and structure matter more than speed-to-first-feature.

**Vue 3** sits in a happy middle. It's a full framework with an official router (Vue Router) and state management library (Pinia), but it doesn't force you into them. It uses template syntax that feels like enhanced HTML, which makes it genuinely approachable for developers who aren't yet deep into JavaScript. If you're building something like a commercial platform, a dashboard, or a content-driven application and you want to move fast without fighting your tools, Vue tends to be the right call.

None of those comparisons are meant to talk you out of learning other frameworks. But if you want something that's readable from day one, feels like the web you already know, and scales with you as you grow — Vue is worth your time.

---

**What Makes Vue 3 Different From Vue 2**

If you've searched "learn Vue" before and landed on older tutorials, you've probably seen Vue 2 code without knowing it. The two versions look similar on the surface but are meaningfully different under the hood.

Vue 3 was a full rewrite, released in 2020. The headline changes that matter for you as a learner:

- **The Composition API** is a new way to organize component logic that ships natively in Vue 3. It's more flexible than Vue 2's Options API and scales better as your components grow more complex. (More on this in a moment.)
- **Better TypeScript support** — Vue 3 was rewritten with TypeScript from the ground up, which means the type inference actually works well without a lot of manual configuration.
- **Performance improvements** — Vue 3's virtual DOM was rewritten to be faster, and the bundle size is smaller than Vue 2.
- **`<script setup>`** is a syntax sugar introduced in Vue 3 that removes a lot of boilerplate from the Composition API. It's now the recommended way to write Vue components.

Vue 2 reached end-of-life at the end of 2023, which means no more security patches or updates. The ecosystem has fully moved on. If you're starting fresh, you're starting with Vue 3 — and that's actually the right time to learn it. The tooling is mature, the documentation is excellent, and there are no more "should I learn 2 or 3?" debates to slow you down.

---

**The Two Flavors: Options API and Composition API**

One thing that trips up new learners is that Vue has two ways to write component logic. You'll see both in the wild, so let's demystify them now.

**Options API** is the original Vue style. You write your component logic as an object with distinct sections — `data`, `methods`, `computed`, and so on:

```js
export default {
  data() {
    return {
      message: 'Hello, Vue!'
    }
  },
  methods: {
    greet() {
      alert(this.message)
    }
  }
}
```

It's structured, easy to scan, and great for beginners or smaller components.

**Composition API** is the modern approach introduced in Vue 3. Instead of organizing by option type, you organize by feature — all the logic for one concern lives together:

```js
import { ref } from 'vue'

const message = ref('Hello, Vue!')
function greet() {
  alert(message.value)
}
```

The Composition API is more flexible and scales better in larger applications. It's also the approach you'll see recommended for new Vue 3 projects.

Throughout this series, we'll primarily use the Composition API — specifically with `<script setup>`, which keeps the syntax clean. Don't worry if that doesn't make sense yet. It will by Article 3.

---

**What You'll Need to Follow Along**

Before we dive into code in the next article, make sure you're comfortable with:

- **Basic HTML** — writing elements, understanding nesting
- **Basic CSS** — applying styles, understanding selectors
- **Basic JavaScript** — variables, functions, arrays, and objects

Here's the real talk on that list: "comfortable" doesn't mean "expert." It means you can read a code example and follow what's happening, even if you couldn't write it from memory. You don't need to know what a closure is. You don't need to understand the event loop. But if you're hitting unknown words in every paragraph of a JavaScript tutorial, spend a week there first and come back. You'll move faster, not slower.

And if you've been sitting on "I'll start when I know enough" — that moment doesn't come on its own. At some point you have to write something that half-works, figure out why, and build from there. That's not a beginner problem. That's just how this works.

Progress over perfection. Let's build something.

---

**What's Next**

In Article 2, we're going from theory to code. We'll scaffold a real Vue 3 project, walk through what each file does, and write your first reactive component from scratch.

*This is Part 1 of the Vue 3 Fundamentals series. Sources: Vue.js Official Docs, Vue School and https://www.w3schools.com/.*

---
