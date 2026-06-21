'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Target } from 'lucide-react'
import {
  aboutParagraphs,
  missionStatement,
  education,
  expertiseAreas,
} from '@/data/about'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        eyebrow="About Me"
        title="Engineer. Researcher. Builder."
        subtitle="Turning research ideas into reliable, production-grade AI."
      />

      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        {/* Summary + mission */}
        <Reveal className="glass gradient-border rounded-3xl p-7 sm:p-9">
          <div className="space-y-5 text-zinc-300 leading-relaxed">
            {aboutParagraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <div className="mt-7 flex items-start gap-3 rounded-2xl bg-brand-purple/10 p-4">
            <Target className="mt-0.5 h-5 w-5 shrink-0 text-brand-purple" />
            <p className="text-sm italic text-zinc-200">{missionStatement}</p>
          </div>
        </Reveal>

        {/* Education card */}
        <Reveal delay={0.1} className="glass rounded-3xl p-7 sm:p-9">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/15 text-brand-cyan">
              <GraduationCap className="h-5 w-5" />
            </span>
            <h3 className="font-display text-lg font-semibold text-white">
              Education
            </h3>
          </div>
          <div className="mt-5">
            <p className="font-medium text-white">{education.degree}</p>
            <p className="mt-1 text-sm text-zinc-400">{education.institution}</p>
            <p className="text-sm text-zinc-500">
              {education.location} · {education.period}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              {education.detail}
            </p>
          </div>
        </Reveal>
      </div>

      {/* Areas of expertise */}
      <h3 className="mt-14 mb-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
        Areas of Expertise
      </h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {expertiseAreas.map((area, i) => {
          const Icon = area.icon
          return (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="glass group rounded-2xl p-5 transition-colors hover:border-brand-cyan/40"
            >
              <Icon className="h-7 w-7 text-brand-cyan transition-transform group-hover:scale-110" />
              <p className="mt-4 font-medium text-white">{area.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                {area.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
