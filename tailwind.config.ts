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
        "cOne": "var(--cOne)",
        "cTwo": "var(--cTwo)",
        "cThree": "var(--cThree)",
        "cFour": "var(--cFour)",
        "cFive": "var(--cFive)",
        "cSix": "var(--cSix)",
        "cSeven": "var(--cSeven)",
      },
      fontFamily: {
        Libre: ["Libre Baskerville", "sans-serif"],
        Nunito: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
