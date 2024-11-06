import fluid, { extract, screens, fontSize } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    extract,
  },
  theme: {
    fontSize,
    screens,
    fontFamily: {
      sans: ["Geist-Sans", "sans-serif"],
      mono: ["Geist-Mono", "monospace"],
    },
    extend: {
      height: {
        nav: "var(--nav-height)",
      },
      colors: {
        light: "#FCFCFC",
        dark: "#0C0C46",
        "dark-2": "#030311",
        brand: "#4343EE",
        "brand-2": "#0000FF",
      },
      spacing: {
        page: "var(--page-main)",
        nav: "var(--nav-height)",
      },
    },
  },
  plugins: [fluid],
};
