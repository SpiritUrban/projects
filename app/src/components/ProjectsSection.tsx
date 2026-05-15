import { useState, type JSX } from 'react'
import { featuredProjects, infoCards, moduleProjects, type PortfolioProject } from '../data/portfolio'
import InfoCard from './InfoCard'
import ProjectModal from './ProjectModal'
import ProjectItem from './ProjectItem'

const getPosition = (index: number): 1 | 2 | 3 => ((index % 3) + 1) as 1 | 2 | 3
const getTone = (index: number): 1 | 2 | 3 | 4 | 5 | 6 => ((index % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6

function ProjectsSection(): JSX.Element {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null)

  return (
    <section className="sections" id="projects">
      <div className="project-row">
        {featuredProjects.map((project, index) => (
          <ProjectItem
            key={project.title}
            {...project}
            position={getPosition(index)}
            tone={getTone(index)}
            onShowDetails={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <InfoCard {...infoCards[0]} />

      <div className="project-row">
        {moduleProjects.map((project, index) => (
          <ProjectItem
            key={project.title}
            {...project}
            position={getPosition(index)}
            tone={getTone(featuredProjects.length + index)}
            onShowDetails={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <InfoCard {...infoCards[1]} />
      {selectedProject ? <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} /> : null}
    </section>
  )
}

export default ProjectsSection
