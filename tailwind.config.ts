import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "rotating 20s linear infinite",
      },
      screens: {
        // Desktop-first breakpoints
        xls: { max: "1280px" }, // Default for large screens
        lgs: { max: "1300px" },
        mds: { max: "900px" },
        sms: { max: "780px" }, // Mobile screens (override)
        sms2: { max: "670px" }, // Mobile screens (override)
        xss: { max: "480px" }, // Extra small screens (override)
      },
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
        redish: "#331C2C",
      },
    },
  },
  plugins: [],
} satisfies Config;
