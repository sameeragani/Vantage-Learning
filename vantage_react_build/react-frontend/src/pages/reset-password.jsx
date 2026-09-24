import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PageCss from "../components/PageCss";
import { useAuth } from "../auth/AuthContext";

export default function ResetPassword() {
  const { resetPasswordForEmail } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState(null);

  if (!email) {
    return (
      <>
        <PageCss href="/css/style.css" />
        <div className="auth-shell">
          <div className="auth-form-side" style={{ width: "100%" }}>
            <div className="auth-card">
              <h1>Let's verify your email first</h1>
              <p className="muted">Start from the Forgot password page so we can confirm the account before setting a new password.</p>
              <Link to="/forgot-password.html" className="btn btn-primary btn-block">Go to Forgot password</Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFeedback(null);
    const next = {};
    if (!password) next.password = "Password is required.";
    else if (password.length < 8) next.password = "Password must be at least 8 characters.";
    if (!confirmPassword) next.confirmPassword = "Confirm password is required.";
    else if (confirmPassword !== password) next.confirmPassword = "Confirm password does not match.";
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setFeedback({ type: "error", message: "Please fix the highlighted fields and try again." });
      return;
    }

    const result = resetPasswordForEmail(email, password);
    if (!result.success) {
      setFeedback({ type: "error", message: result.message });
      return;
    }
    setFeedback({ type: "success", message: "Password updated! Redirecting to log in…" });
    setTimeout(() => navigate("/login.html"), 700);
  }

  return (
    <>
      <PageCss href="/css/style.css" />
      <div className="auth-shell">
        <div className="auth-brand">
          <Link to="/index.html" className="seal">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" style={{ color: "var(--gold)" }}>
              <circle cx="15" cy="12" r="9" stroke="currentColor" strokeWidth="2"></circle>
              <path d="M9 19 L7 27 L15 24 L23 27 L21 19" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"></path>
              <path d="M15 7 L16.7 10.5 L20.5 11 L17.7 13.6 L18.4 17.4 L15 15.5 L11.6 17.4 L12.3 13.6 L9.5 11 L13.3 10.5 Z" fill="currentColor"></path>
            </svg>
            <span className="seal-word">Vantage<em>Learning</em></span>
          </Link>
          <div className="quote">Almost there — set a new password and you're back in.</div>
        </div>
        <div className="auth-form-side">
          <div className="auth-card">
            <span className="eyebrow">Account recovery</span>
            <h1>Choose a new password</h1>
            <p className="muted" style={{ marginBottom: "1.6rem" }}>For {email}. Make it something you haven't used before.</p>

            {feedback && (
              <div className={`alert show ${feedback.type === "error" ? "alert-error" : "alert-success"}`} role="alert">
                {feedback.message}
              </div>
            )}

            <form noValidate onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="new-password">New password</label>
                <input
                  type="password"
                  id="new-password"
                  placeholder="At least 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p className="form-hint">Use a mix of letters, numbers, and a symbol.</p>
                {errors.password && <p className="form-error-text show">{errors.password}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">Confirm new password</label>
                <input
                  type="password"
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {errors.confirmPassword && <p className="form-error-text show">{errors.confirmPassword}</p>}
              </div>
              <button type="submit" className="btn btn-primary btn-block">Reset password</button>
            </form>

            <p className="switch"><Link to="/login.html">&larr; Back to log in</Link></p>
          </div>
        </div>
      </div>
    </>
  );
}
