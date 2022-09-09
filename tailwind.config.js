module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0077B5',
        'secondary': '#c5ff3e',
        'bgdefault': '#f8f8ff',
        'bgsecondary': '#ffe1b4',
        'textdefault': '#2f4f4f',
        'textlightdefault': '#f8f8ff',
      }
    },
    backgroundImage: {
      'hero-pattern': "url('/images/qambio-background.jpg')",
    }
    // fontFamily: {
    //   arima: ['Arima', ...defaultTheme.fontFamily.sans],
    // },
  },
  plugins: [],
}
