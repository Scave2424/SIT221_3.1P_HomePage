import './App.css'
import Header from './components/Header'
import FeaturedArticles from './components/FeaturedArticles'
import FeaturedTutorials from './components/FeaturedTutorials'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />

      <main>
        <div id="home" className="hero">
          <img src="/deakin.jpeg" alt="Deakin University" />

          <div className="hero-text">
            Hey, I'm Ketan
          </div>
        </div>

        <section id="about" className="about">
          <img src="/your.webp" className="profile" alt="Ketan" />

          <p>
            I am 2nd Year BE Software Engineering Student, pursuing Deakin
            University program.
          </p>

          <hr />

          <h2>Here's what I've done so far</h2>

          <div className="project">
            <img src="/project1.png" alt="BMI Calculator" />

            <div>
              <h3>BMI Calculator</h3>

              <p>
                Vanilla JS — validates inputs and shows category
                (Underweight/Normal/Overweight/Obese) with color-coded results.
              </p>

              <a
                href="https://github.com/Scave2424/Frontend-Development_Project-02.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="project">
            <img src="/project2.png" alt="Student Registration Form" />

            <div>
              <h3>Student Registration Form</h3>

              <p>
                Vanilla JS — validates input and dynamically adds entries to a
                table.
              </p>

              <a
                href="https://github.com/Scave2424/Frontend-Development_Project-01.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        <FeaturedArticles />

        <FeaturedTutorials />
      </main>

      <Footer />
    </>
  )
}

export default App