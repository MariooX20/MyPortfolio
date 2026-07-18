export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 reveal">
            <span className="section-label">// about me</span>
            <h2 className="section-title">
              Building the Backend<br />That Powers the Future
            </h2>
            <p
              style={{
                color: 'var(--text-secondary)',
                marginBottom: '20px',
                lineHeight: 1.8
              }}
            >
              I'm a Computer Science student at the Modern Academy for
              Engineering and Technology in Cairo, with a deep passion for
              backend development. From designing RESTful APIs to wiring up
              clean architectures — I love the craft of building things that
              <em>just work</em>.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
              I've honed my skills through hands-on training at Egypt's DEPI
              initiative and WE Telecom, working with ASP.NET Core, Entity
              Framework, SQL Server, and modern development practices like SOLID
              principles and Clean Architecture.
            </p>
            <div className="mt-4">
              <a
                href="#contact"
                className="btn-primary-custom me-3"
                id="about-contact-btn"
              >
                <i className="bi bi-envelope"></i> Contact Me
              </a>
              <a
                href="MarioNResume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-outline-custom"
                id="about-resume-btn"
              >
                <i className="bi bi-file-earmark-person"></i> View Resume
              </a>
            </div>
          </div>
          <div className="col-lg-6 reveal" data-delay="150">
            <div className="row g-3">
              <div className="col-6">
                <div className="about-stat-box">
                  <span className="stat-value">3+</span>
                  <span className="stat-label">Years of Coding</span>
                </div>
              </div>
              <div className="col-6">
                <div className="about-stat-box">
                  <span className="stat-value">5+</span>
                  <span className="stat-label">Projects Built</span>
                </div>
              </div>
              <div className="col-6">
                <div className="about-stat-box">
                  <span className="stat-value">.NET</span>
                  <span className="stat-label">Main Stack</span>
                </div>
              </div>
              <div className="col-6">
                <div className="about-stat-box">
                  <span className="stat-value">CS</span>
                  <span className="stat-label">B.S. Degree</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
