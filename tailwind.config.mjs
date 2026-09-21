/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fbf0',
          100: '#dcfae0',
          200: '#b8f4c2',
          300: '#7fe893',
          400: '#3ed258',
          500: '#009000', // Ana Yeşil (#009000)
          600: '#007a00',
          700: '#006100',
          800: '#004d00',
          900: '#003e00',
          950: '#002200',
        },
        gold: {
          500: '#d97706',
          600: '#b45309',
        },
        darkbg: {
          base: '#0a1610',
          card: '#12241b',
          border: '#1b3629',
        }
      },
      fontFamily: {
        amiri: ['Amiri', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};