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
