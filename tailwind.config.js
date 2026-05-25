/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          blue:  '#00AEEF',
          dark:  '#0077CC',
          light: '#33C3FF',
          glow:  'rgba(0,174,239,0.35)',
        },
        dark: {
          primary:   '#050505',
          secondary: '#080E18',
          card:      '#0B1120',
          border:    'rgba(0,174,239,0.15)',
        },
      },
      fontFamily: {
        bebas:    ['Bebas Neue', 'cursive'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        inter:    ['Inter', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glowPulse 2.5s ease-in-out infinite alternate',
        'float':      'float 4s ease-in-out infinite',
        'gradient':   'gradientShift 8s ease infinite',
        'scan':       'scan 3s linear infinite',
        'ring':       'ring 2s ease-out infinite',
      },
      keyframes: {
        glowPulse: {
          '0%':   { textShadow: '0 0 8px #00AEEF, 0 0 16px #00AEEF' },
          '100%': { textShadow: '0 0 20px #00AEEF, 0 0 40px #00AEEF, 0 0 60px #33C3FF' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
        gradientShift: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%':     { backgroundPosition: '100% 50%' },
        },
        scan: {
          '0%':   { top: '-10%' },
          '100%': { top: '110%' },
        },
        ring: {
          '0%':   { transform: 'scale(1)', opacity: '0.8' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
      },
      backgroundSize: {
        '300%': '300% 300%',
      },
    },
  },
  plugins: [],
}
