import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import PageCss from "../components/PageCss";
import { useAuth } from "../auth/AuthContext";
import { getCourseById } from "../data/courseStore";

export default function StudentDashboard() {
  const { user } = useAuth();
  const enrolledIds = user?.enrolledCourses || [];
  const enrolledCourses = enrolledIds.map((id) => getCourseById(id)).filter(Boolean);
  const firstName = user?.firstName || "there";

  const courseProgress = enrolledCourses.map((course) => {
    const completed = new Set(user?.completedModules?.[course.id] || []);
    const total = course.modules || 0;
    const percent = total === 0 ? 0 : Math.round((completed.size / total) * 100);
    return { course, percent, completedCount: completed.size };
  });

  const modulesCompleted = courseProgress.reduce((sum, c) => sum + c.completedCount, 0);
  const certificatesEarned = courseProgress.filter((c) => c.percent === 100).length;
  const overallProgress =
    courseProgress.length === 0
      ? 0
      : Math.round(courseProgress.reduce((sum, c) => sum + c.percent, 0) / courseProgress.length);

  return (
    <>
      <PageCss href="/css/style.css" />
      <PageShell variant="student">
        <div className="topbar"><h1>Welcome back, {firstName}</h1></div>
        <div className="main-content" style={{ maxWidth: "100%" }}>
          <div className="stat-grid">
            <div className="stat-card">
              <div className="num">{enrolledCourses.length}</div>
              <div className="label">Courses enrolled</div>
            </div>
            <div className="stat-card">
              <div className="num">{certificatesEarned}</div>
              <div className="label">Certificates earned</div>
            </div>
            <div className="stat-card">
              <div className="num">{modulesCompleted}</div>
              <div className="label">Modules completed</div>
            </div>
            <div className="stat-card">
              <div className="num">{overallProgress}%</div>
              <div className="label">Overall progress</div>
            </div>
          </div>

          <div className="card">
            <div className="card-header"><h2>Continue learning</h2></div>
            {courseProgress.length === 0 ? (
              <div>
                <p className="muted">You haven't enrolled in any courses yet.</p>
                <Link to="/browse-courses.html" className="btn btn-primary">Browse courses</Link>
              </div>
            ) : (
              <div className="course-grid">
                {courseProgress.map(({ course, percent }) => (
                  <div className="course-card" key={course.id}>
                    <div className="course-thumb"><span className={`badge ${course.badgeClass}`}>{course.category}</span></div>
                    <div className="body">
                      <h3>{course.title}</h3>
                      <p className="meta">{course.modules} modules · {course.duration}</p>
                      <div className="progress-bar" style={{ marginBottom: "1rem" }}>
                        <span style={{ width: `${percent}%` }}></span>
                      </div>
                      <div className="foot">
                        <span className="muted" style={{ fontSize: ".82rem" }}>{percent}%</span>
                        <Link to={`/course-content.html?id=${course.id}`} className="btn btn-sm btn-primary">Continue</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </PageShell>
    </>
  );
}
