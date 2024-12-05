import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "iransans-md": ["iransans-md"],
        "iransans-light": ["iransans-light"],
        "iransans-bold": ["iransans-bold"],
        "iransans-black": ["iransans-black"],
        "iransans-ULight": ["iransans-ULight"],
        "iransans-light-en": ["iransans-light-en"],
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
