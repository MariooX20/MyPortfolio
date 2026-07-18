export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <span className="section-label reveal">// education</span>
        <h2 className="section-title reveal">Academic Background</h2>
        <p className="section-sub reveal">
          Where my passion for software engineering was born.
        </p>

        <div className="row justify-content-center">
          <div className="col-lg-7 reveal" data-delay="0">
            <div className="glass-card">
              <div className="edu-card">
                <div className="edu-icon">🎓</div>
                <div>
                  <div className="edu-degree">
                    Bachelor of Science in Computer Science
                  </div>
                  <div className="edu-school">
                    Modern Academy for Engineering and Technology
                  </div>
                  <div className="edu-period">
                    Cairo, Egypt · Expected Graduation: 2028
                  </div>
                  <span className="edu-grade">Department of Computer Science</span>
                </div>
              </div>
              <div
                style={{
                  marginTop: '24px',
                  paddingTop: '20px',
                  borderTop: '1px solid var(--border)'
                }}
              >
                <div className="skill-category-title mb-3">
                  <i className="bi bi-book me-2"></i>Relevant Coursework
                </div>
                <div>
                  <span className="skill-pill"><span className="skill-icon-dot"></span>Data Structures</span>
                  <span className="skill-pill"><span className="skill-icon-dot"></span>Algorithms</span>
                  <span className="skill-pill"><span className="skill-icon-dot"></span>OOP</span>
                  <span className="skill-pill"><span className="skill-icon-dot"></span>Database Systems</span>
                  <span className="skill-pill"><span className="skill-icon-dot"></span>Software Engineering</span>
                  <span className="skill-pill"><span className="skill-icon-dot"></span>Operating Systems</span>
                  <span className="skill-pill"><span className="skill-icon-dot"></span>Computer Networks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
