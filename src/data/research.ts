/** Publications, patents and ongoing research for the Research section. */
export type ResearchType = 'Paper' | 'Patent' | 'Ongoing'

export interface ResearchItem {
  type: ResearchType
  title: string
  abstract: string
  venue: string
  year: string
  doi?: string
}

export const researchTypes: (ResearchType | 'All')[] = [
  'All',
  'Paper',
  'Patent',
  'Ongoing',
]

export const researchItems: ResearchItem[] = [
  {
    // TODO: replace with your real publication details
    type: 'Paper',
    title: 'Justice Lens: A Real-Time Document Deblurring and OCR Extraction Pipeline for Legal Documents',
    abstract:
      'We propose a deep learning framework that deblurs and extracts text from legal documents in real-time.',
    venue: 'Yet to be decided',
    year: '2026',
    doi: '#',
  },
  {
    type: 'Patent',
    title: 'ColdWatch: Organ Box with an Auto-Cooling System',
    abstract:
      'We propose an organ box that maintains ideal temperature for specific organs using a auto-cooling system.',
    venue: 'Patent Application — filed',
    year: '2026',
    doi: '#',
  },
  {
    type: 'Ongoing',
    title: 'Multimodal Physiological Abnormality Detection',
    abstract:
      'Captures Thermal and RGB imagery of the body and uses a multi-modal model to detect physiological abnormalities analyzing both the images.',
    venue: 'In progress',
    year: '2026',
  },
]

/** Broad research interests shown as tags. */
export const researchInterests = [
  'Computer Vision',
  'Multimodal Learning',
  'Generative AI & LLMs',
  'Retrieval-Augmented Generation',
  'AI for Healthcare',
  'Trustworthy & Robust ML',
]
