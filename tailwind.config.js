module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        twitter_blue: '#00aded',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
