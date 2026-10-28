/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          50: '#fbf8f1',
          100: '#f4efe3',
          200: '#e7decb',
          300: '#d5c7aa',
          400: '#a8b584',
          500: '#7e8b5e',
          600: '#647048',
          700: '#4f5c3a',
          800: '#3e482f',
          900: '#2b3320',
        },
        ochre: {
          light: '#dfb779',
          DEFAULT: '#c49a5a',
          dark: '#b58851',
          deep: '#966d3a',
        },
        ink: {
          light: '#4a473f',
          DEFAULT: '#26231d',
          dark: '#1c1a17',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        tenor: ['"Tenor Sans"', 'sans-serif'],
        spectral: ['Spectral', 'Georgia', 'serif'],
        amiri: ['Amiri', 'serif'],
        arabic: ['Amiri', 'serif'],
        body: ['Spectral', 'Georgia', 'serif'],
        pinyon: ['"Pinyon Script"', 'cursive'],
        sans: ['"Open Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'breathe': 'breathe 6.5s ease-in-out infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'scroll-bob': 'scroll-bob 2.2s ease-in-out infinite',
        'beckon': 'beckon 2.6s ease-in-out infinite',
        'sheen': 'sheen 7.5s ease-in-out infinite',
        'sway': 'sway 11s ease-in-out infinite',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.011)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.1', transform: 'scale(0.55)' },
          '50%': { opacity: '0.7', transform: 'scale(1)' },
        },
        'scroll-bob': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
        beckon: {
          '0%, 100%': { opacity: '0.72' },
          '50%': { opacity: '1' },
        },
        sheen: {
          '0%': { backgroundPosition: '130% 0' },
          '100%': { backgroundPosition: '-30% 0' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-0.45deg)' },
          '50%': { transform: 'rotate(0.45deg)' },
        }
      }
    },
  },
  plugins: [],
}

