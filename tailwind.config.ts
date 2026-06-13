import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Bleus clairs — fonds */
        sky: {
          50: "#f4faff",
          100: "#e6f2fc",
          200: "#cce6f8",
          300: "#a3d2f1",
          400: "#6bb4e6",
          500: "#3a93d8",
          600: "#2576b6",
        },
        /* Bleus profonds — textes & titres sur fond clair */
        ocean: {
          950: "#0b1e33",
          900: "#13233a",
          800: "#1e3a5c",
          700: "#2b5380",
          600: "#3a6ba0",
          500: "#5183b8",
        },
        /* Jaune conservé */
        gold: {
          DEFAULT: "#f0c45e",
          light: "#f8dd96",
          dark: "#c79324",
        },
        lagoon: {
          DEFAULT: "#3a93d8",
          light: "#6bb4e6",
          dark: "#2576b6",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        glow: "0 10px 40px rgba(58, 147, 216, 0.18)",
        "glow-gold": "0 10px 40px rgba(240, 196, 94, 0.28)",
      },
    },
  },
  plugins: [],
};

export default config;
