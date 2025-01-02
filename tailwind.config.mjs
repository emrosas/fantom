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
        dark: "#151516",
        "dark-2": "#14102D",
        brand: "#3131D8",
        "brand-2": "#6868DE",
        "brand-3": "#725CFF",
      },
      spacing: {
        page: "var(--page-main)",
        nav: "var(--nav-height)",
      },
    },
  },
  plugins: [fluid],
};
