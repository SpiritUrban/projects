import type { JSX } from 'react'
import { featuredProjects, infoCards, moduleProjects } from '../data/portfolio'
import InfoCard from './InfoCard'
import ProjectItem from './ProjectItem'

function ProjectsSection(): JSX.Element {
  return (
    <section className="sections" id="projects">
      <div className="project-row">
        {featuredProjects.map((project, index) => (
          <ProjectItem key={project.title} {...project} position={(index + 1) as 1 | 2 | 3} />
        ))}
      </div>

      <InfoCard {...infoCards[0]} />

      <div className="project-row">
        {moduleProjects.map((project, index) => (
          <ProjectItem key={project.title} {...project} position={(index + 1) as 1 | 2 | 3} />
        ))}
      </div>

      <InfoCard {...infoCards[1]} />
    </section>
  )
}

export default ProjectsSection
