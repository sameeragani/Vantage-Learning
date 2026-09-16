import { Link } from "react-router-dom";
import PageCss from "../components/PageCss";

export default function ResetPassword() {
  return (
    <>
      <PageCss href="/css/style.css" />
    <div className="auth-shell">
      <div className="auth-brand">
        <Link to="/index.html" className="seal">
          <svg width="30" height="30" viewbox="0 0 30 30" fill="none" style={{color: "var(--gold)"}}>
            <circle cx="15" cy="12" r="9" stroke="currentColor" strokeWidth="2"></circle>
            <path d="M9 19 L7 27 L15 24 L23 27 L21 19" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"></path>
            <path d="M15 7 L16.7 10.5 L20.5 11 L17.7 13.6 L18.4 17.4 L15 15.5 L11.6 17.4 L12.3 13.6 L9.5 11 L13.3 10.5 Z" fill="currentColor"></path>
          </svg>
          <span className="seal-word">
            Vantage
            <em>Learning</em>
          </span>
        </Link>
        <div className="quote">"Almost there — a new password and you're straight back into your course."</div>
      </div>
      <div className="auth-form-side">
        <div className="auth-card">
          <span className="eyebrow">Account recovery</span>
          <h1>Choose a new password</h1>
          <p className="muted" style={{marginBottom: "1.6rem"}}>For ava@example.com. Make it something you haven't used before.</p>
          <div className="alert alert-feedback" role="alert"></div>
          <form id="reset-form" noValidate>
            <div className="form-group">
              <label htmlFor="new-password">New password</label>
              <input type="password" id="new-password" name="new-password" placeholder="At least 8 characters" required />
              <p className="form-hint">Use a mix of letters, numbers, and a symbol.</p>
              <p className="form-error-text" id="new-password-error"></p>
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm new password</label>
              <input type="password" id="confirm-password" name="confirm-password" required />
              <p className="form-error-text" id="confirm-password-error"></p>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Reset password</button>
          </form>
          <p className="switch">
            <Link to="/login.html">
              ← Back to log in
            </Link>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
