'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems } from '@/data/navigation'
import { profile } from '@/lib/profile'

/**
 * Curated links shown in the desktop bar (kept short for an editorial look).
 * The mobile menu still exposes every section from `navItems`.
 */
const primaryNav = [
  { n: '01', label: 'About', href: '#about' },
  { n: '02', label: 'Skills', href: '#skills' },
  { n: '03', label: 'Experience', href: '#experience' },
  { n: '04', label: 'Projects', href: '#projects' },
  { n: '05', label: 'Research', href: '#research' },
]

/**
 * Slim, editorial top bar: brand + role on the left, small uppercase tracked
 * links in the centre, theme toggle and a "Get in touch" action on the right.
 * Transparent at the top; gains a subtle solid background once scrolled.
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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-surface/85 backdrop-blur-sm'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
        {/* Brand + role */}
        <a href="#home" className="group flex items-center gap-2 whitespace-nowrap">
          <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-white">
            {profile.name}
          </span>
          <span className="hidden text-[11px] uppercase tracking-[0.22em] text-zinc-500 sm:inline">
            — AIML Engineer
          </span>
        </a>

        {/* Centre links (desktop) */}
        <nav className="hidden items-center gap-7 lg:flex">
          {primaryNav.map(({ n, label, href }) => (
            <a
              key={href}
              href={href}
              className={`group inline-flex items-baseline gap-1.5 text-[11px] uppercase tracking-[0.18em] transition-colors ${
                active === href ? 'text-white' : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span className="text-[9px] text-accent">{n}</span>
              {label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-white transition-colors hover:text-accent sm:inline-flex"
          >
            Get in touch <span aria-hidden>&#8599;</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-200 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu (all sections) */}
      {open && (
        <div className="border-t border-white/10 bg-surface/95 backdrop-blur-sm lg:hidden">
          <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-1 px-6 py-4">
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block py-2 text-xs uppercase tracking-[0.18em] ${
                    active === href ? 'text-accent' : 'text-zinc-300'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
