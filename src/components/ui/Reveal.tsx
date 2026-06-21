'use client'

import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

/**
 * Scroll-triggered reveal wrapper.
 * Fades + slides children into view once when they enter the viewport.
 */
const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

interface RevealProps {
  children: ReactNode
  /** Stagger delay in seconds. */
  delay?: number
  className?: string
  as?: 'div' | 'li' | 'section'
}

export default function Reveal({
  children,
  delay = 0,
  className,
  as = 'div',
}: RevealProps) {
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
    >
      {children}
    </MotionTag>
  )
}
