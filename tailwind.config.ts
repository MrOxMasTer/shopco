import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0.5rem',
        sm: '0.5rem',
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
      ebb: '#F0EEED',
      redOrange: '#F33',
      gallery: '#f0f0f0',
      greenHaze: '#01AB31',
      geyser: '#D6DCE5',
    },
    boxShadow: {},
    extend: {
      fontFamily: {
        satoshi: ['var(--font-satoshi)'],
        integralCF: ['var(--font-intergralCF-bold)'],
      },
      backgroundImage: {},
      backgroundPosition: {},
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      backgroundSize: {},
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('tailwindcss-animate'),
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
