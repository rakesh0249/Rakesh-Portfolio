import {Code2,Palette,Server,Database,GitBranch,BrainCircuit,} from "lucide-react";

import Reveal from "./Reveal";

function Skills() {
  const skills = [
    {
      icon: Code2,
      title: "Frontend",
      skills: "HTML • CSS • JavaScript • React.js",
    },
    {
      icon: Server,
      title: "Backend",
      skills: "Node.js • Express.js • REST APIs",
    },
    {
      icon: Database,
      title: "Database",
      skills: "MongoDB • Database Design",
    },
    {
      icon: Palette,
      title: "UI & Styling",
      skills: "Responsive Design • CSS • UI/UX",
    },
    {
      icon: GitBranch,
      title: "Tools",
      skills: "Git • GitHub • VS Code • Vercel",
    },
    {
      icon: BrainCircuit,
      title: "AI Integration",
      skills: "AI APIs • AI-powered Web Applications",
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">

        <div className="section-heading">
          <p>MY EXPERTISE</p>
          <h2>
            Technical <span>Skills</span>
          </h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <Reveal
                key={skill.title}
                delay={index * 0.08}
              >
                <div className="skill-card">
                  <div className="skill-icon">
                    <Icon size={30} />
                  </div>

                  <h3>{skill.title}</h3>

                  <p>{skill.skills}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Skills;