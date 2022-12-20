/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'space': ['Space Mono', 'Monospace']
      },
      screens: {
        'xxs': '400px',
        'xs': '450px',
        'common': '992px',
        'betterhover': {'raw': '(hover: hover)'},
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
