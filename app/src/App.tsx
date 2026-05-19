import type { JSX } from 'react'
import './styles.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectsSection from './components/ProjectsSection'
import { assetPath } from './utils/assets'

function App(): JSX.Element {
  return (
    <div className="site">
      <div
        className="bg-image-placeholder"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.24), rgba(0, 0, 0, 0.42)), url(${assetPath('img/bg-1.png')})` }}
      ></div>
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
