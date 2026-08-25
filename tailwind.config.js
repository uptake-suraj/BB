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
        baba: {
          orange: '#FF6B00',
          'orange-light': '#FF8533',
          'orange-dark': '#CC5200',
          bg: '#FAF9F5',
          black: '#121214',
          dark: '#1C1C20',
          card: '#FFFFFF',
          border: '#E8E3DA',
          gray: '#52525B',
          lightgray: '#F3F0E9',
          white: '#FFFFFF',
          green: '#10B981',
          gold: '#D97706'
        }
      },
      fontFamily: {
        sans: ['Poppins', 'var(--font-poppins)', 'sans-serif'],
        display: ['Poppins', 'var(--font-poppins)', 'sans-serif'],
        title: ['Poppins', 'var(--font-poppins)', 'sans-serif'],
        mono: ['Poppins', 'var(--font-poppins)', 'sans-serif'],
      },
      maxWidth: {
        'site': '1440px',
      },
      boxShadow: {
        'glow-orange': '0 0 25px rgba(255, 107, 0, 0.3)',
        'glow-orange-lg': '0 0 50px rgba(255, 107, 0, 0.45)',
        'card-light': '0 10px 30px -5px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.03)' },
        }
      }
    },
  },
  plugins: [],
}
