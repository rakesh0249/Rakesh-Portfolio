import { ExternalLink } from "lucide-react";
import Reveal from "./Reveal";

function Projects() {
  const projects = [
    {
      title: "Village Farmer",
      category: "Full Stack Web Application",
      image: "/projects/village-farmer.png",
      description:
        "A modern digital platform designed to connect farmers with smart farming services, equipment, crop guidance and agricultural resources.",
      tech: ["React", "JavaScript", "CSS", "Node.js"],
      live: "https://village-farmer.vercel.app/",
      github: "https://github.com/rakesh0249/Village-Farmer",
    },

    {
      title: "Expense Tracker",
      category: "Web Application",
      image: "/projects/expense-tracker.png",
      description:
        "A responsive expense management application that helps users track income, expenses and financial activity through a clean interface.",
      tech: ["React", "JavaScript", "CSS"],
      live: "https://expense-tracker-teal-eight-53.vercel.app/",
      github: "https://github.com/rakesh0249/Expense-Tracker",
    },

    {
      title: "Quiz App",
      category: "Interactive Web Application",
      image: "/projects/quiz-app.png",
      description:
        "An interactive quiz application with a clean and responsive interface that allows users to answer questions, track their progress and test their knowledge.",
      tech: ["React", "JavaScript", "CSS"],
      live: "https://quiz-app-azure-kappa-45.vercel.app/",
      github: "https://github.com/rakesh0249/Quiz-App",
    },

    {
      title: "QR Code Generator",
      category: "Frontend Web Application",
      image: "/projects/qr-generator.png",
      description:
        "A simple and responsive QR Code Generator that allows users to instantly create QR codes from text, URLs and other information.",
      tech: ["React", "JavaScript", "CSS", "QR API"],
      live: "https://qr-code-generator-eight-ruddy.vercel.app/",
      github: "https://github.com/rakesh0249/QR-Code-Generator",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">

        <div className="section-heading">
          <p>MY RECENT WORK</p>

          <h2>
            Featured <span>Projects</span>
          </h2>
        </div>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 0.12}
            >
              <article className="project-card">

                {/* PROJECT PREVIEW IMAGE */}
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                  />

                  <div className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="project-content">

                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-tech">
                    {project.tech.map((item) => (
                      <span key={item}>
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink size={17} />
                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>

                  </div>

                </div>

              </article>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;