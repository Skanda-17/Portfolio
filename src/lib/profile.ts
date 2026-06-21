/**
 * Central profile / contact information.
 * Update the values below with your real details, links and assets.
 */
export const profile = {
  name: 'Skanda Bharadwaj GM',
  firstName: 'Skanda',
  title: 'Artificial Intelligence & Machine Learning Engineer',
  // Short, rotating taglines used by the hero typing animation.
  taglines: [
    'Building intelligent systems that turn data into impact.',
    'Agentic AI · Computer Vision · Generative AI · MLOps.',
    'From research notebooks to production-grade ML.',
  ],
  summary:
    'AI/ML engineer and researcher focused on building production-grade intelligent systems across agentic AIcomputer vision, generative AI and applied deep learning.',
  location: 'Bengaluru, India',
  email: 'skandabharadwajgm@gmail.com', // TODO: replace with your real email
  phone: '+91 8217289336',

  // Social & external links
  github: 'https://github.com/Skanda-17',
  linkedin: 'https://linkedin.com/in/skanda-bharadwaj-gm-718971358/',
  instagram: 'https://instagram.com/skanda._17?igsh=MWQyM3h3aWFvaHJyOA==',

  // GitHub username used by the activity dashboard API integration
  githubUsername: 'Skanda-17',

  /**
   * Repositories to pin to the top of the "Repository Highlights" dashboard,
   * in display order. Each entry is matched against live repo names by the
   * lowercase keywords below (a repo matches if its name includes any keyword).
   * Repos that haven't been pushed yet are simply skipped until they exist.
   */
  pinnedRepos: [
    { label: 'Justice Lens', keywords: ['justice'] },
    { label: 'Digital Attendance (Optic Log)', keywords: ['optic', 'attendance'] },
    { label: 'Pressure Gauge Reader', keywords: ['pressure', 'gauge'] },
    // Uncomment after pushing these repositories to GitHub:
    // { label: 'Adhyayana', keywords: ['adhyayana'] },
    // { label: 'DeepFake Image Detection', keywords: ['deepfake', 'fake'] },
  ] as { label: string; keywords: string[] }[],

  // Assets (place files in /public)
  resumeUrl: '/resume.pdf',
  photoUrl: '/profile.png', // TODO: add a square professional photo at public/profile.jpg

  // Site URL for SEO / Open Graph
  siteUrl: 'https://skanda-portfolio.vercel.app',
}

export type Profile = typeof profile
