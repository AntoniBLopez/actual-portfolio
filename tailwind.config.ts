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
    screens: {
      mobile: '460px',
      // tablet: '640px',
      // md: '768px',
      // laptop: '1024px',
      // desktop: '1280px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
} satisfies Config
