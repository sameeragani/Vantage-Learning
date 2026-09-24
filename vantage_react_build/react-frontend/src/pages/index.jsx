import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import PageCss from "../components/PageCss";
import { getPublishedCourses, getTotalRegisteredUsers, getTotalEnrollments, formatPrice } from "../data/courseStore";

export default function Index() {
  const courses = getPublishedCourses();
  const featured = courses.slice(0, 3);
  const learnerCount = getTotalRegisteredUsers("student");
  const enrollmentCount = getTotalEnrollments();

  return (
    <>
      <PageCss href="/css/style.css" />
      <PageShell variant="marketing">
        <section className="hero">
          <div className="container">
            <div>
              <span className="eyebrow" style={{ color: "#F3D98B" }}>Cohort-based, self-paced, yours to keep</span>
              <h1>Finish courses you actually said you'd finish.</h1>
              <p className="lead">Vantage tracks every lesson, materials download, and quiz — so your progress bar is never a lie. Pick a course, learn on your schedule, and walk away with a certificate that means something.</p>
              <div className="hero-actions">
                <Link to="/browse-courses.html" className="btn btn-primary">Browse courses</Link>
              </div>
            </div>
            <div className="hero-card">
              <div className="hero-stat"><span>Courses live</span><span className="n">{courses.length}</span></div>
              <div className="hero-stat"><span>Learners registered</span><span className="n">{learnerCount}</span></div>
              <div className="hero-stat"><span>Enrollments so far</span><span className="n">{enrollmentCount}</span></div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">How it works</span>
              <h2>Three steps between you and a finished course</h2>
            </div>
            <div className="feature-grid">
              <div className="feature-card">
                <span className="num">01</span>
                <h3>Pick a course</h3>
                <p className="muted">Filter by subject and read the full syllabus before you enrol.</p>
              </div>
              <div className="feature-card">
                <span className="num">02</span>
                <h3>Learn at your pace</h3>
                <p className="muted">Video lessons, downloadable materials, and short checks keep you moving without pressure.</p>
              </div>
              <div className="feature-card">
                <span className="num">03</span>
                <h3>Earn your certificate</h3>
                <p className="muted">Finish every module and your certificate is generated instantly, ready to share or print.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: "0" }}>
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Popular right now</span>
              <h2>Courses learners are starting this week</h2>
            </div>
            <div className="course-grid">
              {featured.map((course) => (
                <div className="course-card" key={course.id}>
                  <div className="course-thumb"><span className={`badge ${course.badgeClass}`}>{course.category}</span></div>
                  <div className="body">
                    <h3>{course.title}</h3>
                    <p className="meta">{course.modules} modules · {course.duration}</p>
                    <div className="foot">
                      <span className="price">{formatPrice(course.price)}</span>
                      <Link to={`/course-details.html?id=${course.id}`} className="btn btn-sm btn-outline">View course</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}
