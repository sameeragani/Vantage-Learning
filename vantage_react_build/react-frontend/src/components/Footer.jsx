import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div>
          <span className="seal-word">Vantage <em>Learning</em></span>
          <p className="muted" style={{ marginTop: "1em", maxWidth: "32ch" }}>
            Courses built by working practitioners, tracked to the last lesson.
          </p>
        </div>
        <div>
          <h4>Learn</h4>
          <Link to="/browse-courses.html">Browse courses</Link>
          <Link to="/my-courses.html">My courses</Link>
          <Link to="/progress.html">My progress</Link>
        </div>
        <div>
          <h4>Account</h4>
          <Link to="/login.html">Log in</Link>
          <Link to="/register.html">Register</Link>
          <Link to="/forgot-password.html">Forgot password</Link>
        </div>
        <div>
          <h4>Admin</h4>
          <Link to="/admin-dashboard.html">Admin dashboard</Link>
          <Link to="/courses.html">Manage courses</Link>
        </div>
      </div>
      <div className="foot-bottom">&copy; 2026 Vantage Learning. All rights reserved.</div>
    </footer>
  );
}
