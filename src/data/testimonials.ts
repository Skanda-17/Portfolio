/** Professional recommendations. Replace with real quotes when available. */
export interface Testimonial {
  quote: string
  name: string
  role: string
  /** Optional avatar in /public. Falls back to initials. */
  avatar?: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Skanda combines genuine research curiosity with strong engineering discipline. He shipped a production computer-vision pipeline that measurably reduced manual effort on the factory floor.',
    name: 'Project Mentor - Karthik Shastry',
    role: 'SakhaTech Information Systems Pvt. Ltd',
  },
  {
    quote:
      'One of the most driven students I have worked with — he moves quickly from a research idea to a working prototype and documents everything cleanly.',
    name: 'Faculty Advisor',
    role: 'BNM Institute of Technology - Dr. Jyoti R Munavalli',
  },
  {
    quote:
      'A reliable, collaborative teammate during our hackathon. His grasp of deep learning and deployment made the difference between a demo and a real product.',
    name: 'Hackathon Teammate',
    role: 'AI/ML Engineer - Sathvik Madhyastha',
  },
]
