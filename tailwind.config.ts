import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      inter: ['Montserrat', 'sans-serif'],
    },
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      xxs:"360px",
      sm: "575px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }
      "3xl": "1600px",
      // => @media (min-width: 1400px) { ... }
      "4xl": "1700px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#181C31",
        primary: "#7083F5",
        secondary: "",
        stroke: "#EBEFF4",
        dark: "#1F233A",
        body: "#79808A",
        "stroke-dark": "#34374A",
      },
      backgroundImage: {
        "gradient-1":
          "linear-gradient(55.15deg, #8EA5FE -7.09%, #BEB3FD 51.72%, #90D1FF 101.48%)",
        "gradient-2": "linear-gradient(120.12deg, #FF8FE8 0%, #FFC960 100%)",
        "gradient-3":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.8) 100%)",
        texture: "url('/images/graphics/texture.svg')",
      },
      screens: {
        xs: "450px",
        "3xl": "1500px",
      },
      boxShadow: {
        card: "0px 1px 5px rgba(45, 74, 170, 0.14)",
        "card-dark": "0px 1px 5px rgba(16, 25, 55, 0.14)",
        input: "0px 10px 30px rgba(74, 108, 247, 0.08)",
      },
      dropShadow: {
        card: "0px 1px 5px rgba(45, 74, 170, 0.14)",
        "card-dark": "0px 1px 5px rgba(16, 25, 55, 0.14)",
      },
    },
  },
  plugins: [],
};
export default config;
