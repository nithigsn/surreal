module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'sm': '428px',
        'lg': '768px',
        'big': '1024px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
