import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: "0.8125rem", // "13": "0.8125rem",
      sm: "0.875rem", // "14": "0.875rem",
      base: "1rem", // "16": "1rem",
      md: "1.125rem", // "18": "1.125rem",
      lg: "1.375rem", // "22": "1.375rem",
      xl: "3.375rem", // "54": "3.375rem",
      "5xl": "9.625rem", // "154": "9.625rem",
      "12xl": "10.3125rem", // "165": "10.3125rem",
    },
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      "border-color": "#222222",
      "footer-text": "#808080",
      "light-grey": "#BBBBBB",
      "dark-grey": "#0D0D0D",
      grey: "#7A7A7A",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        "navigation-height": "var(--navigation-height)",
      },
    },
  },
  plugins: [],
};
export default config;
