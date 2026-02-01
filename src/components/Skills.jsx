import '../styles/skills.css';

export default function Skills() {
  const skillsData = {
    'Frontend': ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design', 'Flexbox & Grid', 'CSS Animations'],
    'Languages & Runtime': ['Python', 'JavaScript', 'Node.js', 'Express.js', 'EJS'],
    'Databases': ['MongoDB', 'MySQL', 'Database Design', 'Query Optimization', 'Collections'],
    'DSA & Problem Solving': ['Data Structures', 'Algorithms', 'LeetCode', 'Code Optimization', 'Time Complexity', 'Space Complexity'],
    'Tools & Version Control': ['Git', 'GitHub', 'VS Code', 'npm', 'Vite', 'Dev Tools', 'Terminal/CLI'],
    'Full Stack': ['MERN Stack', 'REST APIs', 'Authentication', 'Session Management', 'E-Commerce Basics']
  };

  const proficiencyLevels = {
    'React': 'Expert',
    'JavaScript': 'Advanced',
    'Node.js': 'Advanced',
    'MongoDB': 'Intermediate',
    'Python': 'Intermediate',
    'DSA': 'Advanced',
    'HTML/CSS': 'Expert',
    'Git': 'Advanced'
  };

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="skills-subtitle">
          Proficient in full-stack development with strong fundamentals in web technologies, databases, and algorithms.
        </p>

        <div className="skills-grid">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="skill-category">
              <div className="category-header">
                <h3 className="category-title">{category}</h3>
                <span className="category-icon">
                  {category.includes('Frontend') && '🎨'}
                  {category.includes('Languages') && '💻'}
                  {category.includes('Database') && '🗄️'}
                  {category.includes('DSA') && '🧠'}
                  {category.includes('Tools') && '🛠️'}
                  {category.includes('Full Stack') && '🚀'}
                </span>
              </div>
              <div className="skill-tags">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag" title={proficiencyLevels[skill] || 'Proficient'}>
                    {skill}
                    {proficiencyLevels[skill] && <span className="proficiency-badge">{proficiencyLevels[skill][0]}</span>}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="proficiency-legend">
          <div className="legend-item">
            <span className="legend-dot expert"></span>
            <span>Expert</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot advanced"></span>
            <span>Advanced</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot intermediate"></span>
            <span>Intermediate</span>
          </div>
        </div>
      </div>
    </section>
  );
}
