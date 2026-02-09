/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A3D62', // Deep blue
        accent: '#D4AF37',  // Gold/Orange for CTAs
        secondary: '#0097A7', // Teal accent
        background: '#FFFFFF',
        text: '#222F3E',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
