/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        float: "0px 0px 47px -35px rgba(0,0,0,0.75)",
      },
    },
  },
  plugins: [],
};
