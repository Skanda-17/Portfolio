/**
 * Technical skills grouped by category.
 * Each group is rendered as an interactive glass card with hover effects.
 */
export interface SkillGroup {
  category: string
  /** Tailwind gradient classes used for the card accent. */
  gradient: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Programming',
    gradient: 'from-blue-800/20 to-cyan-800/20',
    skills: ['Python', 'Java', 'SQL'],
  },
  {
    category: 'AI & Machine Learning',
    gradient: 'from-cyan-800/20 to-sky-800/20',
    skills: ['Scikit-Learn', 'TensorFlow', 'PyTorch', 'XGBoost', 'Keras'],
  },
  {
    category: 'Computer Vision',
    gradient: 'from-purple-800/20 to-fuchsia-800/20',
    skills: ['OpenCV', 'YOLOv8', 'MediaPipe', 'Detectron2', 'RTMPose'],
  },
  {
    category: 'Generative AI & LLMs',
    gradient: 'from-indigo-800/20 to-purple-800/20',
    skills: ['LangChain', 'RAG', 'FAISS', 'Hugging Face Transformers', 'Ollama'],
  },
  {
    category: 'Data Science',
    gradient: 'from-sky-800/20 to-blue-800/20',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
  },
  {
    category: 'Cloud & Deployment',
    gradient: 'from-cyan-800/20 to-teal-800/20',
    skills: ['AWS', 'Docker', 'GitHub Actions', 'Render'],
  },
  {
    category: 'Databases',
    gradient: 'from-violet-800/20 to-blue-800/20',
    skills: ['MySQL', 'PostgreSQL', 'Supabase'],
  },
]

/**
 * Optional logo icons (devicon CDN) used to decorate well-known skills.
 * Skills without an entry simply render their name.
 */
export const skillIcons: Record<string, string> = {
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
  Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  SQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg',
  'Scikit-Learn': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg',
  TensorFlow: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg',
  PyTorch: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg',
  Keras: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg',
  OpenCV: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg',
  Pandas: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg',
  NumPy: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg',
  AWS: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  Docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
  'GitHub Actions': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg',
  MySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  PostgreSQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  Supabase: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',
}
