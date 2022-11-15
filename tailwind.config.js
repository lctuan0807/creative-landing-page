/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        blue: 'rgb(37, 99, 235)',
        lightBlue: '#DBEAFE',
        darkBlue: '#93C5FD',
        secondary: '#F9FAFB',
        grey: '#1F2937',
        lightGrey: '#F3F4F6'
      },
      lineHeight: {
        '1.5715': 1.5715
      }
    },
  },
  plugins: [],
}
