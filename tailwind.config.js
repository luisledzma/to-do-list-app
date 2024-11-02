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
          1: "#f3b229",
          2: "#f4bb43",
          3: "#f6c661"
        },
        danger:{
          1: "#A13128",
          2: "#B2473F",
          3: "#C05E57"
        },
        success: {
          1: "#3DA128",
          2: "#55B446",
          3: "#6DC864"
        },
        warning: {
          1: "#A17428",
          2: "#B38646",
          3: "#C59864"
        }

       
      
      },
      maxWidth: {
        'tiny-spinner': '20rem', // Adds a custom class for 20rem
      },
    },
  },
  plugins: [],
}

