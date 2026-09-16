import PageShell from "../components/PageShell";
import PageCss from "../components/PageCss";

export default function VideoPlayer() {
  return (
    <>
      <PageCss href="/css/style.css" />
      <PageShell variant="student">
    <div className="topbar">
      <h1>Building a component library</h1>
      <Link to="/module.html" className="btn btn-outline btn-sm">
        Back to lesson notes
      </Link>
    </div>
    <div className="main-content" style={{maxWidth: "100%"}}>
      <div style={{display: "grid", gridTemplateColumns: "1fr 320px", gap: "1.6rem", alignItems: "start"}}>
        <div>
          <div className="video-frame">
            <div className="video-play">
              <svg width="26" height="26" viewbox="0 0 24 24" fill="#fff">
                <path d="M8 5 L19 12 L8 19 Z"></path>
              </svg>
            </div>
            <div style={{position: "absolute", bottom: "0", left: "0", right: "0"}}>
              <div className="video-meta-bar">
                <span>18:24 / 51:00</span>
                <span>1080p</span>
              </div>
              <div className="progress-bar" style={{borderRadius: "0", height: "4px"}}>
                <span style={{width: "36%"}}></span>
              </div>
            </div>
          </div>
          <div className="card" style={{marginTop: "1.4rem"}}>
            <span className="eyebrow">Lesson 3 of 6</span>
            <h2 style={{marginTop: ".3em"}}>Why components, not pages</h2>
            <p className="muted">Auditing an existing screen for repeated patterns, naming them consistently, and defining the states each component needs — hover, focus, disabled, and error.</p>
            <div style={{display: "flex", gap: "1rem"}}>
              <Link to="/module.html" className="btn btn-outline btn-sm">
                Lesson notes
              </Link>
              <Link to="/materials.html" className="btn btn-outline btn-sm">
                Download files
              </Link>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h3>Module 3 lessons</h3>
          </div>
          <div className="lesson-list">
            <div className="lesson-item current">
              <span className="lesson-num">3</span>
              Building a component library
              <span className="lesson-time">51m</span>
            </div>
            <div className="lesson-item">
              <span className="lesson-num">4</span>
              Handling states & responsiveness
              <span className="lesson-time">40m</span>
            </div>
          </div>
          <Link to="/course-content.html" className="btn btn-outline btn-block btn-sm" style={{marginTop: "1rem"}}>
            View full curriculum
          </Link>
        </div>
      </div>
      <div style={{display: "flex", justifyContent: "space-between", marginTop: "1.6rem"}}>
        <Link to="/module.html" className="btn btn-outline">
          ← Back to notes
        </Link>
        <Link to="/course-content.html" className="btn btn-primary">
          Mark lesson complete →
        </Link>
      </div>
    </div>
      </PageShell>
    </>
  );
}
