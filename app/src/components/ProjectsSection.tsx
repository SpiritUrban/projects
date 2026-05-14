import type { JSX } from 'react'
import { featuredProjects, infoCards, moduleProjects } from '../data/portfolio'
import InfoCard from './InfoCard'
import ProjectItem from './ProjectItem'

function ProjectsSection(): JSX.Element {
  return (
    <section className="sections" id="projects">
      <div className="project-row">
        {featuredProjects.map((project) => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </div>

      <InfoCard {...infoCards[0]} />

      <div className="project-row">
        {moduleProjects.map((project) => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </div>

      <InfoCard {...infoCards[1]} />
    </section>
  )
}

export default ProjectsSection
