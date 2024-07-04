/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        customFont : "'Playwrite US Modern', cursive ",
      },
      backgroundImage: {
        PopularBg1:"url('/public/images/more/4.png')",
        PopularBg2:"url('/public/images/more/5.png')"
        
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}



