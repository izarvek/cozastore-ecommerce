/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
       fontFamily: {
        'sans': ['Poppins', 'sans-serif'], // Poppins for body text
        'serif': ['Playfair Display', 'serif'], // Playfair for headings
      },
      colors: {
        'primary': '#4f46e5',
         // A nice blue for the button
        'dark-overlay': 'rgba(0, 0, 0, 0.4)', // For the image overlay
      },
      
      boxShadow : {
          'xsm' : '0 0 1px rgba(0, 0, 0, 0.4)',
      },
      
    },
  },
  plugins: [],
}