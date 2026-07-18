export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <span className="section-label reveal">// projects</span>
        <h2 className="section-title reveal">Things I've Built</h2>
        <p className="section-sub reveal">
          Personal and academic projects showcasing my backend expertise.
        </p>

        <div className="row g-4">
          {/* LMS */}
          <div className="col-md-6 col-lg-4 d-flex reveal" data-delay="0">
            <div className="project-card w-100">
              <div className="project-icon">📚</div>
              <div className="project-title">Learning Management System (LMS)</div>
              <p className="project-desc">
                A fully-featured LMS built with ASP.NET Core and Clean
                Architecture. Supports student enrollment, course management,
                content delivery, and instructor workflows. Implements SOLID
                principles and layered separation of concerns for
                maintainability and scalability.
              </p>
              <div>
                <span className="project-tag">ASP.NET Core</span>
                <span className="project-tag">EF Core</span>
                <span className="project-tag">SQL Server</span>
                <span className="project-tag">Clean Arch</span>
                <span className="project-tag">C#</span>
              </div>
            </div>
          </div>

          {/* Tagom CRM */}
          <div className="col-md-6 col-lg-4 d-flex reveal" data-delay="120">
            <div className="project-card w-100">
              <div className="project-icon">🏢</div>
              <div className="project-title">Tagom CRM System</div>
              <p className="project-desc">
                A Customer Relationship Management (CRM) system designed for
                property and real estate management. Handles client data,
                property listings, lead tracking, and agent workflows. Built
                with a robust .NET backend and relational database design.
              </p>
              <div>
                <span className="project-tag">ASP.NET Core</span>
                <span className="project-tag">SQL Server</span>
                <span className="project-tag">REST API</span>
                <span className="project-tag">LINQ</span>
                <span className="project-tag">C#</span>
              </div>
            </div>
          </div>

          {/* Gym Management System */}
          <div className="col-md-6 col-lg-4 d-flex reveal" data-delay="240">
            <div className="project-card w-100">
              <div className="project-icon">🏋️</div>
              <div className="project-title">Gym Management System</div>
              <p className="project-desc">
                Backend system for managing gym members, subscription plans, and
                active memberships. Enforces single active subscription per
                member, tracks renewal dates, and provides staff with member
                management capabilities via a clean RESTful API.
              </p>
              <div>
                <span className="project-tag">ASP.NET Core</span>
                <span className="project-tag">EF Core</span>
                <span className="project-tag">SQL Server</span>
                <span className="project-tag">Clean Arch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
