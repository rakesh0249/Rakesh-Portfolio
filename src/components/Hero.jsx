import { ArrowRight, Download } from "lucide-react";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <p className="hero-greeting">HELLO, I'M</p>

        <h1>
          RAKESH <span>R</span>
        </h1>

        <h2>
          AI Integrated{" "}
          <span>Full Stack Web Developer</span>
        </h2>

        <p className="hero-description">
          I build modern, responsive and scalable web applications
          using React, Node.js, MongoDB and AI-powered technologies.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="primary-btn">
            View My Work
            <ArrowRight size={19} />
          </a>

          <a
            href="/resume.pdf"
            className="secondary-btn"
            download
          >
            Download Resume
            <Download size={19} />
          </a>

        </div>

        {/* SOCIAL LINKS */}
        <div className="hero-socials">

          {/* GitHub */}
          <a
            href="https://github.com/rakesh0249"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="currentColor"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.16c-3.2.69-3.88-1.54-3.88-1.54-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.35.78 1.04.78 2.1v3.11c0 .31.21.67.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rakesh-r-2b391b289/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="currentColor"
            >
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.38 4.28 5.48v6.27ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45H7.1V8.99H3.54v11.46ZM22.22 0H1.77C.79 0 .01.78.01 1.76v20.48C.01 23.22.79 24 1.77 24h20.45c.98 0 1.77-.78 1.77-1.76V1.76C23.99.78 23.2 0 22.22 0Z" />
            </svg>
          </a>

        </div>

      </div>

      {/* PROFILE IMAGE */}
      <div className="hero-profile">
        <div className="profile-ring">
          <img
            src="/profile.png"
            alt="Rakesh R"
          />
        </div>
      </div>

      <div className="hero-glow glow-one"></div>
      <div className="hero-glow glow-two"></div>

    </section>
  );
}

export default Hero;