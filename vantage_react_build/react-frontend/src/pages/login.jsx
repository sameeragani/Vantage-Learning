import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageCss from "../components/PageCss";
import { useAuth } from "../auth/AuthContext";

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState(null);

  function validate() {
    const next = {};
    if (!email.trim()) next.email = "Email address is required.";
    else if (!isValidEmail(email.trim())) next.email = "Enter a valid email address.";
    if (!password) next.password = "Password is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFeedback(null);
    if (!validate()) {
      setFeedback({ type: "error", message: "Please enter a valid email and password." });
      return;
    }

    const result = login({ email: email.trim(), password, role });
    if (!result.success) {
      setFeedback({ type: "error", message: result.message });
      return;
    }

    setFeedback({ type: "success", message: "Logged in! Redirecting…" });
    setTimeout(() => {
      navigate(role === "admin" ? "/admin-dashboard.html" : "/student-dashboard.html");
    }, 500);
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
            "Picking up exactly where I left off, on any device, is the whole reason I stuck with it."
            <div className="quote-who">— Daniel K., SQL for Analysts, in progress</div>
          </div>
        </div>
        <div className="auth-form-side">
          <div className="auth-card">
            <span className="eyebrow">Welcome back</span>
            <h1>Log in to Vantage</h1>
            <p className="muted" style={{ marginBottom: "1.6rem" }}>Continue exactly where you left off.</p>

            {feedback && (
              <div className={`alert show ${feedback.type === "error" ? "alert-error" : "alert-success"}`} role="alert">
                {feedback.message}
              </div>
            )}

            <form noValidate onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Logging in as</label>
                <div style={{ display: "flex", gap: "1.2rem" }}>
                  <label className="checkbox-row">
                    <input type="radio" name="role" checked={role === "student"} onChange={() => setRole("student")} />
                    Student
                  </label>
                  <label className="checkbox-row">
                    <input type="radio" name="role" checked={role === "admin"} onChange={() => setRole("admin")} />
                    Admin
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="ava@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="form-error-text show">{errors.email}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <p className="form-error-text show">{errors.password}</p>}
              </div>

              <div className="form-group" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span className="checkbox-row">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember" style={{ margin: "0", fontWeight: "400" }}>Remember me</label>
                </span>
                <Link to="/forgot-password.html" style={{ fontSize: ".86rem" }}>Forgot password?</Link>
              </div>

              <button type="submit" className="btn btn-primary btn-block">Log in</button>
            </form>

            <p className="switch">
              New to Vantage? <Link to="/register.html">Create an account</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
