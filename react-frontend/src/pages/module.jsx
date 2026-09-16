import PageShell from "../components/PageShell";
import PageCss from "../components/PageCss";

export default function Module() {
  return (
    <>
      <PageCss href="/css/style.css" />
      <PageShell variant="student">
    <div className="topbar">
      <h1>Module 3 · Building a component library</h1>
      <Link to="/course-content.html" className="btn btn-outline btn-sm">
        Back to course
      </Link>
    </div>
    <div className="main-content">
      <div className="crumbs">
        <Link to="/my-courses.html">
          My courses
        </Link>
        <span>/</span>
        <Link to="/course-content.html">
          UI Design Foundations
        </Link>
        <span>/</span>
        Module 3
      </div>
      <div className="card">
        <span className="eyebrow">Lesson 3 of 6 · 51 min</span>
        <h2 style={{marginTop: ".4em"}}>Why components, not pages</h2>
        <p className="muted">A component library turns repeated interface patterns — buttons, inputs, cards — into named, reusable pieces. This lesson walks through auditing an existing screen for repeated patterns, naming them consistently, and defining the states each one needs to support.</p>
        <div style={{margin: "1.4rem 0"}}>
          <Link to="/video-player.html" className="btn btn-primary">
            Watch lesson video
          </Link>
          <Link to="/materials.html" className="btn btn-outline" style={{marginLeft: ".7em"}}>
            Download working files
          </Link>
        </div>
        <div className="alert alert-gold">This lesson includes a downloadable Figma file with the full component set used in the demo.</div>
      </div>
      <div className="card">
        <div className="card-header">
          <h2>In this module</h2>
        </div>
        <div className="lesson-list">
          <div className="lesson-item current">
            <span className="lesson-num">3</span>
            Building a component library
            <span className="lesson-time">51 min</span>
          </div>
          <div className="lesson-item">
            <span className="lesson-num">4</span>
            Handling states & responsive behavior
            <span className="lesson-time">40 min</span>
          </div>
        </div>
      </div>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <Link to="/course-content.html" className="btn btn-outline">
          ← Previous lesson
        </Link>
        <Link to="/video-player.html" className="btn btn-primary">
          Continue to lesson video →
        </Link>
      </div>
    </div>
      </PageShell>
    </>
  );
}
