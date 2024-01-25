import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-brand": "hsl(var(--color-brand))",
        "color-link": "hsl(var(--color-link))",
        "color-secondary-text": "hsl(var(--color-secondary-text))",
        "color-field-darker": "hsl(var(--color-field-darker))",
        "color-signin-background": "hsl(var(--color-signin-background))",
        "color-upload-background": "hsl(var(--color-upload-background))",
        "color-logo": "hsl(var(--color-logo))",
        "color-input-background": "hsl(var(--color-input-background))",
        "color-input-active": "hsl(var(--color-input-active))",
        "color-sidebar-icon": "hsl(var(--color-sidebar-icon))",
        "color-sidebar-icon-secondary":
          "hsl(var(--color-sidebar-icon-secondary))",

        "color-light-bulma": "hsl(var(--color-light-bulma))",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        lato: ["var(--font-lato)"],
        nunito: ["var(--font-nunito)"],
        figTree: ["var(--font-figtree)"],
      },
    },
  },
  plugins: [],
};
export default config;
