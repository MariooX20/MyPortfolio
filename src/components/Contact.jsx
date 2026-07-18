export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <span className="section-label reveal">// contact</span>
        <h2 className="section-title reveal">Let's Connect</h2>
        <p className="section-sub reveal">
          Have a project idea or an opportunity? I'd love to hear from you.
        </p>

        <div className="row justify-content-center">
          <div className="col-lg-6 reveal">
            <a
              href="mailto:marionagykamel@gmail.com"
              className="contact-link"
              id="contact-email"
            >
              <div className="contact-link-icon">
                <i className="bi bi-envelope-fill text-white"></i>
              </div>
              <div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    marginBottom: '2px'
                  }}
                >
                  Email
                </div>
                <div>marionagy223@gmail.com</div>
              </div>
              <i className="bi bi-arrow-right contact-link-arrow"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/mario-nagy-760358297/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              id="contact-linkedin"
            >
              <div className="contact-link-icon">
                <i className="bi bi-linkedin text-white"></i>
              </div>
              <div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    marginBottom: '2px'
                  }}
                >
                  LinkedIn
                </div>
                <div>linkedin.com/in/mario-nagy</div>
              </div>
              <i className="bi bi-arrow-right contact-link-arrow"></i>
            </a>

            <a
              href="https://github.com/MariooX20"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              id="contact-github"
            >
              <div
                className="contact-link-icon"
                style={{ background: 'linear-gradient(135deg, #24292e, #444c56)' }}
              >
                <i className="bi bi-github text-white"></i>
              </div>
              <div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    marginBottom: '2px'
                  }}
                >
                  GitHub
                </div>
                <div>github.com/MarioNagy</div>
              </div>
              <i className="bi bi-arrow-right contact-link-arrow"></i>
            </a>

            <a href="tel:+201234567890" className="contact-link" id="contact-phone">
              <div
                className="contact-link-icon"
                style={{ background: 'linear-gradient(135deg, #059669, #10b981)' }}
              >
                <i className="bi bi-telephone-fill text-white"></i>
              </div>
              <div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    marginBottom: '2px'
                  }}
                >
                  Phone
                </div>
                <div>+20 15 5506 7502</div>
              </div>
              <i className="bi bi-arrow-right contact-link-arrow"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
