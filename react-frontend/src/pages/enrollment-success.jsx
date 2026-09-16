import { Link } from "react-router-dom";
import PageCss from "../components/PageCss";

export default function EnrollmentSuccess() {
  return (
    <>
      <PageCss href="/css/style.css" />
    <div className="confirm-wrap">
      <div className="confirm-card">
        <div className="confirm-icon">
          <svg width="34" height="34" viewbox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M4 12.5 L9.5 18 L20 6" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </div>
        <span className="eyebrow">Enrollment confirmed</span>
        <h1 style={{marginTop: ".4em"}}>You're in.</h1>
        <p className="muted">
          You've successfully enrolled in
          <strong>UI Design Foundations</strong>
          . A receipt has been sent to ava@example.com, and the course is now waiting in your library.
        </p>
        <div className="card" style={{textAlign: "left", margin: "1.6rem 0"}}>
          <div style={{display: "flex", justifyContent: "space-between", fontSize: ".9rem", padding: ".4em 0"}}>
            <span className="muted">Course</span>
            <span>UI Design Foundations</span>
          </div>
          <div style={{display: "flex", justifyContent: "space-between", fontSize: ".9rem", padding: ".4em 0"}}>
            <span className="muted">Amount paid</span>
            <span>$49.00</span>
          </div>
          <div style={{display: "flex", justifyContent: "space-between", fontSize: ".9rem", padding: ".4em 0"}}>
            <span className="muted">Order ID</span>
            <span style={{fontFamily: "var(--font-mono)"}}>VL-284719</span>
          </div>
        </div>
        <Link to="/course-content.html" className="btn btn-primary btn-block">
          Start learning
        </Link>
        <Link to="/my-courses.html" className="btn btn-outline btn-block" style={{marginTop: ".7rem"}}>
          Go to my courses
        </Link>
      </div>
    </div>
    </>
  );
}
