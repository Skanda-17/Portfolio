'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { skillGroups, skillIcons } from '@/data/skills'
import SectionHeading from '@/components/ui/SectionHeading'

/** Interactive, grouped skill cards with hover effects. */
export default function Skills() {
  return (
    <section
      id="skills"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24"
    >
      <SectionHeading
        eyebrow="Technical Skills"
        title="The Tools I Build With"
        subtitle="A modern, production-focused AI/ML stack spanning research and deployment."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className="glass group relative overflow-hidden rounded-2xl p-6"
          >
            <div
              className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${group.gradient} opacity-40 blur-2xl transition-opacity group-hover:opacity-70`}
            />
            <h3 className="relative font-display text-lg font-semibold text-white">
              {group.category}
            </h3>
            <ul className="relative mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-200 transition-colors hover:border-brand-cyan/50 hover:bg-white/10"
                >
                  {skillIcons[skill] && (
                    <Image
                      src={skillIcons[skill]}
                      alt=""
                      width={16}
                      height={16}
                      className="h-4 w-4 object-contain"
                    />
                  )}
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
