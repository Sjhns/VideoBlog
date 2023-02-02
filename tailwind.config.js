/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**",
  ],
  theme: {
    extend: {
      colors: {
        mainBg: "#040506",
        searchBar: "#100f14",
        textColor: "#b1b1b1",
        primary: "#100f14",
        collectioBg: "rgba(0,0,0,0.4)"
      },

      screens: {
        sm: "320px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
};
