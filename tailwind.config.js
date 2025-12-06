/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#F5F5F8",
        primary: "#FF0000",
        secondary: "#00FF00",
        tertiary: "#0000FF",
      },
    },
  },
  plugins: [],
};
