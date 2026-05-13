import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neutral Brown Palette
        primary: "#B9A89B",
        secondary: "#221F1E",
        bg: "#B9A89B",
        ivory: "#EFEBE4",
        taupe: "#6C6661",
        cream: "#F6F5F2",
        charcoal: "#221F1E",
        // Content colors
        "content-primary": "#221F1E",
        "content-secondary": "#6C6661",
        "content-tertiary": "#B9A89B",
        "content-link": "#221F1E",
        // Sentiment
        negative: "#A8200D",
        positive: "#2F5711",
        warning: "#EDC843",
      },
    },
  },
  plugins: [],
};

export default config;
