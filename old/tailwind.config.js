/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        pinkd: "#F85559",
      },
    },
  },
  plugins: [],
  daisyui: {
    themes: ["light", "dark"],
  },
};
