import PageShell from "../components/PageShell";
import PageCss from "../components/PageCss";

export default function StudentDashboard() {
  return (
    <>
      <PageCss href="/css/style.css" />
      <PageShell variant="student">
    <div className="topbar">
      <h1>Welcome back, Ava</h1>
    </div>
    <div className="main-content" style={{maxWidth: "100%"}}>
      <div className="stat-grid">
        <div className="stat-card">
          <div className="num">3</div>
          <div className="label">Courses enrolled</div>
        </div>
        <div className="stat-card">
          <div className="num">1</div>
          <div className="label">Certificates earned</div>
        </div>
        <div className="stat-card">
          <div className="num">14</div>
          <div className="label">Lessons this month</div>
        </div>
        <div className="stat-card">
          <div className="num">68%</div>
          <div className="label">Overall progress</div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h2>Continue learning</h2>
        </div>
        <div className="course-grid">
          <div className="course-card">
            <div className="course-thumb">
              <span className="badge badge-gold">Design</span>
            </div>
            <div className="body">
              <h3>UI Design Foundations</h3>
              <p className="meta">Module 3 · Building a component library</p>
              <div className="progress-bar" style={{marginBottom: "1rem"}}>
                <span style={{width: "64%"}}></span>
              </div>
              <div className="foot">
                <span className="muted" style={{fontSize: ".82rem"}}>64%</span>
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
              <p className="meta">Module 2 · Joins & subqueries</p>
              <div className="progress-bar" style={{marginBottom: "1rem"}}>
                <span style={{width: "22%"}}></span>
              </div>
              <div className="foot">
                <span className="muted" style={{fontSize: ".82rem"}}>22%</span>
                <Link to="/course-content.html" className="btn btn-sm btn-primary">
                  Continue
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h2>Recent notifications</h2>
          <Link to="/notifications.html" className="btn btn-outline btn-sm">
            View all
          </Link>
        </div>
        <div style={{border: "1px solid var(--border)", borderRadius: "var(--radius)", overflow: "hidden"}}>
          <div className="notif-item unread">
            <div className="notif-icon gold">
              <svg width="18" height="18" viewbox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2 L14.5 9 H22 L16 13.5 L18 21 L12 16.5 L6 21 L8 13.5 L2 9 H9.5 Z"></path>
              </svg>
            </div>
            <div className="notif-body">
              <h3>New module unlocked in UI Design Foundations</h3>
              <p className="muted" style={{margin: "0"}}>Module 4 · Practice & Portfolio is now available.</p>
              <span className="notif-time">2 hours ago</span>
            </div>
          </div>
          <div className="notif-item">
            <div className="notif-icon">
              <svg width="18" height="18" viewbox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 12.5 L9.5 18 L20 6"></path>
              </svg>
            </div>
            <div className="notif-body">
              <h3>Certificate ready</h3>
              <p className="muted" style={{margin: "0"}}>Your certificate for Technical Writing 101 has been issued.</p>
              <span className="notif-time">Yesterday</span>
            </div>
          </div>
        </div>
      </div>
    </div>
      </PageShell>
    </>
  );
}
