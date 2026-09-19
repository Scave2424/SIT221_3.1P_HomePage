import { faker } from '@faker-js/faker'
import ArticleCard from './ArticleCard'

const articles = [
  {
    title: "Getting Started with React",
    description: faker.word.words(6),
    rating: 5,
    author: faker.internet.username(),
    image: "/photo1.jpeg"
  },
  {
    title: "Understanding JavaScript",
    description: faker.word.words(6),
    rating: 5,
    author: faker.internet.username(),
    image: "/photo2.jpeg"
  },
  {
    title: "Building Better Web Interfaces",
    description:faker.word.words(6),
    rating: 5,
    author: faker.internet.username(),
    image: "/photo3.jpeg"
  }
];

function FeaturedArticles() {
  return (
    <section id="articles" className="featured-section">
      <h2>Featured Articles</h2>

      <div className="card-container">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
          />
        ))}
      </div>

      <button className="see-all-button">
        See all articles
      </button>
    </section>
  )
}

export default FeaturedArticles