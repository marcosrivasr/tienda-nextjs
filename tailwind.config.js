const { trace } = require("console");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "nav-shadow": "0 0 20px rgba(0, 0, 0, 0.10)",
      },
      backgroundImage: {
        "banner-1":
          "url('https://i.postimg.cc/R00TTtKK/resumen-desenfoque-bokeh-defocused-centro-comercial-interior-grandes-almacenes.jpg')",

        "banner-2":
          "url('https://i.postimg.cc/t4k5PkZ9/resumen-desenfoque-defocused-cent: ro-comercial.jpg')",

        "banner-3":
          "url('https://i.postimg.cc/SxkdJ3KZ/resumen-desenfoque-defocused-centro-comercial-centro-comercial-grandes-almacenes.jpg')",
      },
      colors: {
        "primary-1": "#ff576d",
        "primary-2": "#4365ae",
        secondary: "#ffd339",
        negative: "#cc0000",
      },
    },
  },
  plugins: [],
};
