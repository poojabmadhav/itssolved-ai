import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Soft Modern Palette
        primary: "#F3F4F6",
        bg: "#F3F4F6",
        surface: "#FFFFFF",
        charcoal: "#111827",
        muted: "#6B7280",
        accent: "#F97316",
        cream: "#F9FAFB",
        border: "#E5E7EB",
        // Content colors
        "content-primary": "#111827",
        "content-secondary": "#6B7280",
        "content-tertiary": "#9CA3AF",
        "content-link": "#F97316",
        // Sentiment
        negative: "#EF4444",
        positive: "#10B981",
        warning: "#F59E0B",
      },
    },
  },
  plugins: [],
};

export default config;
