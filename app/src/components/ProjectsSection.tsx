import type { JSX } from 'react'
import { featuredProjects, infoCards, moduleProjects } from '../data/portfolio'
import InfoCard from './InfoCard'
import ProjectItem from './ProjectItem'

const getPosition = (index: number): 1 | 2 | 3 => ((index % 3) + 1) as 1 | 2 | 3
const getTone = (index: number): 1 | 2 | 3 | 4 | 5 | 6 => ((index % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6

function ProjectsSection(): JSX.Element {
  return (
    <section className="sections" id="projects">
      <div className="project-row">
        {featuredProjects.map((project, index) => (
          <ProjectItem key={project.title} {...project} position={getPosition(index)} tone={getTone(index)} />
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
          />
        ))}
      </div>

      <InfoCard {...infoCards[1]} />
    </section>
  )
}

export default ProjectsSection
