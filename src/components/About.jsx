import { Code2, Sparkles, Rocket } from "lucide-react";
import Reveal from "./Reveal";

function About() {
  return (
    <section id="about" className="about-section">
      <Reveal>
        <div className="section-container">

          <div className="section-heading">
            <p>GET TO KNOW ME</p>
            <h2>
              About <span>Me</span>
            </h2>
          </div>

          <div className="about-grid">

            <div className="about-content">
              <h3>
                Building digital experiences with
                <span> code & creativity.</span>
              </h3>

              <p>
                I'm Rakesh R, an AI Integrated Full Stack Web Developer
                passionate about creating modern, responsive and
                user-friendly web applications.
              </p>

              <p>
                I enjoy turning ideas into real-world products using
                React, JavaScript, Node.js, MongoDB and modern web
                technologies.
              </p>

              <a href="#contact" className="about-btn">
                Let's Work Together →
              </a>
            </div>

            <div className="about-cards">

              <div className="about-card">
                <Code2 size={28} />

                <div>
                  <h4>Clean Code</h4>
                  <p>Scalable & maintainable development</p>
                </div>
              </div>

              <div className="about-card">
                <Sparkles size={28} />

                <div>
                  <h4>AI Integration</h4>
                  <p>Smart solutions with modern AI tools</p>
                </div>
              </div>

              <div className="about-card">
                <Rocket size={28} />

                <div>
                  <h4>Performance</h4>
                  <p>Fast & responsive user experiences</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </Reveal>
    </section>
  );
}

export default About;