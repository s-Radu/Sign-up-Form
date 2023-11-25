/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./**/*.{html,js}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
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
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
};

//> Command to run the watch over index.html so it updates the output.css
//* npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
