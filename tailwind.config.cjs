/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@nerajno/dialects/tailwind-preset")],
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
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")]
};

