import type { JSX } from 'react'
import type { PortfolioProject } from '../data/portfolio'
import { assetPath } from '../utils/assets'

interface ProjectModalProps {
  project: PortfolioProject
  onClose: () => void
}

function ProjectModal({ project, onClose }: ProjectModalProps): JSX.Element {
  const details = project.details

  return (
    <div className="project-modal-backdrop" role="presentation" onClick={onClose}>
      <article className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onClick={(event) => event.stopPropagation()}>
        <button className="project-modal-close" type="button" aria-label="Закрити" onClick={onClose}>
          ×
        </button>

        <div className="project-modal-media" style={{ backgroundImage: `url(${assetPath(project.previewImage ?? 'img/example.png')})` }} />

        <div className="project-modal-content">
          {details?.tagline ? <p className="project-modal-kicker">{details.tagline}</p> : null}
          <h2 id="project-modal-title">{project.title}</h2>
          <p>{details?.overview ?? project.description}</p>

          {details?.points.length ? (
            <ul>
              {details.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          ) : null}

          {project.href ? (
            <a className="project-modal-link" href={project.href} target="_blank" rel="noreferrer">
              Відкрити продукт →
            </a>
          ) : null}
        </div>
      </article>
    </div>
  )
}

export default ProjectModal
