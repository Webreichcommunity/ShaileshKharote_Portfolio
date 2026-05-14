/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F4F6F6',  // off-white
          100: '#D5DBDB', // light gray
          200: '#AAB7B8', // silver
          300: '#85929E',
          400: '#566573',
          500: '#2E4053', // slate gray
          600: '#1C2833', // deep navy
          700: '#0F1A24',
          800: '#0B141D',
          900: '#070D13',
        },
        offwhite: '#F4F6F6',
        silver: '#AAB7B8',
        slate: '#2E4053',
        navy: '#1C2833',
      },
      backgroundColor: {
        offwhite: '#F4F6F6',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
