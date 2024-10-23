/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
       
        background: {
          dark1: '#101010', // Light gray for light mode
          dark2: '#151515',
          dark3: '#202020',
          dark4: '#252525',
          dark5: '#252525',
          dark6: '#303030',
        },
        primary:{
          1: "#2862A1",
          2: "#3F73AE",
          3: "#5685BB"
        },
        secondary:{
          1: "#006CE0",
          2: "#1A7AE4",
          3: "#3389E8"
        },

       
      
      },
    },
  },
  plugins: [],
}

