'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, Lightbulb, CheckCircle2 } from 'lucide-react'
import { GithubIcon } from '@/components/ui/BrandIcons'
import {
  projects,
  projectCategories,
  type Project,
  type ProjectCategory,
} from '@/data/projects'
import SectionHeading from '@/components/ui/SectionHeading'

function ProjectCard({ project }: { project: Project }) {
  const [imgError, setImgError] = useState(false)
  const showImage = project.image && !imgError

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -8 }}
      className="glass group flex flex-col overflow-hidden rounded-2xl"
    >
      {/* Visual */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-tr ${project.gradient}`}
        />
        {showImage ? (
          <Image
            src={project.image as string}
            alt={`${project.title} preview`}
            fill
            onError={() => setImgError(true)}
            className="object-cover opacity-80 mix-blend-overlay transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-4xl font-bold text-white/80">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
          {project.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-white transition-colors group-hover:text-brand-cyan">
          {project.title}
        </h3>

        <div className="mt-3 space-y-2 text-sm leading-relaxed">
          <p className="text-zinc-400">
            <span className="font-medium text-zinc-200">Problem: </span>
            {project.problem}
          </p>
          <p className="flex gap-1.5 text-zinc-400">
            <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
            <span>
              <span className="font-medium text-zinc-200">Solution: </span>
              {project.solution}
            </span>
          </p>
        </div>

        <ul className="mt-4 space-y-1.5">
          {project.results.map((r) => (
            <li key={r} className="flex items-center gap-2 text-sm text-zinc-300">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
              {r}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex gap-3 border-t border-white/10 pt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-300 transition-colors hover:text-brand-cyan"
            >
              <GithubIcon className="h-4 w-4" /> Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-300 transition-colors hover:text-brand-cyan"
            >
              <ExternalLink className="h-4 w-4" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

/** Featured projects with category filtering. */
export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All')
  const filtered =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Selected Work"
        subtitle="End-to-end AI/ML projects — from research and prototyping to deployment."
      />

      {/* Filter pills */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              filter === cat
                ? 'bg-brand-gradient text-white shadow-glow'
                : 'glass text-zinc-300 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
