---
draft: false
seoTitle: "Let's Build Something: A Weather Dashboard in Vue 3 | Nerando Johnson"
seoDescription: "Put Vue 3 fundamentals into practice by building a real weather dashboard with components, reactivity, computed properties, and props-down/events-up communication."
author: "Nerando Johnson"
title: "Let's Build Something: A Weather Dashboard in Vue 3"
snippet: "Reactivity. Components. Props and events. Template directives. They're not isolated concepts — they work together as a system. Build a multi-city weather dashboard to see how."
image: {
    src: "/images/blog_covers/Vue3 Image.png",
    alt: "Vue 3 Weather Dashboard app showing city cards with temperature and conditions"
}
publishDate: "2026-05-07 00:00"
category: "Vue, JavaScript, Tutorials"
tags: [vue3, javascript, frontend, tutorial, composition-api, project]
keywords: [Vue 3 project, weather dashboard Vue, props down events up, computed properties Vue 3, Vue 3 components, Composition API project, Vue 3 beginner project]
series:
  name: "Vue 3 Fundamentals"
  order: 6

# GEO-Enhanced Fields
schema: {
  type: "TechArticle",
  about: "Building a multi-city weather dashboard with Vue 3 Composition API",
  genre: "Educational Tutorial",
  educationalLevel: "Beginner",
  teaches: ["Vue 3 Components", "Computed Properties", "Props and Events", "ref Reactivity", "v-for Rendering", "Unit Conversion", "Component Communication"],
  audience: {
    type: "ProfessionalAudience",
    audienceType: "Frontend Developers and JavaScript Learners"
  }
}

entities: {
  primary: ["Vue.js", "Vue 3", "Composition API"],
  secondary: ["Single-File Components", "Computed Properties", "defineProps", "defineEmits", "v-model"],
  people: ["Evan You"],
  organizations: ["Vue.js Core Team", "Vue School"],
  tools: ["Vue 3", "Vite", "VS Code", "Volar"],
  concepts: ["Props Down Events Up", "Reactive State", "Derived State", "Component Architecture", "Separation of Concerns"]
}
---

# Let's Build Something: A Weather Dashboard in Vue 3

> *Part 6 of the **Vue 3 Fundamentals** series — putting it all together with a real project.*

---

Everything you've learned in this series has been building toward this moment.

Reactivity. Components. Props and events. Template directives. They're not isolated concepts — they work together as a system. The best way to see that is to build something real with it.

We're building a Weather Dashboard. The data is rich enough to be interesting, the computed properties have real meaning (unit conversion), and the component boundaries are natural and obvious. This isn't a toy — it's the kind of thing you'd actually ship.

---

## What We're Building

By the end of this article you'll have:

- A dashboard displaying current conditions for multiple tracked cities
- A °F / °C toggle that converts temperatures across all cards simultaneously
- The ability to add and remove cities
- A clean component-based structure with clear separation of concerns

---

## Project Structure

```
src/
└── components/
    ├── WeatherSearch.vue   → City input + "Add City" button
    ├── WeatherCard.vue     → Individual city weather display
    └── UnitToggle.vue      → °F / °C switcher tabs
App.vue                    → Root — holds all state and logic
```

`App.vue` is the **single source of truth** for weather data, the unit preference, and the list of tracked cities. Child components receive what they need via props and communicate back up through events.

---

## Step 1: `App.vue` — The State Layer

```vue
<script setup>
import { ref, computed } from 'vue'
import WeatherSearch from './components/WeatherSearch.vue'
import WeatherCard   from './components/WeatherCard.vue'
import UnitToggle    from './components/UnitToggle.vue'

// All city data stored in Fahrenheit — conversion happens at display time
const cities = ref([
  { id: 1, name: 'Atlanta, GA',   temp: 72, condition: 'Sunny',  humidity: 45, wind: 8  },
  { id: 2, name: 'New York, NY',  temp: 61, condition: 'Cloudy', humidity: 60, wind: 12 },
  { id: 3, name: 'Seattle, WA',   temp: 55, condition: 'Rainy',  humidity: 80, wind: 10 },
])

const unit = ref('F')

// Derive display temps without mutating source data
const displayCities = computed(() =>
  cities.value.map(c => ({
    ...c,
    displayTemp: unit.value === 'C'
      ? Math.round((c.temp - 32) * 5 / 9)
      : c.temp
  }))
)

const warmCityCount = computed(() =>
  cities.value.filter(c => c.temp >= 70).length
)

function addCity(name) {
  if (cities.value.find(c => c.name.toLowerCase() === name.toLowerCase())) return

  cities.value.push({
    id: Date.now(),
    name,
    temp: Math.floor(Math.random() * 45) + 45,
    condition: ['Sunny', 'Cloudy', 'Rainy', 'Windy'][Math.floor(Math.random() * 4)],
    humidity: Math.floor(Math.random() * 50) + 30,
    wind: Math.floor(Math.random() * 15) + 3,
  })
}

function removeCity(id) {
  cities.value = cities.value.filter(c => c.id !== id)
}
</script>

<template>
  <div class="dashboard">
    <header class="dashboard-header">
      <h1>🌍 Weather Dashboard</h1>
      <p class="subtitle">{{ warmCityCount }} warm cities right now</p>
    </header>

    <div class="controls">
      <WeatherSearch @add="addCity" />
      <UnitToggle :unit="unit" @change="unit = $event" />
    </div>

    <div class="cards-grid">
      <WeatherCard
        v-for="city in displayCities"
        :key="city.id"
        :city="city"
        :unit="unit"
        @remove="removeCity"
      />
    </div>

    <p v-if="cities.length === 0" class="empty">
      No cities tracked yet. Add one above!
    </p>
  </div>
</template>

<style>
.dashboard        { max-width: 900px; margin: 2rem auto; font-family: sans-serif; padding: 0 1rem; }
.dashboard-header { margin-bottom: 1.5rem; }
.dashboard-header h1 { font-size: 1.75rem; margin: 0 0 0.25rem; }
.subtitle         { color: #64748b; margin: 0; font-size: 0.9rem; }
.controls         { display: flex; gap: 1rem; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; }
.cards-grid       { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1rem; }
.empty            { color: #94a3b8; text-align: center; padding: 3rem; }
</style>
```

---

## Step 2: `WeatherSearch.vue`

```vue
<script setup>
import { ref } from 'vue'

const emit     = defineEmits(['add'])
const cityName = ref('')

function handleAdd() {
  const trimmed = cityName.value.trim()
  if (trimmed) {
    emit('add', trimmed)
    cityName.value = ''
  }
}
</script>

<template>
  <div class="search">
    <input
      v-model="cityName"
      @keyup.enter="handleAdd"
      placeholder="Add a city (e.g. Denver, CO)"
    />
    <button @click="handleAdd">Add City</button>
  </div>
</template>

<style scoped>
.search { display: flex; gap: 0.5rem; flex: 1; }
input   { flex: 1; padding: 0.6rem 0.75rem; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 0.95rem; }
button  { padding: 0.6rem 1.1rem; background: #0ea5e9; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 0.95rem; white-space: nowrap; }
button:hover { background: #0284c7; }
</style>
```

This component owns its own `cityName` state. When the user submits — by pressing Enter or clicking the button — it emits `'add'` with the city name and clears itself. The parent decides what to do with that name. Clean separation.

---

## Step 3: `WeatherCard.vue`

```vue
<script setup>
import { computed } from 'vue'

const props = defineProps({
  city: { type: Object, required: true },
  unit: { type: String, default: 'F' }
})

const emit = defineEmits(['remove'])

const conditionEmoji = {
  Sunny:  '☀️',
  Cloudy: '☁️',
  Rainy:  '🌧️',
  Windy:  '💨',
  Snowy:  '❄️',
}

const tempColor = computed(() => {
  if (props.city.temp >= 80) return '#ef4444'
  if (props.city.temp >= 65) return '#f59e0b'
  return '#3b82f6'
})
</script>

<template>
  <div class="card">
    <header class="card-header">
      <span class="city-name">{{ city.name }}</span>
      <button class="remove-btn" @click="emit('remove', city.id)" title="Remove city">✕</button>
    </header>

    <div class="temp-row">
      <span class="temp" :style="{ color: tempColor }">
        {{ city.displayTemp }}°{{ unit }}
      </span>
      <span class="condition-icon">{{ conditionEmoji[city.condition] ?? '🌡️' }}</span>
    </div>

    <p class="condition-label">{{ city.condition }}</p>

    <div class="details">
      <span>💧 {{ city.humidity }}%</span>
      <span>💨 {{ city.wind }} mph</span>
    </div>
  </div>
</template>

<style scoped>
.card            { background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.25rem; box-shadow: 0 1px 3px rgba(0,0,0,0.06); }
.card-header     { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem; }
.city-name       { font-weight: 600; font-size: 0.95rem; color: #1e293b; }
.remove-btn      { background: none; border: none; cursor: pointer; color: #94a3b8; font-size: 0.9rem; padding: 0.1rem 0.3rem; border-radius: 4px; }
.remove-btn:hover { color: #ef4444; background: #fef2f2; }
.temp-row        { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.2rem; }
.temp            { font-size: 2.25rem; font-weight: 700; line-height: 1; }
.condition-icon  { font-size: 1.75rem; }
.condition-label { color: #64748b; font-size: 0.85rem; margin: 0 0 0.75rem; }
.details         { display: flex; gap: 1rem; font-size: 0.82rem; color: #94a3b8; }
</style>
```

Two things worth pointing out. First, `displayTemp` comes from `App.vue`'s `displayCities` computed — the conversion happened upstream, not inside this component. Second, `tempColor` is a local computed that belongs to display logic. Know where logic belongs, and put it there.

---

## Step 4: `UnitToggle.vue`

```vue
<script setup>
defineProps({
  unit: { type: String, default: 'F' }
})

const emit = defineEmits(['change'])
</script>

<template>
  <div class="toggle">
    <button :class="{ active: unit === 'F' }" @click="emit('change', 'F')">°F</button>
    <button :class="{ active: unit === 'C' }" @click="emit('change', 'C')">°C</button>
  </div>
</template>

<style scoped>
.toggle              { display: flex; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; }
button               { padding: 0.55rem 1rem; border: none; background: white; cursor: pointer; font-size: 0.9rem; font-weight: 500; color: #64748b; transition: all 0.15s; }
button.active        { background: #0ea5e9; color: white; }
button:not(.active):hover { background: #f8fafc; }
</style>
```

---

## What You Just Built

**`App.vue`** is the single source of truth. It holds `cities` in a `ref`, computes display-ready data via `displayCities` (the F→C conversion lives here — not scattered across components), and handles mutations: `addCity` and `removeCity`. No child component touches the state directly.

**`WeatherSearch.vue`** manages its own local input state, emits outward only when there's a city name worth sharing, then resets itself.

**`WeatherCard.vue`** is a presentational component. It receives a pre-converted `city` object, renders it, and emits `'remove'` when clicked.

**`UnitToggle.vue`** reflects the current unit via a prop and emits the desired unit when clicked. It holds no state of its own.

This is **props down, events up** in a complete, working application. The computed property in `App.vue` is the architectural star — it demonstrates why derived state should be computed, not duplicated.

---

## Where to Go From Here

You've completed the Vue 3 Fundamentals series. With what you've built here, you can:

- Build applications with Vue 3's Composition API
- Structure projects with communicating, reusable components
- Manage reactive state and derive computed values
- Handle user input and DOM events
- Render lists and conditionals in templates

Natural next steps:

- **Vue Router** — add a city detail page, navigate between views
- **Pinia** — move `cities` and `unit` into a store accessible by any component without prop drilling
- **Real weather API** — replace mock data with calls to OpenWeatherMap or WeatherAPI
- **Nuxt 3** — SSR and server-side API calls so data loads before the page renders
- **TypeScript** — type your city objects with an interface and get autocomplete on every prop

The fundamentals you've built here aren't a temporary scaffold to discard. They're the foundation every one of those advanced topics builds on.

Progress over perfection. You're here. Keep building.

---

*Part 6 of 6 in the Vue 3 Fundamentals series.*
*Sources: [Vue.js Official Docs](https://vuejs.org/guide/introduction) · [Vue School — Vue Component Fundamentals](https://vueschool.io/articles/vuejs-tutorials/vue-component-fundamentals-with-the-composition-api/) · [Vue School — Reactivity 101](https://vueschool.io/articles/vuejs-tutorials/reactivity-101-in-vue-js/)*
