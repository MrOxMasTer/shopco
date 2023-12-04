import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        mm: '1rem',
        mt: '4rem',
        md: '5rem',
      },
    },
    screens: {
      sm: '320px',
      mm: '390px',
      mt: '768px',
      md: '1440px',
    },
    debugScreens: {},
    colors: {
      transparent: 'rgba(0, 0, 0, 0)',
      black: '#000',
      white: '#FFF',
      bonJour: '#F2F0F1',
    },
    boxShadow: {},
    extend: {
      fontFamily: {
        satoshi: ['var(--font-satoshi)'],
        integralCF: ['var(--font-intergralCF-bold)'],
      },
      backgroundImage: {},
      backgroundPosition: {},
      keyframes: {},
      backgroundSize: {},
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    plugin(function ({ addComponents, addVariant, addUtilities }) {
      addUtilities({
        '.visually-hidden': {
          '@apply absolute m--px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0':
            {},
          clipPath: 'inset(100%)',
          clip: 'rect(0 0 0 0)',
        },
      });
    }),
  ],
};
export default config;
