import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import PageCss from "../components/PageCss";
import {
  getCourses,
  getPublishedCourses,
  getEnrollmentCount,
  getTotalRegisteredUsers,
  formatPrice,
} from "../data/courseStore";

export default function AdminDashboard() {
  const courses = getCourses();
  const publishedCount = getPublishedCourses().length;
  const studentCount = getTotalRegisteredUsers("student");

  return (
    <>
      <PageCss href="/css/style.css" />
      <PageShell variant="admin">
        <div className="topbar">
          <h1>Dashboard</h1>
          <Link to="/add-course.html" className="btn btn-primary btn-sm">+ New course</Link>
        </div>
        <div className="main-content" style={{ maxWidth: "100%" }}>
          <div className="stat-grid">
            <div className="stat-card">
              <div className="num">{publishedCount}</div>
              <div className="label">Published courses</div>
            </div>
            <div className="stat-card">
              <div className="num">{courses.length}</div>
              <div className="label">Total courses</div>
            </div>
            <div className="stat-card">
              <div className="num">{studentCount}</div>
              <div className="label">Registered students</div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2>Courses</h2>
              <Link to="/courses.html" className="btn btn-outline btn-sm">Manage courses</Link>
            </div>
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Course</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Learners</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.length === 0 ? (
                    <tr><td colSpan="5">No courses yet. Add your first course to get started.</td></tr>
                  ) : (
                    courses.map((course) => (
                      <tr key={course.id}>
                        <td>{course.title}</td>
                        <td>{course.category}</td>
                        <td>{formatPrice(course.price)}</td>
                        <td>{getEnrollmentCount(course.id)}</td>
                        <td>
                          <span className={`badge ${course.status === "Published" ? "badge-teal" : "badge-ink"}`}>
                            {course.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </PageShell>
    </>
  );
}
