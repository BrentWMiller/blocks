/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  safelist: [
    {
      pattern: /(mt|mb)-gap-(0|xs|sm|md|lg|xl)/,
      variants: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    {
      pattern: /text-display-(2xl|xl|lg|md|sm|xs)/,
      variants: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    'hidden',
    'md:hidden',
    'md:block',
    'swiper-button-disabled',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    fontFamily: {
      body: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
    },
    fontWeight: {
      normal: '400',
      bold: '700',
    },
    fontSize: {},
    colors: {
      black: '#000',
      white: '#fff',
      transparent: 'transparent',

      gray: {
        1: '#EFEDEA',
        5: '#252422',
      },

      primary: '#00A27F',
    },
    screens: {
      xs: '500px',
      // => @media (min-width: 500px) { ... }
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.5'),
            em: {
              fontFamily: 'var(--font-accent)',
            },
            // headings
            h1: {
              color: theme('colors.gray.5'),
            },
            h2: {
              color: theme('colors.gray.5'),
            },
            h3: {
              color: theme('colors.gray.5'),
            },
            h4: {
              color: theme('colors.gray.5'),
            },
            h5: {
              color: theme('colors.gray.5'),
            },
            h6: {
              color: theme('colors.gray.5'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.1'),
            em: {
              fontFamily: 'var(--font-accent)',
            },
            // headings
            h1: {
              color: theme('colors.gray.1'),
            },
            h2: {
              color: theme('colors.gray.1'),
            },
            h3: {
              color: theme('colors.gray.1'),
            },
            h4: {
              color: theme('colors.gray.1'),
            },
            h5: {
              color: theme('colors.gray.1'),
            },
            h6: {
              color: theme('colors.gray.1'),
            },
          },
        },
      }),
      zIndex: {
        header: 100,
      },
      spacing: {
        'gap-0': '0',
        'gap-xs': '2rem',
        'gap-sm': '5rem',
        'gap-md': '10rem',
        'gap-lg': '16rem',
        'gap-xl': '24rem',
      },
      aspectRatio: {
        '4/5': '4 / 5',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@tailwindcss/container-queries')],
};
