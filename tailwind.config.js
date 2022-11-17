/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  fontFamily: {
    'sans': ['Inter', 'sans-serif'],
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
