'use client'

import { motion } from 'framer-motion'
import { BadgeCheck, ExternalLink } from 'lucide-react'
import { certifications } from '@/data/certifications'
import SectionHeading from '@/components/ui/SectionHeading'

/** Responsive grid of certifications. */
export default function Certifications() {
  return (
    <section
      id="certifications"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24"
    >
      <SectionHeading
        eyebrow="Certifications"
        title="Credentials & Learning"
        subtitle="Continuous upskilling across ML, deep learning and cloud."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <motion.a
            key={cert.name}
            href={cert.credentialUrl ?? '#'}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            whileHover={{ y: -5 }}
            className="glass group flex items-start gap-4 rounded-2xl p-5 transition-colors hover:border-brand-cyan/40"
          >
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-cyan/15 text-brand-cyan">
              <BadgeCheck className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="font-medium leading-snug text-white">{cert.name}</p>
              <p className="mt-1 text-sm text-zinc-400">{cert.issuer}</p>
              <p className="mt-2 inline-flex items-center gap-1 text-xs text-zinc-500">
                {cert.date}
                <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
