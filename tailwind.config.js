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
        primaryColor: "#2C3E50",
        secondaryColor_1: "#1ABC9C",
        secondaryColor_2: "#E67E22",
        neutralColor_1: "#ECF0F1",
        neutralColor_2: "#FFFFFF",
        accentColor_1: "#F1C40F",
        textColor_1: "#34495E",
        textColor_2: "#000000",
      },
    },
  },
  plugins: [],
};
