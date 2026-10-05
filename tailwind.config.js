/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#EEF2F7',
          100: '#D5DEEB',
          200: '#AABDD8',
          300: '#7E9CC5',
          400: '#537AB0',
          500: '#3D5E8E',
          600: '#2F4A73',
          700: '#233758',
          800: '#1A2A44',
          900: '#172A46',
          950: '#0F1D33',
        },
        teal: {
          50: '#EAF3F3',
          100: '#CFE0DF',
          200: '#9FC0BF',
          300: '#6FA09F',
          400: '#4F8C8A',
          500: '#2F7F7B',
          600: '#286966',
          700: '#1F524F',
          800: '#173B39',
          900: '#0E2423',
        },
        ink: {
          DEFAULT: '#202A35',
          light: '#687586',
        },
        cloud: {
          DEFAULT: '#F5F7FA',
          dark: '#EBEFF4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '100rem',
      },
      transitionDuration: {
        '600': '600ms',
        '800': '800ms',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
