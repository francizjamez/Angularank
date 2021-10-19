module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        angular: {
          500: "#C3002F",
        },
        primary: {
          900: "hsl(2, 85%, 20%)",
          500: "#a6120d",
          100: "hsl(2, 85%, 67%)",
          50: "hsl(2, 85%, 75%)",
        },
        secondary: {
          500: "#444",
        },
        background: {
          500: "#303030",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
