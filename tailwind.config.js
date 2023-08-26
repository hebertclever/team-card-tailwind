/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'light': {'raw': '(prefers-color-scheme: light)'},
      },
    },
  },
  purge: {
    content: ["./src/**/*.{html,js}"],
    options: {
      safelist: ['dark', 'light'],
    },
  },
  plugins: [],
}
