import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-outfit)", "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#3b82f6", // blue-500
          dark: "#1d4ed8", // blue-700
          accent: "#8b5cf6", // violet-500
        },
        dark: {
          bg: "#020617", // slate-950
          card: "#0f172a", // slate-900
          border: "#1e293b", // slate-800
        }
      }
    },
  },
  plugins: [],
};
export default config;
