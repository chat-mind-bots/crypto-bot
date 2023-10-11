import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      blue: "#41A4DF",
      bgBlue: "#8EC5FC",
      deepBlue: "#297EE2",
      darkBlue: "#232328",
      bgLightBlue: "#C2E9FB",
      bgLightDarkBlue: "#A1C4FD",
      gray: {
        100: "#A3A7AE",
        700: "#374151",
        800: "#010417",
        900: "#2B333F",
      },
      dark: "#0D0D12",
      bgLight: "#F7F9FB",
      bgDark: "#18181D",
      rose: "#FCB69F",
      pink: "#FFECD2",
      purple: "#E0C3FC",
    },
    extend: {
      gridTemplateAreas: {
        description: [
          "currency currency currency currency currency currency currency currency currency currency currency currency",
          "click click click click click stat stat stat stat stat stat stat",
          "exchange exchange exchange exchange exchange stat stat stat stat stat stat stat",
          "send send send send send send send payment payment payment payment payment",
        ],
        descriptionMobile: [
          "currency",
          "click",
          "exchange",
          "stat",
          "send",
          "payment",
        ],
      },
      gridTemplateColumns: {
        description: "repeat(12, 1fr);",
        descriptionMobile: "1fr",
      },
      gridTemplateRows: {
        description: "345px 366px 366px 510px",
        descriptionMobile: "repeat(5, auto)",
      },
      gradientColorStops: {
        "violet-gradient": {
          "0%": "#8EC5FC",
          "100%": "#E0C3FC",
        },
      },
      gradientColorStopPositions: {},
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
export default config;
