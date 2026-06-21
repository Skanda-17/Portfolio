import type { Metadata } from 'next'
import { profile } from '@/lib/profile'

export const metadata: Metadata = {
  title: 'Resume',
  description: `Resume of ${profile.name} — ${profile.title}.`,
}

/** Standalone embedded resume viewer with a download action. */
export default function ResumePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-28 pb-16 animate-fade-in">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h1 className="font-display text-2xl font-bold gradient-text">Resume</h1>
        <a
          href={profile.resumeUrl}
          download
          className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]"
        >
          Download PDF
        </a>
      </div>
      <div className="glass min-h-[70vh] overflow-hidden rounded-2xl">
        <iframe
          src={profile.resumeUrl}
          className="h-[78vh] w-full border-0"
          title={`${profile.name} resume`}
        />
      </div>
    </div>
  )
}
