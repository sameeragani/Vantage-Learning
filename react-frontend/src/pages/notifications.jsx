import PageShell from "../components/PageShell";
import PageCss from "../components/PageCss";

export default function Notifications() {
  return (
    <>
      <PageCss href="/css/style.css" />
      <PageShell variant="student">
    <div className="topbar">
      <h1>Notifications</h1>
      <a href="#" className="btn btn-outline btn-sm">Mark all as read</a>
    </div>
    <div className="main-content">
      <div style={{border: "1px solid var(--border)", borderRadius: "var(--radius)", overflow: "hidden", background: "var(--surface)"}}>
        <div className="notif-item unread">
          <div className="notif-icon gold">
            <svg width="18" height="18" viewbox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2 L14.5 9 H22 L16 13.5 L18 21 L12 16.5 L6 21 L8 13.5 L2 9 H9.5 Z"></path>
            </svg>
          </div>
          <div className="notif-body">
            <h3>New module unlocked in UI Design Foundations</h3>
            <p className="muted" style={{margin: "0"}}>Module 4 · Practice & Portfolio is now available to start.</p>
            <span className="notif-time">2 hours ago</span>
          </div>
        </div>
        <div className="notif-item unread">
          <div className="notif-icon">
            <svg width="18" height="18" viewbox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 12.5 L9.5 18 L20 6"></path>
            </svg>
          </div>
          <div className="notif-body">
            <h3>Certificate ready</h3>
            <p className="muted" style={{margin: "0"}}>Your certificate for Technical Writing 101 has been issued and is ready to download.</p>
            <span className="notif-time">Yesterday</span>
          </div>
        </div>
        <div className="notif-item">
          <div className="notif-icon rose">
            <svg width="18" height="18" viewbox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="9"></circle>
              <path d="M12 8 v5 M12 16 h.01"></path>
            </svg>
          </div>
          <div className="notif-body">
            <h3>Payment receipt available</h3>
            <p className="muted" style={{margin: "0"}}>Your receipt for SQL for Analysts ($59.00) is ready in your account.</p>
            <span className="notif-time">3 days ago</span>
          </div>
        </div>
        <div className="notif-item">
          <div className="notif-icon">
            <svg width="18" height="18" viewbox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 5 L19 12 L8 19 Z"></path>
            </svg>
          </div>
          <div className="notif-body">
            <h3>Reminder: continue SQL for Analysts</h3>
            <p className="muted" style={{margin: "0"}}>You're 22% through — Module 2 picks up with joins and subqueries.</p>
            <span className="notif-time">5 days ago</span>
          </div>
        </div>
        <div className="notif-item">
          <div className="notif-icon gold">
            <svg width="18" height="18" viewbox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2 L14.5 9 H22 L16 13.5 L18 21 L12 16.5 L6 21 L8 13.5 L2 9 H9.5 Z"></path>
            </svg>
          </div>
          <div className="notif-body">
            <h3>Welcome to Vantage Learning</h3>
            <p className="muted" style={{margin: "0"}}>Your account is set up. Browse the catalog to enrol in your first course.</p>
            <span className="notif-time">Jul 2, 2026</span>
          </div>
        </div>
      </div>
    </div>
      </PageShell>
    </>
  );
}
