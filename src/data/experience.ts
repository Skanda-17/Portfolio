/** Professional experience rendered as a vertical timeline. */
export interface Experience {
  role: string
  organization: string
  duration: string
  location?: string
  achievements: string[]
  technologies: string[]
  /** Headline impact metric, e.g. "Reduced manual readings by 90%". */
  impact: string
}

export const experiences: Experience[] = [
  {
    role: 'Project Intern — Computer Vision',
    organization: 'SakhaTech Information Systems Pvt. Ltd',
    duration: 'Jun 2025 – Jul 2025',
    location: 'Bengaluru, India',
    achievements: [
      'Built an Analog Pressure Gauge Reader that converts gauge photos into accurate digital readings.',
      'Engineered the full CV pipeline: capture, preprocessing, gauge & needle detection, and value estimation.',
      'Integrated the model into a web interface so operators could upload images and get instant readings.',
      'Handled varied lighting, angles and gauge types through targeted data augmentation.',
    ],
    technologies: ['Python', 'OpenCV', 'YOLOv8', 'Computer Vision', 'Flask'],
    impact: 'Reduced manual gauge readings and human error by an estimated 90%.',
  },
  {
    // TODO: Replace this with a real role, or remove it.
    role: 'AI/ML Research Assistant',
    organization: 'Dr. Jyoti R Munavalli @ BNM Institute of Technology ',
    duration: '2025 – Present',
    location: 'Bengaluru, India',
    achievements: [
      '1. Contributed to product development named ColdWatch: An organ box which maintains ideal temperature for specific organs using a auto-cooling system.',
      'Worked on the hardware and software integration of the auto-cooling system.',
      'Developed a web interface for the auto-cooling system.',
      'Patent application filed for the auto-cooling system and has been approved.',
      '2. Contributed to research on multimodal physiological abnormality detection.',
      'Prototyped deep learning models for thermal–RGB fusion based healthcare screening.',
      'Ongoing research on multimodal physiological abnormality detection.',
    ],
    technologies: ['PyTorch', 'TensorFlow', 'Computer Vision', 'Deep Learning', 'Hardware Integration', 'Web Development', 'IoT'],
    impact: 'Improved screening recall over single-modality baselines in internal experiments.',
  },
]
