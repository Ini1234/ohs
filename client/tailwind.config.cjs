/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#FCFDF4',
        greenPalette: '#829483',
        dimWhite: 'rgba(255, 255, 255, 0.7)',
        alittleDim: 'rgba(243, 242, 239, 0.28)',
        dimBlue: 'rgba(9, 151, 124, 0.1)',
        secondaryTextColor: '#616161',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        rufina: ['Rufina', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/herobackground2.svg')",
        'green-pallete': "url('/src/assets/greenPalette.png')",
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      lgl: '1400px',
      xl: '1700px',
    },
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      md: '0.375rem',
      lg: '0.5rem',
      full: '9999px',
      large: '12px',
      palette: '20px',
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      '50%': '50%',
      16: '4rem',
      lHeroImg: '1200px',
    },
    lineHeight: {
      'extra-loose': '134%',
      12: '3rem',
    },
  },
  plugins: [],
};
