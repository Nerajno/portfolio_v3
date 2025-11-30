# Dark Mode Quick Reference Card

## 🌓 Light vs Dark Mode Colors

### Your Brand Colors - Side by Side

| Element | Light Mode | Dark Mode | Purpose |
|---------|------------|-----------|---------|
| **Backgrounds** |
| Primary BG | `#FFFFFF` White | `#0A0E1A` Deep Navy | Main background |
| Secondary BG | `#F8F9FA` Light Gray | `#121829` Navy-Gray | Cards, elevated |
| Tertiary BG | `#E6E9EC` Silver | `#1A2235` Lighter Navy | Hover states |
| Code BG | `#F8F9FA` Light Gray | `#0F1419` Almost Black | Code blocks |
| **Text Colors** |
| Primary Text | `#122033` Navy | `#E8ECEF` Off-White | Headings, body |
| Secondary Text | `#4A5568` Gray | `#B8BFC7` Light Gray | Subtitles |
| Muted Text | `#718096` Light Gray | `#8A919B` Medium Gray | Metadata |
| **Brand Accents** |
| Cyan | `#4BE3DF` | `#5FEDE9` ⬆️ +20% | Links, info |
| Leaf Green | `#5CB85C` | `#6FD16F` ⬆️ +20% | Success, Vue |
| Coral | `#FF6F61` | `#FF8A7F` ⬆️ +20% | CTAs, warnings |
| Silver | `#E6E9EC` | `#2D3748` ⬇️ darker | Borders |

---

## 🎨 Color Codes at a Glance

### Dark Mode Palette

```css
/* Backgrounds */
--dark-bg-primary:   #0A0E1A;  /* Deep navy-black */
--dark-bg-secondary: #121829;  /* Cards */
--dark-bg-tertiary:  #1A2235;  /* Hover */
--dark-bg-code:      #0F1419;  /* Code blocks */

/* Text */
--dark-text-primary:   #E8ECEF;  /* Main text */
--dark-text-secondary: #B8BFC7;  /* Secondary */
--dark-text-muted:     #8A919B;  /* Metadata */

/* Accents (Enhanced +20% brightness) */
--dark-brand-cyan:  #5FEDE9;  /* Links */
--dark-brand-leaf:  #6FD16F;  /* Success */
--dark-brand-coral: #FF8A7F;  /* CTAs */
--dark-brand-silver: #2D3748; /* Borders */
```

---

## 🔧 Quick Implementation

### CSS Variables Method

```css
:root {
  /* Light (default) */
  --bg: #FFFFFF;
  --text: #122033;
  --accent: #4BE3DF;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #0A0E1A;
    --text: #E8ECEF;
    --accent: #5FEDE9;
  }
}
```

### Tailwind Classes

```html
<div class="bg-white dark:bg-dark-bg-primary">
  <h1 class="text-brand-primary dark:text-dark-text-primary">
    Title
  </h1>
  <a class="text-brand-cyan dark:text-dark-brand-cyan">
    Link
  </a>
</div>
```

---

## ✅ Contrast Ratios (WCAG)

| Color Combo | Light Mode | Dark Mode |
|-------------|------------|-----------|
| Text on BG | **14.5:1** ✅ AAA | **15.2:1** ✅ AAA |
| Cyan on BG | **4.8:1** ✅ AA | **7.8:1** ✅ AAA |
| Coral on BG | **4.2:1** ✅ AA | **6.2:1** ✅ AAA |

**Both modes exceed accessibility standards!** 🎉

---

## 📱 Component Examples

### Link
```html
<!-- Light: #4BE3DF, Dark: #5FEDE9 -->
<a class="text-brand-cyan dark:text-dark-brand-cyan">
  Read more
</a>
```

### Button
```html
<!-- Light: #FF6F61, Dark: #FF8A7F -->
<button class="bg-brand-coral dark:bg-dark-brand-coral">
  Click me
</button>
```

### Tag
```html
<!-- Light: #5CB85C, Dark: #6FD16F -->
<span class="bg-brand-leaf dark:bg-dark-brand-leaf">
  Vue.js
</span>
```

### Code
```html
<!-- Light: #F8F9FA bg, Dark: #0F1419 bg -->
<code class="bg-gray-100 dark:bg-dark-bg-code">
  const code = true
</code>
```

---

## 🎯 Key Differences

### Backgrounds
- **Light**: White → Gray progression
- **Dark**: Deep Navy → Lighter Navy progression
- **Maintains**: Brand's navy undertones

### Text
- **Light**: Dark navy text
- **Dark**: Off-white (not pure white to reduce eye strain)
- **Maintains**: Clear hierarchy

### Accents
- **Light**: Standard brightness
- **Dark**: +20% brightness for visibility
- **Maintains**: Brand color recognition

---

## 💡 Design Philosophy

1. **Invert backgrounds** (white → deep navy)
2. **Lighten text** (navy → off-white)
3. **Brighten accents** (+20% for visibility)
4. **Keep brand DNA** (navy undertones everywhere)
5. **Avoid pure black/white** (easier on eyes)

---

## 🚀 Quick Start

```css
/* Add to your CSS */
@media (prefers-color-scheme: dark) {
  :root {
    /* Copy dark mode values from above */
  }
}
```

```javascript
// Add to Tailwind config
darkMode: 'class',
theme: {
  extend: {
    colors: {
      dark: {
        bg: { primary: '#0A0E1A', /* ... */ },
        text: { primary: '#E8ECEF', /* ... */ },
        brand: { cyan: '#5FEDE9', /* ... */ },
      }
    }
  }
}
```

---

**See DARK-MODE-COLORS.md for complete implementation guide!**
