import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'base-input': '#040f1a',
        'base-background': '#071422',
        'base-profile': '#0b1b2b',
        'base-post': '#112131',
        'base-border': '#1c2f41',
        'base-label': '#3a536b',
        'base-span': '#7b96b2',
        'base-text': '#afc2d4',
        'base-subtitle': '#c4d4e3',
        'base-title': '#e7edf4',
        'brand-blue': '#3294f8',
      },
      fontFamily: {
        'Nunito': ['Nunito', 'cursive'],
      },
    },
  },
  plugins: [],
}
export default config
