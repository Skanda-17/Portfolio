/** Section anchors used by the floating navigation bar. */
export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
] as const

export type NavItem = (typeof navItems)[number]
