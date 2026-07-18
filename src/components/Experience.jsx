export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <span className="section-label reveal">// experience</span>
        <h2 className="section-title reveal">Professional Journey</h2>
        <p className="section-sub reveal">
          Real-world training and internships that sharpened my skills.
        </p>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="exp-timeline">
              {/* DEPI */}
              <div className="exp-item reveal" data-delay="0">
                <div className="glass-card">
                  <span className="exp-period">2024 — 2025</span>
                  <div className="exp-company">
                    <i className="bi bi-building me-1"></i>DEPI — Digital Egypt Pioneers Initiative
                  </div>
                  <div className="exp-role">Software Engineering Intern</div>
                  <div className="exp-desc">
                    Completed an intensive training program under Egypt's
                    national digital transformation initiative. Developed
                    backend systems using ASP.NET Core with real-world project
                    assignments, reinforcing Clean Architecture, dependency
                    injection, and EF Core for database management.
                  </div>
                  <div className="mt-3">
                    <span className="exp-tag">Enterprise Systems</span>
                    <span className="exp-tag">Software Engineering</span>
                    <span className="exp-tag">Team Collaboration</span>
                  </div>
                </div>
              </div>

              {/* WE Telecom */}
              <div className="exp-item reveal" data-delay="120">
                <div className="glass-card">
                  <span className="exp-period">2024</span>
                  <div className="exp-company">
                    <i className="bi bi-building me-1"></i>WE Telecom — Telecom Egypt
                  </div>
                  <div className="exp-role">Backend .NET Developer Trainee</div>
                  <div className="exp-desc">
                    Practical training at Egypt's state-owned telecommunications
                    provider. Gained exposure to enterprise software workflows,
                    team collaboration, and applying engineering best practices
                    in a professional corporate environment.
                  </div>
                  <div className="mt-3">
                    <span className="exp-tag">ASP.NET Core</span>
                    <span className="exp-tag">Entity Framework</span>
                    <span className="exp-tag">SQL Server</span>
                    <span className="exp-tag">C#</span>
                    <span className="exp-tag">Clean Architecture</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
