# Styling System Documentation

This directory contains the core styling resources for the portfolio project.

## Files and Purpose

1. **css_variables.css**
   - Contains CSS custom properties (variables) for the entire application
   - Defines color palettes, semantic colors, shadows, transitions, and card styles
   - Includes light and dark theme support
   - Sets up automatic dark mode detection via media queries

2. **component_styles.css**
   - Provides pre-styled components using Tailwind's `@apply` directive
   - Includes styles for buttons, cards, navigation, hero sections, blog cards, and more
   - Uses the CSS variables defined in css_variables.css

3. **tailwind_config.js**
   - Reference version of the Tailwind configuration
   - Extends Tailwind with custom colors matching the CSS variables
   - Adds custom font families, font sizes, spacing, and animations

## How to Use

### Theme Support

The styling system supports both class-based and attribute-based dark mode:
- `<html class="dark">` - For Tailwind dark mode
- `<html data-theme="dark">` - For CSS variable dark mode

Theme toggling should update both the class and data-theme attribute.

### Using Components

```html
<!-- Button examples -->
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-secondary">Secondary Button</button>
<button class="btn btn-ghost">Ghost Button</button>

<!-- Card example -->
<div class="card">
  <div class="card-header">Card Title</div>
  <div class="card-body">Card Content</div>
  <div class="card-footer">Card Footer</div>
</div>

<!-- Blog card example -->
<div class="blog-card">
  <img class="blog-card-image" src="..." alt="...">
  <div class="blog-card-content">
    <h3 class="blog-card-title">Article Title</h3>
    <p class="blog-card-excerpt">Article excerpt...</p>
    <div class="blog-card-meta">Posted on: ...</div>
  </div>
</div>
```

### CSS Variables

You can use the semantic CSS variables in your custom components:

```css
.custom-element {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-light);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
}
```

### Integration with Astro

The styling system is designed to work seamlessly with Astro. The main integration points are:
- `global.css` - Imports the CSS variables and component styles
- `Layout.astro` - Sets up the theme toggle functionality
- `themeicon.astro` - Implements the theme toggle button
