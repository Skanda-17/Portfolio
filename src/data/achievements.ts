import type { LucideIcon } from 'lucide-react'
import {
  GraduationCap,
  FileText,
  Award,
  Briefcase,
  Trophy,
  Code2,
} from 'lucide-react'

/** Animated statistic counters for the Achievements section. */
export interface Stat {
  label: string
  value: number
  /** Optional suffix, e.g. "+", "%", "/10". */
  suffix?: string
  /** Number of decimal places for the animated counter. */
  decimals?: number
  icon: LucideIcon
}

export const stats: Stat[] = [
  { label: 'CGPA', value: 9.2, suffix: '/10', decimals: 1, icon: GraduationCap },
  { label: 'Publications', value: 1, suffix: '', icon: FileText },
  { label: 'Patents Filed', value: 1, suffix: '', icon: Award },
  { label: 'Internships', value: 1, suffix: '+', icon: Briefcase },
  { label: 'Hackathons', value: 3, suffix: '+', icon: Trophy },
  { label: 'Tech Competitions', value: 3, suffix: '+', icon: Code2 },
]
