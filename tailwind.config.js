/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        plain: '#EEEEEE',
        border: '#EAEAEA',
        highlight: '#CCECFF',
        accent: '#F93909',
        title: '#1E232E',
        body: '#1E232E',
        label: '#7A8C9B',
      },
    },
  },
  plugins: [],
};
