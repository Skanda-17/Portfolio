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
        // Core brand palette: blue, cyan, purple + white accents
        brand: {
          blue: '#3b82f6',
          cyan: '#06b6d4',
          purple: '#8b5cf6',
        },
        accent: '#38bdf8',
        surface: '#050816',
        card: '#0b1226',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(56, 189, 248, 0.45)',
        'glow-purple': '0 0 40px -10px rgba(139, 92, 246, 0.45)',
      },
      backgroundImage: {
        'brand-gradient':
          'linear-gradient(135deg, #3b82f6 0%, #06b6d4 45%, #8b5cf6 100%)',
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
