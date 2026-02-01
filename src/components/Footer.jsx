import '../styles/footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-brand">Sajid</h3>
            <p>DSA & Problem Solver | Software Developer</p>
            <p>Badvel</p>
            <p>Kadapa District</p>
            <p>Andhra Pradesh, India</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Connect With Me</h4>
            <div className="social-links">
              <a href="https://github.com/skmsajid/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/shaik-mahammad-sajid/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                LinkedIn
              </a>
              <a href="mailto:maraballikwt@gmail.com" aria-label="Email">
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Sajid. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
