'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'

/** Accessible dark/light theme toggle button. */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full glass text-zinc-300 transition-colors hover:text-brand-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  )
}
