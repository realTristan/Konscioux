import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fec21f", // #fec21f // e4d9ad
        secondary: "#f6f0d9",
        tertiary: "#fffcf1",
      },
    },
  },
  plugins: [],
};
export default config;
