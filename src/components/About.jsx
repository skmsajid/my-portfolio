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
      institution: "RGUKT RK Valley, Andhra Pradesh",
      degree: "Pre-University Course (PUC)",
      status: "Completed",
      cgpa: "CGPA: 9.95",
      year: "2021-2023"
    },
    {
      institution: "ZPHS Boys, Badvel, Andhra Pradesh",
      degree: "Class X (SSC)",
      status: "Completed",
      cgpa: "CGPA: 10.0",
      year: "2021"
    }
  ];

  const strengths = [
    "Full Stack Development (MERN Stack)",
    "Data Structure & Algorithm Optimization",
    "Database Design & Optimization"
  ];

  const achievements = [
    { number: "600+", label: "LeetCode Problems" },
    { number: "Top 3K", label: "Global Rank" },
    { number: "2+", label: "Full Stack Projects" }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>

        {/* Intro Text */}
        <div className="about-intro-box">
          <p className="about-intro-text">
            Motivated B.Tech CSE student with hands-on experience in full-stack web development using MERN stack. 
            Passionate problem solver with strong DSA fundamentals and proven track record of building scalable web applications. 
            Dedicated to continuous learning and staying current with modern web technologies.
          </p>
        </div>

        {/* Education Journey Section */}
        <div className="education-section">
          <h3 className="subsection-title">🎓 Education Journey</h3>
          <div className="education-timeline">
            {education.map((edu, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <div className="timeline-dot"></div>
                  {index < education.length - 1 && <div className="timeline-line"></div>}
                </div>
                <div className="timeline-content">
                  <div className="edu-box">
                    <div className="edu-header">
                      <h4 className="edu-degree">{edu.degree}</h4>
                      <span className="edu-status">{edu.status}</span>
                    </div>
                    <p className="edu-institution">{edu.institution}</p>
                    <div className="edu-meta">
                      <span className="edu-cgpa">{edu.cgpa}</span>
                      <span className="edu-year">{edu.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strengths, Career Focus & Achievements Section */}
        <div className="about-details-section">
          {/* Strengths */}
          <div className="detail-card strengths-card">
            <h3 className="card-title">💪 Strengths</h3>
            <div className="strengths-list">
              {strengths.map((strength, index) => (
                <div key={index} className="strength-item">
                  <div className="strength-icon">✓</div>
                  <p>{strength}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Career Focus */}
          <div className="detail-card career-card">
            <h3 className="card-title">🎯 Career Focus</h3>
            <p className="career-text">
              Aspiring to become a proficient full-stack developer capable of building end-to-end solutions. 
              Focused on mastering modern web technologies and contributing to impactful projects that solve real-world problems. 
              Committed to achieving excellence through continuous learning.
            </p>
          </div>

          {/* Achievements */}
          <div className="detail-card achievements-card">
            <h3 className="card-title">📊 Achievements</h3>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-item">
                  <div className="achievement-number">{achievement.number}</div>
                  <div className="achievement-label">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
