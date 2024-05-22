/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          // l: "rgb(var(--color-primary) / <alpha-value>)",
          l: colors.emerald[400],
          d: colors.rose[900],
        },
        // accent: {
        //   1: "hsl(var(--color-accent-1) / <alpha-value>)",
        //   2: "hsl(var(--color-accent-2) / <alpha-value>)",
        // },
        // bkg: "hsl(var(--color-bkg) / <alpha-value>)",
        // content: "hsl(var(--color-content) / <alpha-value>)",
      },
      backgroundImage: "var(--bkg-gradient)",
      animation: {
        "spin-faster": "spin 0.5s ease infinite",
        "spin-fast": "spin 0.75s ease infinite",
        "spin-slower": "spin 35s ease infinite",
        "spin-slow": "spin 25s ease-in-out infinite reverse",
      },
    },
  },
  plugins: [],
};
