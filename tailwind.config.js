module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        'ell-p':'3px',
        'cont': '286px',
        'raw': '12px',
        'input': '62px',
        'control':'60px',
        'ellipce': '169px',
        'rage':'140px',
      },
      height: {
        'cont': '76px',
        'raw': '16px',
        'input': '36px',
        'control':'30px',
      },

      borderRadius: {
        'none': '0',
        'normal': '16px',
        'mid': '8px',
      },
      colors: {
        'gray-border': '#A3A3A3',
        'range-border': '#E5E7EB',
      },
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
