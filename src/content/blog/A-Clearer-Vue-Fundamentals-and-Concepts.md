---
# ============================================================================
# DRAFT STATUS
# ============================================================================
draft: false

# ============================================================================
# SEO OPTIMIZATION (Traditional Search Engines: Google, Bing, etc.)
# ============================================================================
seoTitle: "Vue 3 Fundamentals Tutorial: Master the Options API | Nerando Johnson"
seoDescription: "Master Vue 3 fundamentals with the Options API. Learn reactivity, components, directives, computed properties, watchers, lifecycle hooks, and more with practical examples and live demos."

# ============================================================================
# OPEN GRAPH / SOCIAL MEDIA
# ============================================================================
openGraph:
  type: article
  publishedTime: 2025-01-15T10:00:00.000Z
  modifiedTime: 2025-01-15T10:00:00.000Z
  section: "Web Development, JavaScript, Vue.js"
  tags:
    - Vue.js
    - JavaScript
    - Tutorial
    - Options API

# ============================================================================
# TWITTER CARD
# ============================================================================
twitter:
  card: summary_large_image
  site: '@nerajno'
  creator: '@nerajno'
  title: "A Clearer Vue: Fundamentals & Core Concepts"
  description: "Master Vue 3 fundamentals with the Options API through practical examples and clear explanations. Part 1 of the Vue Mastery series."
  image: "https://developingdvlpr.com/vue-fundamentals-cover.jpg"

# ============================================================================
# STRUCTURED DATA (Schema.org)
# ============================================================================
structuredData:
  "@context": "https://schema.org"
  "@type": "TechArticle"
  headline: "A Clearer Vue: Fundamentals & Core Concepts"
  description: "Comprehensive Vue 3 fundamentals tutorial covering the Options API, reactivity, components, directives, and core concepts"
  author:
    "@type": "Person"
    name: "Nerando Johnson"
    url: "https://nerandojohnson.com"
    jobTitle: "Junior Front-End Developer"
    knowsAbout: ["JavaScript", "Vue.js", "React", "Web Development"]
  datePublished: "2025-01-15"
  dateModified: "2025-01-15"
  image: "https://developingdvlpr.com/vue-fundamentals-cover.jpg"
  publisher:
    "@type": "Organization"
    name: "Nerando Johnson"
    logo:
      "@type": "ImageObject"
      url: "https://nerandojohnson.com/logo.png"
  mainEntityOfPage:
    "@type": "WebPage"
    "@id": "https://developingdvlpr.com/blog/a-clearer-vue-fundamentals-and-concepts"

# ============================================================================
# BASIC CONTENT FIELDS
# ============================================================================
title: "A Clearer Vue: Fundamentals & Core Concepts"
snippet: "Master Vue 3 fundamentals through clear explanations and practical examples. Learn the Options API, reactivity, components, watchers, lifecycle hooks, and essential concepts that form the foundation of modern Vue development."
image: {
    src: "https://developingdvlpr.com/vue-fundamentals-cover.jpg",
    alt: "Vue 3 fundamentals tutorial covering core concepts and the Options API"
}

publishDate: "2025-11-30 06:00"
category: "Web Development, JavaScript, Vue3"
author: "Nerando Johnson"
tags: [Vue.js, JavaScript, Tutorial, Options API, Fundamentals, Frontend Development, Watchers, Lifecycle Hooks]

# ============================================================================
# KEYWORDS (For SEO and internal search)
# ============================================================================
keywords: [
  "Vue 3 tutorial",
  "Vue.js beginner guide",
  "Options API tutorial",
  "Vue fundamentals",
  "learn Vue 3 basics",
  "Vue reactive data",
  "Vue components tutorial",
  "v-model Vue",
  "v-for directive",
  "Vue event handling",
  "computed properties Vue",
  "Vue methods",
  "Vue watchers",
  "Vue lifecycle hooks",
  "Vue data binding",
  "Vue directives",
  "Vue template syntax",
  "Vue Mastery intro course",
  "Vue for beginners",
  "getting started with Vue"
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
    format: "Step-by-step fundamentals guide | Educational resource"
    topic: "Vue 3 fundamentals and core concepts using the Options API with practical, hands-on examples"

    intent:
      - "How do I learn Vue 3 from scratch?"
      - "What is the Options API in Vue?"
      - "How does Vue reactivity work?"
      - "What are computed properties in Vue?"
      - "How do I use v-model in Vue?"
      - "What are Vue directives like v-if and v-for?"
      - "How do Vue components work?"
      - "What is the difference between methods and computed properties?"
      - "How do I handle events in Vue?"
      - "How do I bind data in Vue templates?"
      - "What are Vue lifecycle hooks?"
      - "How do props and events work in Vue?"
      - "What are Vue watchers?"
      - "How do I use slots in Vue?"

    audience:
      primary: "Complete beginners to Vue.js with basic JavaScript knowledge"
      secondary: "Developers from other frameworks wanting to understand Vue fundamentals"
      painPoints:
        - "Not understanding how Vue's reactivity system works"
        - "Confusion about when to use data, methods, or computed properties"
        - "Difficulty understanding Vue's template syntax and directives"
        - "Not knowing how to properly structure Vue components"
        - "Struggling with component communication patterns"
        - "Uncertainty about lifecycle hooks and when to use them"
      goals:
        - "Understand Vue's core reactive system"
        - "Master the Options API structure"
        - "Learn all essential Vue directives"
        - "Build confidence with component basics"
        - "Be ready to progress to building real applications"

    keyTakeaways:
      - "Vue's reactivity system uses JavaScript Proxies to automatically track and update the UI when data changes"
      - "The Options API provides clear organization with data, methods, computed, watchers, and lifecycle sections"
      - "Computed properties are cached and better for derived values than methods"
      - "Watchers enable side effects and async operations when data changes"
      - "Lifecycle hooks let you run code at specific moments in a component's lifetime"
      - "Vue directives like v-if, v-for, and v-model make templates dynamic and interactive"
      - "Component communication uses props for parent-to-child and events for child-to-parent data flow"

    faq:
      - question: "Do I need to know the Options API if I'm learning Vue 3?"
        answer: "Yes! The Options API is the best way to understand Vue fundamentals. Once you grasp these concepts, the Composition API (covered in Part 2) will make much more sense."
      - question: "What's the difference between methods and computed properties?"
        answer: "Methods run every time they're called, while computed properties are cached and only recalculate when their dependencies change. Use computed for values derived from reactive data."
      - question: "When should I use watchers vs computed properties?"
        answer: "Use computed properties for synchronous calculations based on reactive data. Use watchers for asynchronous operations, side effects, or when you need access to both old and new values."
      - question: "How long does it take to complete this tutorial?"
        answer: "Plan for 2-3 hours to read through the article and try the interactive examples. Take breaks and practice with the code samples."
      - question: "Can I build real apps with just the Options API?"
        answer: "Absolutely! Many production Vue apps use the Options API. However, for modern projects, you'll want to learn the Composition API (Part 2) as well."

    relatedTopics:
      - "Options API"
      - "Vue Reactivity"
      - "JavaScript Framework Basics"
      - "Component-based UI"
      - "Declarative Rendering"
      - "Two-way Data Binding"
      - "Template Directives"
      - "Lifecycle Hooks"
      - "Watchers"
      - "Vue Mastery Intro Course"
      - "Frontend Development"

    expertise: "Written by junior developer learning Vue through Vue Mastery's Intro to Vue 3 course, explaining concepts in beginner-friendly terms with intermediate-level insights"
    evidenceBased: true
    actionable: true
    includesExamples: true
    includesTemplates: false
    includesChallenges: true
    depth: "Foundational comprehensive guide with production-ready patterns"
    personalExperience: "Part 1 of my Vue Mastery learning journey, covering the Intro to Vue 3 course fundamentals"
    credibility: "Active learner documenting the fundamental concepts that clicked while learning Vue from scratch"

# ============================================================================
# ALTERNATIVE GEO FORMAT
# ============================================================================
schema: {
  type: "BlogPosting",
  about: "Vue 3 fundamentals tutorial covering Options API and core concepts",
  genre: "Technical Tutorial",
  educationalLevel: "Beginner",
  teaches: ["Vue 3 Fundamentals", "Options API", "Reactive Data", "Vue Directives", "Component Basics", "Template Syntax", "Lifecycle Hooks", "Watchers"],
  audience: {
    type: "ProfessionalAudience",
    audienceType: "Beginner JavaScript developers learning Vue.js"
  }
}

entities: {
  primary: ["Vue.js", "Options API", "JavaScript", "Reactivity"],
  secondary: ["Components", "Directives", "Data Binding", "Computed Properties", "Watchers", "Lifecycle Hooks"],
  people: ["Nerando Johnson"],
  organizations: ["Vue Mastery"],
  concepts: ["Reactive Programming", "Declarative Rendering", "Component Architecture", "Template Syntax", "Event Handling", "Component Lifecycle"]
}

contentStructure: {
  type: "Tutorial",
  difficulty: "Beginner",
  timeToComplete: "2-3 hours read and practice",
  prerequisites: ["Basic JavaScript", "HTML/CSS fundamentals", "Browser (Chrome/Firefox)"],
  outcomes: ["Understand Vue reactivity", "Master Options API structure", "Use all core Vue directives", "Build basic components", "Handle user events and forms", "Use lifecycle hooks effectively", "Implement watchers for async operations"]
}

semanticContext: {
  topic: "Vue 3 fundamentals covering reactivity, Options API, directives, lifecycle hooks, watchers, and core concepts for beginners",
  subtopics: ["Options API", "Reactive data", "Methods", "Computed properties", "Watchers", "Lifecycle hooks", "Directives (v-if, v-for, v-model)", "Event handling", "Component props and events", "Template syntax", "Slots"],
  relatedConcepts: ["Reactive programming", "Declarative rendering", "Component-based architecture", "Virtual DOM", "Two-way data binding", "Component lifecycle"],
  practicalApplication: true
}

citationMetadata: {
  citableAs: "Johnson, N. (2025). A Clearer Vue: Fundamentals & Core Concepts",
  lastReviewed: "2025-01-15",
  version: "2.0",
  originalPublisher: "Nerando Johnson's Blog"
}

aiOptimization: {
  summaryPrompt: "Vue 3 fundamentals tutorial teaching core concepts and the Options API through practical examples and clear explanations for beginners with intermediate-level insights",
  keyTakeaways: [
    "Vue 3's reactivity system uses JavaScript Proxies to automatically track data and update the UI efficiently",
    "Options API provides clear structure with data(), methods, computed, watchers, and lifecycle hooks",
    "Computed properties are cached and ideal for derived values based on reactive data",
    "Watchers enable asynchronous operations and side effects when data changes",
    "Lifecycle hooks provide control at key moments in a component's lifetime",
    "Vue directives like v-if, v-for, and v-model make templates dynamic and interactive",
    "Component communication follows props down, events up pattern for predictable data flow"
  ],
  technicalDepth: "beginner-friendly with intermediate insights",
  codeExamples: true
}
---

*Part 1 of the Vue Mastery Beginner Track Series - Covering Intro to Vue 3*

> **A note from the author:** This is Part 1 of a nine-part series covering Vue Mastery's beginner track. In this article, I'll cover Vue fundamentals using the Options API as it better covers the fundamentals of Vue3, which is the focus of this series. As I continue learning, I may refine sections and add more content. Feedback is always welcome—find me [@nerajno](https://twitter.com/nerajno) or [here](https://developingdvlpr.com/contact).

Have you ever started learning Vue, understood the basics, but felt unsure how everything actually works together? You've read about `data`, `methods`, and `computed` properties. But when do you use each and how do they interact? And what's this whole "reactive" thing really about?

If that sounds familiar, this article is for you. Instead of throwing isolated concepts at you, the aim of this article is to build understanding progressively (brick by brick... so to speak) — each concept building on the last. By the end of this article, you should either have a greater grasp of the concepts or have a solid foundation in Vue fundamentals and be ready to build real applications.

Let's start with clarity.

## Before You Start: Prerequisites & Setup

To get the most out of this article, you should have a basic understanding of:

### Essential Knowledge

**JavaScript Fundamentals (Required):**
- Variables (`let`, `const`) and data types
- Functions (including arrow functions)
- Objects and arrays
- Array methods: `map()`, `filter()`, `reduce()`, `find()`
- Destructuring: `const { name } = user`
- Spread operator: `...items`
- Template literals: `` `Hello ${name}` ``
- Async/await basics

**Not sure about these?** Read my [11 JavaScript Fundamentals for Vue Developers](https://developingdvlpr.com/blog/11-javascript-fundamentals-for-vue-developers/) for a quick refresher.

**HTML/CSS (Required):**
- Semantic HTML elements
- Basic CSS selectors and properties
- Understanding of the DOM structure

**Nice to Have (But Not Required):**
- ES6+ features
- HTTP/REST API basics
- Command line comfort
- Git fundamentals

### Development Environment Setup

**Option 1: Browser (Beginner-Friendly)**
- ✅ No setup required
- ✅ Great for learning
- ❌ Not for real projects

```html
<!-- Just add this to any HTML file -->
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

**Option 2: Vue Playground (Recommended for Learning)**
- ✅ Online editor: [play.vuejs.org](https://play.vuejs.org/)
- ✅ Save and share examples
- ✅ Syntax highlighting

**Option 3: Local Development (For Real Projects)**
```bash
# Create new Vue project (covered in Part 2)
npm create vue@latest
```

### Recommended Tools

**Code Editor:**
- **VS Code** (recommended) with extensions:
  - Volar (Vue Language Features)
  - Vue VSCode Snippets

**Browser:**
- Chrome or Firefox
- **Vue DevTools extension** (essential for debugging)
  - [Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/)
  - [Firefox](https://addons.mozilla.org/firefox/addon/vue-js-devtools/)

### How to Use This Tutorial

**For Complete Beginners:**
1. Read section by section (don't skip ahead)
2. Type out every code example (don't copy-paste)
3. Experiment—break things and fix them
4. Complete practice challenges before moving on
5. Expected time: 3-4 hours total

**For Developers from Other Frameworks:**
1. Skim familiar concepts (data binding, events)
2. Focus on Vue-specific patterns (reactivity, directives)
3. Pay attention to "Intermediate insight" callouts
4. Expected time: 90-120 minutes

**Learning Path:**
```
Part 1 (This Article)    Part 2              Part 3
Options API         →    Composition API  →  Real Projects
Fundamentals            Modern Patterns      Production Apps
```

**Time commitment:** Plan for 2-3 hours if you're going to work through this article and try the examples. It's about 25-30 minutes reading if that's all you're going to do. My advice either way: take breaks, let concepts sink in, and make notes of any questions or unclear parts.

## Understanding Vue: Why Developers Gravitate Toward It

Vue is built on one key idea: **A clear separation between state and the UI that renders it.**
You describe what you want the UI to look like, and Vue handles keeping it updated as your data changes. This means:

- Fewer manual DOM operations
- Less complex code
- A more intuitive mental model

At its core, Vue is about creating clear, reactive relationships between your data and the screen. Instead of manually updating the DOM every time something changes (like with vanilla JavaScript), Vue does the heavy lifting for you. Think about it this way: In vanilla JavaScript, if you want to update text on a page, you'd write:

```javascript
// Regular vanilla JavaScript - manual DOM manipulation
const element = document.getElementById('message')
element.textContent = 'Hello World'
```

Every time your data changes, you have to manually find the element and update it. For a small app, that's manageable. For an app in production, it becomes a nightmare of `querySelector` calls and state tracking.

Vue flips this around. You declare what the UI should look like based on your data, and Vue handles the updates:

```vue
<!-- Vue - declarative -->
<div id="app">
  {{ message }}
</div>
```

When `message` changes, Vue automatically updates the DOM. You focus on your data; Vue handles the DOM.

To see this in action, we'll start small.

## Your First Vue App: The "Aha" Moment

Let's start with the simplest possible Vue application using a CDN (no build tools needed):

```html
<!DOCTYPE html>
<html>
<head>
  <title>My First Vue App</title>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
</head>
<body>
  <div id="app">
    <h1>{{ message }}</h1>
    <button @click="message = 'Hello, Vue!'">Click Me</button>
  </div>

  <script>
    const { createApp } = Vue

    createApp({
      data() {
        return {
          message: 'Welcome to Vue 3'
        }
      }
    }).mount('#app')
  </script>
</body>
</html>
```

**Create this file and open it in your browser.** Seriously, do it now. The "aha" moment hits when you see it working.

What happened in this example?
1. **`createApp({})`** - Created a new Vue application instance.
2. **`data()`** - Defined reactive data that Vue tracks.
3. **`{{ message }}`** - Template syntax that displays the data.
4. **`@click`** - Event listener that modifies the data.
5. **`.mount('#app')`** - Told Vue where to render.

When you click the button, the UI updates automatically. You didn't write `document.querySelector` or manually update the DOM. Vue handled it. **This is the heart of Vue's reactivity.**

> **Real Talk:** When I first saw this, I thought "This is magic!" as I was coming from React land. But it's not—it's just Vue's reactive system tracking data and efficiently updating only the parts of the DOM that changed. Once you wrap your mind around this concept, everything else makes sense.

## Understanding Vue's Reactivity System

Vue's reactivity is built on JavaScript's **Proxy API** (in Vue 3). Here's what actually happens:

When you define data in your component:
```javascript
data() {
  return {
    count: 0
  }
}
```

Vue wraps this object in a Proxy that intercepts property access and modifications:

```javascript
// Simplified conceptual example
const reactive = new Proxy(data, {
  get(target, key) {
    // Vue tracks: "this property is being read"
    track(target, key)
    return target[key]
  },
  set(target, key, value) {
    target[key] = value
    // Vue triggers: "this property changed, update UI"
    trigger(target, key)
    return true
  }
})
```

**Why this matters:**
- **For beginners:** You don't manually update the DOM; Vue does it automatically
- **For intermediate devs:** Understanding this helps debug reactivity issues (why some changes don't trigger updates)

**Real-world gotcha:**
```javascript
// ❌ This won't be reactive in Vue 3 if added after creation
const user = { name: 'John' }
user.email = 'john@example.com' // Added after object creation

// ✅ Better approach
data() {
  return {
    user: {
      name: 'John',
      email: '' // Declare upfront
    }
  }
}
```

**Beginner tip:** Just remember that Vue tracks your data automatically. When data changes, the UI updates.

**Intermediate insight:** Vue 3's Proxy-based reactivity is more powerful than Vue 2's `Object.defineProperty` approach. It can detect property additions and array index changes, but it's still best practice to declare all properties upfront for clarity.

## The Options API: Vue's Foundation

Vue 3 offers two ways to write components: the Options API and the Composition API. We're starting with the Options API because it provides the clearest mental model for understanding how Vue works. Please note that the Composition API is a more modern and flexible approach to building Vue applications, but it's not the focus of this article—the fundamentals are.

The Options API organizes your component using well-defined **options**:

```javascript
export default {
  // Component data (reactive state)
  data() {
    return {
      count: 0,
      name: 'James'
    }
  },

  // Computed properties (derived values)
  computed: {
    doubleCount() {
      return this.count * 2
    }
  },

  // Methods (actions/functions)
  methods: {
    increment() {
      this.count++
    },
    greet() {
      alert(`Hello, ${this.name}!`)
    }
  },

  // Watchers (react to data changes)
  watch: {
    count(newValue, oldValue) {
      console.log(`Count changed from ${oldValue} to ${newValue}`)
    }
  },

  // Lifecycle hooks (component events)
  mounted() {
    console.log('Component is ready!')
  }
}
```

Each option has a specific purpose. This structure makes it clear where everything goes, which is perfect for learning.

Let's explore each option in depth.

## Data: Your Component's State

The `data()` function returns an object containing all your component's reactive state:

```javascript
export default {
  data() {
    return {
      // Primitives
      count: 0,
      message: 'Hello',
      isActive: true,

      // Objects
      user: {
        name: 'James',
        email: 'j@example.com'
      },

      // Arrays
      todos: ['Learn Vue', 'Build an app', 'Ship it'],

      // Any valid JavaScript value
      price: 19.99,
      items: []
    }
  }
}
```

**Important rules:**

1. **`data` must be a function** - It returns a fresh object for each component instance.
2. **Everything in the returned object becomes reactive** - Vue tracks changes automatically.
3. **Access via `this` in methods** - Use `this.count`, `this.message`, etc.

### Why Data Must Be a Function

When you use the same component multiple times, each needs its own data. If `data` were an object, all instances would share the same object:

```javascript
// ❌ DON'T DO THIS (object, not function)
export default {
  data: {
    count: 0  // Shared across ALL instances!
  }
}

// ✅ CORRECT (function returns new object)
export default {
  data() {
    return {
      count: 0  // Each instance gets its own data
    }
  }
}
```

**Why this matters:**

```html
<!-- If data were an object, both buttons would increment the SAME counter! -->
<counter-button></counter-button>
<counter-button></counter-button>
```

**For beginners:** Think of `data()` as a factory that creates fresh data for each component.

**For intermediate devs:** This is JavaScript closure mechanics—each function call creates a new scope.

**Live example - Counter:**

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
</head>
<body>
  <div id="app">
    <p>Count: {{ count }}</p>
    <button @click="count++">Increment</button>
    <button @click="count--">Decrement</button>
    <button @click="count = 0">Reset</button>
  </div>

  <script>
    const { createApp } = Vue

    createApp({
      data() {
        return {
          count: 0
        }
      }
    }).mount('#app')
  </script>
</body>
</html>
```

**Try this yourself:** Add more properties. Try an array. Experiment.

## Methods: Component Actions

Methods are functions that perform actions and can modify your data:

```javascript
export default {
  data() {
    return {
      count: 0,
      todos: [],
      newTodo: ''
    }
  },

  methods: {
    // Simple action
    increment() {
      this.count++
    },

    // Method with parameters
    addToCount(amount) {
      this.count += amount
    },

    // Working with arrays
    addTodo() {
      // Input validation
      if (!this.newTodo?.trim()) {
        return
      }

      // Better ID generation
      const id = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

      this.todos.push({
        id,
        text: this.newTodo.trim(),
        done: false,
        createdAt: new Date().toISOString()
      })

      this.newTodo = '' // Clear input
    },

    // Methods can call other methods
    resetEverything() {
      this.count = 0
      this.todos = []
      this.newTodo = ''
    }
  }
}
```

**Key points:**

- Access data with `this.propertyName`
- Access other methods with `this.methodName()`
- Methods run every time they're called (not cached)
- Methods can be async: `async methodName() { await ... }`

**Live example - Todo list:**

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <style>
    .done { text-decoration: line-through; color: #999; }
  </style>
</head>
<body>
  <div id="app">
    <h2>My Todos</h2>

    <input
      v-model="newTodo"
      @keyup.enter="addTodo"
      placeholder="Add a todo..."
    >
    <button @click="addTodo">Add</button>

    <ul>
      <li
        v-for="todo in todos"
        :key="todo.id"
        :class="{ done: todo.done }"
        @click="toggleTodo(todo)"
      >
        {{ todo.text }}
      </li>
    </ul>

    <p>{{ todos.length }} total, {{ remaining }} remaining</p>
  </div>

  <script>
    const { createApp } = Vue

    createApp({
      data() {
        return {
          newTodo: '',
          todos: []
        }
      },

      computed: {
        remaining() {
          return this.todos.filter(t => !t.done).length
        }
      },

      methods: {
        addTodo() {
          if (!this.newTodo?.trim()) {
            return
          }

          const id = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

          this.todos.push({
            id,
            text: this.newTodo.trim(),
            done: false
          })

          this.newTodo = ''
        },

        toggleTodo(todo) {
          todo.done = !todo.done
        }
      }
    }).mount('#app')
  </script>
</body>
</html>
```

**Challenge:** Add a "Delete" button for each todo. You'll need a new method!

## Computed Properties: Smart Derived Values

Computed properties automatically calculate values based on reactive data:

```javascript
export default {
  data() {
    return {
      firstName: 'Nerando',
      lastName: 'Johnson',
      items: [
        { name: 'Socks', price: 10, quantity: 2 },
        { name: 'Shirt', price: 25, quantity: 1 }
      ]
    }
  },

  computed: {
    // Simple combination
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },

    // Calculated from array
    totalItems() {
      return this.items.reduce((sum, item) => sum + item.quantity, 0)
    },

    // Complex calculation
    cartTotal() {
      return this.items.reduce((sum, item) => {
        return sum + (item.price * item.quantity)
      }, 0)
    },

    // Formatted output
    cartTotalFormatted() {
      return `$${this.cartTotal.toFixed(2)}`
    }
  }
}
```

### Computed vs Methods: The Complete Picture

```javascript
export default {
  data() {
    return {
      firstName: 'Nerando',
      lastName: 'Johnson'
    }
  },

  computed: {
    // ✅ Cached - only recalculates if firstName or lastName changes
    fullNameComputed() {
      console.log('Computed calculated')
      return `${this.firstName} ${this.lastName}`
    }
  },

  methods: {
    // ❌ Runs every time - even if firstName/lastName didn't change
    fullNameMethod() {
      console.log('Method called')
      return `${this.firstName} ${this.lastName}`
    }
  }
}
```

**In template:**
```html
<!-- Computed: Logs once, then cached -->
<p>{{ fullNameComputed }}</p>
<p>{{ fullNameComputed }}</p>
<p>{{ fullNameComputed }}</p>

<!-- Method: Logs three times -->
<p>{{ fullNameMethod() }}</p>
<p>{{ fullNameMethod() }}</p>
<p>{{ fullNameMethod() }}</p>
```

### Performance Impact

```javascript
computed: {
  // ✅ Expensive calculation runs only when items change
  expensiveOperation() {
    return this.items
      .filter(item => item.active)
      .map(item => {
        // Complex calculations...
        return processItem(item)
      })
      .reduce((sum, item) => sum + item.value, 0)
  }
}

methods: {
  // ❌ This runs on EVERY re-render
  expensiveOperation() {
    return this.items.filter(...).map(...).reduce(...)
  }
}
```

### When Caching is NOT Desired

```javascript
methods: {
  // ✅ Methods are correct here - we WANT it to run each time
  getCurrentTime() {
    return new Date().toLocaleTimeString()
  },

  generateRandomNumber() {
    return Math.random()
  }
}
```

### Decision Tree

```
Does it return the same value for the same inputs?
├─ YES → Use computed (it can be cached)
└─ NO → Use method (caching would give wrong results)

Does it depend on reactive data?
├─ YES → Probably computed
└─ NO → Method

Do you need to pass arguments?
├─ YES → Must use method
└─ NO → Computed is fine

Does it perform side effects (API calls, timers, etc.)?
├─ YES → Use method or watcher
└─ NO → Computed is fine
```

**Use computed when:**
- The value depends on other reactive data
- The calculation is expensive
- Multiple parts of your template need the same value

**Use methods when:**
- You need to pass parameters
- The function performs an action (not just calculation)
- You need it to run every time (caching isn't desired)

**Live example - Shopping cart:**

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
</head>
<body>
  <div id="app">
    <h2>Shopping Cart</h2>

    <div v-for="item in items" :key="item.id">
      <strong>{{ item.name }}</strong> - ${{ item.price }}
      <button @click="item.quantity--">-</button>
      {{ item.quantity }}
      <button @click="item.quantity++">+</button>
      <span>${{ (item.price * item.quantity).toFixed(2) }}</span>
    </div>

    <hr>
    <p><strong>Total Items:</strong> {{ totalItems }}</p>
    <p><strong>Total Cost:</strong> ${{ totalCost.toFixed(2) }}</p>
  </div>

  <script>
    const { createApp } = Vue

    createApp({
      data() {
        return {
          items: [
            { id: 1, name: 'Vue Socks', price: 10, quantity: 2 },
            { id: 2, name: 'Vue Shirt', price: 25, quantity: 1 },
            { id: 3, name: 'Vue Hat', price: 15, quantity: 0 }
          ]
        }
      },

      computed: {
        totalItems() {
          return this.items.reduce((sum, item) => sum + item.quantity, 0)
        },

        totalCost() {
          return this.items.reduce((sum, item) => {
            return sum + (item.price * item.quantity)
          }, 0)
        }
      }
    }).mount('#app')
  </script>
</body>
</html>
```

Notice how `totalItems` and `totalCost` automatically update as you change quantities. That's the power and impact of computed properties—they automatically track dependencies and update only when needed, making your UI efficient and reactive.

**Beginner rule of thumb:** If you're calculating something based on your data, use computed.

**Intermediate insight:** Computed properties are getter-only by default, but you can define setters too:

```javascript
computed: {
  fullName: {
    // Getter
    get() {
      return `${this.firstName} ${this.lastName}`
    },
    // Setter
    set(value) {
      const parts = value.split(' ')
      this.firstName = parts[0]
      this.lastName = parts[1]
    }
  }
}

// Now you can:
this.fullName = 'John Doe'  // Sets firstName and lastName
```

## Watchers: Reacting to Data Changes

While computed properties are great for derived values, **watchers** let you perform side effects when data changes.

### Basic Watcher

```javascript
export default {
  data() {
    return {
      question: '',
      answer: 'Ask a question!'
    }
  },

  watch: {
    // Whenever 'question' changes, this runs
    question(newValue, oldValue) {
      if (newValue.includes('?')) {
        this.getAnswer()
      }
    }
  },

  methods: {
    async getAnswer() {
      this.answer = 'Thinking...'
      // API call or other async operation
      const response = await fetch('/api/answer')
      this.answer = await response.text()
    }
  }
}
```

### When to Use What?

| Use Case | Use This |
|----------|----------|
| Calculate derived value | **Computed** |
| Perform async operation | **Watcher** |
| Access old and new value | **Watcher** |
| Update multiple properties | **Watcher** |
| Trigger side effects | **Watcher** |

### Deep Watching (Objects/Arrays)

```javascript
watch: {
  // Watch nested properties
  user: {
    handler(newUser, oldUser) {
      console.log('User changed:', newUser)
      this.saveToAPI(newUser)
    },
    deep: true  // Watch all nested properties
  },

  // Watch specific nested property
  'user.email'(newEmail) {
    this.validateEmail(newEmail)
  }
}
```

### Immediate Execution

```javascript
watch: {
  searchQuery: {
    handler(query) {
      this.performSearch(query)
    },
    immediate: true  // Run immediately on component creation
  }
}
```

**Live Example - Search with Debouncing:**

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
</head>
<body>
  <div id="app">
    <h2>Search Users</h2>
    <input
      v-model="searchQuery"
      placeholder="Type to search..."
    >
    <p>{{ searchStatus }}</p>
    <ul>
      <li v-for="user in results" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>

  <script>
    const { createApp } = Vue

    createApp({
      data() {
        return {
          searchQuery: '',
          results: [],
          searchStatus: 'Type to search',
          debounceTimer: null
        }
      },

      watch: {
        searchQuery(newQuery) {
          // Clear previous timer
          clearTimeout(this.debounceTimer)

          if (!newQuery.trim()) {
            this.results = []
            this.searchStatus = 'Type to search'
            return
          }

          this.searchStatus = 'Searching...'

          // Debounce: wait 300ms after typing stops
          this.debounceTimer = setTimeout(() => {
            this.performSearch(newQuery)
          }, 300)
        }
      },

      methods: {
        async performSearch(query) {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 500))

          // Mock results
          this.results = [
            { id: 1, name: `Result for "${query}" - User 1` },
            { id: 2, name: `Result for "${query}" - User 2` }
          ]
          this.searchStatus = `Found ${this.results.length} results`
        }
      }
    }).mount('#app')
  </script>
</body>
</html>
```

**Beginner tip:** Start with computed properties. Use watchers when you need to do something async or complex.

**Intermediate insight:** Watchers are perfect for debouncing, API calls, and localStorage syncing. They're also great for performing multiple updates or side effects in response to a single data change.

## Lifecycle Hooks: Component Lifecycle Events

Every Vue component goes through a lifecycle: creation, mounting, updating, and destruction. Lifecycle hooks let you run code at specific moments.

### The Component Lifecycle

```
Creation → Mounting → Updating → Unmounting
   ↓          ↓          ↓           ↓
created   mounted   updated    unmounted
```

### Essential Lifecycle Hooks

```javascript
export default {
  data() {
    return {
      posts: [],
      loading: true
    }
  },

  // 1. CREATED - Component instance created, data is reactive
  created() {
    console.log('Component created, data is available')
    console.log('Count:', this.count)  // ✅ Data accessible
    // ❌ DOM not available yet
  },

  // 2. MOUNTED - Component added to DOM
  async mounted() {
    console.log('Component mounted to DOM')
    // ✅ Perfect for API calls, DOM manipulation, timers
    this.loading = true

    try {
      const response = await fetch('/api/posts')

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      this.posts = await response.json()
    } catch (error) {
      console.error('Failed to fetch posts:', error)
      this.error = 'Could not load posts. Please try again.'
    } finally {
      this.loading = false
    }
  },

  // 3. UPDATED - Reactive data changed and DOM re-rendered
  updated() {
    console.log('Component updated')
    // ⚠️ Be careful: avoid infinite loops
  },

  // 4. UNMOUNTED - Component removed from DOM
  unmounted() {
    console.log('Component unmounted')
    // ✅ Clean up: clear timers, remove listeners
    clearInterval(this.timer)
    window.removeEventListener('resize', this.handleResize)
  }
}
```

### Common Use Cases

| Hook | Use For |
|------|---------|
| **created** | Initialize data, setup non-DOM logic |
| **mounted** | API calls, DOM manipulation, third-party libraries |
| **updated** | React to DOM changes (use sparingly) |
| **unmounted** | Cleanup: timers, listeners, subscriptions |

### Complete Lifecycle Example

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
</head>
<body>
  <div id="app">
    <button @click="showComponent = !showComponent">
      {{ showComponent ? 'Hide' : 'Show' }} Component
    </button>

    <user-profile v-if="showComponent"></user-profile>
  </div>

  <script>
    const { createApp } = Vue

    const UserProfile = {
      data() {
        return {
          user: null,
          loading: true,
          seconds: 0,
          timer: null
        }
      },

      created() {
        console.log('✅ Component created')
        console.log('Data available:', this.loading)
      },

      async mounted() {
        console.log('✅ Component mounted to DOM')

        // Fetch user data
        this.loading = true
        await new Promise(resolve => setTimeout(resolve, 1000))
        this.user = {
          name: 'Nerando Johnson',
          role: 'Developer'
        }
        this.loading = false

        // Start timer
        this.timer = setInterval(() => {
          this.seconds++
        }, 1000)
      },

      updated() {
        console.log('✅ Component updated')
      },

      unmounted() {
        console.log('✅ Component unmounted - cleaning up')
        clearInterval(this.timer)
      },

      template: `
        <div style="border: 2px solid #42b983; padding: 20px; margin: 20px 0;">
          <h3>User Profile</h3>
          <p v-if="loading">Loading...</p>
          <div v-else>
            <p><strong>Name:</strong> {{ user.name }}</p>
            <p><strong>Role:</strong> {{ user.role }}</p>
            <p><strong>Time mounted:</strong> {{ seconds }}s</p>
          </div>
        </div>
      `
    }

    createApp({
      components: { UserProfile },
      data() {
        return {
          showComponent: true
        }
      }
    }).mount('#app')
  </script>
</body>
</html>
```

**Beginner tip:** Most of the time, you'll only use `mounted` (for setup) and `unmounted` (for cleanup).

**Intermediate insight:** Avoid overusing the `updated` hook—it can cause performance issues. Use watchers for specific data changes instead.

### Lifecycle Hook Order

When a component mounts:
```
1. setup() [Composition API - covered in Part 2]
2. beforeCreate()
3. created() ← Data is reactive
4. beforeMount()
5. mounted() ← DOM is available
```

When data changes:
```
1. beforeUpdate()
2. updated() ← DOM updated
```

When component is removed:
```
1. beforeUnmount()
2. unmounted() ← Cleanup time
```

## Template Syntax: Bringing Data to Life

Vue's template syntax lets you dynamically render data in your HTML.

### Text Interpolation

```html
<p>{{ message }}</p>
<p>Count: {{ count }}</p>
<p>Calculation: {{ count * 2 + 1 }}</p>
<p>Function call: {{ message.toUpperCase() }}</p>
```

### Attribute Binding (v-bind or :)

```html
<!-- Long form -->
<img v-bind:src="imageUrl">
<a v-bind:href="profileUrl">Profile</a>

<!-- Shorthand (preferred) -->
<img :src="imageUrl">
<a :href="profileUrl">Profile</a>

<!-- Dynamic attributes -->
<button :disabled="isLoading">Submit</button>
<div :id="dynamicId">Content</div>

<!-- Multiple attributes -->
<input
  :type="inputType"
  :value="inputValue"
  :placeholder="inputPlaceholder"
>
```

### Class Binding

```html
<!-- Object syntax -->
<div :class="{ active: isActive, disabled: isDisabled }">
  Content
</div>

<!-- Array syntax -->
<div :class="[baseClass, isActive ? activeClass : '']">
  Content
</div>

<!-- Combined -->
<div :class="[baseClass, { active: isActive }]">
  Content
</div>

<!-- With static class -->
<div class="static-class" :class="{ dynamic: isDynamic }">
  Content
</div>
```

### Style Binding

```html
<!-- Object syntax -->
<div :style="{ color: textColor, fontSize: size + 'px' }">
  Styled text
</div>

<!-- Array syntax (multiple style objects) -->
<div :style="[baseStyles, overrideStyles]">
  Styled text
</div>
```

**Live example - Dynamic styling:**

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <style>
    .box {
      width: 200px;
      height: 200px;
      margin: 20px;
      border: 2px solid #333;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s;
    }
    .active { border-color: #42b983; transform: scale(1.1); }
    .large { font-size: 24px; }
  </style>
</head>
<body>
  <div id="app">
    <div
      class="box"
      :class="{ active: isActive, large: isLarge }"
      :style="{ backgroundColor: bgColor, color: textColor }"
      @click="isActive = !isActive"
    >
      Click me!
    </div>

    <label>
      <input type="checkbox" v-model="isActive"> Active
    </label>
    <label>
      <input type="checkbox" v-model="isLarge"> Large Text
    </label>
    <label>
      Background: <input type="color" v-model="bgColor">
    </label>
    <label>
      Text: <input type="color" v-model="textColor">
    </label>
  </div>

  <script>
    const { createApp } = Vue

    createApp({
      data() {
        return {
          isActive: false,
          isLarge: false,
          bgColor: '#ecf0f1',
          textColor: '#2c3e50'
        }
      }
    }).mount('#app')
  </script>
</body>
</html>
```

## Conditional Rendering: Showing and Hiding

Vue provides directives to conditionally render elements:

### v-if, v-else-if, v-else

```html
<!-- Simple condition -->
<p v-if="isLoggedIn">Welcome back!</p>
<p v-else>Please log in</p>

<!-- Multiple conditions -->
<div v-if="type === 'A'">Type A content</div>
<div v-else-if="type === 'B'">Type B content</div>
<div v-else-if="type === 'C'">Type C content</div>
<div v-else>Unknown type</div>

<!-- With expressions -->
<p v-if="inventory > 10">In Stock</p>
<p v-else-if="inventory > 0">Almost Sold Out!</p>
<p v-else>Out of Stock</p>
```

### v-show

```html
<!-- Toggles CSS display -->
<div v-show="isVisible">
  This div's display property toggles
</div>
```

### v-if vs v-show: Deep Dive

#### How They Work

**v-if:**
```html
<!-- Element literally added/removed from DOM -->
<div v-if="show">Content</div>

<!-- When show=true: -->
<div>Content</div>

<!-- When show=false: -->
<!-- Nothing in DOM! -->
```

**v-show:**
```html
<!-- Element always in DOM, display toggled -->
<div v-show="show">Content</div>

<!-- When show=true: -->
<div style="">Content</div>

<!-- When show=false: -->
<div style="display: none;">Content</div>
```

#### Performance Characteristics

**v-if:**
- Higher toggle cost (DOM operations expensive)
- Lower initial render cost (if false, not rendered)
- Lazy evaluation (doesn't render until true)
- **Destroys and recreates components** (lifecycle hooks run)

**v-show:**
- Lower toggle cost (just CSS change)
- Higher initial render cost (always rendered)
- Element always exists in DOM
- **Component stays alive** (mounted once)

#### Decision Matrix

| Scenario | Use |
|----------|-----|
| Tabs that rarely change | v-if |
| Modals/dropdowns (frequent toggling) | v-show |
| Expensive components | v-show (if frequently toggled) |
| Conditional rendering based on permissions | v-if |
| Animation on/off toggle | v-show |
| Content that might never be shown | v-if |
| Tooltip/popover | v-show |

**Live example - Conditional content:**

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <style>
    .alert { padding: 15px; margin: 10px 0; border-radius: 4px; }
    .success { background: #d4edda; color: #155724; }
    .warning { background: #fff3cd; color: #856404; }
    .danger { background: #f8d7da; color: #721c24; }
  </style>
</head>
<body>
  <div id="app">
    <h2>Stock Status</h2>

    <label>
      Inventory:
      <input type="number" v-model.number="inventory" min="0">
    </label>

    <div v-if="inventory > 10" class="alert success">
      ✓ In Stock - {{ inventory }} available
    </div>
    <div v-else-if="inventory > 0" class="alert warning">
      ⚠ Low Stock - Only {{ inventory }} left!
    </div>
    <div v-else class="alert danger">
      ✗ Out of Stock
    </div>

    <button @click="inventory += 10">Restock (+10)</button>
    <button @click="inventory = Math.max(0, inventory - 1)">Sell (-1)</button>
  </div>

  <script>
    const { createApp } = Vue

    createApp({
      data() {
        return {
          inventory: 15
        }
      }
    }).mount('#app')
  </script>
</body>
</html>
```

**Beginner tip:** Use v-show for things that toggle often (dropdowns, modals). Use v-if for everything else.

**Intermediate insight:** If component setup is expensive but toggling is frequent, v-show is much faster despite rendering initially. Also, avoid using v-if and v-for on the same element—use a computed property to filter first.

## List Rendering: Displaying Arrays

The `v-for` directive renders lists of items:

### Basic v-for

```html
<!-- Array of strings -->
<ul>
  <li v-for="item in items" :key="item">
    {{ item }}
  </li>
</ul>

<!-- Array of objects -->
<div v-for="user in users" :key="user.id">
  <h3>{{ user.name }}</h3>
  <p>{{ user.email }}</p>
</div>

<!-- With index -->
<li v-for="(item, index) in items" :key="index">
  {{ index + 1 }}. {{ item }}
</li>
```

### The :key Attribute

**Critical rule:** Always provide a unique `:key` when using `v-for`.

```html
<!-- ❌ Bad - using index as key -->
<div v-for="(item, index) in items" :key="index">
  {{ item.name }}
</div>

<!-- ✅ Good - using unique ID -->
<div v-for="item in items" :key="item.id">
  {{ item.name }}
</div>
```

**Why?** Vue uses keys to track which items changed. Using index as key causes bugs when items are added/removed/reordered.

> **Stumbling Block:** Forgetting the `:key` attribute is one of the most common Vue mistakes. Your app might work, but you'll see warnings in the console and potentially weird bugs when the list changes.

### v-for with Objects

```html
<!-- Iterate object properties -->
<div v-for="(value, key) in object" :key="key">
  {{ key }}: {{ value }}
</div>

<!-- With index -->
<div v-for="(value, key, index) in object" :key="key">
  {{ index }}. {{ key }}: {{ value }}
</div>
```

### v-for with Ranges

```html
<!-- Numbers 1-10 -->
<span v-for="n in 10" :key="n">{{ n }} </span>
```

### Advanced: v-for with v-if

```html
<!-- ❌ WRONG: v-if and v-for on same element -->
<li
  v-for="user in users"
  v-if="user.active"
  :key="user.id"
>
  {{ user.name }}
</li>

<!-- ✅ CORRECT: Use computed property -->
<li
  v-for="user in activeUsers"
  :key="user.id"
>
  {{ user.name }}
</li>
```

```javascript
computed: {
  activeUsers() {
    return this.users.filter(user => user.active)
  }
}
```

**Why?** v-for has higher priority than v-if, so v-if runs on each iteration—inefficient!

**Live example - Product list:**

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <style>
    .product {
      border: 1px solid #ddd;
      padding: 15px;
      margin: 10px 0;
      border-radius: 8px;
    }
    .product h3 { margin: 0 0 10px 0; }
    .price { color: #42b983; font-weight: bold; }
    .out-of-stock { opacity: 0.5; }
  </style>
</head>
<body>
  <div id="app">
    <h2>Product Catalog</h2>

    <div
      v-for="product in products"
      :key="product.id"
      class="product"
      :class="{ 'out-of-stock': !product.inStock }"
    >
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <p class="price">${{ product.price }}</p>
      <p v-if="product.inStock">✓ In Stock</p>
      <p v-else>✗ Out of Stock</p>
    </div>

    <p>Showing {{ products.length }} products</p>
  </div>

  <script>
    const { createApp } = Vue

    createApp({
      data() {
        return {
          products: [
            {
              id: 1,
              name: 'Vue Socks',
              description: 'Warm and cozy',
              price: 10,
              inStock: true
            },
            {
              id: 2,
              name: 'Vue Shirt',
              description: 'Stylish and comfortable',
              price: 25,
              inStock: true
            },
            {
              id: 3,
              name: 'Vue Hat',
              description: 'Perfect for sunny days',
              price: 15,
              inStock: false
            }
          ]
        }
      }
    }).mount('#app')
  </script>
</body>
</html>
```

## Event Handling: User Interactions

Vue uses `@` (shorthand for `v-on:`) to listen for events:

### Basic Events

```html
<!-- Click events -->
<button @click="handleClick">Click me</button>
<button @click="count++">Increment</button>
<button @click="doSomething($event)">With event object</button>

<!-- Input events -->
<input @input="handleInput">
<input @change="handleChange">
<input @keyup="handleKeyup">

<!-- Form events -->
<form @submit.prevent="handleSubmit">
  <button type="submit">Submit</button>
</form>

<!-- Mouse events -->
<div @mouseenter="hovering = true" @mouseleave="hovering = false">
  Hover me
</div>
```

### Event Modifiers

```html
<!-- Prevent default behavior -->
<form @submit.prevent="onSubmit">Submit</form>

<!-- Stop event propagation -->
<div @click.stop="doThis">Click</div>

<!-- Event fired only once -->
<button @click.once="doOnce">Click once</button>

<!-- Chain modifiers -->
<form @submit.prevent.stop="onSubmit">Submit</form>
```

### Key Modifiers

```html
<!-- Specific keys -->
<input @keyup.enter="submit">
<input @keyup.tab="nextField">
<input @keyup.delete="deleteItem">
<input @keyup.esc="cancel">

<!-- System modifier keys -->
<input @keyup.ctrl.enter="submit">
<div @click.ctrl="doSomething">Ctrl+Click</div>
```

**Live example - Interactive form:**

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <style>
    .container { max-width: 400px; margin: 20px; }
    input, textarea {
      width: 100%;
      padding: 8px;
      margin: 5px 0;
      box-sizing: border-box;
    }
    button { padding: 10px 20px; margin: 5px; }
  </style>
</head>
<body>
  <div id="app">
    <div class="container">
      <h2>Event Handling Demo</h2>

      <p>Click count: {{ clickCount }}</p>
      <button @click="clickCount++">Click Me</button>
      <button @click.once="alert('This fires only once!')">Click Once</button>

      <hr>

      <p>Type and press Enter:</p>
      <input
        v-model="message"
        @keyup.enter="addMessage"
        placeholder="Type something..."
      >

      <ul>
        <li v-for="(msg, index) in messages" :key="index">
          {{ msg }}
        </li>
      </ul>

      <hr>

      <p>Mouse position: ({{ mouseX }}, {{ mouseY }})</p>
      <div
        @mousemove="trackMouse"
        style="border: 2px solid #42b983; height: 100px; cursor: crosshair;"
      >
        Move mouse here
      </div>
    </div>
  </div>

  <script>
    const { createApp } = Vue

    createApp({
      data() {
        return {
          clickCount: 0,
          message: '',
          messages: [],
          mouseX: 0,
          mouseY: 0
        }
      },

      methods: {
        addMessage() {
          if (this.message.trim()) {
            this.messages.push(this.message)
            this.message = ''
          }
        },

        trackMouse(event) {
          this.mouseX = event.clientX
          this.mouseY = event.clientY
        },

        alert(msg) {
          alert(msg)
        }
      }
    }).mount('#app')
  </script>
</body>
</html>
```

## Forms and v-model: Two-Way Binding

`v-model` creates two-way data binding on form inputs:

### Text Inputs

```html
<!-- Text input -->
<input v-model="message">
<p>Message: {{ message }}</p>

<!-- Textarea -->
<textarea v-model="description"></textarea>

<!-- With modifiers -->
<input v-model.trim="username">
<input v-model.lazy="email">
<input v-model.number="age">
```

### Checkboxes

```html
<!-- Single checkbox (boolean) -->
<input type="checkbox" v-model="acceptTerms">
<label>{{ acceptTerms ? 'Accepted' : 'Not accepted' }}</label>

<!-- Multiple checkboxes (array) -->
<input type="checkbox" id="vue" value="Vue" v-model="frameworks">
<label for="vue">Vue</label>

<input type="checkbox" id="react" value="React" v-model="frameworks">
<label for="react">React</label>

<p>Selected: {{ frameworks }}</p>
```

### Radio Buttons

```html
<input type="radio" id="male" value="male" v-model="gender">
<label for="male">Male</label>

<input type="radio" id="female" value="female" v-model="gender">
<label for="female">Female</label>

<p>Selected: {{ gender }}</p>
```

### Select Dropdowns

```html
<!-- Single select -->
<select v-model="selected">
  <option disabled value="">Choose one</option>
  <option>Option A</option>
  <option>Option B</option>
  <option>Option C</option>
</select>

<!-- Multiple select -->
<select v-model="multipleSelected" multiple>
  <option>Option A</option>
  <option>Option B</option>
  <option>Option C</option>
</select>
```

### v-model Modifiers

```html
<!-- .lazy - sync after change event instead of input -->
<input v-model.lazy="message">

<!-- .number - automatically typecast to number -->
<input v-model.number="age" type="number">

<!-- .trim - automatically trim whitespace -->
<input v-model.trim="username">

<!-- Combine modifiers -->
<input v-model.trim.lazy="email">
```

**Live example - Complete form:**

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <style>
    .form-container { max-width: 500px; margin: 20px; }
    .form-group { margin: 15px 0; }
    label { display: block; margin-bottom: 5px; font-weight: bold; }
    input[type="text"], input[type="email"], input[type="number"],
    textarea, select {
      width: 100%;
      padding: 8px;
      box-sizing: border-box;
    }
    .checkbox-group label { display: inline; font-weight: normal; margin-left: 5px; }
    .preview {
      background: #f5f5f5;
      padding: 15px;
      margin-top: 20px;
      border-radius: 4px;
    }
    button { padding: 10px 20px; background: #42b983; color: white; border: none; border-radius: 4px; cursor: pointer; }
  </style>
</head>
<body>
  <div id="app">
    <div class="form-container">
      <h2>User Registration</h2>

      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label>Name:</label>
          <input v-model.trim="form.name" type="text" required>
        </div>

        <div class="form-group">
          <label>Email:</label>
          <input v-model.trim="form.email" type="email" required>
        </div>

        <div class="form-group">
          <label>Age:</label>
          <input v-model.number="form.age" type="number" min="0">
        </div>

        <div class="form-group">
          <label>Gender:</label>
          <div>
            <input type="radio" id="male" value="male" v-model="form.gender">
            <label for="male" style="display: inline;">Male</label>

            <input type="radio" id="female" value="female" v-model="form.gender">
            <label for="female" style="display: inline;">Female</label>

            <input type="radio" id="other" value="other" v-model="form.gender">
            <label for="other" style="display: inline;">Other</label>
          </div>
        </div>

        <div class="form-group">
          <label>Interests:</label>
          <div class="checkbox-group">
            <input type="checkbox" id="coding" value="Coding" v-model="form.interests">
            <label for="coding">Coding</label>
            <br>
            <input type="checkbox" id="design" value="Design" v-model="form.interests">
            <label for="design">Design</label>
            <br>
            <input type="checkbox" id="music" value="Music" v-model="form.interests">
            <label for="music">Music</label>
          </div>
        </div>

        <div class="form-group">
          <label>Country:</label>
          <select v-model="form.country">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="AU">Australia</option>
          </select>
        </div>

        <div class="form-group">
          <label>Bio:</label>
          <textarea v-model="form.bio" rows="4"></textarea>
        </div>

        <div class="form-group checkbox-group">
          <input type="checkbox" id="terms" v-model="form.acceptTerms">
          <label for="terms">I accept the terms and conditions</label>
        </div>

        <button type="submit" :disabled="!form.acceptTerms">Submit</button>
      </form>

      <div class="preview">
        <h3>Form Data Preview:</h3>
        <pre>{{ form }}</pre>
      </div>
    </div>
  </div>

  <script>
    const { createApp } = Vue

    createApp({
      data() {
        return {
          form: {
            name: '',
            email: '',
            age: null,
            gender: '',
            interests: [],
            country: '',
            bio: '',
            acceptTerms: false
          }
        }
      },

      methods: {
        submitForm() {
          console.log('Form submitted:', this.form)
          alert('Form submitted! Check console for data.')
        }
      }
    }).mount('#app')
  </script>
</body>
</html>
```

## Template Refs: Accessing DOM Elements

Sometimes you need direct access to DOM elements or child components. Vue provides `ref` for this.

### Basic Ref Usage

```javascript
export default {
  mounted() {
    // Access the input element
    this.$refs.input.focus()
  },

  template: `
    <input ref="input" type="text">
  `
}
```

### Refs on Components

```javascript
const ChildComponent = {
  data() {
    return { count: 0 }
  },
  methods: {
    increment() {
      this.count++
    }
  },
  template: `<div>Count: {{ count }}</div>`
}

export default {
  components: { ChildComponent },

  mounted() {
    // Call child component method
    this.$refs.child.increment()
    // Access child component data
    console.log(this.$refs.child.count)
  },

  template: `
    <child-component ref="child"></child-component>
  `
}
```

### Refs in v-for

```html
<div
  v-for="item in items"
  :key="item.id"
  :ref="setItemRef"
>
  {{ item.name }}
</div>
```

```javascript
data() {
  return {
    items: [...],
    itemRefs: []
  }
},
methods: {
  setItemRef(el) {
    if (el) {
      this.itemRefs.push(el)
    }
  }
}
```

**Live Example:**

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
</head>
<body>
  <div id="app">
    <h2>Template Refs Demo</h2>

    <input ref="nameInput" v-model="name" placeholder="Your name">
    <button @click="focusInput">Focus Input</button>

    <hr>

    <video
      ref="videoPlayer"
      width="320"
      height="240"
      controls
      src="https://www.w3schools.com/html/mov_bbb.mp4"
    ></video>
    <br>
    <button @click="playVideo">Play</button>
    <button @click="pauseVideo">Pause</button>
  </div>

  <script>
    const { createApp } = Vue

    createApp({
      data() {
        return {
          name: ''
        }
      },

      mounted() {
        // Auto-focus on mount
        this.$refs.nameInput.focus()
      },

      methods: {
        focusInput() {
          this.$refs.nameInput.focus()
        },
        playVideo() {
          this.$refs.videoPlayer.play()
        },
        pauseVideo() {
          this.$refs.videoPlayer.pause()
        }
      }
    }).mount('#app')
  </script>
</body>
</html>
```

**When to use refs:**
- Integrating third-party libraries (charts, maps)
- Focusing inputs
- Measuring element dimensions
- Triggering animations
- Managing media elements (video/audio)

**Important warnings:**
- Don't overuse refs—Vue's declarative approach is usually better
- Refs are populated **after** component is mounted
- Avoid accessing refs in `created()` hook (they don't exist yet)

**Beginner tip:** Only use refs when you truly need direct DOM access. Most of the time, data binding is better.

**Intermediate insight:** In Vue 3 Composition API (Part 2), refs work differently using the `ref()` function.

## Components: Building Blocks of Vue Apps

Components are reusable Vue instances with their own template, logic, and style.

### Creating a Component

```javascript
// Define a component
const MyButton = {
  data() {
    return {
      count: 0
    }
  },
  template: `
    <button @click="count++">
      Clicked {{ count }} times
    </button>
  `
}

// Use it in your app
const app = createApp({
  components: {
    'my-button': MyButton
  },
  template: `
    <div>
      <h2>My Buttons</h2>
      <my-button></my-button>
      <my-button></my-button>
    </div>
  `
})
```

### Props: Passing Data to Components

```javascript
// Component with props
const GreetingCard = {
  props: {
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      default: 0
    }
  },
  template: `
    <div class="card">
      <h3>Hello, {{ name }}!</h3>
      <p>You are {{ age }} years old.</p>
    </div>
  `
}

// Parent passes data via props
const app = createApp({
  components: { GreetingCard },
  data() {
    return {
      user: { name: 'Nerando', age: 30 }
    }
  },
  template: `
    <greeting-card
      :name="user.name"
      :age="user.age"
    ></greeting-card>
  `
})
```

### Emitting Events: Child to Parent Communication

```javascript
// Child component emits events
const CounterButton = {
  emits: ['increment'],
  template: `
    <button @click="$emit('increment')">
      Add to total
    </button>
  `
}

// Parent listens to events
const app = createApp({
  components: { CounterButton },
  data() {
    return {
      total: 0
    }
  },
  methods: {
    incrementTotal() {
      this.total++
    }
  },
  template: `
    <div>
      <p>Total: {{ total }}</p>
      <counter-button @increment="incrementTotal"></counter-button>
      <counter-button @increment="incrementTotal"></counter-button>
    </div>
  `
})
```

### Slots: Flexible Component Content

Slots allow you to pass template content to child components, making them more reusable.

#### Basic Slot

```javascript
// Card component
const Card = {
  template: `
    <div class="card">
      <slot></slot>  <!-- Content goes here -->
    </div>
  `
}

// Usage
template: `
  <card>
    <h3>Card Title</h3>
    <p>Card content can be anything!</p>
  </card>
`
```

#### Named Slots

```javascript
const Layout = {
  template: `
    <div class="layout">
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot></slot>  <!-- Default slot -->
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  `
}

// Usage
template: `
  <layout>
    <template v-slot:header>
      <h1>Page Title</h1>
    </template>

    <p>Main content</p>

    <template v-slot:footer>
      <p>Footer content</p>
    </template>
  </layout>
`
```

#### Scoped Slots (Advanced)

```javascript
const List = {
  props: ['items'],
  template: `
    <ul>
      <li v-for="item in items" :key="item.id">
        <slot :item="item"></slot>
      </li>
    </ul>
  `
}

// Usage - parent controls rendering
template: `
  <list :items="users">
    <template v-slot="{ item }">
      <strong>{{ item.name }}</strong> - {{ item.email }}
    </template>
  </list>
`
```

**Live Example - Slots:**

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <style>
    .card {
      border: 2px solid #42b983;
      border-radius: 8px;
      padding: 20px;
      margin: 10px 0;
    }
    .card-header {
      border-bottom: 1px solid #ddd;
      padding-bottom: 10px;
      margin-bottom: 10px;
    }
    .card-footer {
      border-top: 1px solid #ddd;
      padding-top: 10px;
      margin-top: 10px;
      text-align: right;
    }
  </style>
</head>
<body>
  <div id="app">
    <h2>Slot Examples</h2>

    <!-- Basic slot -->
    <card>
      <h3>Simple Card</h3>
      <p>This content is passed via the default slot</p>
    </card>

    <!-- Named slots -->
    <card>
      <template v-slot:header>
        <h3>Card with Header & Footer</h3>
      </template>

      <p>Main content area</p>

      <template v-slot:footer>
        <button>Action Button</button>
      </template>
    </card>
  </div>

  <script>
    const { createApp } = Vue

    const Card = {
      template: `
        <div class="card">
          <div v-if="$slots.header" class="card-header">
            <slot name="header"></slot>
          </div>

          <div class="card-body">
            <slot></slot>
          </div>

          <div v-if="$slots.footer" class="card-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      `
    }

    createApp({
      components: { Card }
    }).mount('#app')
  </script>
</body>
</html>
```

**When to use slots:**
- Building UI libraries (cards, modals, layouts)
- Creating flexible, reusable components
- When props aren't enough (complex template content)

**Beginner tip:** Start with the default slot. Named slots are for when you need multiple content areas.

**Intermediate insight:** Scoped slots are powerful for creating renderless components that separate logic from presentation.

**Live example - Product display component:**

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <style>
    .product-card {
      border: 2px solid #ddd;
      padding: 15px;
      margin: 10px;
      border-radius: 8px;
      display: inline-block;
      width: 200px;
    }
    .product-card h3 { margin: 0 0 10px 0; }
    .price { color: #42b983; font-size: 18px; font-weight: bold; }
    button {
      width: 100%;
      padding: 8px;
      background: #42b983;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 10px;
    }
    button:hover { background: #35a372; }
    button:disabled { background: #ccc; cursor: not-allowed; }
  </style>
</head>
<body>
  <div id="app">
    <h2>Product Store</h2>
    <p>Cart: {{ cart }} items</p>

    <product-card
      v-for="product in products"
      :key="product.id"
      :product="product"
      @add-to-cart="addToCart"
    ></product-card>
  </div>

  <script>
    const { createApp } = Vue

    // Product Card Component
    const ProductCard = {
      props: {
        product: {
          type: Object,
          required: true
        }
      },
      emits: ['addToCart'],
      template: `
        <div class="product-card">
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <p class="price">\${{ product.price }}</p>
          <button
            @click="$emit('addToCart', product.id)"
            :disabled="!product.inStock"
          >
            {{ product.inStock ? 'Add to Cart' : 'Out of Stock' }}
          </button>
        </div>
      `
    }

    // Main App
    createApp({
      components: {
        'product-card': ProductCard
      },
      data() {
        return {
          cart: 0,
          products: [
            {
              id: 1,
              name: 'Vue Socks',
              description: 'Warm and cozy',
              price: 10,
              inStock: true
            },
            {
              id: 2,
              name: 'Vue Shirt',
              description: 'Stylish tee',
              price: 25,
              inStock: true
            },
            {
              id: 3,
              name: 'Vue Hat',
              description: 'Perfect fit',
              price: 15,
              inStock: false
            }
          ]
        }
      },
      methods: {
        addToCart(productId) {
          this.cart++
          console.log('Added product', productId, 'to cart')
        }
      }
    }).mount('#app')
  </script>
</body>
</html>
```

## Common Gotchas & How to Avoid Them

### 1. Mutating Props Directly

```javascript
// ❌ WRONG: Never modify props
props: ['count'],
methods: {
  increment() {
    this.count++  // ERROR! Props are read-only
  }
}

// ✅ CORRECT: Emit event to parent
props: ['count'],
methods: {
  increment() {
    this.$emit('update:count', this.count + 1)
  }
}

// ✅ OR: Use local data
props: ['initialCount'],
data() {
  return {
    localCount: this.initialCount
  }
},
methods: {
  increment() {
    this.localCount++
  }
}
```

### 2. Forgetting :key in v-for

```html
<!-- ❌ WRONG: No key or index as key -->
<div v-for="(item, index) in items">{{ item }}</div>
<div v-for="item in items" :key="index">{{ item }}</div>

<!-- ✅ CORRECT: Unique, stable key -->
<div v-for="item in items" :key="item.id">{{ item }}</div>
```

**Why it matters:** Without proper keys, Vue can't track items correctly when the list changes, leading to:
- UI not updating correctly
- Component state getting mixed up
- Performance issues

### 3. Reactivity Lost on Array/Object Manipulation

```javascript
// ❌ WRONG: These don't trigger reactivity
this.items[0] = newItem  // Direct index assignment
this.user.newProperty = 'value'  // Adding property after creation

// ✅ CORRECT: Reactive alternatives
// Array: use splice
this.items.splice(0, 1, newItem)
// Or reassign entire array
this.items = [...this.items.slice(0, 0), newItem, ...this.items.slice(1)]

// Object: declare upfront or use reassignment
data() {
  return {
    user: {
      name: '',
      newProperty: ''  // Declare upfront
    }
  }
}
// Or reassign entire object
this.user = { ...this.user, newProperty: 'value' }
```

**Vue 3 note:** Object reactivity is better than Vue 2, but these patterns still apply for consistency.

### 4. Async Data in Computed Properties

```javascript
// ❌ WRONG: Computed can't be async
computed: {
  async userData() {
    return await fetch('/api/user')  // Won't work!
  }
}

// ✅ CORRECT: Use watcher or mounted hook
data() {
  return {
    userData: null
  }
},
async mounted() {
  this.userData = await fetch('/api/user').then(r => r.json())
}

// ✅ OR: Use watcher for reactive updates
watch: {
  userId: {
    immediate: true,
    async handler(id) {
      this.userData = await fetch(`/api/user/${id}`).then(r => r.json())
    }
  }
}
```

### 5. Incorrect Event Handling

```html
<!-- ❌ WRONG: Calling method in template -->
<button @click="handleClick()">Click</button>  <!-- () unnecessary -->
<input @input="value = $event">  <!-- Missing .target -->

<!-- ✅ CORRECT -->
<button @click="handleClick">Click</button>
<button @click="handleClick($event)">With event</button>
<input @input="value = $event.target.value">
<!-- OR use v-model -->
<input v-model="value">
```

### 6. Not Cleaning Up in unmounted()

```javascript
// ❌ WRONG: Memory leak!
mounted() {
  this.interval = setInterval(() => {
    this.count++
  }, 1000)
}
// Component destroyed but interval keeps running!

// ✅ CORRECT: Clean up
mounted() {
  this.interval = setInterval(() => {
    this.count++
  }, 1000)
},
unmounted() {
  clearInterval(this.interval)  // Clean up!
}
```

### 7. Misunderstanding `this` Context

```javascript
// ❌ WRONG: Lost context with regular function
methods: {
  fetchData() {
    setTimeout(function() {
      this.data = 'loaded'  // `this` is undefined!
    }, 1000)
  }
}

// ✅ CORRECT: Use arrow function
methods: {
  fetchData() {
    setTimeout(() => {
      this.data = 'loaded'  // Arrow function preserves `this`
    }, 1000)
  }
}
```

### 8. Overusing Watchers

```javascript
// ❌ WRONG: Watcher for simple calculation
data() {
  return {
    firstName: '',
    lastName: '',
    fullName: ''
  }
},
watch: {
  firstName(val) {
    this.fullName = val + ' ' + this.lastName
  },
  lastName(val) {
    this.fullName = this.firstName + ' ' + val
  }
}

// ✅ CORRECT: Use computed
computed: {
  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}
```

**Beginner summary:** These gotchas catch everyone at first. Reference this section when debugging!

**Intermediate reminder:** Set up ESLint with Vue plugin to catch many of these automatically.

## What You've Learned

Congratulations! You now have a solid foundation in Vue fundamentals:

✅ **Vue's core concept** - Reactive data binding with Proxy-based reactivity
✅ **Options API structure** - data, methods, computed, watchers, lifecycle
✅ **Template syntax** - Interpolation and directives
✅ **Attribute binding** - Dynamic HTML attributes
✅ **Class & style binding** - Dynamic styling
✅ **Conditional rendering** - v-if, v-else, v-show with performance considerations
✅ **List rendering** - v-for with :key
✅ **Event handling** - User interactions and modifiers
✅ **Form handling** - v-model and two-way binding
✅ **Components** - Props, custom events, and slots
✅ **Computed properties** - Efficient derived state with caching
✅ **Watchers** - Asynchronous operations and side effects
✅ **Lifecycle hooks** - Component lifecycle management
✅ **Template refs** - Direct DOM access when needed

**You're now ready for Part 2**, where we'll:
- Learn the Composition API (modern Vue)
- Build a complete Single-Page Application
- Use Vue Router for navigation
- Create reusable composables
- Structure a production-ready project
- Deploy your first Vue app

## Practice Before Moving On

To solidify these concepts, try building:

1. **Calculator** - Practice methods and computed properties
2. **Todo List with Persistence** - Practice v-for, events, watchers, and localStorage
3. **Form Survey** - Practice v-model with different input types
4. **Product Filter** - Practice computed properties for filtering/sorting
5. **Tab Component** - Practice components, props, events, and slots

**Challenge:** Build a simple blog post list with:
- Display posts with title, author, date
- Filter by author
- Search by title
- "Read More" button that shows/hides content
- Like counter with localStorage persistence
- Lifecycle hooks to fetch data

Don't rush to Part 2. These fundamentals are crucial. The stronger your foundation, the easier the Composition API will be.

## Vue 3 Quick Reference Card

### Options API Structure
```javascript
export default {
  name: 'ComponentName',          // Optional, for debugging
  props: {...},                   // Component inputs
  data() { return {...} },        // Reactive state
  computed: {...},                // Cached derived values
  watch: {...},                   // React to data changes
  methods: {...},                 // Functions

  // Lifecycle hooks
  created() {},                   // Component created
  mounted() {},                   // Component mounted to DOM
  updated() {},                   // After reactive data changes
  unmounted() {},                 // Component removed

  components: {...},              // Child components
  emits: [],                      // Declare emitted events
}
```

### Template Directives
| Directive | Purpose | Example |
|-----------|---------|---------|
| `{{ }}` | Text interpolation | `{{ message }}` |
| `v-bind:` / `:` | Bind attribute | `:src="imageUrl"` |
| `v-on:` / `@` | Event listener | `@click="handler"` |
| `v-model` | Two-way binding | `v-model="text"` |
| `v-if` | Conditional render | `v-if="show"` |
| `v-else-if` | Else if condition | `v-else-if="other"` |
| `v-else` | Else condition | `v-else` |
| `v-show` | Toggle display | `v-show="visible"` |
| `v-for` | List rendering | `v-for="item in items"` |
| `ref` | Template ref | `ref="element"` |

### Event Modifiers
```html
@click.stop          <!-- Stop propagation -->
@submit.prevent      <!-- Prevent default -->
@keyup.enter         <!-- Enter key -->
@click.once          <!-- Fire once -->
@click.ctrl          <!-- With Ctrl key -->
```

### v-model Modifiers
```html
v-model.lazy         <!-- Sync on change instead of input -->
v-model.number       <!-- Typecast to number -->
v-model.trim         <!-- Trim whitespace -->
```

### Component Communication
```javascript
// Parent → Child (Props)
<child-component :message="parentData"></child-component>

// Child → Parent (Events)
this.$emit('event-name', payload)
<child-component @event-name="handler"></child-component>

// Template refs
this.$refs.refName
```

### Common Patterns
```javascript
// Computed property
computed: {
  fullName() {
    return `${this.first} ${this.last}`
  }
}

// Watcher
watch: {
  searchQuery(newVal, oldVal) {
    this.performSearch(newVal)
  }
}

// Lifecycle
async mounted() {
  this.data = await fetchData()
}
unmounted() {
  clearInterval(this.timer)
}
```

## Next Steps

**Ready to continue?**

👉 **[Read Part 2: Building Your First Single-Page App](#)**

In Part 2, you'll learn:
- The Composition API and why it matters
- Building a complete notes application
- Vue Router for multi-page navigation
- Composables for reusable logic
- Project structure and best practices
- LocalStorage integration
- Deploying your app

**Want to practice more first?**
- [Vue Mastery - Intro to Vue 3](https://www.vuemastery.com/courses/intro-to-vue-3/intro-to-vue3/)
- [Official Vue Documentation](https://vuejs.org/guide/introduction.html)
- [Vue Playground](https://play.vuejs.org/) - Try Vue in your browser

---

## Connect & Share Your Progress

**Learning Vue?** I'd love to hear about your journey:

- **Twitter:** [@nerajno](https://twitter.com/nerajno) - Share what you're building!
- **Blog:** [developingdvlpr.com](https://developingdvlpr.com)
- **Questions?** My DMs are open

**Found this helpful?** Share it with someone learning Vue. Learning is better together.

---

> **Disclaimer:** This article represents my learning journey through Vue Mastery's "Intro to Vue 3" course. I've organized the concepts in the way that made them click for me. As I continue building with Vue, I may refine sections based on new insights. Your feedback helps improve this resource—reach out with suggestions!

---

**Reading Time:** ~25-30 minutes
**Practice Time:** 2-3 hours
