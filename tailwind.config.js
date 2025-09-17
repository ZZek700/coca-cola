/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'crown-primary': '#AE3537',
        'crown-complementary': '#FFDAC9',
        'crown-dark': '#1F1F1F',
        'crown-white': '#FDF4F4',
        'crown-dark-red': '#661E1F',
      },
      fontFamily: {
        'premium': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-delayed': 'float-delayed 4s ease-in-out infinite',
        'shine': 'shine 3s linear infinite',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        'bounce-delayed': 'bounce-delayed 2s infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        shine: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.8' },
        },
        'bounce-delayed': {
          '0%, 20%, 53%, 80%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '40%, 43%': { transform: 'translate3d(0, -8px, 0)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      perspective: {
        '1000': '1000px',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },
    },
  },
  safelist: [
    // Ensure dynamic classes are not purged
    'text-crown-primary',
    'bg-crown-primary',
    'text-crown-white',
    'border-crown-primary',
    'border-gray-500',
    'border-blue-400', 
    'border-yellow-400',
    'border-rose-400',
    'border-purple-400',
    'border-emerald-400',
    'border-amber-400',
    'text-gray-400',
    'text-blue-400',
    'text-yellow-400', 
    'text-rose-400',
    'text-purple-400',
    'text-emerald-400',
    'text-amber-400',
    'bg-gray-400',
    'bg-blue-400',
    'bg-yellow-400',
    'bg-rose-400', 
    'bg-purple-400',
    'bg-emerald-400',
    'bg-amber-400',
    'shadow-gray-400/20',
    'shadow-blue-400/20',
    'shadow-yellow-400/20',
    'shadow-rose-400/20',
    'shadow-purple-400/20',
    'shadow-emerald-400/20',
    'shadow-amber-400/20',
  ],
  plugins: [],
};