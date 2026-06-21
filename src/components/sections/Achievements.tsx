'use client'

import { motion } from 'framer-motion'
import { stats } from '@/data/achievements'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import SectionHeading from '@/components/ui/SectionHeading'

/** Animated statistic counters highlighting key achievements. */
export default function Achievements() {
  return (
    <section
      id="achievements"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24"
    >
      <SectionHeading
        eyebrow="Achievements"
        title="By the Numbers"
        subtitle="A snapshot of academic and competitive milestones."
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="glass gradient-border flex flex-col items-center rounded-2xl p-5 text-center"
            >
              <Icon className="h-6 w-6 text-brand-cyan" />
              <p className="mt-3 font-display text-3xl font-bold gradient-text">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </p>
              <p className="mt-1 text-xs uppercase tracking-wide text-zinc-400">
                {stat.label}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
