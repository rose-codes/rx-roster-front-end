/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Montserrat"],
        display: ['"Tenor Sans"'],
      },
    },
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
