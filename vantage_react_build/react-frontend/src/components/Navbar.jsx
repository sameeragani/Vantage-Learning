import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../auth/AuthContext";

function navLinkClass({ isActive }) {
  return isActive ? "active" : undefined;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function closeMenu() {
    setOpen(false);
  }

  function handleLogout() {
    logout();
    closeMenu();
    navigate("/index.html");
  }

  const dashboardPath = user?.role === "admin" ? "/admin-dashboard.html" : "/student-dashboard.html";

  return (
    <header className="site-header">
      <div className="container">
        <Link to="/index.html" className="seal">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" style={{ color: "var(--gold-dark)" }} aria-hidden="true">
            <circle cx="15" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
            <path d="M9 19 L7 27 L15 24 L23 27 L21 19" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M15 7 L16.7 10.5 L20.5 11 L17.7 13.6 L18.4 17.4 L15 15.5 L11.6 17.4 L12.3 13.6 L9.5 11 L13.3 10.5 Z" fill="currentColor" />
          </svg>
          <span className="seal-word">Vantage <em>Learning</em></span>
        </Link>

        <nav className={`site-nav${open ? " nav-open" : ""}`} id="siteNav">
          <NavLink to="/index.html" onClick={closeMenu} className={navLinkClass} end>Home</NavLink>
          <NavLink to="/browse-courses.html" onClick={closeMenu} className={navLinkClass}>Browse Courses</NavLink>
          <NavLink to="/my-courses.html" onClick={closeMenu} className={navLinkClass}>My Courses</NavLink>
        </nav>

        <div className="header-actions">
          {user ? (
            <span className="auth-links">
              <Link to={dashboardPath} className="btn btn-outline btn-sm">Dashboard</Link>
              <button type="button" className="btn btn-primary btn-sm" onClick={handleLogout}>Log out</button>
            </span>
          ) : (
            <span className="auth-links">
              <Link to="/login.html" className="btn btn-outline btn-sm">Log in</Link>
              <Link to="/register.html" className="btn btn-primary btn-sm">Register</Link>
            </span>
          )}
          <button
            type="button"
            className="nav-toggle"
            aria-label="Toggle navigation"
            aria-controls="siteNav"
            onClick={() => setOpen((o) => !o)}
          >
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
