import '../styles/projects.css';

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      title: 'Friends Cart',
      description: "A full-stack e-commerce application featuring a product catalog, shopping cart management, coupon validation, product reviews, and ratings. Includes secure user authentication and optimized database operations.",
      tech: ['Node.js', 'Express', 'MongoDB', 'EJS', 'HTML', 'CSS', 'JavaScript'],
      liveLink: 'https://friendscart.onrender.com/',
      repoLink: 'https://github.com/skmsajid/E-commerce',
      highlights: ['Cart Management', 'Coupon System', 'User Reviews', 'Ratings']
    },
    {
      id: 2,
      title: 'Weather App',
      description: 'A responsive weather application that fetches real-time weather data using OpenWeatherMap API. Features city search, current weather display, forecasts, and a beautiful responsive UI design.',
      tech: ['React', 'JavaScript', 'OpenWeatherMap API', 'CSS', 'Responsive Design'],
      liveLink: 'https://weather-by-sajid.onrender.com',
      repoLink: 'https://github.com/skmsajid/Whether-App',
      highlights: ['Real-time Data', 'City Search', 'API Integration', 'Responsive']
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="projects-subtitle">
          Showcase of full-stack and frontend projects demonstrating modern web development practices and problem-solving skills.
        </p>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={project.id} className={`project-card ${index === 0 ? 'featured' : ''}`}>
              <div className="project-header">
                {index === 0 && <span className="featured-badge">⭐ Featured</span>}
                <h3 className="project-title">{project.title}</h3>
              </div>

              <p className="project-description">{project.description}</p>

              {project.highlights && (
                <div className="project-highlights">
                  {project.highlights.map((highlight, idx) => (
                    <span key={idx} className="highlight-tag">{highlight}</span>
                  ))}
                </div>
              )}

              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link live-link"
                >
                  🔗 Live Demo
                </a>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link repo-link"
                >
                  💻 GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-note">
          <p>
            Currently working on more projects. Check back soon for updates! 
            <a href="https://github.com/skmsajid" target="_blank" rel="noopener noreferrer">View all on GitHub →</a>
          </p>
        </div>
      </div>
    </section>
  );
}
