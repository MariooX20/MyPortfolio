export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <span className="section-label reveal">// technical skills</span>
        <h2 className="section-title reveal">My Toolbox</h2>
        <p className="section-sub reveal">
          Technologies and tools I use to craft great software.
        </p>

        <div className="row g-4">
          {/* Languages */}
          <div className="col-md-6 col-lg-4 reveal" data-delay="0">
            <div className="glass-card h-100">
              <div className="skill-category-title">
                <i className="bi bi-code-slash me-2"></i>Languages
              </div>
              <div className="skill-pills-wrap">
                <span className="skill-pill"><span className="skill-icon-dot"></span>C#</span>
                <span className="skill-pill"><span className="skill-icon-dot"></span>JavaScript</span>
                <span className="skill-pill"><span className="skill-icon-dot"></span>Python</span>
                <span className="skill-pill"><span className="skill-icon-dot"></span>SQL</span>
                <span className="skill-pill"><span className="skill-icon-dot"></span>HTML</span>
                <span className="skill-pill"><span className="skill-icon-dot"></span>CSS</span>
              </div>
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div className="col-md-6 col-lg-4 reveal" data-delay="100">
            <div className="glass-card h-100">
              <div className="skill-category-title">
                <i className="bi bi-layers me-2"></i>Frameworks & Libraries
              </div>
              <div className="skill-pills-wrap">
                <span className="skill-pill"><span className="skill-icon-dot"></span>ASP.NET Core</span>
                <span className="skill-pill"><span className="skill-icon-dot"></span>Entity Framework Core</span>
                <span className="skill-pill"><span className="skill-icon-dot"></span>LINQ</span>
                <span className="skill-pill"><span className="skill-icon-dot"></span>Bootstrap</span>
                <span className="skill-pill"><span className="skill-icon-dot"></span>jQuery</span>
                <span className="skill-pill"><span className="skill-icon-dot"></span>REST APIs</span>
              </div>
            </div>
          </div>

          {/* Concepts & Tools */}
          <div className="col-md-6 col-lg-4 reveal" data-delay="200">
            <div className="glass-card h-100">
              <div className="skill-category-title">
                <i className="bi bi-gear me-2"></i>Tools & Concepts
              </div>
              <div className="skill-pills-wrap">
                <span className="skill-pill"><span className="skill-icon-dot"></span>Clean Architecture</span>
                <span className="skill-pill"><span className="skill-icon-dot"></span>SOLID Principles</span>
                <span className="skill-pill"><span className="skill-icon-dot"></span>Design Patterns</span>
                <span className="skill-pill"><span className="skill-icon-dot"></span>SQL Server</span>
                <span className="skill-pill"><span className="skill-icon-dot"></span>Git & GitHub</span>
                <span className="skill-pill"><span className="skill-icon-dot"></span>OOP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
