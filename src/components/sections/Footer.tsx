'use client'

import { ArrowUp } from 'lucide-react'
import { profile } from '@/lib/profile'
import { navItems } from '@/data/navigation'
import SocialLinks from '@/components/SocialLinks'

/** Professional footer with brand, quick links, social links and back-to-top. */
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface/60">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-display text-lg font-semibold text-white">
              {profile.name}
            </p>
            <p className="mt-2 max-w-xs text-sm text-zinc-400">{profile.title}</p>
            <p className="mt-3 text-sm text-zinc-500">{profile.location}</p>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Quick Links
            </p>
            <ul className="grid grid-cols-2 gap-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-zinc-400 transition-colors hover:text-brand-cyan"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:text-right">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Connect
            </p>
            <div className="md:flex md:justify-end">
              <SocialLinks variant="compact" />
            </div>
            <a
              href="#home"
              className="mt-4 inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-brand-cyan"
            >
              Back to top <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-zinc-500">
          <p>
            Designed &amp; built by{' '}
            <span className="text-zinc-300">{profile.name}</span> · © {new Date().getFullYear()} ·
            Next.js, Tailwind CSS &amp; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
