import { Link, useSearchParams } from "react-router-dom";
import PageShell from "../components/PageShell";
import PageCss from "../components/PageCss";
import { getCourseById } from "../data/courseStore";

const FILE_ICON = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2 H6 a2 2 0 0 0 -2 2 V20 a2 2 0 0 0 2 2 H18 a2 2 0 0 0 2 -2 V8 Z"></path>
    <path d="M14 2 V8 H20"></path>
  </svg>
);

export default function Materials() {
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get("id");
  const course = courseId ? getCourseById(courseId) : null;

  if (!course) {
    return (
      <>
        <PageCss href="/css/style.css" />
        <PageShell variant="student">
          <div className="topbar"><h1>Course materials</h1></div>
          <div className="main-content">
            <p className="muted">No course selected.</p>
            <Link to="/my-courses.html" className="btn btn-primary">Back to my courses</Link>
          </div>
        </PageShell>
      </>
    );
  }

  const materials = Array.from({ length: course.modules || 0 }, (_, i) => ({
    title: `Module ${i + 1} resources`,
    meta: `PDF · Module ${i + 1}`,
  }));

  return (
    <>
      <PageCss href="/css/style.css" />
      <PageShell variant="student">
        <div className="topbar">
          <h1>Course materials</h1>
          <Link to={`/course-content.html?id=${course.id}`} className="btn btn-outline btn-sm">Back to course</Link>
        </div>
        <div className="main-content">
          <div className="crumbs">
            <Link to="/my-courses.html">My courses</Link>
            <span>/</span>
            <Link to={`/course-content.html?id=${course.id}`}>{course.title}</Link>
            <span>/</span>
            Materials
          </div>

          {materials.length === 0 ? (
            <p className="muted">No materials have been added for this course yet.</p>
          ) : (
            materials.map((m) => (
              <div className="material-item" key={m.title}>
                <div className="material-icon">{FILE_ICON}</div>
                <div className="material-info">
                  <h3>{m.title}</h3>
                  <div className="meta">{m.meta}</div>
                </div>
                <a href="#" className="btn btn-sm btn-outline">Download</a>
              </div>
            ))
          )}
        </div>
      </PageShell>
    </>
  );
}
