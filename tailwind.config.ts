import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ocean: {
          950: "#040b14",
          900: "#081523",
          800: "#0d1f33",
          700: "#143049",
        },
        gold: {
          DEFAULT: "#e9b94d",
          light: "#f5d585",
          dark: "#c4953a",
        },
        lagoon: {
          DEFAULT: "#35d4c7",
          light: "#7ce9df",
          dark: "#1ba89d",
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
