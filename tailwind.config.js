/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#191d91",
        actionBtn : "#4f46e5"
      },
      fontWeight: {
        pudar: "50",
      },
      spacing: {
        84: "340px",
      },
      height: {
        98: "500px",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Roboto: ["Roboto Condensed", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
