import type { JSX } from 'react'

interface InfoCardProps {
  tag: string
  title: string
  description: string
}

function InfoCard({ tag, title, description }: InfoCardProps): JSX.Element {
  return (
    <div className="info-card">
      <span className="info-tag">{tag}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default InfoCard
