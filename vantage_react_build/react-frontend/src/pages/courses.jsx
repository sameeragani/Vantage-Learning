import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import PageCss from "../components/PageCss";
import { getCourses, getEnrollmentCount, formatPrice } from "../data/courseStore";

export default function Courses() {
  const allCourses = useMemo(() => getCourses(), []);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All categories");
  const [status, setStatus] = useState("All statuses");

  const categories = useMemo(
    () => ["All categories", ...Array.from(new Set(allCourses.map((c) => c.category)))],
    [allCourses]
  );

  const filtered = allCourses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(search.trim().toLowerCase());
    const matchesCategory = category === "All categories" || course.category === category;
    const matchesStatus = status === "All statuses" || course.status === status;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <>
      <PageCss href="/css/style.css" />
      <PageShell variant="admin">
        <div className="topbar">
          <h1>Courses</h1>
          <Link to="/add-course.html" className="btn btn-primary btn-sm">+ New course</Link>
        </div>
        <div className="main-content" style={{ maxWidth: "100%" }}>
          <div className="card" style={{ marginBottom: "1.4rem" }}>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <input
                type="search"
                placeholder="Search courses by title…"
                style={{ maxWidth: "320px" }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <select style={{ maxWidth: "180px" }} value={category} onChange={(e) => setCategory(e.target.value)}>
                {categories.map((c) => <option key={c}>{c}</option>)}
              </select>
              <select style={{ maxWidth: "160px" }} value={status} onChange={(e) => setStatus(e.target.value)}>
                <option>All statuses</option>
                <option>Published</option>
                <option>Draft</option>
              </select>
            </div>
          </div>

          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Category</th>
                  <th>Modules</th>
                  <th>Learners</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr><td colSpan="6">No courses match your filters.</td></tr>
                ) : (
                  filtered.map((course) => (
                    <tr key={course.id}>
                      <td>{course.title}</td>
                      <td>{course.category}</td>
                      <td>{course.modules}</td>
                      <td>{getEnrollmentCount(course.id)}</td>
                      <td>
                        <span className={`badge ${course.status === "Published" ? "badge-teal" : "badge-ink"}`}>
                          {course.status}
                        </span>
                      </td>
                      <td className="table-actions">
                        <Link to={`/course-details.html?id=${course.id}`} className="btn btn-sm btn-outline">View</Link>
                        <Link to={`/edit-course.html?id=${course.id}`} className="btn btn-sm btn-outline">Edit</Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </PageShell>
    </>
  );
}
