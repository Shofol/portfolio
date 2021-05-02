module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'br-primary': '#FFF2EB',
        'br-dark': '#ECCEBF'
      },
      fontWeight: ['hover', 'focus'],
    },
    fontFamily: {
      'br-font': 'Dosis'
    },
    boxShadow: {
      'br-shadow': '0px 4px 4px rgba(0, 0, 0, 0.25);'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
