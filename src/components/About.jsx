import '../styles/about.css';

export default function About() {
  const education = [
    {
      institution: "RGUKT RK Valley, Andhra Pradesh",
      degree: "B.Tech CSE",
      status: "Pursuing",
      cgpa: "CGPA: 8.9",
      year: "2023-Present"
    },
    {
      institution: "Government",
      degree: "PUC",
      status: "Completed",
      cgpa: "9.95%",
      year: "2021-2023"
    },
    {
      institution: "Government",
      degree: "SSC",
      status: "Completed",
      cgpa: "10.0 GPA",
      year: "2021"
    }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              Motivated B.Tech CSE student with hands-on experience in full-stack web development using MERN stack. 
              Passionate problem solver with strong DSA fundamentals and proven track record of building scalable web applications. 
              Dedicated to continuous learning and staying current with modern web technologies.
            </p>

            <div className="about-details">
              <div className="detail-group">
                <h3>🎓 Education</h3>
                <div className="education-list">
                  {education.map((edu, index) => (
                    <div key={index} className="education-item">
                      <div className="edu-header">
                        <span className="edu-degree">{edu.degree}</span>
                        <span className="edu-status">{edu.status}</span>
                      </div>
                      <p className="edu-institution">{edu.institution}</p>
                      <div className="edu-footer">
                        <span>{edu.cgpa}</span>
                        <span>{edu.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="detail-group">
                <h3>💪 Strengths</h3>
                <ul className="strengths-list">
                  <li>Full Stack Development (MERN Stack)</li>
                  <li>Data Structure & Algorithm Optimization</li>
                  <li>Database Design & Optimization (MySQL, MongoDB)</li>
                  <li>Responsive UI/UX Implementation</li>
                  <li>Clean Code & Best Practices</li>
                  <li>Problem-Solving & Critical Thinking</li>
                </ul>
              </div>

              <div className="detail-group">
                <h3>🎯 Career Focus</h3>
                <p>
                  Aspiring to become a proficient full-stack developer capable of building end-to-end solutions. 
                  Focused on mastering modern web technologies and contributing to impactful projects that solve real-world problems. 
                  Committed to achieving excellence through continuous learning and practical application of knowledge.
                </p>
              </div>

              <div className="detail-group highlight">
                <h3>📊 Achievements</h3>
                <div className="achievements-grid">
                  <div className="achievement-item">
                    <span className="achievement-number">600+</span>
                    <span className="achievement-label">LeetCode Problems</span>
                  </div>
                  <div className="achievement-item">
                    <span className="achievement-number">Top 3K</span>
                    <span className="achievement-label">Global Rank</span>
                  </div>
                  <div className="achievement-item">
                    <span className="achievement-number">2+</span>
                    <span className="achievement-label">Full Stack Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
