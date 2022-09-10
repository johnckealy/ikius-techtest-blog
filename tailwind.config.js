const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '18rem',
      },
    },
    extend: {
      boxShadow: {
        'article-card': '0px 4px 4px rgba(0, 0, 0, 0.25)'
      }
    },
    fontFamily: {
      roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
    }
  },
  plugins: [],
}
