import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0px 0px 10px #0061FF',
      }
    },
  },
  plugins: [],
} satisfies Config
