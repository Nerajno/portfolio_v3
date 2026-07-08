---
draft: true
seoTitle: "Bonus: Build a City Comparison Tool in Vue 3 — Every Concept in One Project | Nerando Johnson"
seoDescription: "Build a Vue 3 City Comparison Tool step by step — using ref, computed, watch, props, events, v-if, v-for, and component composition in a single cohesive project."
author: "Nerando Johnson"
title: "Bonus: Build a City Comparison Tool — Every Vue 3 Concept in One Project"
snippet: "You've seen every Vue 3 concept individually. Now use them all together — deliberately, one step at a time — to build a City Comparison Tool that pins two cities side by side, converts °F/°C live, and filters a searchable list in real time."
image: {
    src: "/images/blog_covers/Vue3 Image.png",
    alt: "Vue 3 City Comparison app comparing weather across multiple cities side by side"
}
publishDate: "2026-05-15 00:00"
category: "Vue, JavaScript, Tutorials"
tags: [vue3, javascript, frontend, tutorial, project, beginners, composition-api]
keywords: [Vue 3 project tutorial, city comparison tool Vue 3, Vue 3 ref computed watch, Vue 3 props events, Vue 3 v-if v-for, Vue 3 beginners project, Vue 3 composition API example, Vue 3 component communication, Vue 3 full project walkthrough, Vue 3 fundamentals recap]
series:
  name: "Vue 3 Fundamentals"
  order: 7

# GEO-Enhanced Fields
schema: {
  type: "TechArticle",
  about: "Step-by-step Vue 3 project that consolidates every concept from the Vue 3 Fundamentals series into a single City Comparison Tool",
  genre: "Educational Tutorial",
  educationalLevel: "Beginner",
  teaches: ["ref", "computed", "watch", "defineProps", "defineEmits", "v-if / v-else", "v-for", "v-model controlled input", ":class", ":style", "@click", "component composition", "single source of truth"],
  audience: {
    type: "ProfessionalAudience",
    audienceType: "Frontend Developers and JavaScript Learners who have completed Articles 1–6"
  }
}

entities: {
  primary: ["Vue.js", "Vue 3", "Composition API"],
  secondary: ["ref", "computed", "watch", "defineProps", "defineEmits", "script setup", "scoped styles"],
  people: ["Evan You"],
  organizations: ["Vue.js Core Team", "Vue School"],
  tools: ["Vue 3", "Vite", "VS Code", "Volar"],
  concepts: ["Reactive State", "Derived State", "Single Source of Truth", "Props Down Events Up", "Component Composition", "Controlled Inputs", "Conditional Rendering", "List Rendering"]
}

contentStructure: {
  type: "Step-by-Step Project Tutorial",
  difficulty: "Beginner",
  timeToComplete: "~12 minutes read",
  prerequisites: ["Articles 1–6 of the Vue 3 Fundamentals series", "Basic HTML", "Basic JavaScript"],
  outcomes: [
    "Build a multi-component Vue 3 app from scratch using the Composition API",
    "Apply ref and computed to manage and derive reactive state",
    "Use watch to trigger side effects when state changes",
    "Pass data down with props and communicate up with custom events",
    "Implement v-if, v-for, :class, :style, and controlled inputs in a real project"
  ]
}

semanticContext: {
  topic: "Consolidation project using every Vue 3 Composition API concept from the series",
  subtopics: ["ref for reactive state", "computed for derived state", "watch for side effects", "props and emits", "v-if / v-else / v-for", "controlled search input", ":class and :style bindings", "component decomposition"],
  relatedConcepts: ["React useState and useEffect", "Angular component communication", "Svelte stores", "State management patterns"],
  practicalApplication: true
}

citationMetadata: {
  citableAs: "Johnson, N. (2026). Bonus: Build a City Comparison Tool — Every Vue 3 Concept in One Project",
  lastReviewed: "2026-05-15",
  version: "1.0",
  originalPublisher: "Nerando Johnson's Blog"
}

aiOptimization: {
  summaryPrompt: "This bonus article in the Vue 3 Fundamentals series guides beginners through building a City Comparison Tool step by step. Each step explicitly calls out which Vue 3 concept is being used — ref, computed, watch, props, emits, v-if, v-for, :class, :style — consolidating every concept from Articles 1 through 6 into a single cohesive project.",
  keyTakeaways: [
    "ref is the go-to primitive for reactive state; use it by default and follow .value access consistently in script",
    "computed properties are cached formulas — anything that can be derived from existing state should be a computed, never stored separately",
    "watch is for side effects that happen *because* state changed, not for deriving new state",
    "State lives in the parent; children receive props and emit events — they never mutate parent state directly",
    "v-if, v-for, :class, :style, and @click work together in real apps to produce fully dynamic, reactive UIs",
    "A single source of truth with computed derived state eliminates entire categories of sync bugs"
  ],
  technicalDepth: "low",
  codeExamples: true
}
---


## Bonus: Build a City Comparison Tool — Every Vue 3 Concept in One Project

*Bonus article for the **Vue 3 Fundamentals** series — a deliberate step-by-step build that uses every concept from Articles 1 through 6.*

---

You've done the reading. You've seen the code. Now let's use everything together — intentionally — one concept at a time.

This article is different from Article 6. Instead of showing you the finished app and explaining it after, we're going to build it piece by piece and call out exactly which concept we're using at each step. Think of it as the series in reverse: code first, recognition second.

By the end, you'll have built a City Comparison Tool — a dashboard where you can pin two cities side by side, compare their temperatures, conditions, and humidity, and toggle between °F and °C. Every single concept from the series shows up. Nothing is decoration.

---

## What We're Building

<img src="https://media0.giphy.com/media/wR4bJk4jF5Tl6/giphy.gif" alt="Animated preview of the Vue 3 City Comparison Tool interface for comparing two cities side by side" width="960" />

The app has three screens worth of behavior in a single view:

- Pin and unpin cities from a list of options
- Compare two pinned cities side by side with highlighted differences
- Toggle °F / °C and watch every number update simultaneously
- Search and filter the city list in real time
- See a "warmer city" badge that updates reactively as temperatures change

The architecture:

```
src/
└── components/
    ├── CityList.vue         → Searchable list of cities to choose from
    ├── ComparisonCard.vue   → A single city panel in the comparison view
    └── CompareHeader.vue    → Unit toggle + "warmer city" badge
App.vue                      → All state, all logic
```

---

## Step 1 — Declare Your State (`ref`, `reactive`)

> Concept from Article 3: `ref` for reactive state

Open `App.vue`. Before we touch the template, we declare everything the app needs to know:

```vue
<script setup>
import { ref } from 'vue'

// The master list of cities — stored in °F always
const allCities = ref([
  { id: 1,  name: 'Atlanta, GA',      temp: 72, condition: 'Sunny',  humidity: 45 },
  { id: 2,  name: 'New York, NY',     temp: 61, condition: 'Cloudy', humidity: 60 },
  { id: 3,  name: 'Seattle, WA',      temp: 55, condition: 'Rainy',  humidity: 80 },
  { id: 4,  name: 'Miami, FL',        temp: 84, condition: 'Sunny',  humidity: 75 },
  { id: 5,  name: 'Chicago, IL',      temp: 58, condition: 'Windy',  humidity: 55 },
  { id: 6,  name: 'Denver, CO',       temp: 63, condition: 'Sunny',  humidity: 30 },
  { id: 7,  name: 'Portland, OR',     temp: 52, condition: 'Rainy',  humidity: 82 },
  { id: 8,  name: 'Austin, TX',       temp: 79, condition: 'Sunny',  humidity: 50 },
])

// The two cities currently being compared — null means "slot is empty"
const pinnedLeft  = ref(null)
const pinnedRight = ref(null)

// User preferences
const unit   = ref('F')
const search = ref('')
</script>
```

Notice we're using `ref` for everything — including the city objects when they're pinned. Following the Vue team's recommendation: **ref by default**. Consistent `.value` access everywhere in script.

---

## Step 2 — Derive Everything You Can (`computed`)

> Concept from Article 3: `computed` for derived state

We have raw data. Now we derive the display-ready versions from it. Every piece of computed state here would be a bug if we stored it separately — someone would forget to keep it in sync.

```vue
<script setup>
import { ref, computed } from 'vue'
// ... (refs from Step 1)

// Convert a raw °F temp to display temp based on current unit
function toDisplay(temp) {
  return unit.value === 'C'
    ? Math.round((temp - 32) * 5 / 9)
    : temp
}

// Filtered city list — reacts to search input
const filteredCities = computed(() =>
  allCities.value.filter(c =>
    c.name.toLowerCase().includes(search.value.toLowerCase())
  )
)

// Which city IDs are already pinned — used to disable "pin" buttons
const pinnedIds = computed(() => {
  const ids = []
  if (pinnedLeft.value)  ids.push(pinnedLeft.value.id)
  if (pinnedRight.value) ids.push(pinnedRight.value.id)
  return ids
})

// Display-ready versions of each pinned city
const leftDisplay = computed(() =>
  pinnedLeft.value
    ? { ...pinnedLeft.value, displayTemp: toDisplay(pinnedLeft.value.temp) }
    : null
)
const rightDisplay = computed(() =>
  pinnedRight.value
    ? { ...pinnedRight.value, displayTemp: toDisplay(pinnedRight.value.temp) }
    : null
)

// Which side is warmer — drives the badge in CompareHeader
const warmerSide = computed(() => {
  if (!pinnedLeft.value || !pinnedRight.value) return null
  if (pinnedLeft.value.temp > pinnedRight.value.temp)  return 'left'
  if (pinnedRight.value.temp > pinnedLeft.value.temp)  return 'right'
  return 'tie'
})

// Is the comparison panel ready to show?
const isComparing = computed(() =>
  pinnedLeft.value !== null && pinnedRight.value !== null
)
</script>
```

Every computed property here is a formula that Vue caches and updates only when its inputs change. `filteredCities` only recalculates when `search` or `allCities` changes. `warmerSide` only recalculates when a city is pinned or unpinned. This is the spreadsheet mental model from Article 3 in practice.

---

## Step 3 — Write Your Action Functions

> Concept from Article 4: state lives in the parent, components call up through events

These are the only functions that can change state. Nothing in a child component will mutate `allCities`, `pinnedLeft`, or `pinnedRight` directly.

```vue
<script setup>
// ... (refs and computed from Steps 1–2)

function pinCity(city) {
  // Fill left slot first, then right
  if (!pinnedLeft.value) {
    pinnedLeft.value = city
  } else if (!pinnedRight.value) {
    pinnedRight.value = city
  }
  // If both slots are full, do nothing — UI will disable the button
}

function unpinCity(side) {
  if (side === 'left')  pinnedLeft.value  = null
  if (side === 'right') pinnedRight.value = null
}

function swapCities() {
  const temp        = pinnedLeft.value
  pinnedLeft.value  = pinnedRight.value
  pinnedRight.value = temp
}
</script>
```

---

## Step 4 — Watch for Side Effects (`watch`)

> Concept from Article 3: `watch` for side effects

When the unit preference changes, we want to save it. When both pinned cities are set, we log for analytics (or in a real app, might fetch updated data):

```vue
<script setup>
import { ref, computed, watch } from 'vue'
// ... (refs, computed, functions from Steps 1–3)

// Persist unit preference
watch(unit, (newUnit) => {
  localStorage.setItem('compareUnit', newUnit)
})

// Log when a full comparison is ready
watch(isComparing, (comparing) => {
  if (comparing) {
    console.log(
      `Comparing: ${pinnedLeft.value.name} vs ${pinnedRight.value.name}`
    )
  }
})
</script>
```

---

## Step 5 — Build the Root Template

> Concepts from Articles 4 & 5: component composition, `v-if`, `v-for`, `@events`, `:props`

Now we wire the template. `App.vue` passes state down as props and receives events back up:

```vue
<template>
  <div class="app">
    <CompareHeader
      :unit="unit"
      :warmer-side="warmerSide"
      :left-city="pinnedLeft"
      :right-city="pinnedRight"
      @toggle-unit="unit = unit === 'F' ? 'C' : 'F'"
      @swap="swapCities"
    />

    <!-- Comparison panel — only shown when both slots are filled -->
    <div v-if="isComparing" class="comparison-panel">
      <ComparisonCard
        :city="leftDisplay"
        :unit="unit"
        :is-warmer="warmerSide === 'left'"
        side="left"
        @unpin="unpinCity('left')"
      />
      <div class="vs-divider">VS</div>
      <ComparisonCard
        :city="rightDisplay"
        :unit="unit"
        :is-warmer="warmerSide === 'right'"
        side="right"
        @unpin="unpinCity('right')"
      />
    </div>

    <!-- Prompt when slots aren't filled yet -->
    <div v-else class="pin-prompt">
      <p v-if="!pinnedLeft && !pinnedRight">
        👇 Pin two cities below to compare them.
      </p>
      <p v-else>
        👇 Pin one more city to start comparing.
      </p>
    </div>

    <CityList
      :cities="filteredCities"
      :pinned-ids="pinnedIds"
      :search="search"
      @update:search="search = $event"
      @pin="pinCity"
    />
  </div>
</template>
```

Look at how clean this is. The template describes *what* the UI looks like. The `<script setup>` handles *how* the data works. Neither section needs to know the details of the other.

---

## Step 6 — `CityList.vue`

> Concepts from Article 5: `v-model`, `v-for`, `:key`, `:class`, `v-if`, `@click`

```vue
<!-- src/components/CityList.vue -->
<script setup>
defineProps({
  cities:    { type: Array,  required: true },
  pinnedIds: { type: Array,  required: true },
  search:    { type: String, default: '' },
})
const emit = defineEmits(['update:search', 'pin'])

const conditionEmoji = {
  Sunny: '☀️', Cloudy: '☁️', Rainy: '🌧️', Windy: '💨', Snowy: '❄️',
}
</script>

<template>
  <section class="city-list">
    <h2>Cities</h2>

    <!-- v-model pattern via prop + emit for parent-controlled search -->
    <input
      :value="search"
      @input="emit('update:search', $event.target.value)"
      placeholder="Search cities..."
      class="search-input"
    />

    <!-- v-for: render each filtered city -->
    <ul class="cities">
      <li
        v-for="city in cities"
        :key="city.id"
        :class="{ 'is-pinned': pinnedIds.includes(city.id) }"
        class="city-row"
      >
        <span class="city-emoji">{{ conditionEmoji[city.condition] ?? '🌡️' }}</span>
        <span class="city-name">{{ city.name }}</span>
        <span class="city-temp">{{ city.displayTemp ?? city.temp }}°{{ city.displayUnit ?? 'F' }}</span>

        <!-- v-if: show "Pinned" badge or "Pin" button depending on state -->
        <span v-if="pinnedIds.includes(city.id)" class="pinned-badge">
          Pinned ✓
        </span>
        <button
          v-else
          @click="emit('pin', city)"
          :disabled="pinnedIds.length >= 2"
          class="pin-btn"
        >
          Pin
        </button>
      </li>
    </ul>

    <!-- v-if: show empty state when nothing matches search -->
    <p v-if="cities.length === 0" class="empty">
      No cities match "{{ search }}"
    </p>
  </section>
</template>

<style scoped>
.city-list    { margin-top: 2rem; }
.search-input { width: 100%; padding: 0.6rem 0.75rem; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 0.95rem; margin-bottom: 0.75rem; box-sizing: border-box; }
.cities       { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.4rem; }
.city-row     { display: flex; align-items: center; gap: 0.75rem; padding: 0.65rem 0.9rem; border-radius: 8px; background: #f8fafc; border: 1px solid #e2e8f0; transition: background 0.15s; }
.city-row.is-pinned { background: #f0f9ff; border-color: #bae6fd; }
.city-emoji   { font-size: 1.1rem; }
.city-name    { flex: 1; font-size: 0.9rem; color: #1e293b; }
.city-temp    { font-size: 0.85rem; color: #64748b; }
.pinned-badge { font-size: 0.75rem; color: #0ea5e9; font-weight: 600; }
.pin-btn      { padding: 0.3rem 0.75rem; background: #0ea5e9; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 0.8rem; }
.pin-btn:disabled { background: #cbd5e1; cursor: not-allowed; }
.empty        { color: #94a3b8; text-align: center; padding: 1.5rem; font-size: 0.9rem; }
</style>
```

Notice the search input pattern: instead of `v-model="search"`, we use `:value` + `@input` + `emit`. This is how you build a "controlled input" where the parent owns the state — a common pattern when a child needs to surface input changes without owning the value.

---

## Step 7 — `ComparisonCard.vue`

> Concepts from Articles 2–5: SFC structure, props, emits, computed, `:style`, `:class`

```vue
<!-- src/components/ComparisonCard.vue -->
<script setup>
import { computed } from 'vue'

const props = defineProps({
  city:     { type: Object,  required: true },
  unit:     { type: String,  default: 'F'   },
  isWarmer: { type: Boolean, default: false  },
  side:     { type: String,  required: true  },
})
const emit = defineEmits(['unpin'])

// Local computed — display logic belongs in the component that displays it
const tempColor = computed(() => {
  if (props.city.temp >= 80) return '#ef4444'
  if (props.city.temp >= 65) return '#f59e0b'
  return '#3b82f6'
})

const conditionEmoji = {
  Sunny: '☀️', Cloudy: '☁️', Rainy: '🌧️', Windy: '💨', Snowy: '❄️',
}
</script>

<template>
  <div class="comparison-card" :class="{ 'is-warmer': isWarmer }">

    <!-- Header row with city name + unpin button -->
    <header class="card-header">
      <h3>{{ city.name }}</h3>
      <button class="unpin-btn" @click="emit('unpin')">Unpin</button>
    </header>

    <!-- Temperature — color comes from local computed -->
    <div class="temp-display">
      <span class="temp" :style="{ color: tempColor }">
        {{ city.displayTemp }}°{{ unit }}
      </span>
      <span class="emoji">{{ conditionEmoji[city.condition] ?? '🌡️' }}</span>
    </div>

    <!-- Condition label -->
    <p class="condition">{{ city.condition }}</p>

    <!-- Details row -->
    <div class="details">
      <div class="detail">
        <span class="detail-label">Humidity</span>
        <span class="detail-value">{{ city.humidity }}%</span>
      </div>
    </div>

    <!-- "Warmer City" badge — v-if toggles based on prop -->
    <div v-if="isWarmer" class="warmer-badge">🔥 Warmer City</div>
  </div>
</template>

<style scoped>
.comparison-card    { flex: 1; background: white; border: 2px solid #e2e8f0; border-radius: 14px; padding: 1.5rem; transition: border-color 0.2s; }
.comparison-card.is-warmer { border-color: #f59e0b; box-shadow: 0 0 0 4px rgba(245,158,11,0.1); }
.card-header        { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
.card-header h3     { margin: 0; font-size: 1rem; color: #1e293b; }
.unpin-btn          { background: none; border: 1px solid #e2e8f0; border-radius: 6px; padding: 0.25rem 0.6rem; cursor: pointer; font-size: 0.75rem; color: #94a3b8; }
.unpin-btn:hover    { border-color: #ef4444; color: #ef4444; }
.temp-display       { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem; }
.temp               { font-size: 2.5rem; font-weight: 700; line-height: 1; }
.emoji              { font-size: 2rem; }
.condition          { color: #64748b; margin: 0 0 1rem; font-size: 0.9rem; }
.details            { display: flex; gap: 1rem; margin-bottom: 0.75rem; }
.detail             { display: flex; flex-direction: column; }
.detail-label       { font-size: 0.7rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em; }
.detail-value       { font-size: 0.95rem; font-weight: 600; color: #1e293b; }
.warmer-badge       { display: inline-block; background: #fef3c7; color: #92400e; border-radius: 20px; padding: 0.25rem 0.75rem; font-size: 0.75rem; font-weight: 600; }
</style>
```

---

## Step 8 — `CompareHeader.vue`

> Concepts from Articles 4 & 5: props, emits, `v-if`, `:class`, `@click`

```vue
<!-- src/components/CompareHeader.vue -->
<script setup>
defineProps({
  unit:       { type: String, default: 'F'   },
  warmerSide: { type: String, default: null  },  // 'left' | 'right' | 'tie' | null
  leftCity:   { type: Object, default: null  },
  rightCity:  { type: Object, default: null  },
})
const emit = defineEmits(['toggle-unit', 'swap'])
</script>

<template>
  <header class="compare-header">
    <div class="title-group">
      <h1>🌍 City Comparison</h1>
      <!-- v-if: only show summary when both cities are set -->
      <p v-if="leftCity && rightCity" class="summary">
        {{ leftCity.name }}
        <span v-if="warmerSide === 'tie'">and</span>
        <span v-else>vs</span>
        {{ rightCity.name }}
      </p>
    </div>

    <div class="controls">
      <!-- Swap button — only useful when both slots are filled -->
      <button
        v-if="leftCity && rightCity"
        @click="emit('swap')"
        class="swap-btn"
      >⇄ Swap</button>

      <!-- Unit toggle -->
      <div class="unit-toggle">
        <button @click="emit('toggle-unit')">
          {{ unit === 'F' ? '°F → °C' : '°C → °F' }}
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.compare-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem; }
.title-group h1 { font-size: 1.6rem; margin: 0 0 0.2rem; }
.summary        { color: #64748b; margin: 0; font-size: 0.9rem; }
.controls       { display: flex; align-items: center; gap: 0.75rem; }
.swap-btn       { padding: 0.4rem 0.9rem; border: 1px solid #e2e8f0; border-radius: 8px; background: white; cursor: pointer; font-size: 0.85rem; color: #475569; }
.swap-btn:hover { background: #f1f5f9; }
.unit-toggle    { display: flex; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; }
.unit-toggle button { padding: 0.4rem 0.9rem; border: none; background: white; cursor: pointer; font-size: 0.85rem; color: #64748b; }
.unit-toggle button.active { background: #0ea5e9; color: white; }
</style>
```

---

## Step 9 — Final `App.vue` Styles and Imports

Add the global styles and import all three components at the top of `App.vue`:

```vue
<!-- App.vue — complete script setup imports -->
<script setup>
import { ref, computed, watch } from 'vue'
import CityList      from './components/CityList.vue'
import ComparisonCard from './components/ComparisonCard.vue'
import CompareHeader  from './components/CompareHeader.vue'

// ... (all state, computed, and functions from Steps 1–4)
</script>

<!-- App.vue — add this at the bottom -->
<style>
*, *::before, *::after { box-sizing: border-box; }
body          { margin: 0; font-family: system-ui, sans-serif; background: #f8fafc; }
.app          { max-width: 900px; margin: 0 auto; padding: 2rem 1rem; }
.comparison-panel { display: flex; gap: 1.5rem; margin-bottom: 2rem; align-items: stretch; }
.vs-divider   { display: flex; align-items: center; font-size: 1.25rem; font-weight: 700; color: #94a3b8; padding: 0 0.5rem; }
.pin-prompt   { text-align: center; padding: 2rem; color: #94a3b8; background: white; border-radius: 12px; margin-bottom: 2rem; border: 2px dashed #e2e8f0; }
</style>
```

---

## The Concept Map

Every article in the series showed up in this build. Here's where:

| Concept | Article | Where it appeared in this project |
|---|---|---|
| Vue extends HTML | 1 | All templates — HTML + directives, nothing replaced |
| SFC structure (`script` / `template` / `style`) | 2 | All four `.vue` files |
| `ref` | 3 | `allCities`, `pinnedLeft`, `pinnedRight`, `unit`, `search` |
| `computed` | 3 | `filteredCities`, `pinnedIds`, `leftDisplay`, `rightDisplay`, `warmerSide`, `isComparing`, `tempColor` |
| `watch` | 3 | Unit persistence to localStorage, comparison logging |
| Props down | 4 | Every parent→child data relationship |
| Events up | 4 | `@pin`, `@unpin`, `@swap`, `@toggle-unit`, `@update:search` |
| `defineProps` / `defineEmits` | 4 | Every child component |
| Scoped styles | 4 | All component `<style scoped>` blocks |
| `v-if` / `v-else` | 5 | Comparison panel, pin prompt, warmer badge, pinned badge |
| `v-for` + `:key` | 5 | City list |
| `v-model` / controlled input | 5 | Search input in `CityList` |
| `:class` | 5 | `.is-pinned`, `.is-warmer`, `.active` |
| `:style` | 5 | Temperature color in `ComparisonCard` |
| `@click` | 5 | Pin, unpin, swap, unit toggle |
| Component composition | 4 | `App.vue` orchestrating three child components |
| Single source of truth | 4 | All state in `App.vue`, computed derived state, children never mutate |

If every row in that table makes sense to you, you're ready for the next stage: Vue Router, Pinia, and real API integration.

---

## What to Try Next

The app is functional with mock data. Here are three exercises to push it further — each one introduces a concept from the "next steps" tier:

**Exercise 1 — Persist pinned cities** (intro to `watch` + `localStorage`):
Save `pinnedLeft` and `pinnedRight` to `localStorage` when they change. Restore them on page load using `onMounted`.

**Exercise 2 — Add a humidity bar** (intro to `:style` binding):
In `ComparisonCard`, add a `<div class="humidity-bar">` whose width is `:style="{ width: city.humidity + '%' }"`. Highlight the city with higher humidity.

**Exercise 3 — Real API data** (intro to `onMounted` + `fetch`):
Replace the mock city list in `App.vue` with a real call to the [Open-Meteo API](https://open-meteo.com/) (free, no key required). Fetch actual temperature and condition data for any city name entered.

---

Progress over perfection. You've got the foundation. Everything from here is building on what you already know.

Link in the comments if you build it — I want to see what you make.

---

*Bonus article for the Vue 3 Fundamentals series.*
*Full series at [developingdvlpr.com](https://developingdvlpr.com)*
*Sources: [Vue.js Official Docs](https://vuejs.org) · [Vue School](https://vueschool.io) · [Vue.js Reactivity Fundamentals](https://vuejs.org/guide/essentials/reactivity-fundamentals)*
