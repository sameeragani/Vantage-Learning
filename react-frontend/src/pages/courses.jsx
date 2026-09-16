import PageShell from "../components/PageShell";
import PageCss from "../components/PageCss";

export default function Courses() {
  return (
    <>
      <PageCss href="/css/style.css" />
      <PageShell variant="admin">
    <div className="topbar">
      <h1>Courses</h1>
      <Link to="/add-course.html" className="btn btn-primary btn-sm">
        + New course
      </Link>
    </div>
    <div className="main-content" style={{maxWidth: "100%"}}>
      <div className="card" style={{marginBottom: "1.4rem"}}>
        <div style={{display: "flex", gap: "1rem", alignItems: "center"}}>
          <input type="search" placeholder="Search courses by title…" style={{maxWidth: "320px"}} />
          <select style={{maxWidth: "180px"}}>
            <option>All categories</option>
            <option>Design</option>
            <option>Data</option>
            <option>Career</option>
          </select>
          <select style={{maxWidth: "160px"}}>
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
            <tr>
              <td>UI Design Foundations</td>
              <td>Design</td>
              <td>6</td>
              <td>6,204</td>
              <td>
                <span className="badge badge-teal">Published</span>
              </td>
              <td className="table-actions">
                <Link to="/course-details.html" className="btn btn-sm btn-outline">
                  View
                </Link>
                <Link to="/edit-course.html" className="btn btn-sm btn-outline">
                  Edit
                </Link>
              </td>
            </tr>
            <tr>
              <td>SQL for Analysts</td>
              <td>Data</td>
              <td>8</td>
              <td>5,110</td>
              <td>
                <span className="badge badge-teal">Published</span>
              </td>
              <td className="table-actions">
                <Link to="/course-details.html" className="btn btn-sm btn-outline">
                  View
                </Link>
                <Link to="/edit-course.html" className="btn btn-sm btn-outline">
                  Edit
                </Link>
              </td>
            </tr>
            <tr>
              <td>Technical Writing 101</td>
              <td>Career</td>
              <td>5</td>
              <td>3,982</td>
              <td>
                <span className="badge badge-teal">Published</span>
              </td>
              <td className="table-actions">
                <Link to="/course-details.html" className="btn btn-sm btn-outline">
                  View
                </Link>
                <Link to="/edit-course.html" className="btn btn-sm btn-outline">
                  Edit
                </Link>
              </td>
            </tr>
            <tr>
              <td>Intro to Data Visualization</td>
              <td>Data</td>
              <td>7</td>
              <td>0</td>
              <td>
                <span className="badge badge-ink">Draft</span>
              </td>
              <td className="table-actions">
                <Link to="/course-details.html" className="btn btn-sm btn-outline">
                  View
                </Link>
                <Link to="/edit-course.html" className="btn btn-sm btn-outline">
                  Edit
                </Link>
              </td>
            </tr>
            <tr>
              <td>Product Management Basics</td>
              <td>Career</td>
              <td>6</td>
              <td>1,247</td>
              <td>
                <span className="badge badge-teal">Published</span>
              </td>
              <td className="table-actions">
                <Link to="/course-details.html" className="btn btn-sm btn-outline">
                  View
                </Link>
                <Link to="/edit-course.html" className="btn btn-sm btn-outline">
                  Edit
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
      </PageShell>
    </>
  );
}
