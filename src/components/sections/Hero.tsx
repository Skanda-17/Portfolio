'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FileText, Mail } from 'lucide-react'
import { profile } from '@/lib/profile'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'

/** Plain hero: photo, name, title, tagline and CTAs. */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-28 pb-16"
    >
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.4fr_1fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Open to AI/ML roles &amp; research
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-5 text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-400"
          >
            {profile.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-5 max-w-xl font-display text-xl italic text-zinc-300 sm:text-2xl"
          >
            &ldquo;{profile.taglines[0]}&rdquo;
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.04]"
            >
              <FileText className="h-4 w-4" /> View Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:text-brand-cyan"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:text-brand-cyan"
            >
              <GithubIcon className="h-4 w-4" /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:text-brand-cyan"
            >
              <LinkedinIcon className="h-4 w-4" /> LinkedIn
            </a>
          </motion.div>
        </div>

        {/* Photo with a simple bordered frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto"
        >
          <div className="relative h-56 w-56 overflow-hidden rounded-2xl border border-white/10 bg-card sm:h-72 sm:w-72">
            <Image
              src={profile.photoUrl}
              alt={`Portrait of ${profile.name}`}
              fill
              priority
              sizes="(max-width: 640px) 224px, 288px"
              className="object-cover"
            />
            {/* Fallback monogram (shown if image is missing, behind <Image>) */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center text-5xl font-bold text-zinc-700">
              SB
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
