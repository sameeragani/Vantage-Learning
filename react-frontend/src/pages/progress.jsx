import PageShell from "../components/PageShell";
import PageCss from "../components/PageCss";

export default function Progress() {
  return (
    <>
      <PageCss href="/css/style.css" />
      <PageShell variant="student">
    <div className="topbar">
      <h1>My Progress</h1>
    </div>
    <div className="main-content" style={{maxWidth: "100%"}}>
      <div className="card">
        <div className="card-header">
          <h2>Overall</h2>
        </div>
        <div style={{display: "flex", gap: "2.4rem", alignItems: "center", flexWrap: "wrap"}}>
          <div className="progress-ring">
            <svg width="108" height="108" viewbox="0 0 108 108">
              <circle className="track" cx="54" cy="54" r="46"></circle>
              <circle className="fill" cx="54" cy="54" r="46" strokeDasharray="289" strokeDashoffset="93"></circle>
            </svg>
            <div className="value">
              68%
              <small>Overall</small>
            </div>
          </div>
          <div style={{flex: "1", minWidth: "220px"}}>
            <div className="hero-stat" style={{borderColor: "var(--border-soft)"}}>
              <span className="muted">Courses in progress</span>
              <span style={{fontFamily: "var(--font-mono)", fontWeight: "600"}}>2</span>
            </div>
            <div className="hero-stat" style={{borderColor: "var(--border-soft)"}}>
              <span className="muted">Courses completed</span>
              <span style={{fontFamily: "var(--font-mono)", fontWeight: "600"}}>1</span>
            </div>
            <div className="hero-stat" style={{borderColor: "var(--border-soft)", borderBottom: "none"}}>
              <span className="muted">Lessons finished this month</span>
              <span style={{fontFamily: "var(--font-mono)", fontWeight: "600"}}>14</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h2>UI Design Foundations</h2>
          <span className="badge badge-gold">In progress</span>
        </div>
        <div style={{display: "flex", alignItems: "center", gap: "1.6rem"}}>
          <div className="progress-ring" style={{width: "80px", height: "80px"}}>
            <svg width="80" height="80" viewbox="0 0 80 80">
              <circle className="track" cx="40" cy="40" r="34" strokeWidth="7"></circle>
              <circle className="fill" cx="40" cy="40" r="34" strokeWidth="7" strokeDasharray="214" strokeDashoffset="77"></circle>
            </svg>
            <div className="value" style={{fontSize: ".9rem"}}>64%</div>
          </div>
          <div style={{flex: "1"}}>
            <p className="muted" style={{marginBottom: ".4em"}}>Module 3 of 6 · Building a component library</p>
            <div className="progress-bar">
              <span style={{width: "64%"}}></span>
            </div>
          </div>
          <Link to="/course-content.html" className="btn btn-sm btn-outline">
            Resume
          </Link>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h2>SQL for Analysts</h2>
          <span className="badge badge-gold">In progress</span>
        </div>
        <div style={{display: "flex", alignItems: "center", gap: "1.6rem"}}>
          <div className="progress-ring" style={{width: "80px", height: "80px"}}>
            <svg width="80" height="80" viewbox="0 0 80 80">
              <circle className="track" cx="40" cy="40" r="34" strokeWidth="7"></circle>
              <circle className="fill" cx="40" cy="40" r="34" strokeWidth="7" strokeDasharray="214" strokeDashoffset="167"></circle>
            </svg>
            <div className="value" style={{fontSize: ".9rem"}}>22%</div>
          </div>
          <div style={{flex: "1"}}>
            <p className="muted" style={{marginBottom: ".4em"}}>Module 2 of 8 · Joins & subqueries</p>
            <div className="progress-bar">
              <span style={{width: "22%"}}></span>
            </div>
          </div>
          <Link to="/course-content.html" className="btn btn-sm btn-outline">
            Resume
          </Link>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h2>Technical Writing 101</h2>
          <span className="badge badge-teal">Completed</span>
        </div>
        <div style={{display: "flex", alignItems: "center", gap: "1.6rem"}}>
          <div className="progress-ring" style={{width: "80px", height: "80px"}}>
            <svg width="80" height="80" viewbox="0 0 80 80">
              <circle className="track" cx="40" cy="40" r="34" strokeWidth="7"></circle>
              <circle className="fill" cx="40" cy="40" r="34" strokeWidth="7" strokeDasharray="214" strokeDashoffset="0"></circle>
            </svg>
            <div className="value" style={{fontSize: ".9rem"}}>100%</div>
          </div>
          <div style={{flex: "1"}}>
            <p className="muted" style={{marginBottom: ".4em"}}>Completed May 2, 2026</p>
            <div className="progress-bar">
              <span style={{width: "100%"}}></span>
            </div>
          </div>
          <Link to="/certificate.html" className="btn btn-sm btn-primary">
            View certificate
          </Link>
        </div>
      </div>
    </div>
      </PageShell>
    </>
  );
}
