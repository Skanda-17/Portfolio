import type { LucideIcon } from 'lucide-react'
import {
  BrainCircuit,
  Layers,
  Eye,
  Sparkles,
  MessageSquareText,
  Workflow,
  BarChart3,
} from 'lucide-react'

/** Professional summary paragraphs shown in the About section. */
export const aboutParagraphs = [
  "I'm a Bachelor of Engineering student in Artificial Intelligence & Machine Learning at BNM Institute of Technology. I design, train and deploy intelligent systems that turn messy, real-world data into reliable, impactful products.",
  'I work across the full ML lifecycle — from data exploration and model training to fine-tuning and production deployment — with a strong emphasis on computer vision, generative AI and MLOps best practices.',
]

/** One-line personal mission statement. */
export const missionStatement =
  'My mission is to build trustworthy AI that augments human decision-making and solves problems that genuinely matter — in healthcare, justice, industry and beyond.'

export const education = {
  degree: 'B.E. in Artificial Intelligence & Machine Learning',
  institution: 'BNM Institute of Technology',
  location: 'Bengaluru, India',
  period: '2023 – Present',
  detail: 'Coursework in ML, Deep Learning, Computer Vision, NLP, DBMS and Data Structures.',
}

export interface ExpertiseArea {
  title: string
  description: string
  icon: LucideIcon
}

/** Areas of expertise rendered as glass cards. */
export const expertiseAreas: ExpertiseArea[] = [
  {
    title: 'Machine Learning',
    description: 'Supervised, unsupervised & ensemble methods for real-world prediction.',
    icon: BrainCircuit,
  },
  {
    title: 'Deep Learning',
    description: 'CNNs, transformers and custom architectures for vision & sequence tasks.',
    icon: Layers,
  },
  {
    title: 'Computer Vision',
    description: 'Detection, segmentation, OCR and image restoration pipelines.',
    icon: Eye,
  },
  {
    title: 'Generative AI',
    description: 'LLMs, RAG systems and diffusion-based generation.',
    icon: Sparkles,
  },
  {
    title: 'NLP',
    description: 'Text understanding, multilingual processing and transformers.',
    icon: MessageSquareText,
  },
  {
    title: 'MLOps',
    description: 'Containerized, CI/CD-driven model deployment and monitoring.',
    icon: Workflow,
  },
  {
    title: 'Data Science',
    description: 'EDA, feature engineering, forecasting and statistical analysis.',
    icon: BarChart3,
  },
]
