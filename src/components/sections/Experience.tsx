'use client'

import { motion } from 'framer-motion'
import { TrendingUp } from 'lucide-react'
import { experiences } from '@/data/experience'
import SectionHeading from '@/components/ui/SectionHeading'

/** Vertical timeline of professional experience. */
export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24"
    >
      <SectionHeading
        eyebrow="Experience"
        title="Where I've Applied My Skills"
        subtitle="Hands-on work building and shipping ML systems."
      />

      <div className="relative">
        {/* Timeline spine */}
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-brand-blue via-brand-cyan to-brand-purple md:left-1/2" />

        <div className="space-y-10">
          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0
            return (
              <motion.div
                key={exp.role + exp.organization}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55 }}
                className={`relative pl-12 md:w-1/2 md:pl-0 ${
                  isLeft ? 'md:pr-12' : 'md:ml-auto md:pl-12'
                }`}
              >
                {/* Node */}
                <span
                  className={`absolute left-2.5 top-2 h-3.5 w-3.5 rounded-full border-2 border-surface bg-brand-cyan shadow-glow md:left-auto ${
                    isLeft ? 'md:-right-[7px]' : 'md:-left-[7px]'
                  }`}
                />

                <div className="glass gradient-border rounded-2xl p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-white">
                      {exp.role}
                    </h3>
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-brand-cyan">
                    {exp.organization}
                  </p>
                  {exp.location && (
                    <p className="text-xs text-zinc-500">{exp.location}</p>
                  )}

                  <ul className="mt-4 space-y-2">
                    {exp.achievements.map((a) => (
                      <li
                        key={a}
                        className="flex gap-2 text-sm leading-relaxed text-zinc-300"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-purple" />
                        {a}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex items-start gap-2 rounded-xl border border-white/5 bg-white/[0.03] p-3 text-sm text-zinc-300">
                    <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {exp.impact}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
