/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#BE1687',
        secondary: '#661E78',
        third: '#390027',
        white: '#FFFFFF',
        black: '#1E1E1E',
        grey: '#F9F9FF',
        lightGrey: '#FEFEFEE5',
      },
      maxWidth: {
        '1200': 1180,
        '1000': 1040,
      },
      boxShadow: {
        nav: '-9px -4px 38px rgba(0, 0, 0, 0.15)'
      }
    },
  },
  plugins: [],
}
