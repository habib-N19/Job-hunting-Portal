/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'default-color': '#757575',
        // 'activeClr': 'gradient(linear, 90deg, #7E90FE 0%, #9873FF 100%)'
        'testing': '#ffffff'
      },
    }
  },
  plugins: [],
}

