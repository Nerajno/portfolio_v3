---
draft: false
seoTitle: "Your First Vue 3 App: From Zero to Running in Under 10 Minutes | Nerando Johnson"
seoDescription: "Scaffold a real Vue 3 project with create-vue and Vite, understand your project structure, and write your first reactive component — all in under 10 minutes."
author: "Nerando Johnson"
title: "Your First Vue 3 App: From Zero to Running in Under 10 Minutes"
snippet: "Stop reading about Vue and start running it. In this article we scaffold a real Vue 3 project, break down the file structure, and write a reactive component from scratch — no CDN snippets, no playgrounds."
image: {
    src: "/images/blog_covers/Vue3 Image.png",
    alt: "Vue.js logo on a light blue background with geometric shapes"
}
publishDate: "2026-03-24 00:00"
category: "Vue, JavaScript, Tutorials"
tags: [vue3, javascript, frontend, tutorial, vite, composition-api]
keywords: [Vue 3 project setup, create-vue, Vite Vue 3, Vue 3 scaffolding, first Vue app, Vue SFC, script setup, v-model, Vue beginner project, Vue 3 tutorial]
series:
  name: "Vue 3 Fundamentals"
  order: 2

# GEO-Enhanced Fields
schema: {
  type: "TechArticle",
  about: "Scaffolding and running a first Vue 3 project using create-vue and Vite",
  genre: "Educational Tutorial",
  educationalLevel: "Beginner",
  teaches: ["Vue 3 Project Setup", "create-vue CLI", "Vite Dev Server", "Single-File Components", "ref Reactivity", "v-model Binding", "Event Handling"],
  audience: {
    type: "ProfessionalAudience",
    audienceType: "Frontend Developers and JavaScript Learners"
  }
}

entities: {
  primary: ["Vue.js", "Vue 3", "Vite", "create-vue"],
  secondary: ["Single-File Components", "Composition API", "Hot Module Replacement", "ref"],
  people: ["Evan You"],
  organizations: ["Vue.js Core Team", "Vue School"],
  tools: ["Vue 3", "Vite", "Node.js", "VS Code", "Volar"],
  concepts: ["Scaffolding", "Reactive Programming", "Component-Based Architecture", "Hot Module Replacement", "Two-Way Data Binding"]
}

contentStructure: {
  type: "Step-by-Step Tutorial",
  difficulty: "Beginner",
  timeToComplete: "10-12 minutes read",
  prerequisites: ["Basic HTML", "Basic CSS", "Basic JavaScript (variables, functions)", "Node.js v18+ installed"],
  outcomes: ["Scaffold a Vue 3 project with create-vue", "Understand the default project file structure", "Know how Vue mounts to the DOM", "Write a reactive Single-File Component", "Use ref, v-model, and @click in a template"]
}

semanticContext: {
  topic: "Hands-on Vue 3 project scaffolding and first component authoring",
  subtopics: ["create-vue CLI", "Vite dev server", "Vue SFC structure", "script setup syntax", "ref reactivity", "v-model", "scoped styles"],
  relatedConcepts: ["React Create App", "Next.js", "Nuxt.js", "Hot Module Replacement", "Declarative Rendering"],
  practicalApplication: true
}

citationMetadata: {
  citableAs: "Johnson, N. (2026). Your First Vue 3 App: From Zero to Running in Under 10 Minutes",
  lastReviewed: "2026-03-24",
  version: "1.0",
  originalPublisher: "Nerando Johnson's Blog"
}

aiOptimization: {
  summaryPrompt: "This article walks a beginner through scaffolding their first Vue 3 project using create-vue and Vite, explains the resulting file structure, shows how Vue boots and mounts to the DOM, and guides the reader through writing a reactive Single-File Component using script setup, ref, v-model, and @click.",
  keyTakeaways: [
    "create-vue is Vue's official scaffolding tool and uses Vite for a fast dev server and build pipeline",
    "A Vue app boots from main.js — createApp mounts the root component to a single div in index.html",
    "Single-File Components combine script setup, template, and scoped styles in one .vue file",
    "ref creates reactive variables that automatically update the template when their value changes",
    "v-model provides two-way binding between inputs and reactive variables with no manual DOM events",
    "Vite's Hot Module Replacement gives a near-instant feedback loop while developing"
  ],
  technicalDepth: "low",
  codeExamples: true
}
---


## Your First Vue 3 App: From Zero to Running in Under 10 Minutes

*Part 2 of the **Vue 3 Fundamentals** series — scaffolding a real project and understanding your project structure.*

---

The best way to learn a framework isn't to read about it. It's to build something with it.
In this article, we're spinning up a real Vue 3 project — not a CDN snippet, not a playground — an actual scaffolded project with a file structure, a dev server, and hot module reloading. By the end of this, you'll have something running in your browser and a mental model for how Vue 3 projects are organized.

Here we go :

## Prerequisites
<img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2FqcHQza3VmMWJtNWt3azNmNTdxNDkzeHQya2YzNGd5cTZtZm04ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1oGXIfkeF4P4w3zPxk/giphy.gif" alt="What you'll need before we start" width="960" />

You'll need:
- **Node.js** (v18 or higher recommended) — [nodejs.org](https://nodejs.org)
- A terminal you're comfortable opening
- A code editor (VS Code is great, and the [Volar extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar) gives you first-class Vue support)

That's it. No global installs required ahead of time.


## Scaffolding With `create-vue`
<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzU4MnFnajU1Z296dWptNnpkdjZtaTJ6ZHcxYWF1cG96Y3dmMGQzayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oDyDSmr7StLCBKucHM/giphy.gif" alt="Let's get to work — scaffolding the project" width="960" />

Vue's official scaffolding tool is called `create-vue`. It uses Vite under the hood, which means your dev server starts fast and your builds are quick.

Open your terminal and run:

```bash
npm create vue@latest
```

You'll be walked through a short setup wizard. For a beginner project, here's what I'd recommend selecting:

```text
✔ Project name: my-first-vue-app
✔ Add TypeScript? No
✔ Add JSX Support? No
✔ Add Vue Router? No
✔ Add Pinia? No
✔ Add Vitest? No
✔ Add an End-to-End Testing Solution? No
✔ Add ESLint? Yes
✔ Add Prettier? Yes
```

Let's skip the extras for now. We'll introduce them when the time is right. Right now, we want a clean, minimal project.

Once it's done:

```text
cd my-first-vue-app
npm install
npm run dev
```

Visit `http://localhost:5173` and you should see the default Vue 3 welcome page. You have a running app.



## What's In the Box
<img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnVxYnlwYjRhZWI1aTdncHJoZmFob3VqcXpzcmkyZmNud2FwMWZtcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ge91zAgmwUqLMqiH2c/giphy.gif" alt="Opening up the project structure" width="960" />

Let's open the project and understand what you're looking at:

```text
my-first-vue-app/
├── public/           → Static files served as-is (favicon, etc.)
├── src/
│   ├── assets/       → Images, fonts, CSS
│   ├── components/   → Your reusable UI building blocks
│   ├── App.vue       → The root component of your app
│   └── main.js       → The entry point — where Vue mounts to the DOM
├── index.html        → The single HTML file that hosts your app
├── package.json      → Your project dependencies and scripts
└── vite.config.js    → Vite configuration
```

The most important files for right now are `main.js`, `App.vue`, and `index.html`.



## How Vue Boots Up
<img src="https://media0.giphy.com/media/xT0xeuOy2Fcl9vDGiA/giphy.gif" alt="Vue booting up and mounting to the DOM" width="960" />

Open `index.html`. You'll see something like this near the bottom:

```html
<div id="app"></div>
<script type="module" src="/src/main.js"></script>
```

There's a single empty `div` with the id `app`. That's where Vue lives. Your entire application will render inside it.

Now open `src/main.js`:

```js
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

Three things are happening here:
1. We import the `createApp` function from Vue
2. We import our root component (`App.vue`)
3. We create the Vue application and **mount** it to the `#app` div in our HTML

That's it. Vue takes over that div and everything inside it.



## Your First Real Component ~ Voilà
<img src="https://media0.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif" alt="Writing your first Vue component" width="960" />

Now open `src/App.vue`. Delete everything in it and let's write something from scratch.

```vue
<script setup>
import { ref } from 'vue'

const name = ref('developer')
const greeting = ref('Hello')
</script>

<template>
  <main>
    <h1>{{ greeting }}, {{ name }}!</h1>
    <input v-model="name" placeholder="Enter your name" />
    <button @click="greeting = 'Hey there'">Switch greeting</button>
  </main>
</template>

<style scoped>
main {
  max-width: 600px;
  margin: 4rem auto;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

h1 {
  font-size: 2rem;
}
</style>
```

Save it. Go back to your browser. You should see a heading, an input field, and a button.

Type into the input. Watch the heading update in real time. Click the button. Watch the greeting change. And you didn't write a single line of DOM manipulation.

That's Vue doing its thing.


## Breaking Down That Component
<img src="https://media0.giphy.com/media/OK27wINdQS5YQ/giphy.gif" alt="Breaking down how the Vue SFC works" width="960" />

A Vue Single-File Component (SFC) has three sections, and you can see all three in what we just wrote:

**`<script setup>`** — This is where your component's logic lives. We imported `ref` from Vue (more on that in Article 3), created two reactive variables, and because we're using `<script setup>`, they're automatically available in the template.

**`<template>`** — This is your HTML. Vue extends it with special syntax: `{{ }}` for displaying data, `v-model` for two-way binding (typing in the input updates the variable), and `@click` for event handling.

**`<style scoped>`** — Your CSS. The `scoped` attribute means these styles only apply to this component, not the whole page. No more accidentally styling something in another component.

This is the structure you'll use for every Vue component you write.



## The Dev Experience
<img src="https://media0.giphy.com/media/13HgwGsXF0aiGY/giphy.gif" alt="The fast Vite dev experience" width="960" />

One thing worth mentioning: Vite's dev server is fast. Changes you save appear in the browser almost instantly through Hot Module Replacement (HMR). The browser doesn't fully reload — it surgically updates just the component you changed. This makes the feedback loop tight. You write, you see, you iterate. That loop is your best learning tool.



## Your Turn
<img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbG1hNWV0YW9qZ25lMnQzNGxpdGY4bDltOXF3a21seXJkMmMzNnVwMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/65ATdpi3clAdjomZ39/giphy.gif" alt="Your turn to try it out" width="960" />

Before moving to Article 3, try this:

1. Add a third `ref` variable called `count` initialized to `0`
2. Add a button that increments it: `@click="count++"`
3. Display it in the template: `<p>Count: {{ count }}</p>`

If it works — and it should — you just built reactivity by instinct. That's the goal.



## What's Next
<img src="https://media0.giphy.com/media/wR4bJk4jF5Tl6/giphy.gif" alt="What's coming next in the series" width="960" />

In **Article 3**, we go deeper into reactivity — the engine that makes everything in Vue feel alive. We'll cover `ref` vs `reactive`, computed properties, and the watch API.

You're already writing Vue. Now let's understand *why* it works.


*This is Part 2 of the Vue 3 Fundamentals series. Sources: [Vue.js Official Docs](https://vuejs.org/guide/quick-start), [Vue School](https://vueschool.io/articles).*
