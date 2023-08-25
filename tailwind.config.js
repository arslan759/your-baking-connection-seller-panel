/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  // NOTE: It's fixing flickering issue
  // important: '#__next',
  theme: {
    extend: {
      fontFamily: {
        russoone: ['Russo One'],
        roboto: ['Roboto'],
        poppins: ['Poppins'],
        open_sans: ['Open_Sans'],
        open_sans_bold: ['Open_Sans_Bold'],
        Josefin: ['Josefin Sans'],
      },
      colors: {
        primary: '#F8B4CB',
        green: '#7DDEC1',
      },
      screens: {
        xlm: '1440px',
        xll: '1536px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },

  plugins: [],
}
