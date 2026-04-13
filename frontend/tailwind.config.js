/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
    },
  },
  plugins: [],
};
