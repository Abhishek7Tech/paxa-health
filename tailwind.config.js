/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        "7.5": "30px",
        "18" : "75px",
        "128": "512px",
        "86": "362px",
        "15": "60px",
        "76": "300px",
        "81": "322px"
      },
      maxWidth: {
        "86": "362px",
        "128": "512px",
      },
      height: {
        "7.5": "30px",
        "13": "50px",
        "42": "170px"
      },
      maxHeight: {
        "13": "50px",      
      },
      colors: {
        "gray-150": "#F4F4F4",
        "gray-250": "#CDCCCA",
        "gray-450": "#6b7280",
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

