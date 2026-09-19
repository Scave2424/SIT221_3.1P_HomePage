function Footer() {
  return (
    <footer className="footer">
      <div className="subscribe">
        <h3>SIGN UP FOR OUR DAILY INSIDER</h3>

        <input
          type="email"
          placeholder="Enter your email"
        />

        <button>Subscribe</button>
      </div>

      <div className="footer-content">
        <div>
          <h3>Explore</h3>
          <p>Home</p>
          <p>Questions</p>
          <p>Articles</p>
          <p>Tutorials</p>
        </div>

        <div>
          <h3>Support</h3>
          <p>FAQs</p>
          <p>Help</p>
          <p>Contact Us</p>
        </div>

        <div>
          <h3>Stay connected</h3>
          <div className="social-icons">
            <span>f</span>
            <span>𝕏</span>
            <span>in</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <strong>DEV@Deakin 2026</strong>

        <div>
          <span>Privacy Policy</span>
          <span>Terms</span>
          <span>Code of Conduct</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer