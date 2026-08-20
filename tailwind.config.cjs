/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./pages/**/*.{html,js}'",
    "./components/**/*.{html,js}"
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
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Custom color palette
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        // Background colors
        bg: {
          primary: {
            light: '#ffffff',
            dark: '#0f172a'
          },
          secondary: {
            light: '#f8fafc',
            dark: '#1e293b'
          },
          card: {
            light: '#ffffff',
            dark: '#334155'
          }
        },
        // Text colors
        text: {
          primary: {
            light: '#0f172a',
            dark: '#f1f5f9'
          },
          secondary: {
            light: '#475569',
            dark: '#cbd5e1'
          },
          muted: {
            light: '#64748b',
            dark: '#94a3b8'
          }
        },
        // Border colors
        border: {
          primary: {
            light: '#e2e8f0',
            dark: '#475569'
          },
          secondary: {
            light: '#f1f5f9',
            dark: '#334155'
          }
        }
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};

