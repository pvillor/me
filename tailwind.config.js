/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        maven: ['Maven Pro', 'sans-serif'],
      },
      keyframes: {
        typing: {
          '0%': {
            width: '0%',
            filter: 'blur(4px)',
          },
          '100%': {
            width: '100%',
            filter: 'blur(0)',
          },
        },
      },
      animation: {
        typing: 'typing 0.7s steps(36) forwards',
      },
    },
  },
  plugins: [],
}
