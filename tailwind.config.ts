import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Bold Dynamic Palette
        black: "#000000",
        offwhite: "#FFFFFC",
        beige: "#BEB7A4",
        orange: "#FF7F11",
        red: "#FF3F00",
      },
    },
  },
  plugins: [],
};

export default config;
