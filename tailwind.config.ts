import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0f1f33",
        navy: {
          50:  "#f0f4fa",
          100: "#d9e4f2",
          200: "#b3c9e4",
          300: "#88ace7",
          400: "#5c7fbf",
          500: "#1e3a5f",
          600: "#1a3350",
          700: "#162c45",
          800: "#14263c",
          900: "#0f1f33",
        },
        teal: {
          50:  "#eafaf8",
          100: "#d5f5f1",
          200: "#aee9e4",
          300: "#87ded4",
          400: "#4fc2c0",
          500: "#1fa6a6",
          600: "#188a87",
          700: "#146f6d",
          800: "#125c5a",
          900: "#0f4a48",
        },
        cream: "#fafbfc",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 1px 3px rgba(15, 31, 51, 0.06), 0 4px 12px rgba(15, 31, 51, 0.04)",
        md:   "0 4px 6px rgba(15, 31, 51, 0.05), 0 12px 28px rgba(15, 31, 51, 0.07)",
        lg:   "0 8px 16px rgba(15, 31, 51, 0.06), 0 24px 48px rgba(15, 31, 51, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
