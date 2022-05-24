module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    backgroundImage: {
      "assessment-bg": "url('../assets/assessment-background.png')",
    },

    extend: {
      colors: {
        primaryText: "#FA4616",
        secondaryText: "#232323",
        primaryBG: "#00B9D70A",
        secondaryBG: "#EC0000",
        highlight: "#FFF9EF",
        darkHighlight: "#FFB432",
      },
    },

  },
  plugins: [],
};
