import { faker } from '@faker-js/faker'
import TutorialCard from './TutorialCard'

const tutorials = [
  {
    id: 1,
    title: faker.word.words(3),
    description: faker.word.words(6),
    username: faker.internet.username(),
    rating: 5,
    image: '/project1.png'
  },
  {
    id: 2,
    title: faker.word.words(3),
    description: faker.word.words(6),
    username: faker.internet.username(),
    rating: 5,
    image: '/project2.png'
  },
  {
    id: 3,
    title: faker.word.words(3),
    description: faker.word.words(6),
    username: faker.internet.username(),
    rating: 4.9,
    image: '/photo4.jpeg'
  }
]

function FeaturedTutorials() {
  return (
    <section id="tutorials" className="featured-section">
      <h2>Featured Tutorials</h2>

      <div className="card-container">
        {tutorials.map((tutorial) => (
          <TutorialCard
            key={tutorial.id}
            tutorial={tutorial}
          />
        ))}
      </div>

      <button className="see-all-button">
        See all tutorials
      </button>
    </section>
  )
}

export default FeaturedTutorials