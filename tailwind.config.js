/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          dark: '#020516',
          card: '#080d24',
          border: '#161e3d',
        },
        brand: {
          indigo: '#E11D48',
          purple: '#FACC15',
          cyan: '#FF3E3E',
          success: '#10b981',
          warning: '#f59e0b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
      boxShadow: {
        'glow-indigo': '0 0 30px rgba(225, 29, 72, 0.25)',
        'glow-purple': '0 0 30px rgba(250, 204, 21, 0.25)',
        'glow-cyan': '0 0 30px rgba(255, 62, 62, 0.25)',
        'card-dark': '0 8px 32px rgba(0, 0, 0, 0.65)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        rotateClockwise: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        rotateCounter: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 6s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        fadeUp: 'fadeUp 0.6s ease-out forwards',
        scaleIn: 'scaleIn 0.5s ease-out forwards',
        glitch: 'glitch 0.3s linear infinite',
        'rotate-clockwise': 'rotateClockwise 6s linear infinite',
        'rotate-counter': 'rotateCounter 8s linear infinite',
      },
    },
  },
  plugins: [],
}
