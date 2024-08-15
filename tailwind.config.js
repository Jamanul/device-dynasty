/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#478CCF",
        secondary: ""
      },
    },
  },
  plugins: [require('daisyui')],
}

