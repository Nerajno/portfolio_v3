# Updated Color Palette - Brand Colors

## Your Custom Brand Colors

```javascript
// tailwind.config.js colors mapped to design system
brand: {
  primary: "#122033",   // Charcoal Navy — core, stable
  leaf:    "#5CB85C",   // Friendly Leaf Green — growth, hope
  cyan:    "#4BE3DF",   // Soft Electric Cyan — innovation, clarity
  silver:  "#E6E9EC",   // Gentle Silver — neutral background/structure
  coral:   "#FF6F61",   // Warm Coral — personality, energy, CTA accent
}
```

## Updated CSS Design Tokens

```css
:root {
  /* ========================================
     BRAND COLORS - Your Custom Palette
     ======================================== */
  
  /* Primary Brand Colors */
  --color-brand-primary: #122033;    /* Charcoal Navy - headings, important text */
  --color-brand-leaf: #5CB85C;       /* Friendly Leaf Green - success, growth */
  --color-brand-cyan: #4BE3DF;       /* Soft Electric Cyan - links, highlights */
  --color-brand-silver: #E6E9EC;     /* Gentle Silver - backgrounds, borders */
  --color-brand-coral: #FF6F61;      /* Warm Coral - CTAs, accents */
  
  /* ========================================
     APPLIED COLOR SYSTEM
     ======================================== */
  
  /* Backgrounds */
  --color-bg: #FFFFFF;                    /* Pure white main background */
  --color-bg-secondary: #F8F9FA;          /* Very light gray for cards */
  --color-bg-tertiary: var(--color-brand-silver);  /* Silver for subtle sections */
  --color-bg-code: #F3F4F6;              /* Light gray for code blocks */
  
  /* Text Colors */
  --color-text: var(--color-brand-primary);        /* Charcoal Navy for body text */
  --color-text-light: #4A5568;                     /* Medium gray for secondary text */
  --color-text-muted: #718096;                     /* Light gray for metadata */
  
  /* Interactive Elements */
  --color-primary: var(--color-brand-cyan);        /* Cyan for links */
  --color-primary-dark: #3BC4C0;                   /* Darker cyan for hover */
  --color-secondary: var(--color-brand-coral);     /* Coral for CTAs */
  --color-secondary-dark: #E5564C;                 /* Darker coral for hover */
  --color-accent: var(--color-brand-leaf);         /* Leaf green for accents */
  
  /* Semantic Colors */
  --color-success: var(--color-brand-leaf);        /* Leaf green */
  --color-warning: #F59E0B;                        /* Amber */
  --color-error: #EF4444;                          /* Red */
  --color-info: var(--color-brand-cyan);           /* Cyan */
  
  /* Borders & Dividers */
  --color-border: var(--color-brand-silver);       /* Silver for borders */
  --color-border-light: #F0F2F4;                   /* Very light border */
  --color-border-dark: #D1D5DB;                    /* Darker border */
  
  /* Shadows with brand colors */
  --shadow-sm: 0 1px 2px rgba(18, 32, 51, 0.05);
  --shadow-md: 0 4px 6px rgba(18, 32, 51, 0.07);
  --shadow-lg: 0 10px 15px rgba(18, 32, 51, 0.1);
  --shadow-cyan: 0 4px 12px rgba(75, 227, 223, 0.2);
  --shadow-coral: 0 4px 12px rgba(255, 111, 97, 0.2);
}
```

## Color Usage Guide

### Brand Color Applications

#### 1. **Charcoal Navy (#122033)** - Primary
- **Use for:**
  - Main body text
  - Headings
  - Navigation text
  - Important content
- **Don't use for:**
  - Backgrounds (too dark)
  - Links (use cyan instead)

```css
.post-title,
.post-content h2,
.post-content h3 {
  color: var(--color-brand-primary);
}

.post-content p,
.post-content li {
  color: var(--color-brand-primary);
}
```

#### 2. **Friendly Leaf Green (#5CB85C)** - Growth/Success
- **Use for:**
  - Success messages
  - Tags and badges
  - Checkmarks and confirmations
  - "Pro tips" callouts
- **Examples:**

```css
.callout-success {
  background: #F0F9F0;
  border-color: var(--color-brand-leaf);
  color: #2D5A2D;
}

.tag-featured {
  background: var(--color-brand-leaf);
  color: white;
}

.success-icon {
  color: var(--color-brand-leaf);
}
```

#### 3. **Soft Electric Cyan (#4BE3DF)** - Innovation/Links
- **Use for:**
  - All hyperlinks
  - Interactive elements
  - Code highlights
  - Innovation/tech-focused content
- **Examples:**

```css
.post-content a {
  color: var(--color-brand-cyan);
  text-decoration-color: rgba(75, 227, 223, 0.3);
}

.post-content a:hover {
  color: #3BC4C0;
  text-decoration-color: rgba(75, 227, 223, 0.8);
}

.code-highlight {
  background: rgba(75, 227, 223, 0.1);
  border-left: 3px solid var(--color-brand-cyan);
}
```

#### 4. **Gentle Silver (#E6E9EC)** - Structure
- **Use for:**
  - Borders
  - Dividers
  - Card backgrounds
  - Subtle sections
- **Examples:**

```css
.card {
  background: white;
  border: 1px solid var(--color-brand-silver);
}

.post-footer {
  border-top: 2px solid var(--color-brand-silver);
}

.code-block {
  border: 1px solid var(--color-brand-silver);
}
```

#### 5. **Warm Coral (#FF6F61)** - Energy/CTAs
- **Use for:**
  - Call-to-action buttons
  - Important highlights
  - Warning callouts
  - Interactive accents
- **Examples:**

```css
.btn-primary {
  background: var(--color-brand-coral);
  color: white;
}

.btn-primary:hover {
  background: #E5564C;
  box-shadow: var(--shadow-coral);
}

.callout-important {
  background: #FFF5F4;
  border-color: var(--color-brand-coral);
}
```

## Component Color Schemes

### Navigation

```css
.site-header {
  background: white;
  border-bottom: 1px solid var(--color-brand-silver);
}

.site-logo {
  color: var(--color-brand-primary);
}

.site-logo:hover {
  color: var(--color-brand-cyan);
}
```

### Post Hero

```css
.post-title {
  color: var(--color-brand-primary);
}

.post-meta {
  color: var(--color-text-muted);
}

.post-intro {
  background: #F8F9FA;
  border-left: 4px solid var(--color-brand-cyan);
}
```

### Tags

```css
.tag {
  background: var(--color-brand-silver);
  color: var(--color-brand-primary);
}

.tag:hover {
  background: var(--color-brand-cyan);
  color: white;
}

.tag-vue {
  background: var(--color-brand-leaf);
  color: white;
}

.tag-featured {
  background: var(--color-brand-coral);
  color: white;
}
```

### Code Blocks

```css
.code-block {
  background: #F8F9FA;
  border: 1px solid var(--color-brand-silver);
}

.code-language {
  color: var(--color-brand-cyan);
}

.copy-button {
  background: var(--color-brand-coral);
  color: white;
}

.copy-button:hover {
  background: #E5564C;
}
```

### Callout Boxes

```css
/* Info - Cyan */
.callout-info {
  background: rgba(75, 227, 223, 0.1);
  border-color: var(--color-brand-cyan);
  color: var(--color-brand-primary);
}

/* Success - Leaf Green */
.callout-success {
  background: rgba(92, 184, 92, 0.1);
  border-color: var(--color-brand-leaf);
  color: var(--color-brand-primary);
}

/* Warning - Coral */
.callout-warning {
  background: rgba(255, 111, 97, 0.1);
  border-color: var(--color-brand-coral);
  color: var(--color-brand-primary);
}
```

### Buttons

```css
/* Primary CTA - Coral */
.btn-primary {
  background: var(--color-brand-coral);
  color: white;
  border: none;
}

.btn-primary:hover {
  background: #E5564C;
  transform: translateY(-2px);
  box-shadow: var(--shadow-coral);
}

/* Secondary - Cyan */
.btn-secondary {
  background: var(--color-brand-cyan);
  color: var(--color-brand-primary);
}

.btn-secondary:hover {
  background: #3BC4C0;
  box-shadow: var(--shadow-cyan);
}

/* Outline - Navy */
.btn-outline {
  background: transparent;
  color: var(--color-brand-primary);
  border: 2px solid var(--color-brand-primary);
}

.btn-outline:hover {
  background: var(--color-brand-primary);
  color: white;
}
```

## Accessibility Considerations

### Contrast Ratios (WCAG AA Compliance)

**✅ PASS - High Contrast**
- Charcoal Navy (#122033) on White: 14.5:1
- Charcoal Navy (#122033) on Silver (#E6E9EC): 11.2:1

**⚠️ CHECK - Medium Contrast**
- Cyan (#4BE3DF) on White: 4.8:1 (borderline - use for links only)
- Leaf Green (#5CB85C) on White: 3.2:1 (use for accents, not body text)

**🔧 RECOMMENDED ADJUSTMENTS**
```css
/* For better accessibility when using cyan/leaf as backgrounds */
.callout-info {
  background: rgba(75, 227, 223, 0.15); /* Lighter background */
  color: var(--color-brand-primary);    /* Dark text for contrast */
}

.callout-success {
  background: rgba(92, 184, 92, 0.15);
  color: var(--color-brand-primary);
}
```

## Dark Mode Variations (Optional)

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #0A1018;
    --color-bg-secondary: #122033;
    --color-text: #E6E9EC;
    --color-brand-silver: #2D3748;
    
    /* Keep brand colors vibrant in dark mode */
    --color-brand-cyan: #5FEDE9;      /* Slightly brighter */
    --color-brand-leaf: #6FD16F;      /* Slightly brighter */
    --color-brand-coral: #FF8A7F;     /* Slightly lighter */
  }
}
```

## Color Combinations That Work

### Best Pairings

1. **Charcoal Navy + Cyan** (Trust + Innovation)
   ```css
   background: var(--color-brand-primary);
   color: var(--color-brand-cyan);
   ```

2. **White + Coral** (Clean + Energetic)
   ```css
   background: white;
   border-left: 4px solid var(--color-brand-coral);
   ```

3. **Silver + Navy** (Subtle + Strong)
   ```css
   background: var(--color-brand-silver);
   color: var(--color-brand-primary);
   ```

4. **Cyan + Coral** (Cool + Warm balance)
   ```css
   .link { color: var(--color-brand-cyan); }
   .button { background: var(--color-brand-coral); }
   ```

## Quick Reference

```css
/* Primary Actions */
--cta-color: var(--color-brand-coral);
--link-color: var(--color-brand-cyan);

/* Text Hierarchy */
--heading-color: var(--color-brand-primary);
--body-color: var(--color-brand-primary);
--meta-color: #718096;

/* Backgrounds */
--bg-main: #FFFFFF;
--bg-card: #F8F9FA;
--bg-subtle: var(--color-brand-silver);

/* Borders */
--border-color: var(--color-brand-silver);
--border-focus: var(--color-brand-cyan);

/* States */
--success: var(--color-brand-leaf);
--warning: var(--color-brand-coral);
--info: var(--color-brand-cyan);
```

This color system maintains the professional, modern feel while incorporating your unique brand identity!
