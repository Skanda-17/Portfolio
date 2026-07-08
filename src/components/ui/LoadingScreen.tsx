'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { profile } from '@/lib/profile'

/**
 * Minimal loading screen shown briefly on first paint, then fades out.
 */
export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-surface"
        >
          <span className="h-8 w-8 animate-spin rounded-full border-2 border-white/15 border-t-accent" />
          <p className="mt-5 text-sm font-medium text-zinc-400">
            {profile.name}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
