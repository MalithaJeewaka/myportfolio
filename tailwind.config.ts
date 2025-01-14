import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // Desktop-first breakpoints
        "2xls": { max: "1535px" }, // For screens smaller than 1536px
        xls: { max: "1279px" }, // For screens smaller than 1280px
        lgs: { max: "1023px" }, // For screens smaller than 1024px
        mds: { max: "767px" }, // For screens smaller than 768px
        sms: { max: "639px" }, // For screens smaller than 640px
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
