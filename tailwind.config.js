/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#dae4ef',
          200: '#b4c9de',
          300: '#7e9bc5',
          400: '#4a6aa0',
          500: '#2d4d80',
          600: '#1e3a66',
          700: '#152a4f',
          800: '#0f1f3a',
          900: '#0a1628',
          950: '#050b16',
        },
        electric: {
          50: '#fffdf0',
          100: '#fffacc',
          200: '#fff399',
          300: '#ffe940',
          400: '#ffd70f',
          500: '#f5c000',
          600: '#d49c00',
          700: '#a67400',
          800: '#6e4d00',
          900: '#3a2a00',
        },
        charcoal: {
          50: '#f7f8f8',
          100: '#eef0f0',
          200: '#dadee0',
          300: '#bcc2c5',
          400: '#9ba3a8',
          500: '#737d83',
          600: '#5b636a',
          700: '#4a5157',
          800: '#3d4348',
          900: '#23272b',
          950: '#131618',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Barlow Condensed', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['4.5rem', { lineHeight: '1.05', fontWeight: '700' }],
        'display-xl': ['3.75rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-lg': ['3rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-md': ['2.25rem', { lineHeight: '1.15', fontWeight: '700' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.7s ease-out',
        'fade-in-delay': 'fadeInUp 0.7s ease-out 0.15s both',
        'fade-in-delay-2': 'fadeInUp 0.7s ease-out 0.3s both',
        'fade-in-delay-3': 'fadeInUp 0.7s ease-out 0.45s both',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'spark': 'spark 1.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        spark: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(0.95)' },
        },
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(135deg, #0a1628 0%, #152a4f 50%, #0f1f3a 100%)',
        'electric-gradient': 'linear-gradient(135deg, #ffd70f 0%, #f5c000 100%)',
        'hero-overlay': 'linear-gradient(180deg, rgba(10,22,40,0.75) 0%, rgba(10,22,40,0.88) 100%)',
        'card-hover': 'linear-gradient(135deg, rgba(255,215,15,0.05) 0%, rgba(255,215,15,0) 100%)',
      },
      boxShadow: {
        'navy': '0 8px 30px rgba(10,22,40,0.2)',
        'navy-lg': '0 20px 60px rgba(10,22,40,0.3)',
        'electric': '0 4px 20px rgba(255,215,15,0.25)',
        'card': '0 4px 12px rgba(0,0,0,0.06)',
        'card-lg': '0 12px 40px rgba(0,0,0,0.08)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
