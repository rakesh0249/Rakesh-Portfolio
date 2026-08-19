import { ArrowUp, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        {/* BRAND */}
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            RAKESH<span> R</span>
          </a>

          <p>AI Integrated Full Stack Web Developer</p>
        </div>

        {/* SOCIAL LINKS */}
        <div className="footer-links">

          {/* GITHUB */}
          <a
            href="https://github.com/rakesh0249"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.22-3.37-1.22-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.58 2.35 1.13 2.92.86.09-.67.35-1.13.64-1.39-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.18 9.18 0 0 1 12 7.2c.85 0 1.7.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.76 0 3.95-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9v2.53c0 .27.18.59.69.49A10.27 10.27 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
            </svg>

            <span>GitHub</span>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45h3.56V8.99H3.54v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
            </svg>

            <span>LinkedIn</span>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:rocky85721@gmail.com"
            aria-label="Email"
          >
            <Mail size={20} />
            <span>Email</span>
          </a>

          {/* BACK TO TOP */}
          <a
            href="#home"
            className="back-to-top"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </a>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Rakesh R. All rights reserved.
        </p>

        <p>
          Built with React & ❤️
        </p>

      </div>

    </footer>
  );
}

export default Footer;