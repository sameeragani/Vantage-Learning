import { Link, useSearchParams } from "react-router-dom";
import PageShell from "../components/PageShell";
import PageCss from "../components/PageCss";
import { useAuth } from "../auth/AuthContext";
import { getCourseById } from "../data/courseStore";

export default function CourseContent() {
  const [searchParams] = useSearchParams();
  const { user, toggleModuleComplete } = useAuth();
  const courseId = searchParams.get("id");
  const course = courseId ? getCourseById(courseId) : null;

  if (!course) {
    return (
      <>
        <PageCss href="/css/style.css" />
        <PageShell variant="student">
          <div className="topbar"><h1>Course not found</h1></div>
          <div className="main-content">
            <p className="muted">That course doesn't exist, or no course was specified.</p>
            <Link to="/my-courses.html" className="btn btn-primary">Back to my courses</Link>
          </div>
        </PageShell>
      </>
    );
  }

  const completed = new Set(user?.completedModules?.[course.id] || []);
  const totalModules = course.modules || 0;
  const percent = totalModules === 0 ? 0 : Math.round((completed.size / totalModules) * 100);

  function handleToggle(index) {
    toggleModuleComplete(course.id, index);
  }

  return (
    <>
      <PageCss href="/css/style.css" />
      <PageShell variant="student">
        <div className="topbar">
          <h1>{course.title}</h1>
          <span className="badge badge-gold">{percent}% complete</span>
        </div>
        <div className="main-content">
          <div className="crumbs">
            <Link to="/my-courses.html">My courses</Link>
            <span>/</span>
            {course.title}
          </div>

          <div className="progress-bar" style={{ marginBottom: "1.6rem" }}>
            <span style={{ width: `${percent}%` }}></span>
          </div>

          <div className="card">
            <div className="card-header">
              <h2>Modules</h2>
            </div>
            <div className="lesson-list">
              {Array.from({ length: totalModules }, (_, i) => {
                const isDone = completed.has(i);
                return (
                  <div className={`lesson-item${isDone ? " done" : ""}`} key={i}>
                    <span className="lesson-num">{isDone ? "✓" : i + 1}</span>
                    Module {i + 1}
                    <button
                      type="button"
                      className={`btn btn-sm ${isDone ? "btn-outline" : "btn-primary"}`}
                      style={{ marginLeft: "auto" }}
                      onClick={() => handleToggle(i)}
                    >
                      {isDone ? "Mark incomplete" : "Mark complete"}
                    </button>
                  </div>
                );
              })}
              {totalModules === 0 && <div className="lesson-item">No modules added for this course yet.</div>}
            </div>
          </div>

          <Link to={`/materials.html?id=${course.id}`} className="btn btn-outline" style={{ marginTop: ".6rem" }}>
            View course materials
          </Link>
        </div>
      </PageShell>
    </>
  );
}
