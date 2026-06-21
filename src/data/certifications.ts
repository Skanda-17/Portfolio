/** Certifications rendered in a responsive grid. Replace with your real ones. */
export interface Certification {
  name: string
  issuer: string
  date: string
  credentialUrl?: string
}

export const certifications: Certification[] = [
  {
    name: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'DeepLearning.AI / Stanford',
    date: '2026',
    credentialUrl: 'https://coursera.org/verify/1L4DCRT9P2XM',
  },
  {
    name: 'Neural Networks and Deep Learning',
    issuer: 'DeepLearning.AI',
    date: '2026',
    credentialUrl: 'https://coursera.org/verify/IHJ1S1AW0GRI',
  },
  
]
