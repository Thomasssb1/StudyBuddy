/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/popup/popup.html"],
  theme: {
    extend: {
      colors: {
        primary: "#1E1B1B",
        secondary: "#282727",
        tertiary: "#3B3A3A",
        hero: "#539F54",
      },
      stroke: {
        "hero-dark": "#213629",
      },
      strokeWidth: {
        0.5: 0.5,
      },
      textColor: {
        primary: "#C3C3C3",
      },
      backgroundImage: {
        "hero-pattern": "url('../img/gridgradient.png')",
      },
      spacing: {
        300: "300px",
        500: "500px",
        "10/12": "83.333333%",
      },
      opacity: {
        1: "0.01",
      },
      gridTemplateRows: {
        "8/1": "minmax(0, 8fr) minmax(0, 1fr)",
      },
      width: {
        15: "0.9375rem",
        20: "1.25rem",
      },
    },
  },
  plugins: [],
};
