/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#0b3e2e',
          dark: '#062b1e',
          mid: '#126349',
          light: '#1f9a70',
        },
        teal: {
          DEFAULT: '#14b8a6',
          light: '#2dd4bf',
          soft: '#e0f7f3',
        },
        mint: {
          DEFAULT: '#d4f0e8',
          light: '#eaf8f4',
          pale: '#f4fdfb',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      keyframes: {
        rise: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0.7' },
          '100%': { transform: 'translateY(-100vh) scale(0.5)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        rise: 'rise linear infinite',
        float: 'float 4s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
}
