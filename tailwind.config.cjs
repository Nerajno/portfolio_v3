/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],

  safelist: [
    "text-[#61DAFB]",   // React
    "text-[#4FC08D]",   // Vue
    "text-[#F7DF1E]",   // JavaScript
    "text-[#CC342D]",   // Ruby
    "text-[#D30001]",   // Rails
    "text-[#000000]",   // Vercel
    "text-[#BC52EE]",   // Astro
    "text-[#3776AB]",   // Python
    "text-[#3178C6]",   // TypeScript
    "text-[#47A248]",   // MongoDB
    "text-[#172B4D]",   // Confluence
    "text-[#00C7B7]",   // Netlify
    "text-[#F05032]",   // Git
    "text-[#339933]",   // Node.js
    "text-[#273347]",   // Asana
    "text-[#F24E1E]",   // Figma
  ],

  darkMode: "class",

  theme: {
    extend: {
      fontFamily: {
        // font-sans  → body copy, UI labels
        sans:    ["Plus Jakarta Sans Variable", "Plus Jakarta Sans", "Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
        // font-serif → headings, display text, pull quotes
        serif:   ["Fraunces Variable", "Fraunces", ...defaultTheme.fontFamily.serif],
        // font-mono  → code blocks, inline code
        mono:    ["JetBrains Mono", "Fira Code", ...defaultTheme.fontFamily.mono],
      },

      colors: {
        // ─────────────────────────────────────────────────────────────────
        // PRIMARY — Emerald
        // Signals: growth, progress, forward motion, grounded confidence
        // Usage: CTAs, links, active states, focus rings, code chips
        // ─────────────────────────────────────────────────────────────────
        primary: {
          50:  "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",  // ← brand color
          600: "#059669",  // ← CTAs, links
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
          950: "#022c22",
        },

        // ─────────────────────────────────────────────────────────────────
        // ACCENT — Amber / Gold
        // Signals: energy, warmth, community, celebration
        // Usage: badges, callouts, highlights, hover glows
        // ─────────────────────────────────────────────────────────────────
        accent: {
          50:  "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03",
        },

        // ─────────────────────────────────────────────────────────────────
        // NEUTRAL — Warm Stone (not cold gray)
        // ─────────────────────────────────────────────────────────────────
        stone: {
          50:  "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
          950: "#0c0a09",
        },

        // ─────────────────────────────────────────────────────────────────
        // STRATEGY: All theming (bg, text, border) is handled via CSS custom
        // properties in global.css. Do NOT add {light, dark} nested objects
        // here — they generate unused classes like bg-bg-card-light and make
        // dark mode harder to maintain. Use var(--token) in components.
        // ─────────────────────────────────────────────────────────────────
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.text.primary.light"),
            a: {
              color: theme("colors.primary.600"),
              textDecoration: "underline",
              textUnderlineOffset: "3px",
              "&:hover": { color: theme("colors.primary.700") },
            },
            code: {
              color: theme("colors.text.code.light"),
              backgroundColor: theme("colors.primary.50"),
              borderRadius: "4px",
              padding: "2px 6px",
              fontWeight: "500",
            },
            "code::before": { content: '""' },
            "code::after":  { content: '""' },
          },
        },
        invert: {
          css: {
            color: theme("colors.text.primary.dark"),
            a: {
              color: theme("colors.primary.400"),
              "&:hover": { color: theme("colors.primary.300") },
            },
            code: {
              color: theme("colors.text.code.dark"),
              backgroundColor: theme("colors.primary.950"),
            },
          },
        },
      }),

      boxShadow: {
        "glow-sm":    "0 0 12px 0 rgba(16, 185, 129, 0.12)",
        "glow-md":    "0 0 24px 0 rgba(16, 185, 129, 0.18)",
        "glow-lg":    "0 0 40px 0 rgba(16, 185, 129, 0.22)",
        "card-light": "0 1px 3px 0 rgba(15, 31, 23, 0.06), 0 4px 12px 0 rgba(15, 31, 23, 0.04)",
        "card-dark":  "0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 4px 16px 0 rgba(0, 0, 0, 0.3)",
      },

      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.3s ease-out",
        "fade-in": "fade-in 0.2s ease-out",
        shimmer:   "shimmer 2s linear infinite",
      },
    }
  },

  plugins: [require("@tailwindcss/typography")],
};
