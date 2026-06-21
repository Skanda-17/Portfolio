'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { profile } from '@/lib/profile'

/**
 * Modern loading screen shown briefly on first paint.
 * Displays the brand monogram with an animated gradient ring, then fades out.
 */
export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-surface"
        >
          <div className="relative h-24 w-24">
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-brand-cyan border-r-brand-purple"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-display font-bold gradient-text">
                {profile.firstName.charAt(0)}B
              </span>
            </div>
          </div>
          <motion.p
            className="mt-6 text-xs uppercase tracking-[0.35em] text-zinc-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Loading portfolio
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
