/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      body: ["Neue-Regrade-Variable", "sans-serif"],
      display: ["itc-avant-garde-gothic-pro", "sans-serif"],
    },
    extend: {
      colors: {
        "g-primary": "#000E7A",
        "g-secondary": "#000529",
        "brand": "#0013A3",
        "light": "#FCFCFC",
        "dark": "#060623",
      },
      spacing: {
        page: "var(--page-main)",
      },
    },
  },
  plugins: [],
};
