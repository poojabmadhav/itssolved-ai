import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: "#00C49A",
        "dark-teal": "#156064",
        yellow: "#F8E16C",
        offwhite: "#FFFFFC",
        black: "#000000",
      },
    },
  },
  plugins: [],
};

export default config;
