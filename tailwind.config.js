/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#06091A',
          900: '#0A0E2A',
          800: '#111638',
          700: '#1A2050',
        },
        gold: {
          300: '#F5D98B',
          400: '#E8C060',
          500: '#C9973A',
          600: '#A87B2A',
        },
        cream: {
          50: '#FDFAF4',
          100: '#F7F0E0',
          200: '#EDE3CC',
        },
        stone: {
          warm: '#8C7B6B',
        }
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['EB Garamond', 'Georgia', 'serif'],
        sans: ['Jost', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        wider: '0.15em',
      }
    },
  },
  plugins: [],
}
