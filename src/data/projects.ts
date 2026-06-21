/** Featured projects rendered as premium, filterable cards. */
export type ProjectCategory =
  | 'Computer Vision'
  | 'Generative AI'
  | 'Healthcare AI'
  | 'Data Science'
  | 'IoT & Embedded'

export interface Project {
  title: string
  category: ProjectCategory
  problem: string
  solution: string
  technologies: string[]
  results: string[]
  github?: string
  demo?: string
  /** Optional image in /public/projects. Falls back to a gradient when absent. */
  image?: string
  gradient: string
}

export const projectCategories: (ProjectCategory | 'All')[] = [
  'All',
  'Computer Vision',
  'Generative AI',
  'Healthcare AI',
  'Data Science',
  'IoT & Embedded',
]

export const projects: Project[] = [
  {
    title: 'Justice Lens',
    category: 'Computer Vision',
    problem:
      'Critical legal documents are often degraded, blurred or damaged, making forensic text recovery slow and unreliable.',
    solution:
      'An AI-powered restoration and OCR system using a fine-tuned Swin2SR transformer to deblur documents, followed by an OCR stage for high-fidelity text recovery.',
    technologies: ['Python', 'PyTorch', 'Swin2SR', 'OpenCV', 'OCR'],
    results: [
      'Recovered legible text from heavily degraded documents',
      'Restored fine-grained character detail for forensic use',
    ],
    github: 'https://github.com/Skanda-17',
    demo: '#',
    image: '/projects/justice-lens.jpg',
    gradient: 'from-sky-500/40 via-indigo-500/40 to-fuchsia-500/40',
  },
  {
    title: 'SQUAADO',
    category: 'Computer Vision',
    problem:
      'Grassroots athletes lack access to affordable, data-driven performance and biomechanics analysis.',
    solution:
      'An AI-powered athlete performance platform delivering real-time posture analysis and cricket analytics from video using pose estimation and motion tracking.',
    technologies: ['Python', 'MediaPipe', 'OpenCV', 'YOLOv8', 'React'],
    results: [
      'Real-time posture & biomechanics feedback',
      'Automated cricket performance analytics',
    ],
    github: 'https://github.com/Skanda-17',
    demo: '#',
    image: '/projects/squaado.jpg',
    gradient: 'from-emerald-500/40 via-cyan-500/40 to-blue-500/40',
  },
  {
    title: 'Multimodal Thermal-RGB Physiological Abnormality Detection',
    category: 'Healthcare AI',
    problem:
      'Single-modality screening misses subtle physiological abnormalities and is sensitive to lighting and skin tone.',
    solution:
      'A deep learning healthcare screening system that fuses thermal and RGB imagery to detect physiological abnormalities more robustly than single-modality baselines.',
    technologies: ['Python', 'PyTorch', 'Deep Learning', 'Sensor Fusion'],
    results: [
      'Improved recall through thermal–RGB fusion',
      'More robust to lighting and skin-tone variation',
    ],
    github: 'https://github.com/Skanda-17',
    demo: '#',
    image: '/projects/thermal-rgb.jpg',
    gradient: 'from-rose-500/40 via-orange-500/40 to-amber-500/40',
  },
  {
    title: 'Pressure Gauge Reader',
    category: 'Computer Vision',
    problem:
      'Manual reading of analog industrial pressure gauges is slow, error-prone and hard to scale across a factory floor.',
    solution:
      'A computer vision and OCR based automation solution that detects the gauge and needle and converts pointer position into accurate digital readings via a web interface.',
    technologies: ['Python', 'OpenCV', 'YOLOv8', 'Flask'],
    results: [
      'Automated readings from uploaded photos',
      'Reduced manual effort and human error by ~90%',
    ],
    github: 'https://github.com/Skanda-17',
    demo: '#',
    image: '/projects/pressure-gauge.jpg',
    gradient: 'from-cyan-500/40 via-blue-500/40 to-indigo-500/40',
  },
  {
    title: 'Retail Sales Forecasting',
    category: 'Data Science',
    problem:
      'Retailers struggle to plan inventory and strategy without reliable short-term demand forecasts.',
    solution:
      'A cloud-deployed time series forecasting system that predicts sales for the next 30 days using advanced machine learning on historical data.',
    technologies: ['Python', 'Scikit-Learn', 'XGBoost', 'Render'],
    results: [
      '~92% forecast accuracy on held-out data',
      'Actionable 30-day demand forecasts for planning',
    ],
    github: 'https://github.com/Skanda-17',
    demo: '#',
    image: '/projects/sales-forecast.jpg',
    gradient: 'from-amber-500/40 via-orange-500/40 to-rose-500/40',
  },
  {
    title: 'Optic Log — Digital Attendance Management',
    category: 'Computer Vision',
    problem:
      'Manual attendance is slow, error-prone and easy to manipulate through proxies.',
    solution:
      'An AI-powered digital attendance platform that automates attendance through biometric face verification — transforming attendance management with intelligent automation.',
    technologies: ['React', 'Express.js', 'AWS Rekognition', 'Node.js'],
    results: [
      'Automated biometric attendance via face verification',
      'Eliminated proxy and manual-entry errors',
    ],
    github: 'https://github.com/Skanda-17',
    demo: '#',
    image: '/projects/optic-log.jpg',
    gradient: 'from-indigo-500/40 via-blue-500/40 to-cyan-500/40',
  },
  {
    title: 'Adhyayana',
    category: 'Generative AI',
    problem:
      'Exam preparation is generic and rarely adapts to an individual learner’s strengths, gaps or context.',
    solution:
      'An AI-powered adaptive learning platform enabling personalized exam-prep through a self-correcting RAG pipeline with multimodal understanding, knowledge graphs and document retrieval.',
    technologies: ['RAG', 'BGE-M3', 'Neo4j', 'LangGraph', 'AWS S3'],
    results: [
      'Personalized, adaptive exam-prep journeys',
      'Self-correcting multimodal pipeline grounded in knowledge graphs',
    ],
    github: 'https://github.com/Skanda-17',
    demo: '#',
    image: '/projects/adhyayana.jpg',
    gradient: 'from-purple-500/40 via-fuchsia-500/40 to-indigo-500/40',
  },
  {
    title: 'DeepFake Image Detection',
    category: 'Computer Vision',
    problem:
      'Distinguishing authentic images from AI-generated or manipulated fakes is increasingly difficult.',
    solution:
      'A CNN classifier that labels images as real or fake, trained on 6,000+ images using a deep architecture of 6 convolutional and 6 max-pooling layers for maximum feature extraction.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'CNN'],
    results: [
      '94% classification accuracy',
      'Deep 6-conv / 6-pool architecture for robust feature extraction',
    ],
    github: 'https://github.com/Skanda-17',
    demo: '#',
    image: '/projects/deepfake.jpg',
    gradient: 'from-rose-500/40 via-pink-500/40 to-purple-500/40',
  },
  {
    title: 'ColdWatch',
    category: 'IoT & Embedded',
    problem:
      'Organs for transplant must stay within a strict temperature range during transport; manual monitoring is unreliable and a single breach can render an organ unusable.',
    solution:
      'An ESP32-based smart transport box integrated with temperature and motion sensors and an auto-cooling system that activates on threshold values to maintain the required internal temperature.',
    technologies: ['ESP32', 'Arduino', 'IoT Sensors', 'Embedded Systems'],
    results: [
      'Threshold-based auto-cooling keeps organs in range',
      'Real-time temperature & motion monitoring in transit',
    ],
    github: 'https://github.com/Skanda-17',
    demo: '#',
    image: '/projects/coldwatch.jpg',
    gradient: 'from-cyan-500/40 via-sky-500/40 to-blue-500/40',
  },
]
