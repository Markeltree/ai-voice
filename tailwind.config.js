/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'site': '1424px',
      },
      fontFamily: {
        sans: ['Averta'],
        handwriting: ['Caveat', 'cursive'],
      },
      colors: {
        brand: {
          purple: '#4F46E5',
          dark: '#24242D',
        },
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadein: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        fadein: 'fadein 0.7s ease forwards',
      },
    },
  },
  plugins: [],
}
