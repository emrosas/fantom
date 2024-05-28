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
        "g-tertiary": "#001CEA",
        "g-quaternary": "#3951FF",
        "brand-1": "#0013A3",
        alt: "#475DFF",
        "brand-2": "#4B1AFF",
        light: "#FCFCFC",
        dark: "#060623",
        "dark-2": "#030311",
        "alt-2": "#C3B2FF",
      },
      spacing: {
        page: "var(--page-main)",
      },
    },
  },
  plugins: [],
};
