/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
        montserat: ["Montserrat", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  purge: ["./**/*.{html,js}", "./src/**/*.{html,js}"], // Add the purge option
  plugins: [],
};

// npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
