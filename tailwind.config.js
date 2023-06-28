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
        GRADIENT: "linear-gradient(to right, #FEBF33 0%, #FFE8C6 30%)",
        BUTTON_GRADIENT: "linear-gradient(129deg, #FFE8C6 0%, #FFD577 100%)",
        HERO_TOP:
          "radial-gradient(67.50% 165.33% at 50.00% -65.33%, #FEBF33 0%, rgba(0, 0, 0, 0.00) 80.73%);",
        SKILLS: "url(/assets/images/skills-bg.jpg)",
      },
      width: {
        LOGO: "200px",
      },
      height: {
        LOGO: "200px",
      },
      gridTemplateColumns: {
        TWO: "repeat(2, 1fr)",
        THREE: "repeat(3, 1fr)",
      },
      fontSize: {
        TITLE_SM: "36px",
        TITLE: "40px",
        TITLE_LG: "64px",
        TEXT_LG: "32px",
        TEXT: "20px",
        TEXT_SM: "16px",
      },
    },
  },
  plugins: [],
};
