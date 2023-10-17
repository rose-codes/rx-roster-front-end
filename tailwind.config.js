/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["cupcake", "dracula", "pastel"],
    prefix: "du-",
  },
  plugins: [
    require("daisyui"),
    "@tailwindcss/forms",
    "@tailwindcss/typography",
  ],
};
