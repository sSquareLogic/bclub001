/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        GOLD: "rgba(254, 191, 51, 1)",
        TEXT: "#131313",
      },
      backgroundImage: {
        GRADIENT: "linear-gradient(to right,#FEBF33 100%, #FFE8C6 100%)",
        BUTTON_GRADIENT: "linear-gradient(129deg, #FFE8C6 0%, #FFD577 100%)",
      },
    },
  },
  plugins: [],
};
