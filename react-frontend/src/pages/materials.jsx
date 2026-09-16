import PageShell from "../components/PageShell";
import PageCss from "../components/PageCss";

export default function Materials() {
  return (
    <>
      <PageCss href="/css/style.css" />
      <PageShell variant="student">
    <div className="topbar">
      <h1>Course materials</h1>
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
        Materials
      </div>
      <div className="material-item">
        <div className="material-icon">
          <svg width="20" height="20" viewbox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2 H6 a2 2 0 0 0 -2 2 V20 a2 2 0 0 0 2 2 H18 a2 2 0 0 0 2 -2 V8 Z"></path>
            <path d="M14 2 V8 H20"></path>
          </svg>
        </div>
        <div className="material-info">
          <h3>Component library — Figma file</h3>
          <div className="meta">FIGMA · 4.2 MB · Module 3</div>
        </div>
        <a href="#" className="btn btn-sm btn-outline">Download</a>
      </div>
      <div className="material-item">
        <div className="material-icon">
          <svg width="20" height="20" viewbox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2 H6 a2 2 0 0 0 -2 2 V20 a2 2 0 0 0 2 2 H18 a2 2 0 0 0 2 -2 V8 Z"></path>
            <path d="M14 2 V8 H20"></path>
          </svg>
        </div>
        <div className="material-info">
          <h3>Typography & color style guide</h3>
          <div className="meta">PDF · 1.8 MB · Module 2</div>
        </div>
        <a href="#" className="btn btn-sm btn-outline">Download</a>
      </div>
      <div className="material-item">
        <div className="material-icon">
          <svg width="20" height="20" viewbox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2 H6 a2 2 0 0 0 -2 2 V20 a2 2 0 0 0 2 2 H18 a2 2 0 0 0 2 -2 V8 Z"></path>
            <path d="M14 2 V8 H20"></path>
          </svg>
        </div>
        <div className="material-info">
          <h3>Layout & grid systems cheat sheet</h3>
          <div className="meta">PDF · 640 KB · Module 1</div>
        </div>
        <a href="#" className="btn btn-sm btn-outline">Download</a>
      </div>
      <div className="material-item">
        <div className="material-icon">
          <svg width="20" height="20" viewbox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2"></rect>
            <path d="M8 12 h8 M8 16 h5"></path>
          </svg>
        </div>
        <div className="material-info">
          <h3>Final project brief</h3>
          <div className="meta">DOCX · 220 KB · Module 4</div>
        </div>
        <a href="#" className="btn btn-sm btn-outline">Download</a>
      </div>
    </div>
      </PageShell>
    </>
  );
}
