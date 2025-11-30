/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#122033",
          leaf: "#5CB85C",
          cyan: "#4BE3DF",
          silver: "#E6E9EC",
          coral: "#FF6F61",
        },
        dark: {
          bg: {
            primary: "#0A0E1A",
            secondary: "#121829",
            tertiary: "#1A2235",
            code: "#0F1419",
          },
          text: {
            primary: "#E8ECEF",
            secondary: "#B8BFC7",
            muted: "#8A919B",
          },
          brand: {
            cyan: "#5FEDE9",
            leaf: "#6FD16F",
            coral: "#FF8A7F",
            silver: "#2D3748",
          },
        },
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Fira Code', 'Monaco', 'Courier New', 'monospace'],
        sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'blog-xs': '0.75rem',
        'blog-sm': '0.875rem',
        'blog-base': '1.125rem',
        'blog-lg': '1.25rem',
        'blog-xl': '1.5rem',
        'blog-2xl': '2rem',
        'blog-3xl': '2.5rem',
        'blog-4xl': '3rem',
      },
      lineHeight: {
        'blog-tight': '1.25',
        'blog-normal': '1.7',
        'blog-relaxed': '1.8',
      },
      spacing: {
        'blog-xs': '0.5rem',
        'blog-sm': '1rem',
        'blog-md': '1.5rem',
        'blog-lg': '2.5rem',
        'blog-xl': '4rem',
        'blog-2xl': '6rem',
      },
      maxWidth: {
        'blog-content': '720px',
        'blog-wide': '1200px',
        'blog-header': '1088px', // 85% of screen-xl (1280px)
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

