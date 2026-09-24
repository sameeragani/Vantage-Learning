import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import PageCss from "../components/PageCss";
import { useAuth } from "../auth/AuthContext";
import { getCourseById, getCourses } from "../data/courseStore";

export default function MyCourses() {
  const { user, unenrollFromCourse } = useAuth();
  const enrolledIds = user?.enrolledCourses || [];
  const enrolledCourses = enrolledIds.map((id) => getCourseById(id)).filter(Boolean);
  const totalCourses = getCourses().length;

  function handleUnenroll(course) {
    const confirmed = window.confirm(`Unenroll from "${course.title}"? Your progress in this course will be lost.`);
    if (!confirmed) return;
    unenrollFromCourse(course.id);
  }

  return (
    <>
      <PageCss href="/css/style.css" />
      <PageShell variant="student">
        <div className="topbar"><h1>My Courses</h1></div>
        <div className="main-content" style={{ maxWidth: "100%" }}>
          {enrolledCourses.length === 0 ? (
            <div className="card">
              <div className="card-header"><h2>You haven't enrolled in any courses yet</h2></div>
              <p className="muted">Once you enroll in a course, it'll show up here with your progress.</p>
              <Link to="/browse-courses.html" className="btn btn-primary">Browse courses</Link>
            </div>
          ) : (
            <div className="course-grid">
              {enrolledCourses.map((course) => {
                const completed = new Set(user?.completedModules?.[course.id] || []);
                const total = course.modules || 0;
                const percent = total === 0 ? 0 : Math.round((completed.size / total) * 100);
                return (
                  <div className="course-card" key={course.id}>
                    <div className="course-thumb"><span className={`badge ${course.badgeClass}`}>{course.category}</span></div>
                    <div className="body">
                      <h3>{course.title}</h3>
                      <p className="meta">{course.modules} modules · {course.duration}</p>
                      <div className="progress-bar" style={{ marginBottom: "1rem" }}>
                        <span style={{ width: `${percent}%` }}></span>
                      </div>
                      <div className="foot">
                        <span className="muted" style={{ fontSize: ".82rem" }}>{percent}% complete</span>
                        <Link to={`/course-content.html?id=${course.id}`} className="btn btn-sm btn-primary">Continue</Link>
                      </div>
                      <button
                        type="button"
                        className="btn btn-sm btn-danger-outline btn-block"
                        style={{ marginTop: ".7rem" }}
                        onClick={() => handleUnenroll(course)}
                      >
                        Unenroll
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <div className="card" style={{ marginTop: "2rem" }}>
            <div className="card-header"><h2>Looking for your next course?</h2></div>
            <p className="muted">Browse the full catalog of {totalCourses} courses across design, data, and career skills.</p>
            <Link to="/browse-courses.html" className="btn btn-primary">Browse courses</Link>
          </div>
        </div>
      </PageShell>
    </>
  );
}
