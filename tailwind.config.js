/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'hat': ['Red Hat Display', 'sans-serif'],
      },
      colors: {
        green: '#4D96A9',
        dark_purple: '#855FB1',
        dark: '#28283D',
        grey: '#87879D',
        light_blue: '#8FE3F9',
        light_purple: '#D9B8FF',
        light: '#FAFAFA',
        light_grey: '#D8D8D8',
      }
    },
  },
  plugins: [],
}

