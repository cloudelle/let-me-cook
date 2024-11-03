/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        colors: {
          tomato: '#FF6347',
          tomatoLight: '#ffd0cc'
    },
    fontFamily: {
      'ultra': ['Ultra'],
      'merienda': ["Merienda"]
    },
  },
  plugins: [],
}
}

