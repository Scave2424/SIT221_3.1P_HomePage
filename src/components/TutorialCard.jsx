function TutorialCard({ tutorial }) {
  return (
    <article className="card">
      <img src={tutorial.image} alt="Tutorial" />

      <h3>{tutorial.title}</h3>

      <p>{tutorial.description}</p>

      <div className="card-info">
        <span>⭐ {tutorial.rating}</span>
        <span>{tutorial.username}</span>
      </div>
    </article>
  )
}

export default TutorialCard