---
draft: false
seoTitle: "Vue 3 Template Syntax & Directives: Making HTML Do More | Nerando Johnson"
seoDescription: "Master Vue 3 directives — v-if, v-for, v-bind, v-on, and v-model — and learn how to write dynamic, declarative templates without touching the DOM directly."
author: "Nerando Johnson"
title: "Vue 3 Template Syntax & Directives: Making HTML Do More"
snippet: "Vanilla HTML is static. Vue's template syntax changes that. In this article we cover the directives you'll use every day — v-bind, v-on, v-model, v-if, and v-for — with real examples that show how they fit together."
image: {
    src: "/images/blog_covers/Vue3 Image.png",
    alt: "Vue.js logo on a light blue background with geometric shapes"
}
publishDate: "2026-04-22 00:00"
category: "Vue, JavaScript, Tutorials"
tags: [vue3, javascript, frontend, tutorial, directives, template-syntax, composition-api]
keywords: [Vue 3 directives, v-if v-for, v-bind v-on, v-model Vue 3, Vue template syntax, conditional rendering Vue, list rendering Vue, Vue 3 tutorial]
series:
  name: "Vue 3 Fundamentals"
  order: 5

# GEO-Enhanced Fields
schema: {
  type: "TechArticle",
  about: "Vue 3 template syntax and built-in directives for dynamic rendering",
  genre: "Educational Tutorial",
  educationalLevel: "Beginner",
  teaches: ["Vue 3 Directives", "v-bind", "v-on", "v-model", "v-if", "v-show", "v-for", "Text Interpolation", "Event Modifiers"],
  audience: {
    type: "ProfessionalAudience",
    audienceType: "Frontend Developers and JavaScript Learners"
  }
}

entities: {
  primary: ["Vue.js", "Vue 3", "Template Syntax", "Directives"],
  secondary: ["v-bind", "v-on", "v-model", "v-if", "v-else", "v-show", "v-for", "Composition API"],
  people: ["Evan You"],
  organizations: ["Vue.js Core Team"],
  tools: ["Vue 3", "Vite", "VS Code", "Volar"],
  concepts: ["Declarative Rendering", "Two-Way Data Binding", "Conditional Rendering", "List Rendering", "Event Handling", "DOM Abstraction"]
}

contentStructure: {
  type: "Conceptual Tutorial",
  difficulty: "Beginner",
  timeToComplete: "10-12 minutes read",
  prerequisites: ["Basic HTML", "Basic JavaScript (variables, functions)", "Article 4 — Reactivity in Vue 3"],
  outcomes: ["Use text interpolation with {{ }}", "Bind attributes dynamically with v-bind / :", "Handle DOM events with v-on / @", "Create two-way bindings with v-model", "Conditionally render with v-if and v-show", "Render lists with v-for"]
}

semanticContext: {
  topic: "Vue 3 template directives and how they make HTML dynamic and declarative",
  subtopics: ["text interpolation", "v-bind shorthand", "v-on event modifiers", "v-model two-way binding", "v-if vs v-show", "v-for with :key"],
  relatedConcepts: ["React JSX", "Angular directives", "Handlebars templates", "Declarative Programming"],
  practicalApplication: true
}
---

## Vue 3 Template Syntax & Directives: Making HTML Do More

*Part 5 of the **Vue 3 Fundamentals** series — mastering `v-if`, `v-for`, `v-bind`, `v-on`, and `v-model`.*

![Making HTML Do More](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWNnMHRhZXFqZDduemc2N2RkNzNrMjZzZmJmZWE3bzN2Mnphcm9wNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Z3pez2XOAb11naBDbh/giphy.gif)

Vanilla HTML is static. What you write is what you get. Vue's template syntax changes that.

Vue extends HTML with a set of directives — special attributes prefixed with `v-` — that let you bind data, respond to events, conditionally render elements, and loop over lists, all directly in your template. No manual DOM updates. No `querySelector` calls. Just declarative logic that Vue handles for you.

In this article, we'll cover the most common and maybe most important directives you'll use every day.

---

## Text Interpolation: `{{ }}`

We've used this already, but let's be explicit. Double curly braces render a JavaScript expression as text:

```html
<p>{{ message }}</p>
<p>{{ user.name }}</p>
<p>{{ 2 + 2 }}</p>
<p>{{ isLoggedIn ? 'Welcome back' : 'Please log in' }}</p>
```

This is called **text interpolation**. Vue evaluates the expression and inserts its value as plain text. Note that it's text only — you can't insert raw HTML this way (and for security reasons, you usually don't want to ....... DO NOT DO IT !!!!).

---

## `v-bind`: Binding Attributes Dynamically

`v-bind` connects a reactive value to an HTML attribute:

```html
<img v-bind:src="imageUrl" v-bind:alt="imageDescription" />
<a v-bind:href="profileLink">View Profile</a>
```

This is used so often that Vue has a shorthand — a colon `:`:

```html
<img :src="imageUrl" :alt="imageDescription" />
<a :href="profileLink">View Profile</a>
```

You'll see the shorthand everywhere. It's the standard way to write it.

You can also bind class names and styles dynamically:

```html
<div :class="{ active: isActive, disabled: isDisabled }">...</div>
<div :class="[primaryClass, secondaryClass]">...</div>
<div :style="{ color: textColor, fontSize: fontSize + 'px' }">...</div>
```

The object syntax for `:class` is particularly handy — each key is a class name, each value is a boolean that controls whether the class is applied.

---

## `v-on`: Handling Events

`v-on` listens for DOM events and runs a function when they fire:

```html
<button v-on:click="handleClick">Click me</button>
<input v-on:input="handleInput" />
<form v-on:submit="handleSubmit">...</form>
```

Shorthand — the `@` symbol:

```html
<button @click="handleClick">Click me</button>
<input @input="handleInput" />
```

You can also write inline expressions directly in the handler:

```html
<button @click="count++">Increment</button>
<button @click="message = 'Updated!'">Update</button>
```

Vue also provides **event modifiers** that let you handle common patterns without writing boilerplate:

```html
<!-- Prevent the default form submission behavior -->
<form @submit.prevent="handleSubmit">...</form>

<!-- Stop the event from bubbling up to parent elements -->
<div @click.stop="handleClick">...</div>

<!-- Only fire when the exact element is clicked, not a child -->
<div @click.self="handleClick">...</div>
```

These modifiers chain onto the event name with a dot. They're small but they eliminate a surprising amount of repetitive code.

---

## `v-model`: Two-Way Binding

`v-model` creates a two-way connection between a form input and a reactive variable. When the user types, the variable updates. When the variable changes, the input reflects it.

```vue
<script setup>
import { ref } from 'vue'
const username = ref('')
const selectedRole = ref('viewer')
const agreeToTerms = ref(false)
</script>

<template>
  <input v-model="username" placeholder="Username" />
  <p>Hello, {{ username || 'stranger' }}!</p>

  <select v-model="selectedRole">
    <option value="viewer">Viewer</option>
    <option value="editor">Editor</option>
    <option value="admin">Admin</option>
  </select>

  <input type="checkbox" v-model="agreeToTerms" />
  <span>{{ agreeToTerms ? 'Agreed' : 'Please agree to continue' }}</span>
</template>
```

`v-model` works on text inputs, textareas, checkboxes, radio buttons, and selects. For text-like inputs, it's often equivalent to `:value` + `@input` under the hood, but other controls use different props and events (for example, checkboxes and radios use `checked` + `change`, and component `v-model` uses `modelValue` + `update:modelValue`). In practice, the shorthand is clean enough that you'll almost always use `v-model` directly.

---

## `v-if` / `v-else-if` / `v-else`: Conditional Rendering

Show or hide elements based on a condition:

```html
<div v-if="isLoggedIn">
  <h2>Welcome back!</h2>
</div>
<div v-else-if="isLoading">
  <p>Loading...</p>
</div>
<div v-else>
  <p>Please log in to continue.</p>
</div>
```

When `v-if` evaluates to false, Vue removes the element from the DOM entirely (not just hides it). If you need the element to stay in the DOM but be invisible, use `v-show` instead:

```html
<!-- v-if: removes from DOM when false -->
<p v-if="showMessage">This may not exist in the DOM</p>

<!-- v-show: always in DOM, toggled with CSS display -->
<p v-show="showMessage">This is always in the DOM</p>
```

**General rule**: use `v-if` when you conditionally render something infrequently. Use `v-show` when you're toggling visibility frequently (like a dropdown or modal), since it avoids the cost of creating/destroying DOM elements repeatedly.

---

## `v-for`: List Rendering

Render a list of items from an array:

```vue
<script setup>
import { ref } from 'vue'

const skills = ref(['Vue 3', 'TypeScript', 'Nuxt', 'Pinia'])
</script>

<template>
  <ul>
    <li v-for="skill in skills" :key="skill">
      {{ skill }}
    </li>
  </ul>
</template>
```

The `:key` attribute is strongly recommended and important when using `v-for`. It gives Vue a way to identify each item uniquely when the list updates, making DOM updates efficient, and it is required in some cases such as component lists or when preserving state. Use a unique identifier — ideally an `id` from your data. If you have no better option, you can use the index, but it's not ideal for dynamic lists.

You can also access the index:

```html
<li v-for="(skill, index) in skills" :key="skill">
  {{ index + 1 }}. {{ skill }}
</li>
```

And loop over objects:

```html
<div v-for="(value, key) in userObject" :key="key">
  {{ key }}: {{ value }}
</div>
```

---

## Putting It Together
<img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWEwbXpwamJxNm9iZ3NzM2JhNTR1aGE1NmptN29vdzRjcGs1bXhwMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/N8HaPqnkQETss/giphy.gif" alt="Putting It Together" width="100%" />

Here's a small component that combines everything from this article:

```vue
<script setup>
import { ref, computed } from 'vue'

const newSkill = ref('')
const skills = ref(['Vue 3', 'JavaScript'])
const filter = ref('all')

const filteredSkills = computed(() => {
  if (filter.value === 'vue') return skills.value.filter(s => s.includes('Vue'))
  return skills.value
})

function addSkill() {
  if (newSkill.value.trim()) {
    skills.value.push(newSkill.value.trim())
    newSkill.value = ''
  }
}
</script>

<template>
  <div>
    <input v-model="newSkill" @keyup.enter="addSkill" placeholder="Add a skill" />
    <button @click="addSkill">Add</button>

    <select v-model="filter">
      <option value="all">All skills</option>
      <option value="vue">Vue only</option>
    </select>

    <ul v-if="filteredSkills.length > 0">
      <li v-for="skill in filteredSkills" :key="skill">{{ skill }}</li>
    </ul>
    <p v-else>No skills match your filter.</p>
  </div>
</template>
```

`v-model`, `@click`, `@keyup.enter`, `v-model` on a select, `v-if`, `v-else`, `v-for`. All in one focused component.

---

## What's Next

<img src="https://media0.giphy.com/media/wR4bJk4jF5Tl6/giphy.gif" alt="What's next" width="960" />

In **Article 6**, we bring everything together. We'll build a complete mini Todo app from scratch, using components, reactivity, props, events, and directives — everything from Articles 1 through 5.

This is where it we hope it all should make sense and click.

---

*This is Part 5 of the Vue 3 Fundamentals series. Sources: [Vue.js Template Syntax](https://vuejs.org/guide/essentials/template-syntax), [Vue.js Conditional Rendering](https://vuejs.org/guide/essentials/conditional), [Vue.js List Rendering](https://vuejs.org/guide/essentials/list).*
