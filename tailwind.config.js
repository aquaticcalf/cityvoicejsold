/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      cityvoice: {
        blue: '#3498db',
        yellow: '#f7dc6f',
        red: '#e74c3c',
        gray: '#f2f2f2',
        dark: '#333333',
        green: '#8bc34a',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

