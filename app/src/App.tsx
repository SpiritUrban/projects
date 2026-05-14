import type { JSX } from 'react'
import './styles.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectsSection from './components/ProjectsSection'

function App(): JSX.Element {
  return (
    <div className="site">
      <div className="bg-image-placeholder"></div>
      <div className="noise"></div>
      <div className="vignette"></div>

      <Header />
      <Hero />
      <ProjectsSection />
      <Footer />
    </div>
  )
}

export default App
