import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#0b1120',
          foreground: '#f8fafc',
          muted: '#131c31',
          inverted: '#f8fafc'
        },
        'surface-light': {
          DEFAULT: '#f8fafc',
          foreground: '#0f172a',
          muted: '#e2e8f0'
        },
        primary: {
          DEFAULT: '#6366f1',
          foreground: '#0b1120'
        },
        accent: {
          DEFAULT: '#22d3ee',
          foreground: '#082f49'
        },
        success: '#34d399',
        warning: '#fbbf24',
        danger: '#ef4444'
      },
      fontFamily: {
        sans: ['"Outfit"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'glow-primary': '0 0 35px rgba(92, 108, 255, 0.35)',
        'glow-accent': '0 0 25px rgba(20, 184, 166, 0.35)'
      },
      backgroundImage: {
        'noise-texture':
          'radial-gradient(circle at 20% 20%, rgba(92,108,255,0.35), transparent 55%), radial-gradient(circle at 80% 0%, rgba(20,184,166,0.25), transparent 55%), radial-gradient(circle at 50% 80%, rgba(14,165,233,0.2), transparent 65%)'
      }
    }
  },
  plugins: []
}

export default config
