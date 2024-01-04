/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        pertama: "#07575B",
        kedua: "#66A5AD",
        tertiary: "#003B46",
        light: "#c4DFE6",
        dark: "#18191A",
      },
      fontFamily: {
        fontPrimary: "'IBM Plex Mono', monospace;",
        fontSecondary: "'Poppins', sans-serif;",
        fontTeritary: "'Poppins', sans-serif;",
      },
    },
  },
  plugins: [],
};
