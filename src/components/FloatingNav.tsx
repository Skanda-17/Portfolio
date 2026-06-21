'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems } from '@/data/navigation'
import { profile } from '@/lib/profile'
import ThemeToggle from './theme/ThemeToggle'
import { GithubIcon } from './ui/BrandIcons'

/**
 * Floating, glassmorphism navigation bar with scroll-spy active highlighting
 * and a responsive mobile menu. Links scroll to in-page section anchors.
 */
export default function FloatingNav() {
  const [active, setActive] = useState<string>('#home')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy: highlight the section currently in view.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as Element[]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`w-full max-w-5xl rounded-2xl px-4 py-2.5 transition-all duration-300 ${
          scrolled ? 'glass shadow-glow' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <a
            href="#home"
            className="font-display text-base font-semibold tracking-tight text-white"
          >
            Skanda<span className="text-brand-cyan">.</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-0.5 lg:flex">
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                    active === href
                      ? 'bg-white/10 text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="hidden h-9 items-center gap-2 rounded-full bg-brand-gradient px-4 text-sm font-medium text-white shadow-glow transition-transform hover:scale-[1.03] sm:inline-flex"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle navigation menu"
              aria-expanded={open}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full glass text-zinc-200 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <ul className="mt-3 grid grid-cols-2 gap-1 border-t border-white/10 pt-3 lg:hidden">
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2 text-sm ${
                    active === href
                      ? 'bg-white/10 text-white'
                      : 'text-zinc-300 hover:bg-white/5'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}
