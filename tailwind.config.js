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
        primary: "#002D74",
      },
      fontWeight: {
        pudar: "50",
      },
      spacing: {
        84: "340px",
      },
      height: {
        98: "430px",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
