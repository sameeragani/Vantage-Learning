import { Link, useNavigate, useSearchParams } from "react-router-dom";
import PageShell from "../components/PageShell";
import PageCss from "../components/PageCss";
import { useAuth } from "../auth/AuthContext";
import { getCourseById, getPublishedCourses, getEnrollmentCount, formatPrice } from "../data/courseStore";

export default function CourseDetails() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user, enrollInCourse } = useAuth();

  const requestedId = searchParams.get("id");
  const course = requestedId ? getCourseById(requestedId) : getPublishedCourses()[0];

  if (!course) {
    return (
      <>
        <PageCss href="/css/style.css" />
        <PageShell variant="marketing">
          <div className="container" style={{ padding: "4rem 0" }}>
            <h1>Course not found</h1>
            <p className="muted">That course doesn't exist or has been removed.</p>
            <Link to="/browse-courses.html" className="btn btn-primary">Browse courses</Link>
          </div>
        </PageShell>
      </>
    );
  }

  const isEnrolled = Boolean(user?.enrolledCourses?.includes(course.id));
  const learnerCount = getEnrollmentCount(course.id);
  const lessons = Array.from({ length: course.modules }, (_, i) => `Module ${i + 1}`);

  function handleEnroll() {
    if (!user) {
      navigate("/login.html");
      return;
    }
    enrollInCourse(course.id);
    navigate("/enrollment-success.html", {
      state: { courseTitle: course.title, price: formatPrice(course.price) },
    });
  }

  return (
    <>
      <PageCss href="/css/style.css" />
      <PageShell variant="marketing">
        <div className="container" style={{ paddingTop: "2.4rem" }}>
          <div className="crumbs">
            <Link to="/index.html">Home</Link>
            <span>/</span>
            <Link to="/browse-courses.html">Browse courses</Link>
            <span>/</span>
            {course.title}
          </div>
        </div>
        <div
          className="container"
          style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: "2.4rem", alignItems: "start", paddingBottom: "4rem" }}
        >
          <div>
            <span className={`badge ${course.badgeClass}`}>{course.category}</span>
            <h1 style={{ marginTop: ".5em" }}>{course.title}</h1>
            <p className="muted" style={{ fontSize: "1.05rem", maxWidth: "60ch" }}>{course.description}</p>
            <div style={{ display: "flex", gap: "1.6rem", margin: "1.4rem 0", fontSize: ".9rem" }} className="muted">
              <span>{learnerCount} learner{learnerCount === 1 ? "" : "s"} enrolled</span>
              <span>{course.duration} total</span>
            </div>

            <div className="card">
              <div className="card-header"><h2>Curriculum</h2></div>
              <div className="lesson-list">
                {lessons.map((label, i) => (
                  <div className="lesson-item" key={label}>
                    <span className="lesson-num">{i + 1}</span>
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="card" style={{ position: "sticky", top: "96px" }}>
              <div
                className="course-thumb"
                style={{ margin: "-1.6rem -1.6rem 1.2rem", borderRadius: "var(--radius) var(--radius) 0 0" }}
              ></div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "1.8rem", fontWeight: "600", color: "var(--ink)" }}>
                {formatPrice(course.price)}
              </div>
              <p className="muted" style={{ fontSize: ".85rem", marginBottom: "1.2rem" }}>One-time payment · lifetime access</p>

              {isEnrolled ? (
                <Link to="/my-courses.html" className="btn btn-primary btn-block">Go to my courses</Link>
              ) : (
                <button type="button" className="btn btn-primary btn-block" onClick={handleEnroll}>
                  Enroll now
                </button>
              )}

              <ul style={{ marginTop: "1.4rem", fontSize: ".86rem" }} className="muted">
                <li style={{ marginBottom: ".5em" }}>✓ {course.modules} modules, {course.duration} of video</li>
                <li style={{ marginBottom: ".5em" }}>✓ Downloadable project files</li>
                <li style={{ marginBottom: ".5em" }}>✓ Certificate on completion</li>
                <li>✓ Learn on any device</li>
              </ul>
            </div>
          </div>
        </div>
      </PageShell>
    </>
  );
}
