/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0 35px rgba(0, 255, 255, 0.3)',
        '4xl': '0 0 35px rgba(66, 245, 69, 0.3)'
      },
      gap :{
        '1.5' : '4px'
      }
    },
  },
  plugins: [],
}