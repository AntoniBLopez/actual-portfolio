import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0px 0px 10px #0061FF',
      },
      textColor: {
        'primaryDark': '#81bbfc',
        'primaryLight': '#3490dc',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
      }
    },
  },
  plugins: [],
} satisfies Config
