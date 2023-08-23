/** @type {import('tailwindcss').Config} */
export default {
  plugins: [],
  theme: {
    extend: {
      colors: {
        '404258': '#404258',
        '474E68': '#474E68',
        '6B728E': '#6B728E',
        'dee0e7': '#DEE0E7'
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'pt-sans': ['PT_Sans', 'sans-serif']
      }
    },
  },
  purge: ["./index.html",'./src/**/*.{svelte,js,ts}'], //for unused css
  variants: {
    extend: {},
  },
  darkmode: false, // or 'media' or 'class'
}
