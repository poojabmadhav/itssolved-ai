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
        primary: "#B9A89B",           // Warm Greige (background)
        secondary: "#221F1E",         // Near Black (text)
        "cream-white": "#F6F5F2",     // Color 1
        "soft-ivory": "#EFEBE4",      // Color 2
        "warm-greige": "#B9A89B",     // Color 3
        "taupe-charcoal": "#6C6661",  // Color 4
        "near-black": "#221F1E",      // Color 5
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
