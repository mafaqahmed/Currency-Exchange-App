module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
    colors:{
      'myblack': '#1B1B1B',
      'lightBlack': '#282828'
    },
    width: {
      'headerW': '97%'
    },
    height: {
      'box2': '100px',
      'box3': '100%'
    },
    screens: {
      'md': '990px',
      'smd': '768px',
      // => @media (min-width: 768px) { ... }
    }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};