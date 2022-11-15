module.exports = {
  mode: "jit",
  purge: ["./*.html", "./public/*.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#fcf3d7",
          200: "#fae7af",
          300: "#f7dc88",
          400: "#f5d060",
          500: "#f2c438",
          600: "#c29d2d",
          700: "#917622",
          800: "#614e16",
          850: "#493b11",
          900: "#221e11",
          950: "#181406",
        }
      },
      container: {
        center: true,
      },
      zIndex: {
        '-10': '-10',
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1024px) { ... }

      '2xl': '1024px',
      // => @media (min-width: 1024px) { ... }
    },
    fontFamily: {
      main: ["Poppins"],
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
      '6': '6px',
      '7': '7px',
      '8': '8px',
    }
  },
  variants: {
    extend: {
      scale: ['group-hover'],
      translate: ['group-hover'],
    },
  },
  plugins: [],
}
