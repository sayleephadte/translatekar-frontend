/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
      },
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "21xl": "40px",
      },
    },
    fontSize: {
      xl: "20px",
      "6xl": "25px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
