import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: {
          1: "#999D9E",
        },
        blackish: {
          1: "#1c1d20",
        },
        bluish: "#455CE9",
        cream: "#E1DFDD",
        beig: "#F5F5DC",
        graish: "#333333",
      },
    },
  },
  plugins: [],
} satisfies Config;
