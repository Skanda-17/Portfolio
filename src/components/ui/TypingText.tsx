'use client'

import { useEffect, useState } from 'react'

interface TypingTextProps {
  /** Phrases cycled through with a typewriter effect. */
  phrases: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseMs?: number
  className?: string
}

/** Looping typewriter animation used in the hero tagline. */
export default function TypingText({
  phrases,
  typingSpeed = 55,
  deletingSpeed = 30,
  pauseMs = 1600,
  className,
}: TypingTextProps) {
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex % phrases.length]

    if (!deleting && text === current) {
      const timeout = setTimeout(() => setDeleting(true), pauseMs)
      return () => clearTimeout(timeout)
    }

    if (deleting && text === '') {
      setDeleting(false)
      setPhraseIndex((i) => (i + 1) % phrases.length)
      return
    }

    const timeout = setTimeout(
      () => {
        const next = deleting
          ? current.slice(0, text.length - 1)
          : current.slice(0, text.length + 1)
        setText(next)
      },
      deleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [text, deleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseMs])

  return (
    <span className={className} aria-live="polite">
      {text}
      <span className="ml-0.5 inline-block w-0.5 h-[1em] translate-y-0.5 bg-brand-cyan animate-blink" />
    </span>
  )
}
