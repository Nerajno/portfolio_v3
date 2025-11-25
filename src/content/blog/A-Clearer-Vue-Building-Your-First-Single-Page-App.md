---
# ============================================================================
# DRAFT STATUS
# ============================================================================
draft: false

# ============================================================================
# SEO OPTIMIZATION (Traditional Search Engines: Google, Bing, etc.)
# ============================================================================
seoTitle: "Build Your First Vue 3 SPA: Composition API & Vue Router | Nerando Johnson"
seoDescription: "Build a complete Vue 3 Single-Page App with Composition API, Vue Router, and composables. Learn modern Vue development with a hands-on notes app project."

# ============================================================================
# OPEN GRAPH / SOCIAL MEDIA
# ============================================================================
openGraph:
  type: article
  publishedTime: 2025-01-15T10:00:00.000Z
  modifiedTime: 2025-01-15T10:00:00.000Z
  section: "Web Development, JavaScript, Vue.js, SPA"
  tags:
    - Vue.js
    - JavaScript
    - Tutorial
    - Composition API
    - SPA

# ============================================================================
# TWITTER CARD
# ============================================================================
twitter:
  card: summary_large_image
  site: '@nerajno'
  creator: '@nerajno'
  title: "A Clearer Vue: Building Your First Single-Page App"
  description: "Learn the Composition API and build a complete Vue 3 SPA with routing, state management, and localStorage persistence."
  image: "https://developingdvlpr.com/vue-spa-cover.jpg"

# ============================================================================
# STRUCTURED DATA (Schema.org)
# ============================================================================
structuredData:
  "@context": "https://schema.org"
  "@type": "TechArticle"
  headline: "A Clearer Vue: Building Your First Single-Page App"
  description: "Comprehensive Vue 3 tutorial teaching Composition API and building a production-ready SPA with Vue Router and composables"
  author:
    "@type": "Person"
    name: "Nerando Johnson"
    url: "https://nerandojohnson.com"
    jobTitle: "Junior Front-End Developer"
    knowsAbout: ["JavaScript", "Vue.js", "React", "Web Development"]
  datePublished: "2025-01-15"
  dateModified: "2025-01-15"
  image: "https://developingdvlpr.com/vue-spa-cover.jpg"
  publisher:
    "@type": "Organization"
    name: "Nerando Johnson"
    logo:
      "@type": "ImageObject"
      url: "https://nerandojohnson.com/logo.png"
  mainEntityOfPage:
    "@type": "WebPage"
    "@id": "https://developingdvlpr.com/blog/a-clearer-vue-building-your-first-single-page-app"

# ============================================================================
# BASIC CONTENT FIELDS
# ============================================================================
title: "A Clearer Vue: Building Your First Single-Page App"
snippet: "Master the Composition API and build a production-ready Vue 3 SPA. Learn Vue Router, composables, and modern patterns through building a complete notes application with CRUD operations and localStorage."
image: {
    src: "https://developingdvlpr.com/vue-spa-cover.jpg",
    alt: "Vue 3 tutorial building a single-page application with Composition API and Vue Router"
}

publishDate: "2025-01-15 06:00"
category: "Web Development, JavaScript"
author: "Nerando Johnson"
tags: [Vue.js, JavaScript, Tutorial, Composition API, Vue Router, Single Page Application, Frontend Development, Composables]

# ============================================================================
# KEYWORDS (For SEO and internal search)
# ============================================================================
keywords: [
  "Vue 3 SPA tutorial",
  "Composition API tutorial",
  "Vue Router guide",
  "Vue composables",
  "script setup Vue",
  "Vue localStorage",
  "build Vue app",
  "Vue notes app",
  "Vue CRUD application",
  "ref vs reactive Vue",
  "Vue project structure",
  "modern Vue development",
  "Vue 3 best practices",
  "single page application Vue",
  "Vue state management",
  "Real World Vue 3",
  "production Vue app",
  "Vue app deployment"
]

# ============================================================================
# GEO OPTIMIZATION (Combined: Geographic + AI Optimization)
# ============================================================================
geo:
  location:
    region: "US-GA"
    placename: "Atlanta"
    position: "33.7490° N, 84.3880° W"

  content:
    type: "Tutorial"
    format: "Project-based tutorial | Build-along guide"
    topic: "Building a production-ready Vue 3 Single-Page Application using Composition API, Vue Router, and composables"

    intent:
      - "How do I build my first Vue single-page application?"
      - "What is the Composition API in Vue 3?"
      - "How do I use script setup in Vue?"
      - "How do composables work in Vue 3?"
      - "How do I use Vue Router for navigation?"
      - "What's the difference between ref() and reactive()?"
      - "How do I persist data in Vue with localStorage?"
      - "How do I implement CRUD operations in Vue?"
      - "What are best practices for Vue 3 project structure?"
      - "How do I organize Vue components and views?"
      - "How do I use watch and computed in Composition API?"
      - "How do I deploy a Vue 3 application?"

    audience:
      primary: "Developers who know Vue fundamentals and want to build real applications"
      secondary: "Intermediate JavaScript developers learning modern Vue patterns"
      painPoints:
        - "Understanding fundamentals but not knowing how to build complete apps"
        - "Confusion about when to use ref() vs reactive()"
        - "Difficulty structuring larger Vue projects"
        - "Not understanding how composables work"
        - "Struggling to implement routing and navigation"
        - "Uncertainty about production-ready patterns"
      goals:
        - "Build a complete, functional Vue 3 SPA from scratch"
        - "Master the Composition API and script setup syntax"
        - "Learn to create reusable composables"
        - "Understand Vue Router and programmatic navigation"
        - "Implement proper project structure and organization"
        - "Deploy a production-ready Vue application"

    keyTakeaways:
      - "Composition API with script setup provides better organization than Options API for modern apps"
      - "Composables enable powerful code reuse by extracting reactive logic into functions"
      - "ref() is recommended over reactive() for consistency and avoiding destructuring pitfalls"
      - "Vue Router enables SPA navigation with dynamic routes and programmatic navigation"
      - "Proper project structure separates views, components, and composables for maintainability"

    faq:
      - question: "Do I need to complete Part 1 before this tutorial?"
        answer: "Yes, this tutorial assumes you understand Vue fundamentals from Part 1, including reactivity, components, and the Options API."
      - question: "What's the difference between ref() and reactive()?"
        answer: "ref() works with any value and requires .value to access/modify. reactive() only works with objects and doesn't need .value. We recommend ref() for consistency."
      - question: "How long does it take to complete this tutorial?"
        answer: "Plan for 1-2 hours to read through and another 1-2 hours to build the complete notes application with all features."
      - question: "Can I use this for production apps?"
        answer: "Absolutely! This tutorial teaches production-ready patterns including proper project structure, composables, routing, and state persistence."

    relatedTopics:
      - "Composition API"
      - "Vue Router"
      - "Composables"
      - "Single-Page Applications"
      - "Script Setup"
      - "State Management"
      - "LocalStorage API"
      - "CRUD Operations"
      - "Vue CLI"
      - "Vite"
      - "Pinia"
      - "Deployment"

    expertise: "Written by junior developer learning Vue through Vue Mastery's Real World Vue 3 course, documenting the journey from fundamentals to building production apps"
    evidenceBased: true
    actionable: true
    includesExamples: true
    includesTemplates: false
    includesChallenges: true
    depth: "Comprehensive project-based guide"
    personalExperience: "Part 2 of my Vue Mastery learning journey, covering Real World Vue 3 and building complete applications"
    credibility: "Active learner sharing practical insights from building a real SPA with modern Vue patterns"

# ============================================================================
# ALTERNATIVE GEO FORMAT
# ============================================================================
schema: {
  type: "BlogPosting",
  about: "Building a production-ready Vue 3 SPA with Composition API, Vue Router, and composables",
  genre: "Technical Tutorial",
  educationalLevel: "Intermediate",
  teaches: ["Composition API", "Script Setup", "Vue Router", "Composables", "SPA Architecture", "Project Structure", "CRUD Operations", "Deployment"],
  audience: {
    type: "ProfessionalAudience",
    audienceType: "JavaScript developers ready to build production Vue applications"
  }
}

entities: {
  primary: ["Vue.js", "Composition API", "Vue Router", "JavaScript", "SPA"],
  secondary: ["Composables", "Script Setup", "ref()", "reactive()", "Vite"],
  people: ["Nerando Johnson"],
  organizations: ["Vue Mastery"],
  concepts: ["Single-Page Applications", "Component Architecture", "State Management", "Code Reusability", "Client-side Routing", "Reactive Programming"]
}

contentStructure: {
  type: "Tutorial",
  difficulty: "Intermediate",
  timeToComplete: "2-4 hours read and build",
  prerequisites: ["Vue 3 fundamentals", "Options API knowledge", "Node.js installed", "Terminal basics"],
  outcomes: ["Build a complete Vue 3 SPA", "Master Composition API and script setup", "Create reusable composables", "Implement Vue Router", "Structure production projects", "Deploy Vue applications"]
}

semanticContext: {
  topic: "Building a production-ready Vue 3 Single-Page Application using modern patterns including Composition API, Vue Router, and composables",
  subtopics: ["Composition API", "Script setup", "ref() and reactive()", "Composables", "Vue Router", "Dynamic routing", "LocalStorage persistence", "CRUD operations", "Project structure", "Component organization", "Deployment"],
  relatedConcepts: ["Single-page applications", "Client-side routing", "Reactive programming", "Code reusability", "State persistence", "Component composition"],
  practicalApplication: true
}

citationMetadata: {
  citableAs: "Johnson, N. (2025). A Clearer Vue: Building Your First Single-Page App",
  lastReviewed: "2025-01-15",
  version: "1.0",
  originalPublisher: "Nerando Johnson's Blog"
}

aiOptimization: {
  summaryPrompt: "Comprehensive Vue 3 tutorial teaching how to build a production-ready SPA using Composition API, Vue Router, and composables through a complete notes application project",
  keyTakeaways: [
    "Composition API with script setup provides better code organization and reusability than Options API",
    "Composables enable powerful code reuse by encapsulating reactive logic in reusable functions",
    "ref() is recommended over reactive() for consistency and avoiding destructuring issues",
    "Vue Router enables SPA navigation with dynamic routes, programmatic navigation, and route params",
    "Proper project structure with views, components, and composables folders improves maintainability"
  ],
  technicalDepth: "intermediate-advanced",
  codeExamples: true
}
---

# A Clearer Vue: Building Your First Single-Page App 

*Part of the Vue Mastery Beginner Track Series - Covering Real World Vue 3*

> **A note from the author:** This is Part 2 of a two-part series covering Vue Mastery's beginner track. In Part 1, we mastered Vue fundamentals with the Options API. In this article, we'll level up to the Composition API and build a complete Single-Page Application. As I continue learning, I may refine sections. Feedback welcome—find me [@nerajno](https://twitter.com/nerajno).

If you completed Part 1, you now understand Vue's fundamentals: reactivity, components, directives, and the Options API.

But here's the thing: **real Vue apps look different.**

Modern Vue 3 applications use the Composition API, Single-File Components, Vue Router, and composables for shared logic. The jump from understanding fundamentals to building production apps can feel huge.

This article bridges that gap.

By the end, you'll have built **"Vue Notes"**—a complete Single-Page Application with routing, state management, search, filtering, and localStorage persistence. You'll understand how modern Vue apps are structured and be confident starting your own projects.

Let's build something real.

## Before You Start

Make sure you've completed Part 1 or are comfortable with:

- ✅ Vue's reactive system
- ✅ Template syntax and directives
- ✅ Components, props, and events
- ✅ The Options API basics

**What you'll need:**

- **Node.js** installed ([nodejs.org](https://nodejs.org))
- **A code editor** (VS Code recommended)
- **Terminal/command line** basic familiarity
- **1-2 hours** to work through the project

Ready? Let's dive in.

## The Composition API: Modern Vue

The Composition API is Vue 3's recommended way to build applications. Here's why it matters:

### Why the Composition API?

**Options API** (what you learned in Part 1):
```javascript
export default {
  data() {
    return { count: 0 }
  },
  methods: {
    increment() { this.count++ }
  },
  computed: {
    doubled() { return this.count * 2 }
  }
}
```

**Composition API** (what we're learning now):
```javascript
import { ref, computed } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const increment = () => count.value++
    const doubled = computed(() => count.value * 2)

    return { count, increment, doubled }
  }
}
```

**Key differences:**

| Options API | Composition API |
|-------------|-----------------|
| Options organized by type | Logic organized by feature |
| `this` keyword everywhere | No `this` needed |
| Hard to extract reusable logic | Easy with composables |
| Good for learning | Better for production |

**When to use each:**

- **Options API:** Learning Vue, simple components, personal projects
- **Composition API:** Production apps, complex logic, team projects, TypeScript

For our notes app, we'll use the Composition API—the approach you'll see in modern Vue codebases.

## Setup Function and Script Setup

There are two ways to use the Composition API:

### Traditional setup()

```vue
<script>
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)

    function increment() {
      count.value++
    }

    // Must return what you want in template
    return {
      count,
      increment
    }
  }
}
</script>

<template>
  <button @click="increment">{{ count }}</button>
</template>
```

### Modern &lt;script setup&gt; (Recommended)

```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}

// Everything is automatically available in template!
</script>

<template>
  <button @click="increment">{{ count }}</button>
</template>
```

`<script setup>` is:
- Less verbose (no return statement)
- Better performance
- The standard in modern Vue

**We'll use `<script setup>` for our project.**

## Reactive References: ref() and reactive()

The Composition API provides two ways to create reactive state:

### ref() - For Any Value

```javascript
import { ref } from 'vue'

// Primitives
const count = ref(0)
const message = ref('Hello')
const isActive = ref(true)

// Objects (still use ref)
const user = ref({ name: 'Nerando', age: 30 })

// Arrays
const items = ref([1, 2, 3])

// Access with .value
console.log(count.value) // 0
count.value++ // 1

// In template, .value is automatic
// <p>{{ count }}</p> works (no .value needed)
```

### reactive() - For Objects Only

```javascript
import { reactive } from 'vue'

// Objects
const state = reactive({
  count: 0,
  user: {
    name: 'Nerando'
  }
})

// No .value needed
console.log(state.count) // 0
state.count++ // 1

// ⚠️ Destructuring breaks reactivity
const { count } = state // count is no longer reactive!
```

**Best practice:** Use `ref()` for everything. It's more consistent and you won't forget `.value` in JavaScript while remembering you don't need it in templates.

> **Stumbling Block:** Forgetting `.value` with refs is the #1 Composition API mistake. If something isn't reactive, check for missing `.value` first!

## Computed Properties and Watchers

### Computed in Composition API

```vue
<script setup>
import { ref, computed } from 'vue'

const firstName = ref('Nerando')
const lastName = ref('Johnson')

// Computed property
const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`
})

// Use it (no .value in template)
// <p>{{ fullName }}</p>
</script>
```

### Watchers: Reacting to Changes

```vue
<script setup>
import { ref, watch } from 'vue'

const count = ref(0)
const message = ref('')

// Watch a single ref
watch(count, (newValue, oldValue) => {
  console.log(`Count changed from ${oldValue} to ${newValue}`)
})

// Watch multiple sources
watch([count, message], ([newCount, newMsg], [oldCount, oldMsg]) => {
  console.log('Either changed')
})

// Watch with options
watch(
  count,
  (newValue) => {
    // Save to localStorage
    localStorage.setItem('count', newValue)
  },
  {
    immediate: true, // Run on mount
    deep: true // Watch nested properties
  }
)
</script>
```

**Common use cases for watchers:**
- Saving to localStorage
- Making API calls
- Validation
- Analytics/logging

## Lifecycle Hooks in Composition API

```vue
<script setup>
import { ref, onMounted, onUpdated, onUnmounted } from 'vue'

const data = ref(null)

// Runs when component is added to DOM
onMounted(() => {
  console.log('Component mounted!')
  fetchData()
})

// Runs after component updates
onUpdated(() => {
  console.log('Component updated')
})

// Runs before component is removed
onUnmounted(() => {
  console.log('Cleanup')
  // Clean up: timers, listeners, subscriptions
})

async function fetchData() {
  const response = await fetch('https://api.example.com/data')
  data.value = await response.json()
}
</script>
```

**Lifecycle comparison:**

| Options API | Composition API |
|-------------|-----------------|
| `beforeMount()` | `onBeforeMount()` |
| `mounted()` | `onMounted()` |
| `beforeUpdate()` | `onBeforeUpdate()` |
| `updated()` | `onUpdated()` |
| `beforeUnmount()` | `onBeforeUnmount()` |
| `unmounted()` | `onUnmounted()` |

## Composables: Reusable Logic

Here's where the Composition API truly shines—composables let you extract and reuse logic across components.

### What is a Composable?

A composable is a function that:
- Uses Composition API features (ref, computed, watch, etc.)
- Returns reactive state and functions
- Can be reused in any component

### Example: useCounter Composable

```javascript
// composables/useCounter.js
import { ref } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)

  function increment() {
    count.value++
  }

  function decrement() {
    count.value--
  }

  function reset() {
    count.value = initialValue
  }

  return {
    count,
    increment,
    decrement,
    reset
  }
}
```

**Using the composable:**

```vue
<script setup>
import { useCounter } from './composables/useCounter'

// Use it!
const { count, increment, decrement, reset } = useCounter(10)
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="reset">Reset</button>
  </div>
</template>
```

### Real-World Example: useLocalStorage

```javascript
// composables/useLocalStorage.js
import { ref, watch } from 'vue'

export function useLocalStorage(key, defaultValue) {
  // Try to load existing value
  const storedValue = localStorage.getItem(key)
  const data = ref(storedValue ? JSON.parse(storedValue) : defaultValue)

  // Watch for changes and save automatically
  watch(
    data,
    (newValue) => {
      localStorage.setItem(key, JSON.stringify(newValue))
    },
    { deep: true }
  )

  return data
}
```

**Usage:**

```vue
<script setup>
import { useLocalStorage } from './composables/useLocalStorage'

// Automatically syncs with localStorage!
const notes = useLocalStorage('my-notes', [])
const preferences = useLocalStorage('user-prefs', { theme: 'light' })
</script>
```

**This is powerful:** Any component can now have persistent state with one line of code.

## Single-Page Applications (SPAs)

Before we build our app, let's understand SPAs.

### Traditional Multi-Page App

```
User clicks "About" → Browser requests /about.html → Server sends new HTML → Full page reload
```

Every navigation = full page reload = slow, janky experience.

### Single-Page Application

```
User clicks "About" → JavaScript intercepts → Swaps component → No reload!
```

**Benefits:**
- ⚡ Instant navigation
- 🎯 Preserved state
- 📱 Native app feel
- 🚀 Better UX

**Trade-offs:**
- Initial load slightly slower
- SEO needs special handling (or use Nuxt)
- More JavaScript

Vue Router makes building SPAs straightforward.

## Vue Router: Navigation for SPAs

### Installation

```bash
npm install vue-router@4
```

### Basic Setup

```javascript
// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
```

```javascript
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

createApp(App)
  .use(router)
  .mount('#app')
```

```vue
<!-- App.vue -->
<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>

  <!-- Matched component renders here -->
  <RouterView />
</template>
```

### Dynamic Routes

```javascript
// Route with parameter
{
  path: '/notes/:id',
  name: 'note-detail',
  component: NoteDetailView
}

// Access in component
<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route.params.id) // "123" if URL is /notes/123
</script>
```

### Programmatic Navigation

```vue
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goToNote(id) {
  // Push new entry to history
  router.push(`/notes/${id}`)

  // Or by name
  router.push({ name: 'note-detail', params: { id } })
}

function goBack() {
  router.go(-1)
}

function replaceRoute() {
  // Replace current entry (no back button)
  router.replace('/notes')
}
</script>
```

## The Project: Vue Notes

Now we build everything together.

### What We're Building

**Vue Notes** - A complete SPA featuring:

✅ Create, edit, delete notes
✅ Real-time search
✅ Tag organization
✅ Sort by date or title
✅ LocalStorage persistence
✅ Responsive design
✅ Vue Router navigation
✅ Composables for shared logic

**Build time:** 90-120 minutes

### Project Setup

```bash
# Create project
npm create vue@latest

# Follow prompts:
# Project name: vue-notes
# TypeScript? No
# JSX? No
# Vue Router? Yes
# Pinia? No
# Vitest? No
# ESLint? Yes

cd vue-notes
npm install
npm run dev
```

Your app runs at `http://localhost:5173`

### File Structure

```
vue-notes/
├── src/
│   ├── assets/         # CSS, images
│   ├── components/     # Reusable components
│   │   ├── NoteCard.vue
│   │   ├── NoteEditor.vue
│   │   └── SearchBar.vue
│   ├── composables/    # Shared logic
│   │   ├── useNotes.js
│   │   └── useLocalStorage.js
│   ├── router/         # Route config
│   │   └── index.js
│   ├── views/          # Page components
│   │   ├── HomeView.vue
│   │   ├── CreateView.vue
│   │   ├── EditView.vue
│   │   └── DetailView.vue
│   ├── App.vue
│   └── main.js
├── index.html
└── package.json
```

### Step 1: Create useLocalStorage Composable

```javascript
// src/composables/useLocalStorage.js
import { ref, watch } from 'vue'

export function useLocalStorage(key, defaultValue = null) {
  // Load from localStorage
  const storedValue = localStorage.getItem(key)
  const data = ref(storedValue ? JSON.parse(storedValue) : defaultValue)

  // Auto-save on changes
  watch(
    data,
    (newValue) => {
      localStorage.setItem(key, JSON.stringify(newValue))
      console.log(`Saved to localStorage[${key}]`)
    },
    { deep: true }
  )

  return data
}
```

**Test it:**

```vue
<script setup>
import { useLocalStorage } from './composables/useLocalStorage'

const test = useLocalStorage('test-key', 'Hello!')
// Change test.value and refresh page - it persists!
</script>
```

### Step 2: Create useNotes Composable

```javascript
// src/composables/useNotes.js
import { computed } from 'vue'
import { useLocalStorage } from './useLocalStorage'

export function useNotes() {
  const notes = useLocalStorage('vue-notes', [])

  function generateId() {
    return Date.now() + Math.random().toString(36).slice(2, 11)
  }

  function addNote(noteData) {
    const newNote = {
      id: generateId(),
      title: noteData.title,
      content: noteData.content,
      tags: noteData.tags || [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    notes.value.push(newNote)
    return newNote
  }

  function getNote(id) {
    return notes.value.find(note => note.id === id)
  }

  function updateNote(id, updates) {
    const index = notes.value.findIndex(note => note.id === id)
    if (index !== -1) {
      notes.value[index] = {
        ...notes.value[index],
        ...updates,
        updatedAt: new Date().toISOString()
      }
      return notes.value[index]
    }
    return null
  }

  function deleteNote(id) {
    const index = notes.value.findIndex(note => note.id === id)
    if (index !== -1) {
      notes.value.splice(index, 1)
      return true
    }
    return false
  }

  function searchNotes(query) {
    if (!query) return notes.value

    const lowerQuery = query.toLowerCase()
    return notes.value.filter(note =>
      note.title.toLowerCase().includes(lowerQuery) ||
      note.content.toLowerCase().includes(lowerQuery) ||
      note.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    )
  }

  const allTags = computed(() => {
    const tagSet = new Set()
    notes.value.forEach(note => {
      note.tags.forEach(tag => tagSet.add(tag))
    })
    return Array.from(tagSet).sort()
  })

  return {
    notes,
    addNote,
    getNote,
    updateNote,
    deleteNote,
    searchNotes,
    allTags
  }
}
```

**Now any component can manage notes with one import!**

### Step 3: Configure Router

```javascript
// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('../views/CreateView.vue')
  },
  {
    path: '/notes/:id',
    name: 'detail',
    component: () => import('../views/DetailView.vue')
  },
  {
    path: '/notes/:id/edit',
    name: 'edit',
    component: () => import('../views/EditView.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
```

### Step 4: Build Components

#### SearchBar.vue

```vue
<template>
  <div class="search-bar">
    <input
      type="search"
      v-model="query"
      @input="handleSearch"
      placeholder="Search notes..."
      class="search-input"
    />
    <span v-if="resultCount !== null" class="result-count">
      {{ resultCount }} {{ resultCount === 1 ? 'result' : 'results' }}
    </span>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const query = ref('')

const emit = defineEmits(['search'])

defineProps({
  resultCount: {
    type: Number,
    default: null
  }
})

function handleSearch() {
  emit('search', query.value)
}
</script>

<style scoped>
.search-bar {
  margin-bottom: 2rem;
}

.search-input {
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  transition: border-color 0.3s;
}

.search-input:focus {
  outline: none;
  border-color: #42b983;
}

.result-count {
  display: block;
  margin-top: 0.5rem;
  color: #666;
  font-size: 0.875rem;
}
</style>
```

#### NoteCard.vue

```vue
<template>
  <div class="note-card" @click="goToDetail">
    <h3 class="note-title">{{ note.title }}</h3>
    <p class="note-preview">{{ preview }}</p>

    <div class="note-meta">
      <span class="note-date">{{ formattedDate }}</span>
      <div class="note-tags">
        <span v-for="tag in note.tags" :key="tag" class="tag">
          #{{ tag }}
        </span>
      </div>
    </div>

    <div class="note-actions">
      <button @click.stop="$emit('edit', note.id)" class="btn btn-edit">
        Edit
      </button>
      <button @click.stop="$emit('delete', note.id)" class="btn btn-delete">
        Delete
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  note: {
    type: Object,
    required: true
  }
})

defineEmits(['edit', 'delete'])

const router = useRouter()

const preview = computed(() => {
  const maxLength = 150
  return props.note.content.length > maxLength
    ? props.note.content.slice(0, maxLength) + '...'
    : props.note.content
})

const formattedDate = computed(() => {
  return new Date(props.note.updatedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
})

function goToDetail() {
  router.push({ name: 'detail', params: { id: props.note.id } })
}
</script>

<style scoped>
.note-card {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s;
}

.note-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.note-title {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
}

.note-preview {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.note-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: #999;
}

.note-tags {
  display: flex;
  gap: 0.5rem;
}

.tag {
  background: #f0f0f0;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  color: #666;
}

.note-actions {
  display: flex;
  gap: 0.5rem;
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: all 0.2s;
}

.btn-edit {
  background: #42b983;
  color: white;
}

.btn-edit:hover {
  background: #35a372;
}

.btn-delete {
  background: #f56565;
  color: white;
}

.btn-delete:hover {
  background: #e53e3e;
}
</style>
```

#### NoteEditor.vue

```vue
<template>
  <form @submit.prevent="handleSubmit" class="note-editor">
    <div class="form-group">
      <label for="title">Title</label>
      <input
        id="title"
        v-model.trim="formData.title"
        type="text"
        placeholder="Note title..."
        required
      />
    </div>

    <div class="form-group">
      <label for="content">Content</label>
      <textarea
        id="content"
        v-model="formData.content"
        placeholder="Write your note..."
        rows="12"
        required
      ></textarea>
    </div>

    <div class="form-group">
      <label for="tags">Tags (comma-separated)</label>
      <input
        id="tags"
        v-model="tagInput"
        type="text"
        placeholder="vue, javascript, tutorial"
      />
    </div>

    <div class="form-actions">
      <button type="submit" class="btn btn-primary">
        {{ submitLabel }}
      </button>
      <button type="button" @click="handleCancel" class="btn btn-secondary">
        Cancel
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  initialNote: {
    type: Object,
    default: () => ({ title: '', content: '', tags: [] })
  },
  submitLabel: {
    type: String,
    default: 'Save Note'
  }
})

const emit = defineEmits(['save'])

const router = useRouter()

const formData = ref({
  title: props.initialNote.title,
  content: props.initialNote.content,
  tags: [...(props.initialNote.tags || [])]
})

const tagInput = ref(formData.value.tags.join(', '))

watch(tagInput, (newValue) => {
  formData.value.tags = newValue
    .split(',')
    .map(tag => tag.trim())
    .filter(tag => tag.length > 0)
})

function handleSubmit() {
  emit('save', {
    title: formData.value.title,
    content: formData.value.content,
    tags: formData.value.tags
  })
}

function handleCancel() {
  router.go(-1)
}
</script>

<style scoped>
.note-editor {
  max-width: 800px;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #2c3e50;
}

input, textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-family: inherit;
  font-size: 1rem;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #42b983;
}

textarea {
  resize: vertical;
}

.form-actions {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary {
  background: #42b983;
  color: white;
}

.btn-primary:hover {
  background: #35a372;
}

.btn-secondary {
  background: #e0e0e0;
  color: #2c3e50;
}

.btn-secondary:hover {
  background: #d0d0d0;
}
</style>
```

### Step 5: Build Views

#### HomeView.vue

```vue
<template>
  <div class="home">
    <header class="home-header">
      <h1>My Notes</h1>
      <RouterLink to="/create" class="btn-create">
        + New Note
      </RouterLink>
    </header>

    <SearchBar
      @search="handleSearch"
      :result-count="displayedNotes.length"
    />

    <div v-if="displayedNotes.length === 0" class="empty-state">
      <p v-if="searchQuery">No notes match your search.</p>
      <p v-else>No notes yet. Create your first note!</p>
    </div>

    <div v-else class="notes-grid">
      <NoteCard
        v-for="note in displayedNotes"
        :key="note.id"
        :note="note"
        @edit="editNote"
        @delete="confirmDelete"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useNotes } from '../composables/useNotes'
import NoteCard from '../components/NoteCard.vue'
import SearchBar from '../components/SearchBar.vue'

const router = useRouter()
const { notes, deleteNote, searchNotes } = useNotes()

const searchQuery = ref('')

const displayedNotes = computed(() => {
  return searchQuery.value
    ? searchNotes(searchQuery.value)
    : notes.value
})

function handleSearch(query) {
  searchQuery.value = query
}

function editNote(id) {
  router.push({ name: 'edit', params: { id } })
}

function confirmDelete(id) {
  const note = notes.value.find(n => n.id === id)
  if (confirm(`Delete "${note.title}"?`)) {
    deleteNote(id)
  }
}
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.home-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.home-header h1 {
  margin: 0;
}

.btn-create {
  background: #42b983;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
}

.notes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.empty-state {
  text-align: center;
  padding: 4rem;
  color: #999;
}
</style>
```

#### CreateView.vue

```vue
<template>
  <div class="create-view">
    <h1>Create New Note</h1>
    <NoteEditor @save="handleSave" submit-label="Create Note" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useNotes } from '../composables/useNotes'
import NoteEditor from '../components/NoteEditor.vue'

const router = useRouter()
const { addNote } = useNotes()

function handleSave(noteData) {
  const newNote = addNote(noteData)
  router.push({ name: 'detail', params: { id: newNote.id } })
}
</script>

<style scoped>
.create-view {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  margin-bottom: 2rem;
}
</style>
```

#### EditView.vue

```vue
<template>
  <div class="edit-view">
    <h1>Edit Note</h1>
    <NoteEditor
      v-if="note"
      :initial-note="note"
      @save="handleSave"
      submit-label="Update Note"
    />
    <div v-else class="not-found">
      <p>Note not found.</p>
      <RouterLink to="/">← Back to Notes</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useNotes } from '../composables/useNotes'
import NoteEditor from '../components/NoteEditor.vue'

const route = useRoute()
const router = useRouter()
const { getNote, updateNote } = useNotes()

const note = computed(() => getNote(route.params.id))

function handleSave(updates) {
  updateNote(route.params.id, updates)
  router.push({ name: 'detail', params: { id: route.params.id } })
}
</script>

<style scoped>
.edit-view {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  margin-bottom: 2rem;
}

.not-found {
  text-align: center;
  padding: 4rem;
}
</style>
```

#### DetailView.vue

```vue
<template>
  <div class="detail-view">
    <div v-if="note" class="note-detail">
      <header class="note-header">
        <h1>{{ note.title }}</h1>
        <div class="note-actions">
          <RouterLink
            :to="{ name: 'edit', params: { id: note.id } }"
            class="btn btn-edit"
          >
            Edit
          </RouterLink>
          <button @click="confirmDelete" class="btn btn-delete">
            Delete
          </button>
        </div>
      </header>

      <div class="note-meta">
        <span>Created: {{ formatDate(note.createdAt) }}</span>
        <span>Modified: {{ formatDate(note.updatedAt) }}</span>
      </div>

      <div v-if="note.tags.length" class="note-tags">
        <span v-for="tag in note.tags" :key="tag" class="tag">
          #{{ tag }}
        </span>
      </div>

      <div class="note-content">
        {{ note.content }}
      </div>

      <RouterLink to="/" class="back-link">
        ← Back to Notes
      </RouterLink>
    </div>

    <div v-else class="not-found">
      <p>Note not found.</p>
      <RouterLink to="/">← Back to Notes</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useNotes } from '../composables/useNotes'

const route = useRoute()
const router = useRouter()
const { getNote, deleteNote } = useNotes()

const note = computed(() => getNote(route.params.id))

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

function confirmDelete() {
  if (confirm(`Delete "${note.value.title}"?`)) {
    deleteNote(note.value.id)
    router.push('/')
  }
}
</script>

<style scoped>
.detail-view {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.note-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.note-header h1 {
  margin: 0;
  flex: 1;
}

.note-actions {
  display: flex;
  gap: 0.5rem;
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  font-size: 0.875rem;
}

.btn-edit {
  background: #42b983;
  color: white;
}

.btn-delete {
  background: #f56565;
  color: white;
}

.note-meta {
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: #999;
}

.note-tags {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.tag {
  background: #f0f0f0;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  color: #666;
}

.note-content {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  white-space: pre-wrap;
  line-height: 1.8;
}

.back-link {
  color: #42b983;
  text-decoration: none;
  font-weight: 600;
}

.not-found {
  text-align: center;
  padding: 4rem;
}
</style>
```

### Step 6: Update App.vue

```vue
<template>
  <div id="app">
    <nav class="main-nav">
      <RouterLink to="/" class="logo">📝 Vue Notes</RouterLink>
      <div class="nav-links">
        <RouterLink to="/">All Notes</RouterLink>
        <RouterLink to="/create" class="btn-new">+ New</RouterLink>
      </div>
    </nav>

    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #f5f5f5;
  color: #2c3e50;
}

#app {
  min-height: 100vh;
}

.main-nav {
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #42b983;
}

.nav-links {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  color: #2c3e50;
  font-weight: 500;
}

.btn-new {
  background: #42b983;
  color: white !important;
  padding: 0.5rem 1rem;
  border-radius: 6px;
}

.main-content {
  padding: 2rem 0;
}
</style>
```

## What You've Built and Learned

🎉 **Congratulations!** You've built a complete, production-ready Vue 3 application.

Let's reflect on what you've mastered:

### Technical Skills

✅ **Composition API**
- `ref()` and `reactive()` for state
- `computed()` for derived values
- `watch()` for side effects
- Lifecycle hooks

✅ **Composables**
- Extracting reusable logic
- `useLocalStorage` for persistence
- `useNotes` for state management

✅ **Vue Router**
- Route configuration
- Dynamic routes with params
- Programmatic navigation
- `RouterLink` and `RouterView`

✅ **Component Architecture**
- Single-File Components
- Props and events
- Component composition
- Scoped styles

✅ **Real-World Patterns**
- CRUD operations
- Search and filtering
- Form handling
- Data persistence
- Error handling

### Project Structure

✅ Clear separation of concerns
✅ Reusable components
✅ Shared logic in composables
✅ Views for pages
✅ Centralized routing

**You're now equipped to build real Vue applications.**

## Extending Your App

Want to practice more? Try adding:

### Easy Additions
1. **Note colors** - Let users pick card colors
2. **Sort options** - Sort by date, title, or custom
3. **Note count** - Show total and filtered counts
4. **Confirm dialogs** - Better delete confirmation

### Medium Additions
5. **Categories** - Organize notes into folders
6. **Export/Import** - Download/upload notes as JSON
7. **Rich text editor** - Add formatting buttons
8. **Dark mode** - Theme toggle

### Advanced Additions
9. **Backend API** - Connect to a real database
10. **Authentication** - User accounts
11. **Markdown support** - Write notes in Markdown
12. **Collaboration** - Share notes with others

## Deploying Your App

### Build for Production

```bash
npm run build
```

This creates optimized files in the `dist/` folder.

### Deploy Options

**Netlify (Easiest):**
1. Push to GitHub
2. Connect Netlify to your repo
3. Deploy automatically on push

**Vercel:**
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project folder
3. Follow prompts

**GitHub Pages:**
```bash
# Add to vite.config.js:
base: '/vue-notes/'

# Build and deploy:
npm run build
git add dist -f
git subtree push --prefix dist origin gh-pages
```

Your app is now live!

## What's Next?

You've completed the Vue Mastery beginner track equivalent. Here's your roadmap:

### Immediate Next Steps

1. **Build Your Own Project**
   - Pick something you'll actually use
   - Apply these patterns
   - Push through the struggles

2. **Learn Pinia** (State Management)
   - When composables aren't enough
   - Global state across your app
   - [Vue Mastery - Pinia Course](https://www.vuemastery.com/courses/pinia-crash-course/intro-to-pinia/)

3. **Master Testing**
   - Vitest for unit tests
   - Cypress for E2E tests
   - Build confidence in your code

### Intermediate Topics

- **TypeScript** - Type safety for larger apps
- **Advanced Vue Router** - Guards, meta fields, nested routes
- **API Integration** - Axios, error handling, loading states
- **Transitions** - Smooth animations
- **Performance** - Optimization techniques

### Advanced Topics

- **Nuxt 3** - Full-stack Vue framework
- **Vue Internals** - How reactivity works
- **Custom Directives** - Build your own v-directives
- **SSR/SSG** - Server-side rendering

## Your Challenge

**Don't just read. Build.**

Pick one of these and build it this week:

1. **Expense Tracker** - Track spending with categories
2. **Recipe Manager** - Save and organize recipes
3. **Workout Logger** - Track exercises and progress
4. **Study Flashcards** - Spaced repetition learning
5. **Project Tracker** - Kanban board for tasks

Use the same patterns from Vue Notes. You'll run into problems—that's where real learning happens.

**Progress over perfection.** Ship it, then improve it.

---

## Connect & Share

**Built something with Vue?** I'd love to see it!

- **Twitter:** [@nerajno](https://twitter.com/nerajno) - Share your projects!
- **Blog:** [developingdvlpr.com](https://developingdvlpr.com)
- **GitHub:** Share your code and let's learn together

**Questions? Stuck on something?** My DMs are open. Learning is better together.

**Found this helpful?** Share it with someone learning Vue. The best way to solidify your knowledge is to teach others.

---

## Resources

**Vue Ecosystem:**
- [Vue 3 Docs](https://vuejs.org/)
- [Vue Router Docs](https://router.vuejs.org/)
- [Pinia Docs](https://pinia.vuejs.org/)
- [VueUse](https://vueuse.org/) - Collection of composables

**Learning Platforms:**
- [Vue Mastery](https://www.vuemastery.com/)
- [Vue School](https://vueschool.io/)
- [Frontend Masters](https://frontendmasters.com/)

**Community:**
- [Vue Discord](https://discord.com/invite/vue)
- [Vue Forum](https://forum.vuejs.org/)
- [r/vuejs](https://reddit.com/r/vuejs)

**My Vue Series:**
- [Part 1: Fundamentals & Core Concepts](#)
- [Part 2: Building Your First SPA](#) (you are here)
- Coming soon: Advanced Vue Patterns
- Coming soon: Vue + TypeScript
- Coming soon: Testing Vue Applications

---

> **Disclaimer:** This article represents my learning journey through Vue Mastery's "Real World Vue 3" course. I've structured the content to bridge the gap between fundamentals and production apps. As I continue building, I may refine sections based on new insights. Your feedback improves this resource—reach out with suggestions!

---
