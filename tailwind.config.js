/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        green: {
          850: '#1a472a', // Deep branding green
          950: '#0d2818',
        },
        stone: {
          50: '#f9fafb',
          150: '#f0f2ef',
        }
      }
    },
  },
  plugins: [],
}