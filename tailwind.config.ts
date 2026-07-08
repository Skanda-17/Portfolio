import type { Config } from 'tailwindcss'

/**
 * Tailwind configuration for the portfolio.
 * Uses a class-based dark mode (the site is dark-first, with an optional light theme)
 * and a professional blue / cyan / purple / white accent palette.
 */
const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-display)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      colors: {
        /**
         * Restrained, professional palette: a single desaturated steel-blue
         * accent over deep neutral slate. The three "brand" tones are kept
         * close in hue so gradients read as subtle tonal shifts, not a rainbow.
         */
        brand: {
          blue: '#4f7cc0',
          cyan: '#5b8fbd',
          purple: '#6b7cbd',
        },
        accent: '#7aa2d9',
        surface: '#0a0d14',
        card: '#111621',
      },
      boxShadow: {
        // Soft depth instead of neon glow
        glow: '0 14px 40px -18px rgba(79, 124, 192, 0.35)',
        'glow-purple': '0 14px 40px -18px rgba(107, 124, 189, 0.3)',
      },
      backgroundImage: {
        'brand-gradient':
          'linear-gradient(135deg, #4f7cc0 0%, #5b8fbd 50%, #6b7cbd 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        float: 'float 6s ease-in-out infinite',
        'gradient-x': 'gradientX 8s ease infinite',
        'spin-slow': 'spin 14s linear infinite',
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        gradientX: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        blink: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0' } },
      },
    },
  },
  plugins: [],
}
export default config
