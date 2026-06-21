'use client'

import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, FileDown, Send, CheckCircle2 } from 'lucide-react'
import { profile } from '@/lib/profile'
import SectionHeading from '@/components/ui/SectionHeading'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'

/**
 * Contact section with a professional form.
 * The form composes a mailto link by default — wire it to a real endpoint
 * (Formspree / Resend / API route) for production. See the README checklist.
 */
export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(
      `${form.message}\n\nFrom: ${form.name} (${form.email})`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const details = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: MapPin, label: 'Location', value: profile.location },
    { icon: GithubIcon, label: 'GitHub', value: '@' + profile.githubUsername, href: profile.github },
    { icon: LinkedinIcon, label: 'LinkedIn', value: 'Connect with me', href: profile.linkedin },
  ]

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Build Something"
        subtitle="Open to AI/ML roles, research collaborations and freelance projects."
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        {/* Contact details */}
        <div className="space-y-4">
          {details.map((d) => {
            const Icon = d.icon
            const content = (
              <div className="glass flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-brand-cyan/40">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-cyan/15 text-brand-cyan">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-zinc-500">
                    {d.label}
                  </p>
                  <p className="text-sm font-medium text-white">{d.value}</p>
                </div>
              </div>
            )
            return d.href ? (
              <a
                key={d.label}
                href={d.href}
                target={d.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="block"
              >
                {content}
              </a>
            ) : (
              <div key={d.label}>{content}</div>
            )
          })}

          <a
            href={profile.resumeUrl}
            download
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-gradient px-5 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02]"
          >
            <FileDown className="h-4 w-4" /> Download Resume
          </a>
        </div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="glass gradient-border space-y-4 rounded-3xl p-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm text-zinc-300">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm text-zinc-300">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm text-zinc-300">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan"
              placeholder="Tell me about the opportunity or project..."
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02]"
          >
            {sent ? (
              <>
                <CheckCircle2 className="h-4 w-4" /> Opening your mail app…
              </>
            ) : (
              <>
                <Send className="h-4 w-4" /> Send Message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  )
}
