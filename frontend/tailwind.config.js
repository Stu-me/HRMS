module.exports = {
  darkMode: 'class', // Enable dark mode via class strategy
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#cfa77b', // light brown shade
          DEFAULT: '#895129', // professional brown
          dark: '#4e2e13', // dark brown shade
        },
        accent: {
          light: '#f5eee6', // very light brown/cream
          DEFAULT: '#b07d56', // accent brown
          dark: '#3a2412', // very dark brown
        },
      },
    },
  },
  plugins: [],
};
