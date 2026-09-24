import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import PageCss from "../components/PageCss";
import { useAuth } from "../auth/AuthContext";
import { getCourseById } from "../data/courseStore";

const BIG_CIRC = 2 * Math.PI * 46; // ~289
const SMALL_CIRC = 2 * Math.PI * 34; // ~214

function ringOffset(percent, circumference) {
  return circumference * (1 - percent / 100);
}

export default function Progress() {
  const { user } = useAuth();
  const enrolledIds = user?.enrolledCourses || [];
  const courses = enrolledIds.map((id) => getCourseById(id)).filter(Boolean);

  const courseProgress = courses.map((course) => {
    const completed = new Set(user?.completedModules?.[course.id] || []);
    const total = course.modules || 0;
    const percent = total === 0 ? 0 : Math.round((completed.size / total) * 100);
    return { course, percent, completedCount: completed.size, total };
  });

  const inProgressCount = courseProgress.filter((c) => c.percent > 0 && c.percent < 100).length;
  const completedCount = courseProgress.filter((c) => c.percent === 100).length;
  const overall =
    courseProgress.length === 0
      ? 0
      : Math.round(courseProgress.reduce((sum, c) => sum + c.percent, 0) / courseProgress.length);

  return (
    <>
      <PageCss href="/css/style.css" />
      <PageShell variant="student">
        <div className="topbar"><h1>My Progress</h1></div>
        <div className="main-content" style={{ maxWidth: "100%" }}>
          <div className="card">
            <div className="card-header"><h2>Overall</h2></div>
            <div style={{ display: "flex", gap: "2.4rem", alignItems: "center", flexWrap: "wrap" }}>
              <div className="progress-ring">
                <svg width="108" height="108" viewBox="0 0 108 108">
                  <circle className="track" cx="54" cy="54" r="46"></circle>
                  <circle
                    className="fill"
                    cx="54" cy="54" r="46"
                    strokeDasharray={BIG_CIRC}
                    strokeDashoffset={ringOffset(overall, BIG_CIRC)}
                  ></circle>
                </svg>
                <div className="value">
                  {overall}%
                  <small>Overall</small>
                </div>
              </div>
              <div style={{ flex: "1", minWidth: "220px" }}>
                <div className="hero-stat" style={{ borderColor: "var(--border-soft)" }}>
                  <span className="muted">Courses in progress</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontWeight: "600" }}>{inProgressCount}</span>
                </div>
                <div className="hero-stat" style={{ borderColor: "var(--border-soft)", borderBottom: "none" }}>
                  <span className="muted">Courses completed</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontWeight: "600" }}>{completedCount}</span>
                </div>
              </div>
            </div>
          </div>

          {courseProgress.length === 0 && (
            <div className="card">
              <p className="muted">You haven't enrolled in any courses yet.</p>
              <Link to="/browse-courses.html" className="btn btn-primary">Browse courses</Link>
            </div>
          )}

          {courseProgress.map(({ course, percent, completedCount: doneCount, total }) => (
            <div className="card" key={course.id}>
              <div className="card-header">
                <h2>{course.title}</h2>
                <span className={`badge ${percent === 100 ? "badge-teal" : "badge-gold"}`}>
                  {percent === 100 ? "Completed" : "In progress"}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "1.6rem" }}>
                <div className="progress-ring" style={{ width: "80px", height: "80px" }}>
                  <svg width="80" height="80" viewBox="0 0 80 80">
                    <circle className="track" cx="40" cy="40" r="34" strokeWidth="7"></circle>
                    <circle
                      className="fill"
                      cx="40" cy="40" r="34" strokeWidth="7"
                      strokeDasharray={SMALL_CIRC}
                      strokeDashoffset={ringOffset(percent, SMALL_CIRC)}
                    ></circle>
                  </svg>
                  <div className="value" style={{ fontSize: ".9rem" }}>{percent}%</div>
                </div>
                <div style={{ flex: "1" }}>
                  <p className="muted" style={{ marginBottom: ".4em" }}>{doneCount} of {total} modules complete</p>
                  <div className="progress-bar">
                    <span style={{ width: `${percent}%` }}></span>
                  </div>
                </div>
                {percent === 100 ? (
                  <Link to="/certificate.html" className="btn btn-sm btn-primary">View certificate</Link>
                ) : (
                  <Link to={`/course-content.html?id=${course.id}`} className="btn btn-sm btn-outline">Resume</Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </PageShell>
    </>
  );
}
