/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: {
          dark1: '#101017',
          dark2: '#313131',
          dark3: '#0a0a0f',
          dark4: '#050507',
        },
        customGreen: {
          customGreen: '#079211',
        },
      },
    },
  },
  plugins: [],
}