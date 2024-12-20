/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple-light': '#c0b1f5',
        'custom-purple-medium': '#a086ec',
        'custom-purple-dark': '#6608e0',
        'custom-purple-darker': '#5104c6',
        'custom-purple-darkest': '#3b02ad',
        'custom-black': '#000000',
        'custom-white': '#ffffff',
      },
    },
  },
  plugins: [],
}
