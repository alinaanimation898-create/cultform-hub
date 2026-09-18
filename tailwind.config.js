/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        benzin: ['Benzin', 'system-ui', '-apple-system', 'sans-serif'],
        gilroy: ['Gilroy', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        sapphire: {
          900: '#082f49',
          950: '#081326',
        }
      }
    },
  },
  plugins: [],
}
