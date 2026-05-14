import type { JSX } from 'react'

export interface ProjectItemProps {
  title: string
  description: string
  id?: string
  href?: string
  position?: 1 | 2 | 3
}

const laptopImages: Record<NonNullable<ProjectItemProps['position']>, string> = {
  1: '/img/laptop.png',
  2: '/img/laptop-2.png',
  3: '/img/laptop-3.png',
}

function ProjectItem({ title, description, id, href = '#', position = 1 }: ProjectItemProps): JSX.Element {
  return (
    <a className={`project project--position-${position}`} id={id} href={href}>
      <img src={laptopImages[position]} alt="Laptop" className="laptop" />
      <div className="plate">
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="more">Переглянути →</span>
      </div>
    </a>
  )
}

export default ProjectItem
