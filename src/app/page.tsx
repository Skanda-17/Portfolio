import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Research from '@/components/sections/Research'
import Certifications from '@/components/sections/Certifications'
import Achievements from '@/components/sections/Achievements'
import GitHubActivity from '@/components/sections/GitHubActivity'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'

/**
 * Single-page portfolio composing every section in order.
 * Each section owns its own anchor id for the floating navigation.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Research />
      <Certifications />
      <Achievements />
      <GitHubActivity />
      <Testimonials />
      <Contact />
    </>
  )
}
