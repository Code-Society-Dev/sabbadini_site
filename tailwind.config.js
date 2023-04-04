/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './pages/**/*.{html,ts}',
    './components/**/*.{html,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}'],
  },
}

