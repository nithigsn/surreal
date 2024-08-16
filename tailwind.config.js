module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      screens:{
        'sm' :'428px',
        'lg' :'768px',
        'bog':'1024px'

      }
    },
  },
  plugins: [],
}
