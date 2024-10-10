/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6064',
        secondary: '#D9D9D9',
        tertiary: '#DDDDDD'
      },
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        btnShadow: '0 3px 4px 1px rgba(0, 0, 0, 0.65);'
      }
    },
  },
  plugins: [],
}

