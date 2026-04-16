---
draft: false
seoTitle: "Vue 3 Components: Building Reusable UI Blocks | Nerando Johnson"
seoDescription: "Learn how Vue 3 Single-File Components work — props, events, scoped styles, and the props-down events-up pattern for building a real weather dashboard."
author: "Nerando Johnson"
title: "Vue 3 Components: Building Reusable UI Blocks"
snippet: "Every Vue app is a tree of components. In this article we break down SFCs, defineProps, defineEmits, and the props-down events-up pattern that keeps data flow predictable — using a weather dashboard as our domain."
image: {
    src: "/images/blog_covers/Vue3 Image.png",
    alt: "Vue.js logo on a light blue background with geometric shapes"
}
publishDate: "2026-04-15 00:00"
category: "Vue, JavaScript, Tutorials"
tags: [vue3, javascript, frontend, tutorial, components, composition-api]
keywords: [Vue 3 components, defineProps, defineEmits, SFC, props down events up, Vue component communication, scoped styles, Vue 3 tutorial, Vue component basics, Composition API]
series:
  name: "Vue 3 Fundamentals"
  order: 4

# GEO-Enhanced Fields
schema: {
  type: "TechArticle",
  about: "Vue 3 Single-File Components — props, events, and component communication patterns",
  genre: "Educational Tutorial",
  educationalLevel: "Beginner",
  teaches: ["Single-File Components", "defineProps", "defineEmits", "Props Down Events Up", "Scoped Styles", "v-for with Components"],
  audience: {
    type: "ProfessionalAudience",
    audienceType: "Frontend Developers and JavaScript Learners"
  }
}

entities: {
  primary: ["Vue.js", "Vue 3", "Single-File Components"],
  secondary: ["defineProps", "defineEmits", "script setup", "scoped styles", "Composition API"],
  people: ["Evan You"],
  organizations: ["Vue.js Core Team", "Vue School"],
  tools: ["Vue 3", "Vite", "VS Code", "Volar"],
  concepts: ["Component-Based Architecture", "Props", "Custom Events", "Data Flow", "Scoped CSS", "Reusability"]
}

contentStructure: {
  type: "Conceptual + Practical Tutorial",
  difficulty: "Beginner",
  timeToComplete: "10-12 minutes read",
  prerequisites: ["Basic HTML", "Basic JavaScript", "Article 2 — Your First Vue 3 App", "Article 3 — Reactivity in Vue 3"],
  outcomes: ["Understand the Vue Single-File Component model", "Use defineProps to pass data into a component", "Use defineEmits to send events back to the parent", "Apply scoped styles to isolate component CSS", "Organize components for a real app"]
}

semanticContext: {
  topic: "Building and composing Vue 3 components using the Composition API",
  subtopics: ["SFC structure", "defineProps macro", "defineEmits macro", "props-down events-up", "scoped styles", "component organization"],
  relatedConcepts: ["React props and callbacks", "Web Components", "Angular inputs and outputs", "Component-Driven Development"],
  practicalApplication: true
}

citationMetadata: {
  citableAs: "Johnson, N. (2026). Vue 3 Components: Building Reusable UI Blocks",
  lastReviewed: "2026-04-15",
  version: "1.0",
  originalPublisher: "Nerando Johnson's Blog"
}

aiOptimization: {
  summaryPrompt: "This article teaches Vue 3 component fundamentals to beginners using a weather dashboard domain. It covers what a Single-File Component is, how to import and use components, how to pass data with defineProps, how to communicate back up with defineEmits, how scoped styles work, and how to organize a components folder.",
  keyTakeaways: [
    "A Vue Single-File Component (SFC) combines template, script setup, and scoped styles in one .vue file",
    "Imported components in script setup are automatically available in the template — no registration needed",
    "defineProps declares what data a component expects from its parent; defineEmits declares what events it can fire",
    "Props flow downward (parent to child); events flow upward (child to parent) — this is the core data flow pattern in Vue",
    "Children should never directly mutate props — emit an event and let the parent update its own state",
    "The scoped attribute on style blocks prevents CSS from leaking into other components"
  ],
  technicalDepth: "low",
  codeExamples: true
}
---


## Vue 3 Components: Building Reusable UI Blocks

*Part 4 of the **Vue 3 Fundamentals** series — understanding SFCs, props, and component events.*

---

Every Vue application is a tree of components.

At the root, you have `App.vue`. Underneath it, you have everything else — your header, your search bar, your individual weather cards. Each is a self-contained piece of UI with its own logic, template, and styles.

This is the component model. It's how Vue (and every modern framework) manages complexity. Instead of one massive HTML file with thousands of lines of JavaScript, you break your UI into small, focused, reusable pieces.

In this article, we'll look at what components are, how to build them, and how to make them talk to each other — using our weather dashboard as the domain throughout.

---

## What Is a Component?

<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnkyOTB0MTBobmt0ZDdpOXNpNmJvZ282bGZyMTBldTN4NzByaGliNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3DI8UxOXJbX6BAWcuB/giphy.gif" alt="Breaking UI into reusable pieces" />

A Vue component is a reusable, self-contained unit of UI. It encapsulates three things:

- **Template** — the HTML structure
- **Script** — the logic (data, methods, computed values)
- **Style** — the CSS that applies to it

In Vue 3, we write components as Single-File Components (SFCs) — `.vue` files that contain all three in one place:

```vue
<!-- src/components/WeatherCard.vue -->
<script setup>
const conditionEmoji = {
  Sunny: '☀️',
  Cloudy: '☁️',
  Rainy: '🌧️',
  Windy: '💨',
  Snowy: '❄️',
}
</script>

<template>
  <div class="card">
    <h2>Atlanta, GA</h2>
    <p class="temp">72°F</p>
    <p class="condition">{{ conditionEmoji['Sunny'] }} Sunny</p>
  </div>
</template>

<style scoped>
.card {
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background: white;
}
.temp { font-size: 2.5rem; font-weight: bold; margin: 0.25rem 0; }
.condition { color: #64748b; }
</style>
```

That's a complete component. No external dependencies. Drop it anywhere in your app and it works.


## Using a Component

<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzU4MnFnajU1Z292dWptNnpkdjZtaTJ6ZHcxYWF1cG96Y3dmMGQzayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oDyDSmr7StLCBKucHM/giphy.gif" alt="Plugging components into the app" width="960" />

To use `WeatherCard` in `App.vue`, import it and place it in the template:

```vue
<!-- src/App.vue -->
<script setup>
import WeatherCard from './components/WeatherCard.vue'
</script>

<template>
  <main>
    <h1>🌍 Weather Dashboard</h1>
    <WeatherCard />
  </main>
</template>
```

With `<script setup>`, imported components are automatically available in the template — no registration step needed.

Notice the `<WeatherCard />` syntax — Vue components use PascalCase in templates, which visually distinguishes them from native HTML elements like `<div>` and `<input>`.


## Props: Passing Data Into a Component

<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTFrdWZsY3c1bG53d3JsdWExcTgwaXpuY3M0NWtia2d4OXBtYXZsMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d8eNm8dyFGYGHIPB4C/giphy.gif"  />

A component that always shows the same city and temperature isn't very useful. Props let a parent pass data into a child.

Let's update `WeatherCard` to accept real city data:

```vue
<!-- src/components/WeatherCard.vue -->
<script setup>
import { computed } from 'vue'

const props = defineProps({
  city: {
    type: Object,
    required: true
  },
  unit: {
    type: String,
    default: 'F'
  }
})

const conditionEmoji = {
  Sunny: '☀️', Cloudy: '☁️', Rainy: '🌧️', Windy: '💨', Snowy: '❄️',
}

const displayTemp = computed(() =>
  props.unit === 'C'
    ? Math.round((props.city.temp - 32) * 5 / 9)
    : props.city.temp
)
</script>

<template>
  <div class="card">
    <h2>{{ city.name }}</h2>
    <p class="temp">{{ displayTemp }}°{{ unit }}</p>
    <p class="condition">
      {{ conditionEmoji[city.condition] ?? '🌡️' }}
      {{ city.condition }}
    </p>
    <p class="meta">💧 {{ city.humidity }}% · 💨 {{ city.wind }} mph</p>
  </div>
</template>
```

`defineProps` is a Vue macro — you don't import it, it's built into `<script setup>`. It declares what data the component expects to receive.

Now the parent passes city data as attributes:

```vue
<WeatherCard
  :city="{ id: 1, name: 'Atlanta, GA', temp: 72, condition: 'Sunny', humidity: 45, wind: 8 }"
  unit="F"
/>
```

Props flow **downward** — from parent to child. A child component should never directly modify the props it receives. If you need to signal a change back, the child communicates upward through events.


## Events: Sending Data Back Up

<img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExejRhNGNrdTQ0dm9iMjR2dm1pMGN2MTZ3aGN6dTU1YTdhbm1lOGd3aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/efyEShk2FJ9X2Kpd7V/giphy.gif" />

When something happens inside a child — a button click, a user removing a city — the child emits an event and the parent listens for it.

Let's add a "Remove" button to `WeatherCard`:

```vue
<!-- src/components/WeatherCard.vue -->
<script setup>
import { computed } from 'vue'

const props = defineProps({
  city: { type: Object, required: true },
  unit: { type: String, default: 'F' }
})

const emit = defineEmits(['remove'])

const conditionEmoji = { Sunny: '☀️', Cloudy: '☁️', Rainy: '🌧️', Windy: '💨', Snowy: '❄️' }

const displayTemp = computed(() =>
  props.unit === 'C'
    ? Math.round((props.city.temp - 32) * 5 / 9)
    : props.city.temp
)
</script>

<template>
  <div class="card">
    <header>
      <h2>{{ city.name }}</h2>
      <button class="remove-btn" @click="emit('remove', city.id)">✕</button>
    </header>
    <p class="temp">{{ displayTemp }}°{{ unit }}</p>
    <p class="condition">{{ conditionEmoji[city.condition] ?? '🌡️' }} {{ city.condition }}</p>
    <p class="meta">💧 {{ city.humidity }}% · 💨 {{ city.wind }} mph</p>
  </div>
</template>
```

`defineEmits` declares what events this component can fire. When the remove button is clicked, we emit `'remove'` with the city's `id` as the payload.

The parent listens with `@event-name`:

```vue
<!-- src/App.vue -->
<script setup>
import { ref } from 'vue'
import WeatherCard from './components/WeatherCard.vue'

const cities = ref([
  { id: 1, name: 'Atlanta, GA',  temp: 72, condition: 'Sunny',  humidity: 45, wind: 8  },
  { id: 2, name: 'New York, NY', temp: 61, condition: 'Cloudy', humidity: 60, wind: 12 },
])
const unit = ref('F')

function removeCity(id) {
  cities.value = cities.value.filter(c => c.id !== id)
}
</script>

<template>
  <main>
    <WeatherCard
      v-for="city in cities"
      :key="city.id"
      :city="city"
      :unit="unit"
      @remove="removeCity"
    />
  </main>
</template>
```

This is the **props down, events up** pattern. The parent owns the data. The child only reports what happened. Data flow stays predictable and components stay decoupled.


## Scoped Styles

<img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTB1cXFyM282ZzN1NGs1ODhkN2Nxdm0ybGdtYmdsOXNqMTVlZXZ3dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sEzatO7iSisrt1SmAu/giphy.gif" />

The `scoped` attribute on `<style>` means the styles in a component only apply to that component's HTML:

```vue
<style scoped>
/* This .card class won't affect any other .card elements in the app */
.card {
  background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
  border-radius: 12px;
}
</style>
```

Vue achieves this by adding a unique data attribute to the component's elements at compile time. No naming collisions, no specificity battles between components.


## Component Organization

<img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHdhNDYwYzJ2czQyMjZzYWxmMDVnMzB3c2VrcTQ3bDc0ZG1nc3E3diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4sOZwdFKatZCw/giphy.gif" width="960" />

As your app grows, keep your components folder organized by responsibility:

```
src/
└── components/
    ├── WeatherCard.vue     → Individual city weather card
    ├── WeatherSearch.vue   → City search input + add button
    └── UnitToggle.vue      → °F / °C switcher
```

Each component has one clear job. `WeatherCard` displays weather for one city. `WeatherSearch` handles the search/add flow. `UnitToggle` switches the temperature unit. None of them need to know what the others are doing.

That separation makes each component independently testable — and means you can update one without risking breaking the others.


## The Mental Model

<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExajR1d3hybWNpNXg1YnowZzg4NDNtdXZpcHh0c2JrbGNmbXZsZjd1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/evB90wPnh5LxG3XU5o/giphy.gif" width="960" />

- **SFC** → one `.vue` file = template + script + scoped styles.
- **`defineProps`** → declare what data flows in from the parent.
- **`defineEmits`** → declare what events flow out to the parent.
- **Props down, events up** → the rule that keeps data flow predictable.
- **Scoped styles** → CSS that stays in its lane.


## Your Turn

<img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbG1hNWV0YW9qZ25lMnQzNGxpdGY4bDltOXF3a21seXJkMmMzNnVwMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/65ATdpi3clAdjomZ39/giphy.gif" alt="Your turn" width="960" />

Try these before moving to Article 5:

1. Create a `UnitToggle.vue` component that emits a `'toggle'` event when clicked.
2. In `App.vue`, listen to `@toggle` and flip the `unit` ref between `'F'` and `'C'`.
3. Pass the updated `unit` as a prop to each `WeatherCard` and watch all the temperatures update at once.

If all three work — you've just implemented the entire props-down events-up pattern on a real feature.


## What's Next

<img src="https://media0.giphy.com/media/wR4bJk4jF5Tl6/giphy.gif" alt="What's next" width="960" />

In **Article 5**, we'll cover the most important directives you'll use every day: `v-if`, `v-for`, `v-bind`, `v-model`, and `v-on`.

Progress over perfection. Let's go.

---

*This is Part 4 of the Vue 3 Fundamentals series. Sources: [Vue.js Component Basics](https://vuejs.org/guide/essentials/component-basics), [Vue School — Vue Component Fundamentals with the Composition API](https://vueschool.io/articles/vuejs-tutorials/vue-component-fundamentals-with-the-composition-api/).*
