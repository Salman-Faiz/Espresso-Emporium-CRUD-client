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
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

