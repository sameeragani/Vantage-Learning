import PageShell from "../components/PageShell";
import PageCss from "../components/PageCss";

export default function MyCourses() {
  return (
    <>
      <PageCss href="/css/style.css" />
      <PageShell variant="student">
    <div className="topbar">
      <h1>My Courses</h1>
    </div>
    <div className="main-content" style={{maxWidth: "100%"}}>
      <div className="course-grid">
        <div className="course-card">
          <div className="course-thumb">
            <span className="badge badge-gold">Design</span>
          </div>
          <div className="body">
            <h3>UI Design Foundations</h3>
            <p className="meta">Module 4 of 6 · Layout systems</p>
            <div className="progress-bar" style={{marginBottom: "1rem"}}>
              <span style={{width: "64%"}}></span>
            </div>
            <div className="foot">
              <span className="muted" style={{fontSize: ".82rem"}}>64% complete</span>
              <Link to="/course-content.html" className="btn btn-sm btn-primary">
                Continue
              </Link>
            </div>
          </div>
        </div>
        <div className="course-card">
          <div className="course-thumb">
            <span className="badge badge-teal">Data</span>
          </div>
          <div className="body">
            <h3>SQL for Analysts</h3>
            <p className="meta">Module 2 of 8 · Joins & subqueries</p>
            <div className="progress-bar" style={{marginBottom: "1rem"}}>
              <span style={{width: "22%"}}></span>
            </div>
            <div className="foot">
              <span className="muted" style={{fontSize: ".82rem"}}>22% complete</span>
              <Link to="/course-content.html" className="btn btn-sm btn-primary">
                Continue
              </Link>
            </div>
          </div>
        </div>
        <div className="course-card">
          <div className="course-thumb">
            <span className="badge badge-ink">Career</span>
          </div>
          <div className="body">
            <h3>Technical Writing 101</h3>
            <p className="meta">Completed May 2, 2026</p>
            <div className="progress-bar" style={{marginBottom: "1rem"}}>
              <span style={{width: "100%"}}></span>
            </div>
            <div className="foot">
              <span className="muted" style={{fontSize: ".82rem"}}>100% complete</span>
              <Link to="/certificate.html" className="btn btn-sm btn-outline">
                Certificate
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="card" style={{marginTop: "2rem"}}>
        <div className="card-header">
          <h2>Looking for your next course?</h2>
        </div>
        <p className="muted">Browse the full catalog of 128 courses across design, data, and career skills.</p>
        <Link to="/browse-courses.html" className="btn btn-primary">
          Browse courses
        </Link>
      </div>
    </div>
      </PageShell>
    </>
  );
}
