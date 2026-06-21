'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '@/data/testimonials'
import SectionHeading from '@/components/ui/SectionHeading'

function initials(name: string) {
  return name
    .split(' ')
    .map((n) => n.charAt(0))
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

/** Professional recommendation cards. */
export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        eyebrow="Testimonials"
        title="What People Say"
        subtitle="Recommendations from mentors, faculty and collaborators."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name + i}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass flex flex-col rounded-2xl p-6"
          >
            <Quote className="h-7 w-7 text-brand-purple/70" />
            <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-zinc-300">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient text-sm font-semibold text-white">
                {initials(t.name)}
              </span>
              <div>
                <p className="text-sm font-medium text-white">{t.name}</p>
                <p className="text-xs text-zinc-400">{t.role}</p>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  )
}
