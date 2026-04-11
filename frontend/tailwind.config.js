/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#236CF1',
          dark: '#1E59C1',
        },
        accent: {
          DEFAULT: '#FBB03B',
          dark: '#E29615',
        },
        navy: {
          light: '#3F42A1',
          DEFAULT: '#2E3192',
          dark: '#1D1F5D',
        },
        background: '#FAFAFA',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
