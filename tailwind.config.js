/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightgreen:"#007a6b",
        darkgreen:"#00584c",
        lightblue:"#cbf8ff"
      },
      fontFamily:{
        Itim:"Itim",
      }
    },
  },
  plugins: [],
}

