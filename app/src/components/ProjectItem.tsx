import type { JSX } from 'react'
import type { ProjectDetails } from '../data/portfolio'

export interface ProjectItemProps {
  title: string
  description: string
  id?: string
  href?: string
  position?: 1 | 2 | 3
  tone?: 1 | 2 | 3 | 4 | 5 | 6
  previewImage?: string
  details?: ProjectDetails
  onShowDetails?: () => void
}

const laptopImages: Record<NonNullable<ProjectItemProps['position']>, string> = {
  1: '/img/laptop.png',
  2: '/img/laptop-2.png',
  3: '/img/laptop-3.png',
}

function ProjectItem({
  title,
  description,
  id,
  href = '#',
  position = 1,
  tone = 1,
  previewImage = '/img/example.png',
  details,
  onShowDetails,
}: ProjectItemProps): JSX.Element {
  return (
    <article className={`project project--position-${position} project--tone-${tone}`} id={id}>
      <div className="laptop-frame">
        <img src={laptopImages[position]} alt="Laptop" className="laptop" />
        <div className="laptop-screen" style={{ backgroundImage: `url(${previewImage})` }} aria-hidden="true" />
      </div>
      <div className="plate">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-actions">
          {href ? (
            <a className="project-action project-action--primary" href={href} target="_blank" rel="noreferrer">
              Відкрити
            </a>
          ) : null}
          {details ? (
            <button className="project-action" type="button" onClick={onShowDetails}>
              Детальніше
            </button>
          ) : null}
        </div>
      </div>
    </article>
  )
}

export default ProjectItem
