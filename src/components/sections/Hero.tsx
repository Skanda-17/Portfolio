'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FileText, Mail, ArrowDown } from 'lucide-react'
import { profile } from '@/lib/profile'
import ParticleBackground from '@/components/ui/ParticleBackground'
import TypingText from '@/components/ui/TypingText'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'

/** Full-height hero with particle background, photo, name, title and CTAs. */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-grid pt-28 pb-16"
    >
      <ParticleBackground />
      {/* Ambient glow accents (kept very subtle) */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-brand-blue/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-brand-purple/[0.07] blur-[130px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.4fr_1fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-zinc-300"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Open to AI/ML roles &amp; research collaborations
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl font-display font-bold leading-tight tracking-tight sm:text-6xl"
          >
            Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-4 text-lg font-medium text-zinc-200 sm:text-xl"
          >
            {profile.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-3 min-h-[1.75rem] font-mono text-sm text-brand-cyan sm:text-base"
          >
            <TypingText phrases={profile.taglines} />
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

        {/* Photo placeholder with animated gradient ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto"
        >
          <div className="relative h-56 w-56 sm:h-72 sm:w-72">
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/15 to-transparent" />
            <div className="absolute inset-[2px] overflow-hidden rounded-full bg-surface ring-1 ring-white/10">
              <Image
                src={profile.photoUrl}
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                sizes="(max-width: 640px) 224px, 288px"
                className="object-cover"
              />
              {/* Fallback monogram (shown if image is missing, behind <Image>) */}
              <div className="absolute inset-0 -z-10 flex items-center justify-center bg-card text-5xl font-display font-bold text-zinc-700">
                SB
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-zinc-500 transition-colors hover:text-brand-cyan"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  )
}
