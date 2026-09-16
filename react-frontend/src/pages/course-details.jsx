import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import PageCss from "../components/PageCss";

export default function CourseDetails() {
  return (
    <>
      <PageCss href="/css/style.css" />
<PageShell variant="marketing">
    <div className="container" style={{paddingTop: "2.4rem"}}>
      <div className="crumbs">
        <Link to="/index.html">
          Home
        </Link>
        <span>/</span>
        <Link to="/browse-courses.html">
          Browse courses
        </Link>
        <span>/</span>
        UI Design Foundations
      </div>
    </div>
    <div className="container" style={{display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: "2.4rem", alignItems: "start", paddingBottom: "4rem"}}>
      <div>
        <span className="badge badge-gold">Design</span>
        <h1 style={{marginTop: ".5em"}}>UI Design Foundations</h1>
        <p className="muted" style={{fontSize: "1.05rem", maxWidth: "60ch"}}>Learn the fundamentals of user interface design — layout, type, color, and componentry — and build a portfolio-ready project along the way. No prior design experience required.</p>
        <div style={{display: "flex", gap: "1.6rem", margin: "1.4rem 0", fontSize: ".9rem"}} className="muted">
          <span>⭐ 4.8 (2,140 ratings)</span>
          <span>6,204 learners enrolled</span>
          <span>9h 40m total</span>
        </div>
        <div className="card">
          <div className="card-header">
            <h2>What you'll learn</h2>
          </div>
          <ul style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: ".6em .8em"}}>
            <li>· Layout systems & visual hierarchy</li>
            <li>· Typography pairing and scale</li>
            <li>· Color theory & accessible contrast</li>
            <li>· Building a reusable component library</li>
            <li>· Prototyping a real interface</li>
            <li>· Presenting design decisions clearly</li>
          </ul>
        </div>
        <div className="card">
          <div className="card-header">
            <h2>Curriculum</h2>
          </div>
          <div className="lesson-list">
            <div className="lesson-item">
              <span className="lesson-num">1</span>
              Design principles & layout systems
              <span className="lesson-time">42 min</span>
            </div>
            <div className="lesson-item">
              <span className="lesson-num">2</span>
              Typography that holds a page together
              <span className="lesson-time">38 min</span>
            </div>
            <div className="lesson-item">
              <span className="lesson-num">3</span>
              Color, contrast, and accessibility
              <span className="lesson-time">45 min</span>
            </div>
            <div className="lesson-item">
              <span className="lesson-num">4</span>
              Building a component library
              <span className="lesson-time">51 min</span>
            </div>
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
      </div>
      <div>
        <div className="card" style={{position: "sticky", top: "96px"}}>
          <div className="course-thumb" style={{margin: "-1.6rem -1.6rem 1.2rem", borderRadius: "var(--radius) var(--radius) 0 0"}}></div>
          <div style={{fontFamily: "var(--font-mono)", fontSize: "1.8rem", fontWeight: "600", color: "var(--ink)"}}>$49</div>
          <p className="muted" style={{fontSize: ".85rem", marginBottom: "1.2rem"}}>One-time payment · lifetime access</p>
          <Link to="/enrollment-success.html" className="btn btn-primary btn-block">
            Enroll now
          </Link>
          <Link to="/my-courses.html" className="btn btn-outline btn-block" style={{marginTop: ".7rem"}}>
            Go to my courses
          </Link>
          <ul style={{marginTop: "1.4rem", fontSize: ".86rem"}} className="muted">
            <li style={{marginBottom: ".5em"}}>✓ 6 modules, 9h 40m of video</li>
            <li style={{marginBottom: ".5em"}}>✓ Downloadable project files</li>
            <li style={{marginBottom: ".5em"}}>✓ Certificate on completion</li>
            <li>✓ Learn on any device</li>
          </ul>
        </div>
      </div>
    </div>
</PageShell>
    </>
  );
}
