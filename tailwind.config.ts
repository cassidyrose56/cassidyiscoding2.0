import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: {
          700: "#F55200",
          500: "#FF9966",
          300: "#FFCFB8",
          DEFAULT: "#FF9966",
          light: "#FFCFB8",
          contrast: "#210124",
        },
        secondary: {
          700: "#8D175F",
          500: "#DE369D",
          300: "#EA7CBF",
          DEFAULT: "#DE369D",
          light: "#EA7CBF",
          contrast: "#FFF2F1",
        },
        tertiary: {
          700: "#005A61",
          500: "#00C3D1",
          300: "#4CF3FF",
          DEFAULT: "#EB130F",
          light: "#4CF3FF",
          contrast: "#210124",
        },
        quaternary: {
          500: "#750D37",
          300: "#BE155A",
          100: "#ED6199",
          DEFAULT: "#750D37",
          light: "#ED6199",
        },
        black: "#210124",
        white: "#FFF2F1",
      },
    },
  },
  plugins: [],
};
export default config;
