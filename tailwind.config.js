module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      "assessment-bg": "url('../public/images/assessment-bg.png')",
    },

    extend: {
      colors: {
        primaryText: "#FA4616",
        secondaryText: "#232323",
        primaryBG: "#EBF9FD",
        secondaryBG: "#EC0000",
        highlight: "#FFF9EF",
        darkHighlight: "#FFB432",
      },
    },
  },
  plugins: [],
};
