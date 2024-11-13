import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        'custom-small': '0px 2px 5px rgba(0, 0, 0, 0.1)', // custom shadow with specific values
        'custom-large': '0px 8px 15px rgba(0, 0, 0, 0.2)',  // larger custom shadow
      },
    },
  },
  plugins: [],
} satisfies Config;
