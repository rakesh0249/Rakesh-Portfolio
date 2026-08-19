import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Reveal from "./Reveal";

function Contact() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (sending) return;

    setSending(true);
    setStatus("");

    try {
      const response = await emailjs.sendForm(
        "service_7khzvpq",
        "template_up41hpj",
        e.currentTarget,
        {
          publicKey: "Dd1FXs55dbK5OTH3j",
        }
      );

      console.log("EmailJS SUCCESS:", response.status, response.text);

      setStatus("success");
      e.currentTarget.reset();
    } catch (error) {
      console.error("EmailJS FAILED:", error);
      console.error("Status:", error?.status);
      console.error("Text:", error?.text);

      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <Reveal>
        <div className="section-container">

          <div className="section-heading">
            <p>GET IN TOUCH</p>
            <h2>
              Let's <span>Connect</span>
            </h2>
          </div>

          <div className="contact-grid">

            <div className="contact-info">
              <h3>
                Have a project in mind?
                <span> Let's talk.</span>
              </h3>

              <p>
                I'm open to opportunities, freelance projects and
                collaborations. Feel free to reach out and let's
                build something great together.
              </p>

              <div className="contact-details">

                <div className="contact-item">
                  <div className="contact-icon">
                    <Mail size={20} />
                  </div>

                  <div>
                    <small>Email</small>
                    <p>rocky85721@gmail.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <Phone size={20} />
                  </div>

                  <div>
                    <small>Phone</small>
                    <p>+91 7868870249</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <small>Location</small>
                    <p>Tamil Nadu, India</p>
                  </div>
                </div>

              </div>
            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-row">

                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                />

                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  required
                />

              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                required
              />

              <button
                type="submit"
                disabled={sending}
              >
                {sending ? "Sending..." : "Send Message"}

                {!sending && <Send size={18} />}
              </button>

              {status === "success" && (
                <p className="form-success">
                  ✅ Message sent successfully!
                </p>
              )}

              {status === "error" && (
                <p className="form-error">
                  ❌ Failed to send message. Please try again.
                </p>
              )}

            </form>

          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Contact;