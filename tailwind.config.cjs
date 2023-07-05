const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        // Added by Paul
        xs: "480px",
        // => @media (min-width: 480px) { ... }
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
