import PageShell from "../components/PageShell";
import PageCss from "../components/PageCss";

export default function CourseContent() {
  return (
    <>
      <PageCss href="/css/style.css" />
      <PageShell variant="student">
    <div className="topbar">
      <h1>UI Design Foundations</h1>
      <span className="badge badge-gold">64% complete</span>
    </div>
    <div className="main-content">
      <div className="crumbs">
        <Link to="/my-courses.html">
          My courses
        </Link>
        <span>/</span>
        UI Design Foundations
      </div>
      <div className="progress-bar" style={{marginBottom: "1.6rem"}}>
        <span style={{width: "64%"}}></span>
      </div>
      <div className="card">
        <div className="card-header">
          <h2>Module 1 · Foundations</h2>
          <span className="badge badge-teal">Done</span>
        </div>
        <div className="lesson-list">
          <div className="lesson-item done">
            <span className="lesson-num">✓</span>
            Design principles & layout systems
            <span className="lesson-time">42 min</span>
          </div>
          <div className="lesson-item done">
            <span className="lesson-num">✓</span>
            Grids, spacing & visual hierarchy
            <span className="lesson-time">36 min</span>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h2>Module 2 · Typography & Color</h2>
          <span className="badge badge-teal">Done</span>
        </div>
        <div className="lesson-list">
          <div className="lesson-item done">
            <span className="lesson-num">✓</span>
            Typography that holds a page together
            <span className="lesson-time">38 min</span>
          </div>
          <div className="lesson-item done">
            <span className="lesson-num">✓</span>
            Color, contrast, and accessibility
            <span className="lesson-time">45 min</span>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h2>Module 3 · Components</h2>
          <span className="badge badge-gold">In progress</span>
        </div>
        <div className="lesson-list">
          <div className="lesson-item current">
            <span className="lesson-num">3</span>
            Building a component library
            <span className="lesson-time">51 min</span>
            <Link to="/module.html" className="btn btn-sm btn-primary" style={{marginLeft: ".8em"}}>
              Resume
            </Link>
          </div>
          <div className="lesson-item">
            <span className="lesson-num">4</span>
            Handling states & responsive behavior
            <span className="lesson-time">40 min</span>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h2>Module 4 · Practice & Portfolio</h2>
          <span className="badge badge-ink">Locked</span>
        </div>
        <div className="lesson-list">
          <div className="lesson-item">
            <span className="lesson-num">5</span>
            Prototyping your first screen
            <span className="lesson-time">55 min</span>
          </div>
          <div className="lesson-item">
            <span className="lesson-num">6</span>
            Final project & portfolio review
            <span className="lesson-time">1h 10m</span>
          </div>
        </div>
      </div>
      <Link to="/materials.html" className="btn btn-outline" style={{marginTop: ".6rem"}}>
        View course materials
      </Link>
    </div>
      </PageShell>
    </>
  );
}
