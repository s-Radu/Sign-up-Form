/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  purge: ["./**/*.{html,js}", "./src/**/*.{html,js}"], // Add the purge option
  plugins: [],
};

// npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
