import { Link, NavLink } from "react-router-dom";

const studentLinks = [
  ["/student-dashboard.html", "Dashboard"],
  ["/browse-courses.html", "Browse Courses"],
  ["/my-courses.html", "My Courses"],
  ["/progress.html", "Progress"],
  ["/notifications.html", "Notifications"],
];

const adminLinks = [
  ["/admin-dashboard.html", "Dashboard"],
  ["/courses.html", "Courses"],
  ["/add-course.html", "Add course"],
  ["/notifications.html", "Notifications"],
];

export default function Sidebar({ admin = false }) {
  const links = admin ? adminLinks : studentLinks;
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <Link to={admin ? "/admin-dashboard.html" : "/student-dashboard.html"} className="seal">
          <svg width="26" height="26" viewBox="0 0 30 30" fill="none" style={{ color: "var(--gold)" }} aria-hidden="true">
            <circle cx="15" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
            <path d="M9 19 L7 27 L15 24 L23 27 L21 19" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M15 7 L16.7 10.5 L20.5 11 L17.7 13.6 L18.4 17.4 L15 15.5 L11.6 17.4 L12.3 13.6 L9.5 11 L13.3 10.5 Z" fill="currentColor" />
          </svg>
          <span className="seal-word">Vantage <em>{admin ? "Admin" : "Learning"}</em></span>
        </Link>
        <button type="button" className="sidebar-toggle" id="sidebarToggle" aria-label="Toggle menu" aria-controls="sidebarNav"><span></span></button>
      </div>
      <nav className="sidebar-nav" id="sidebarNav">
        {links.map(([to, label]) => <NavLink key={to} to={to}>{label}</NavLink>)}
      </nav>
      <div className="sidebar-foot">
        <span className="who">{admin ? "Renata Osei" : "Ava Thompson"}</span>
        <Link to="/index.html">Log out</Link>
      </div>
    </aside>
  );
}
