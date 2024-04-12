/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      body: ["Neue-Regrade-Variable", "sans-serif"],
      display: ['Outfit Variable', 'sans-serif'],
    },
    extend: {
      colors: {
        "dark-1": "#060623",
        "dark-2": "#0D0E4E",
        "brand-1": "#0013A3",
        "brand-2": "#0B22D0",
        "light-1": "#B5C3D9",
        "light-2": "#EEEFF1",
      },
      spacing: {
        page: "var(--page-main)",
      },
    },
  },
  plugins: [],
};
