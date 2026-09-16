import { Link, NavLink } from "react-router-dom";

function Navbar() {
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
        <nav className="site-nav" id="siteNav">
          <NavLink to="/index.html">Home</NavLink>
          <NavLink to="/browse-courses.html">Browse Courses</NavLink>
          <NavLink to="/my-courses.html">My Courses</NavLink>
        </nav>
        <div className="header-actions">
          <Link to="/login.html" className="btn btn-outline btn-sm">Log in</Link>
          <Link to="/register.html" className="btn btn-primary btn-sm">Get started</Link>
          <button type="button" className="nav-toggle" id="navToggle" aria-label="Toggle navigation" aria-controls="siteNav"><span></span></button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
