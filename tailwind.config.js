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
            borderRight: '32px solid #f43f5e',
            filter: 'blur(4px)',
            borderRadius: '100%',
          },
          '90%': {
            width: '90%',
            borderRight: '1px solid #f43f5e',
            filter: 'blur(1px)',
            borderRadius: '64px',
          },
          '100%': {
            width: '100%',
            borderRight: 'transparent',
            filter: 'blur(0.2px)',
          },
        },
      },
      animation: {
        typing: 'typing 1s cubic-bezier(0.5, 0, 0.1, 1) forwards',
      },
    },
  },
  plugins: [],
}
