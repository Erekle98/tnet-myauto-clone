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
        // Red
        red100: "#FFE3E3",
        red800: "#FF3B30",
        // Green
        green50: "#F0F9F7",
        green100: "#EEFBF1",
        green150: "#CEE8E5",
        green200: "#59D8C9",
        green300: "#26B753",
        green400: "#59D8C9",
        green800: "#1EB676",
        // Yellow
        yellow500: "#FEC900",
        // Violet
        violet500: "#4A6CFA",
        // Gray
        gray50: "#F2F3F6",
        gray100: "#E9E9F0",
        gray200: "#E2E5EB",
        gray300: "#C2C9D8",
        gray400: "#F5F5F8",
      },
      keyframes: {
        "slide-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "slide-up": "slide-up 0.3s ease-out",
      },
    },
  },
  plugins: [],
};
