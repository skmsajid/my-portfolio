import '../styles/skills.css';

export default function Skills() {
  const skills = [
    'Python',
    'Data Structures & Algorithms',
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Express.js',
    'MySQL',
    'MongoDB',
    'Git',
    'GitHub',
    'VS Code',
  ];

  const proficiencyLevels = {
    JavaScript: 'Intermediate',
    'Node.js': 'Intermediate',
    MongoDB: 'Intermediate',
    Python: 'Expert',
    'Data Structures & Algorithms': 'Advanced',
    HTML: 'Expert',
    'MySQL': 'Intermediate',
  };

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills & Expertise</h2>
        

        <div className="skills-card">
          <h3 className="card-heading">Core Skills</h3>
          <p className="card-sub">All key skills grouped for a clean overview.</p>

          <div className="skills-pills">
            {skills.map((skill) => (
              <div key={skill} className="skill-pill" title={proficiencyLevels[skill] || 'Proficient'}>
                <span className="skill-name">{skill}</span>
                {proficiencyLevels[skill] && (
                  <span className="skill-badge">{proficiencyLevels[skill]}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
