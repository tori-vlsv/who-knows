module.exports = {
  content: ["./src/views/**/*.pug"],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1202px',
      xl: '1203px'
    },
    container: {
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.25rem',
        md: '1.875rem',
        lg: '1rem',
        xl: '1rem',
      },
    },
    extend: {
      animation: {
        scale: 'scale 2.5s ease-in-out infinite',
      },
      keyframes: {
        scale: {
          '0%, 100%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1)' },
        }
      },
      colors: {
        'blue-300': '#299bed',
        'blue-400': '#0475C7',
        'gray-700': '#D3D3D3',
        'gray-650': '#EEEEEE',
        'gray-600': '#E0E0E0',
        'gray-500': '#ECECEC',
        'gray-400': '#C7C7C7',
        'gray-350': '#C1C1C1',
        'gray-300': '#333333',
        'gray-200': '#929292',
      },
      backgroundImage: {
        'dash': "url('/assets/images/dash.svg')",
        'dash-gray': "url('/assets/images/dash-gray.svg')",
        'dash-rotated': "url('/assets/images/dash-rotated.svg')",
      },
    },
    fontFamily: {
      'gilroy': ['Gilroy'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}
