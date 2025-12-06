/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Black
        black500: "#8C929B",
        black600: "#6F7383",
        black800: "#272A37",
        // Orange
        orange800: "#FD4100",
        // Gray
        gray100: "#E9E9F0",
        gray200: "#E2E5EB",
        gray300: "#C2C9D8",
        gray400: "#F5F5F8",
      },
    },
  },
  plugins: [],
};
