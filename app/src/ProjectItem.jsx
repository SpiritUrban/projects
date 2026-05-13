function ProjectItem({ title, description, id, href = '#' }) {
  return (
    <a className="project" id={id} href={href}>
      <img src="/img/laptop.png" alt="Laptop" className="laptop" />
      <div className="plate">
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="more">Переглянути →</span>
      </div>
    </a>
  )
}

export default ProjectItem
