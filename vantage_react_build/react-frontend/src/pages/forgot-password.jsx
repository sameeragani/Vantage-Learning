import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageCss from "../components/PageCss";
import { useAuth } from "../auth/AuthContext";

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ForgotPassword() {
  const { emailExists } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !isValidEmail(trimmed)) {
      setError("Enter the email address linked to your account.");
      return;
    }
    if (!emailExists(trimmed)) {
      setError("No account found with that email. Check the address or register instead.");
      return;
    }
    setError("");
    navigate("/reset-password.html", { state: { email: trimmed } });
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
          <div className="quote">
            "Forgot my password once. Took a minute to get back in — no drama."
          </div>
        </div>
        <div className="auth-form-side">
          <div className="auth-card">
            <span className="eyebrow">Account recovery</span>
            <h1>Forgot your password?</h1>
            <p className="muted" style={{ marginBottom: "1.6rem" }}>
              Enter the email on your account. If it's registered, you'll be able to set a new password right away.
            </p>

            <form noValidate onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="ava@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error && <p className="form-error-text show">{error}</p>}
              </div>
              <button type="submit" className="btn btn-primary btn-block">Continue</button>
            </form>

            <p className="switch"><Link to="/login.html">&larr; Back to log in</Link></p>
          </div>
        </div>
      </div>
    </>
  );
}
