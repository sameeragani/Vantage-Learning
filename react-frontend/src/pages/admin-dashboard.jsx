import PageShell from "../components/PageShell";
import PageCss from "../components/PageCss";

export default function AdminDashboard() {
  return (
    <>
      <PageCss href="/css/style.css" />
      <PageShell variant="admin">
    <div className="topbar">
      <h1>Dashboard</h1>
      <Link to="/add-course.html" className="btn btn-primary btn-sm">
        + New course
      </Link>
    </div>
    <div className="main-content" style={{maxWidth: "100%"}}>
      <div className="stat-grid">
        <div className="stat-card">
          <div className="num">128</div>
          <div className="label">Published courses</div>
        </div>
        <div className="stat-card">
          <div className="num">42,900</div>
          <div className="label">Enrolled learners</div>
        </div>
        <div className="stat-card">
          <div className="num">16,340</div>
          <div className="label">Certificates issued</div>
        </div>
        <div className="stat-card">
          <div className="num">78%</div>
          <div className="label">Avg. completion rate</div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h2>Recent enrollments</h2>
          <Link to="/courses.html" className="btn btn-outline btn-sm">
            View all courses
          </Link>
        </div>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Learner</th>
                <th>Course</th>
                <th>Enrolled</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ava Thompson</td>
                <td>UI Design Foundations</td>
                <td>Jul 14, 2026</td>
                <td>
                  <span className="badge badge-teal">Active</span>
                </td>
              </tr>
              <tr>
                <td>Daniel Kim</td>
                <td>SQL for Analysts</td>
                <td>Jul 14, 2026</td>
                <td>
                  <span className="badge badge-teal">Active</span>
                </td>
              </tr>
              <tr>
                <td>Priya Nair</td>
                <td>UI Design Foundations</td>
                <td>Jul 12, 2026</td>
                <td>
                  <span className="badge badge-gold">Completed</span>
                </td>
              </tr>
              <tr>
                <td>Marcus Ellis</td>
                <td>Technical Writing 101</td>
                <td>Jul 11, 2026</td>
                <td>
                  <span className="badge badge-teal">Active</span>
                </td>
              </tr>
              <tr>
                <td>Sofia Reyes</td>
                <td>SQL for Analysts</td>
                <td>Jul 10, 2026</td>
                <td>
                  <span className="badge badge-rose">Paused</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h2>Top performing courses</h2>
        </div>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Learners</th>
                <th>Completion rate</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>UI Design Foundations</td>
                <td>6,204</td>
                <td>84%</td>
                <td>4.8</td>
              </tr>
              <tr>
                <td>SQL for Analysts</td>
                <td>5,110</td>
                <td>76%</td>
                <td>4.7</td>
              </tr>
              <tr>
                <td>Technical Writing 101</td>
                <td>3,982</td>
                <td>81%</td>
                <td>4.9</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
      </PageShell>
    </>
  );
}
