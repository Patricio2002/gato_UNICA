/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'gray':{
          '100':'#DBE8ED',
          '200':'#A8BFC9',
          '300':'#1F3641',
          '400':'#1A2A33'
        },
        'yellow':{
          '100':'#FFC860',
          '200':'#F2B137'
        },
        'blue':{
          '100':'#65E9E4',
          '200':'#31C3BD'
        }
      }
    },
  },
  plugins: [],
}

