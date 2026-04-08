---
draft: false
seoTitle: "Reactivity in Vue 3 — How Vue Makes Your UI Feel Alive | Nerando Johnson"
seoDescription: "Understand Vue 3's reactivity system from the ground up — ref, reactive, computed properties, and watch — so your data and UI always stay in sync."
author: "Nerando Johnson"
title: "Reactivity in Vue 3 — How Vue Makes Your UI Feel Alive"
snippet: "If I had to pick the one thing that makes Vue feel magical, it's reactivity. In this article we break down ref, reactive, computed, and watch so you stop guessing and start building with confidence."
image: {
    src: "/images/blog_covers/Vue3 Image.png",
    alt: "Vue.js logo on a light blue background with geometric shapes"
}
publishDate: "2026-04-08 00:00"
category: "Vue, JavaScript, Tutorials"
tags: [vue3, javascript, frontend, tutorial, reactivity, composition-api]
keywords: [Vue 3 reactivity, ref vs reactive, computed properties Vue 3, Vue watch, watchEffect, Vue 3 reactivity system, Composition API reactivity, Vue 3 tutorial]
series:
  name: "Vue 3 Fundamentals"
  order: 3

# GEO-Enhanced Fields
schema: {
  type: "TechArticle",
  about: "Vue 3 reactivity system including ref, reactive, computed properties, and watch",
  genre: "Educational Tutorial",
  educationalLevel: "Beginner",
  teaches: ["Vue 3 Reactivity", "ref", "reactive", "computed", "watch", "watchEffect", "Reactive State Management"],
  audience: {
    type: "ProfessionalAudience",
    audienceType: "Frontend Developers and JavaScript Learners"
  }
}

entities: {
  primary: ["Vue.js", "Vue 3", "Reactivity System"],
  secondary: ["ref", "reactive", "computed", "watch", "watchEffect", "Composition API"],
  people: ["Evan You"],
  organizations: ["Vue.js Core Team", "Vue School"],
  tools: ["Vue 3", "Vite", "VS Code", "Volar"],
  concepts: ["Reactive Programming", "Derived State", "Side Effects", "Declarative Rendering", "Dependency Tracking"]
}

contentStructure: {
  type: "Conceptual Tutorial",
  difficulty: "Beginner",
  timeToComplete: "10-12 minutes read",
  prerequisites: ["Basic HTML", "Basic JavaScript (variables, functions)", "Article 2 — Your First Vue 3 App"],
  outcomes: ["Understand what reactivity means in Vue", "Use ref for reactive primitives and objects", "Use reactive for grouped object state", "Derive values with computed properties", "Run side effects with watch and watchEffect"]
}

semanticContext: {
  topic: "Vue 3 reactivity system and how it keeps data and UI in sync",
  subtopics: ["ref and .value", "reactive objects", "computed caching", "watch vs watchEffect", "template auto-unwrapping"],
  relatedConcepts: ["React useState", "Svelte stores", "MobX observables", "Spreadsheet formulas", "Declarative Programming"],
  practicalApplication: true
}

citationMetadata: {
  citableAs: "Johnson, N. (2026). Reactivity in Vue 3 — How Vue Makes Your UI Feel Alive",
  lastReviewed: "2026-03-31",
  version: "1.0",
  originalPublisher: "Nerando Johnson's Blog"
}

aiOptimization: {
  summaryPrompt: "This article explains Vue 3's reactivity system to beginners. It covers what reactivity means conceptually, how to create reactive state with ref and reactive, how to derive values with computed properties, and how to run side effects with watch and watchEffect. It ends with a full component example combining all four concepts.",
  keyTakeaways: [
    "Reactivity means Vue automatically updates the DOM when your data changes — no manual DOM manipulation needed",
    "ref wraps any value in a reactive container; access it with .value in script, but not in templates",
    "reactive is best for grouped objects; no .value needed, but it can't wrap primitives",
    "The Vue team recommends defaulting to ref for almost everything",
    "computed derives a cached value from reactive state and only recalculates when dependencies change",
    "watch runs a callback with old and new values on specific reactive sources; watchEffect runs immediately and auto-tracks dependencies"
  ],
  technicalDepth: "low",
  codeExamples: true
}
---


## Reactivity in Vue 3 — How Vue Makes Your UI Feel Alive

*Part 3 of the **Vue 3 Fundamentals** series — understanding `ref`, `reactive`, `computed`, and `watch`.*

---

If I had to pick the one thing that makes Vue feel *magical*, it's reactivity.

Not the word — the concept. The fact that when your data changes, your UI just... updates. No DOM selectors. No `innerHTML` hacks. No manually calling a render function. Your data and your UI stay in sync automatically.

But here's the thing: that magic isn't random. It follows rules. And once you understand those rules, you stop guessing and start building with confidence.

That's what this article is about.


## What Is Reactivity, Really?

<img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2FqcHQza3VmMWJtNWt3azNmNTdxNDkzeHQya2YzNGd5cTZtZm04ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1oGXIfkeF4P4w3zPxk/giphy.gif" alt="The magic of things updating automatically" width="960" />

Think about a spreadsheet. When you change a value in cell A1, every formula that references A1 updates automatically. You don't have to tell each formula "hey, go re-check your source." The spreadsheet's reactivity system handles that.

Vue's reactivity system works the same way. When you declare a reactive variable and use it in your template, Vue tracks that connection. When the variable changes, Vue knows exactly which parts of the DOM depend on it — and updates only those parts.

This is fundamentally different from vanilla JavaScript, where you'd have to manually find DOM elements and update them every time data changes.


## `ref`: Your Primary Reactivity Tool

<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzU4MnFnajU1Z292dWptNnpkdjZtaTJ6ZHcxYWF1cG96Y3dmMGQzayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oDyDSmr7StLCBKucHM/giphy.gif" alt="ref — your go-to reactive tool" width="960" />

The most common way to create reactive state in Vue 3 is `ref`:

```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)
const message = ref('Hello!')
const isVisible = ref(true)
</script>
```

`ref` wraps any value — a number, string, boolean, array, or object — in a reactive container. Vue can now watch that container for changes.

There's one rule to remember: when you access or modify a `ref` inside JavaScript (not the template), you use `.value`:

```js
console.log(count.value)   // 0
count.value = 5            // updates to 5
count.value++              // increments to 6
```

Inside the template, Vue automatically unwraps the `.value` for you:

```html
<p>{{ count }}</p>       <!-- no .value needed here -->
<p>{{ message }}</p>
```

That's the only footgun with `ref`. Remember `.value` in script, forget `.value` in template.


## `reactive`: For Objects

<img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnVxYnlwYjRhZWI1aTdncHJoZmFob3VqcXpzcmkyZmNud2FwMWZtcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ge91zAgmwUqLMqiH2c/giphy.gif" alt="reactive — for when your state is a team sport" width="960" />

When you're working with a group of related values, `reactive` is a good fit:

```vue
<script setup>
import { reactive } from 'vue'

const user = reactive({
  name: 'Nerando',
  role: 'developer',
  isLoggedIn: false
})
</script>

<template>
  <p>{{ user.name }} — {{ user.role }}</p>
</template>
```

Unlike `ref`, you don't need `.value` with `reactive`. You access properties like a normal JavaScript object:

```js
user.name = 'Nerajno'      // just works
user.isLoggedIn = true     // just works
```

**When should you use `ref` vs `reactive`?** The Vue team's current recommendation is to default to `ref` for almost everything. It's more versatile — it handles primitives, objects, and arrays. You'll find that consistent `.value` access actually becomes a helpful signal that "this thing is reactive." Use `reactive` when you have a clearly grouped object of state and prefer the cleaner property access.


## Computed Properties: Derived State

<img src="https://media0.giphy.com/media/xT0xeuOy2Fcl9vDGiA/giphy.gif" alt="computed — let Vue do the math for you" width="960" />

Sometimes you don't need to store a value — you need to *calculate* it from existing reactive state. That's what computed properties are for.

```vue
<script setup>
import { ref, computed } from 'vue'

const firstName = ref('Nerando')
const lastName = ref('Johnson')

const fullName = computed(() => `${firstName.value} ${lastName.value}`)
</script>

<template>
  <p>{{ fullName }}</p>
</template>
```

`fullName` isn't stored separately — it derives its value from `firstName` and `lastName`. Vue caches the result and only recalculates when one of those dependencies changes.

This is more efficient than a method (which would recalculate every render) and cleaner than storing the derived value manually. The rule of thumb: if a value can be calculated from existing state, make it a computed property.


## `watch`: Reacting to Change

<img src="https://media0.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif" alt="watch — keeping an eye on your state" width="960" />

Sometimes you need to *do something* when a value changes — make an API call, log to analytics, update localStorage. That's where `watch` comes in.

```vue
<script setup>
import { ref, watch } from 'vue'

const searchQuery = ref('')

watch(searchQuery, (newValue, oldValue) => {
  console.log(`Search changed from "${oldValue}" to "${newValue}"`)
  // This is where you'd call an API
})
</script>
```

`watch` takes the reactive source you want to track, and a callback that runs whenever it changes. The callback receives the new value and the old value.

There's also `watchEffect`, which runs immediately and automatically tracks any reactive dependencies used inside it:

```js
import { ref, watchEffect } from 'vue'

const count = ref(0)

watchEffect(() => {
  console.log(`Count is now: ${count.value}`)
  // Runs immediately, then again whenever count changes
})
```

Use `watch` when you need to compare old and new values, or only run on specific changes. Use `watchEffect` when you want to react to any reactive state your code touches.


## Seeing It All Together

<img src="https://media0.giphy.com/media/13HgwGsXF0aiGY/giphy.gif" alt="All the pieces clicking into place" width="960" />

Here's a small component that uses everything from this article:

```vue
<script setup>
import { ref, computed, watch } from 'vue'

const items = ref(['apples', 'bananas', 'carrots'])
const newItem = ref('')

const itemCount = computed(() => items.value.length)

function addItem() {
  if (newItem.value.trim()) {
    items.value.push(newItem.value.trim())
    newItem.value = ''
  }
}

watch(itemCount, (count) => {
  if (count >= 5) {
    console.log('You have a full shopping list!')
  }
})
</script>

<template>
  <div>
    <h2>Shopping List ({{ itemCount }} items)</h2>
    <ul>
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
    <input v-model="newItem" placeholder="Add an item" />
    <button @click="addItem">Add</button>
  </div>
</template>
```

A list of items, a computed count, an input that adds to the list, and a watcher that logs when you have five or more. Each piece of the reactivity system playing its role.


## The Mental Model

<img src="https://media0.giphy.com/media/OK27wINdQS5YQ/giphy.gif" alt="Breaking it all down into a simple mental model" width="960" />

Here's the simplest way to think about Vue's reactivity:

- **`ref` / `reactive`** → Declare state that Vue should watch
- **`computed`** → Derive new values from existing state
- **`watch` / `watchEffect`** → Run side effects when state changes
- **Template bindings** → Automatically connect state to the UI

You don't tell Vue *when* to update. You describe *what* depends on *what*, and Vue figures out the rest.


## Your Turn

<img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbG1hNWV0YW9qZ25lMnQzNGxpdGY4bDltOXF3a21seXJkMmMzNnVwMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/65ATdpi3clAdjomZ39/giphy.gif" alt="Your turn to put it into practice" width="960" />

Open the shopping list component above and try these challenges:

1. Add a `ref` called `filter` and a `computed` property that returns only items containing the filter string
2. Add an input bound to `filter` with `v-model` so users can search the list in real time
3. Add a `watch` on `filter` that logs `"Filtering for: <term>"` each time it changes

If you can do all three — you've internalized the entire reactivity system.


## What's Next

<img src="https://media0.giphy.com/media/wR4bJk4jF5Tl6/giphy.gif" alt="What's coming up next in the series" width="960" />

In **Article 4**, we get into components — the reusable building blocks of every Vue application. We'll cover props, events, and why Single-File Components are the right way to structure your code.

You understand the engine now. Time to build with it.

---

*This is Part 3 of the Vue 3 Fundamentals series. Sources: [Vue.js Reactivity Fundamentals](https://vuejs.org/guide/essentials/reactivity-fundamentals), [Vue School Articles](https://vueschool.io/articles/vuejs-tutorials/reactivity-101-in-vue-js/).*
