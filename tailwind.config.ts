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
      "2xl": "calc(3.375rem + (9.625rem - 3.375rem) * 0.25)", // 25% between "xl" and "5xl"
      "3xl": "calc(3.375rem + (9.625rem - 3.375rem) * 0.5)", // 50% between "xl" and "5xl"
      "4xl": "calc(3.375rem + (9.625rem - 3.375rem) * 0.75)", // 75% between "xl" and "5xl"
      "5xl": "9.625rem", // "154": "9.625rem",
      "12xl": "10.3125rem", // "165": "10.3125rem",
    },
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      "grey-22": "#222222",
      "light-grey": "#BBBBBB",
      "dark-grey": "#0D0D0D",
      grey: "#7A7A7A",
      violet: "#5D2CA8",
    },
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(closest-side,#000 67%,#9560EB)",
        "gradient-radial-sm": "radial-gradient(closest-side,#000 87%,#9560EB)",
      },
      spacing: {
        "navigation-height": "var(--navigation-height)",
        "banner-height": "var(--banner-height)",
        "custom-height": "",
      },
    },
  },
  plugins: [],
};
export default config;
