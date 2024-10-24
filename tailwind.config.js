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
          olive: '#808000',
          cream: '#FFFDD0',
          sunflower: '#FFD700',
          charcoal: '#333333',
          offwhite: '#F8F8F8',
          sage: '#B2AC88',
          darkseagreen: '#8FBC8F'
    },
  },
  plugins: [],
}
}

