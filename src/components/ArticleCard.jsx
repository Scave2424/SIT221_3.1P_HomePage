function ArticleCard({ article }) {
  return (
    <article className="card">
      <img src={article.image} alt="Article" />

      <h3>{article.title}</h3>

      <p>{article.description}</p>

      <div className="card-info">
        <span>⭐ {article.rating}</span>
        <span>{article.author}</span>
      </div>
    </article>
  )
}

export default ArticleCard