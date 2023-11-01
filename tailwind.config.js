module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current : 'currentColor',
      'white' : '#ffffff',
      'cloudy' : '#DCE1E3',
      'dark-cyan' : '#164E63',
      'black' : '#000000',
      'beige' : '#DDC3A5',
      'black-brown' : '#201E20',
      'tan' : '#E0A96D',
      'some-blue' : '#689af8',
      'reclaim-blue' : '#15606a',
      'brass': '#E1C16E',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    container: {
      padding : '5px',
    },
    extend: {
      //animation class
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },
      keyframes: theme => ({
        fadeOut: {
          '0%': { 
            opacity: 0
          },
          '100%': {
            opacity: 1
          }
        }
      })
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
