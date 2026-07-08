'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FileText, ExternalLink, FlaskConical, Award } from 'lucide-react'
import {
  researchItems,
  researchTypes,
  researchInterests,
  type ResearchType,
} from '@/data/research'
import SectionHeading from '@/components/ui/SectionHeading'

const typeIcon: Record<ResearchType, typeof FileText> = {
  Paper: FileText,
  Patent: Award,
  Ongoing: FlaskConical,
}

const typeColor: Record<ResearchType, string> = {
  Paper: 'text-accent',
  Patent: 'text-amber-300/70',
  Ongoing: 'text-brand-purple',
}

/** Publications, patents & ongoing research with type filtering. */
export default function Research() {
  const [filter, setFilter] = useState<ResearchType | 'All'>('All')
  const filtered =
    filter === 'All'
      ? researchItems
      : researchItems.filter((r) => r.type === filter)

  return (
    <section id="research" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        eyebrow="Publications & Research"
        title="Research & Patents"
        subtitle="Exploring the frontier of applied AI through papers, patents and ongoing work."
      />

      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {researchTypes.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setFilter(t)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              filter === t
                ? 'bg-brand-gradient text-white shadow-glow'
                : 'glass text-zinc-300 hover:text-white'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => {
            const Icon = typeIcon[item.type]
            return (
              <motion.article
                key={item.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="glass flex flex-col rounded-2xl p-6"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide ${typeColor[item.type]}`}
                  >
                    <Icon className="h-4 w-4" /> {item.type}
                  </span>
                  <span className="text-xs text-zinc-500">{item.year}</span>
                </div>

                <h3 className="mt-3 font-display text-base font-semibold leading-snug text-white">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                  {item.abstract}
                </p>

                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
                  <span className="text-xs text-zinc-400">{item.venue}</span>
                  {item.doi && (
                    <a
                      href={item.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-brand-cyan hover:underline"
                    >
                      DOI <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </motion.article>
            )
          })}
        </AnimatePresence>
      </motion.div>

      {/* Research interests */}
      <div className="mt-10 text-center">
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
          Research Interests
        </h3>
        <div className="flex flex-wrap justify-center gap-2">
          {researchInterests.map((interest) => (
            <span
              key={interest}
              className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-zinc-200"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
