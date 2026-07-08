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
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        // Headings use the editorial serif
        display: ['var(--font-serif)', 'Georgia', 'serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      // Sharper corners for a clean, editorial feel (less rounded)
      borderRadius: {
        lg: '0.25rem',
        xl: '0.3rem',
        '2xl': '0.4rem',
        '3xl': '0.5rem',
      },
      colors: {
        /**
         * Plain, professional black-and-brown palette. A single warm tan/mocha
         * accent over near-black. The "brand" tones are all close browns so any
         * legacy gradient reads as a solid, understated brown.
         */
        brand: {
          blue: '#8a6d4f',
          cyan: '#a8825c',
          purple: '#6b5544',
        },
        accent: '#b08968',
        surface: '#0c0a09',
        card: '#17120f',
      },
      boxShadow: {
        // Plain, neutral depth (no colored glow)
        glow: '0 8px 24px -14px rgba(0, 0, 0, 0.7)',
        'glow-purple': '0 8px 24px -14px rgba(0, 0, 0, 0.7)',
      },
      backgroundImage: {
        // Near-solid brown so buttons read as flat, not gradient-y
        'brand-gradient': 'linear-gradient(135deg, #a8825c 0%, #92714b 100%)',
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
