/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        "18" : "75px",
        "128": "512px",
        "86": "362px",
        "15": "60px",
        "76": "300px"
      },
      height: {
        "13": "50px"
      },
      colors: {
        "gray-150": "#F4F4F4",
        "gray-250": "#CDCCCA",
        "yellow-350": "#F8BD1C",
        "blue-350": "#4339F2",
        "red-350": "#FF3838",
        "voilet-350": "#891BE8",
        "green-350": "#1AD698",
        "sky-350": "#0AAAF4",
      },
      fontSize: {
        "1xl": "26px"
      }
    },
  },
  plugins: [],
}

