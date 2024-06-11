/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EEEEEE", //f0f2f5
        secondary: "#DC2626",
        tertiary: "#222222",
        secondaryRed: "#f42c37",
        secondaryYellow: "#fdc62e",
        secondaryGreen: "#2dcc6f",
        secondaryBlue: "#1376f4",
        secondaryWhite: "#eeeeee",
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          50: "#585858",
          90: "#141414",
        },
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      backgroundImage: {
        hero: "url(https://res.cloudinary.com/dpx184ojl/image/upload/v1717514160/app/tpdysno8rdfwkabnhoue.jpg)",
        pattern: "url(/src/assets/pattern.png)",
        banneroffer:
          "url(https://res.cloudinary.com/dpx184ojl/image/upload/v1717593714/banneroffer_gcl98c.png)",
      },
    },
  },
  plugins: [],
};
