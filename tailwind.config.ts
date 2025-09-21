// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"], // ✅ This tells Tailwind to use your CSS variable
      },
      // ... your other theme extends (colors, borderRadius, etc.)
    },
  },
  plugins: [],
};

export default config;