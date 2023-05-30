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
    },
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
