import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ocean: {
          950: "#0b1e33",
          900: "#122a47",
          800: "#1a395e",
          700: "#244b78",
        },
        gold: {
          DEFAULT: "#f0c45e",
          light: "#f8dd96",
          dark: "#d4a345",
        },
        lagoon: {
          DEFAULT: "#4be0d3",
          light: "#93eee5",
          dark: "#27b5a9",
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
        glow: "0 0 40px rgba(53, 212, 199, 0.15)",
        "glow-gold": "0 0 40px rgba(233, 185, 77, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
