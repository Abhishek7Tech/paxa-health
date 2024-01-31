/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        "18" : "75px",
        "128": "512px"
      },
      colors: {
        "gray-150": "#F4F4F4"
      }
    },
  },
  plugins: [],
}

