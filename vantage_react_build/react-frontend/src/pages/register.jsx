import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageCss from "../components/PageCss";
import { useAuth } from "../auth/AuthContext";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  terms: false,
  role: "student",
};

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState(null); // { type, message }

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function validate() {
    const next = {};
    if (!form.firstName.trim()) next.firstName = "First name is required.";
    if (!form.lastName.trim()) next.lastName = "Last name is required.";
    if (!form.email.trim()) next.email = "Email address is required.";
    else if (!isValidEmail(form.email.trim())) next.email = "Enter a valid email address.";
    if (!form.password) next.password = "Password is required.";
    else if (form.password.length < 8) next.password = "Password must be at least 8 characters.";
    if (!form.confirmPassword) next.confirmPassword = "Confirm password is required.";
    else if (form.confirmPassword !== form.password) next.confirmPassword = "Confirm password does not match.";
    if (!form.terms) next.terms = "You must agree to the terms to continue.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFeedback(null);
    if (!validate()) {
      setFeedback({ type: "error", message: "Please fix the highlighted fields and try again." });
      return;
    }

    const result = register({
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      email: form.email.trim(),
      password: form.password,
      role: form.role,
    });

    if (!result.success) {
      setFeedback({ type: "error", message: result.message });
      return;
    }

    setFeedback({ type: "success", message: "Account created! Redirecting to your dashboard…" });
    setTimeout(() => {
      navigate(form.role === "admin" ? "/admin-dashboard.html" : "/student-dashboard.html");
    }, 700);
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
            "I stopped losing my place halfway through courses. The progress tracker actually made me finish."
            <div className="quote-who">— Priya N., UI Design Foundations, completed March 2026</div>
          </div>
        </div>
        <div className="auth-form-side">
          <div className="auth-card">
            <span className="eyebrow">Step 1 of 1</span>
            <h1>Create your account</h1>
            <p className="muted" style={{ marginBottom: "1.6rem" }}>Free to join. Pay only when you enrol in a course.</p>

            {feedback && (
              <div className={`alert show ${feedback.type === "error" ? "alert-error" : "alert-success"}`} role="alert">
                {feedback.message}
              </div>
            )}

            <form noValidate onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Registering as</label>
                <div style={{ display: "flex", gap: "1.2rem" }}>
                  <label className="checkbox-row">
                    <input
                      type="radio"
                      name="role"
                      checked={form.role === "student"}
                      onChange={() => updateField("role", "student")}
                    />
                    Student
                  </label>
                  <label className="checkbox-row">
                    <input
                      type="radio"
                      name="role"
                      checked={form.role === "admin"}
                      onChange={() => updateField("role", "admin")}
                    />
                    Admin
                  </label>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="first-name">First name <span className="req">*</span></label>
                  <input
                    type="text"
                    id="first-name"
                    placeholder="Ava"
                    value={form.firstName}
                    onChange={(e) => updateField("firstName", e.target.value)}
                  />
                  {errors.firstName && <p className="form-error-text show">{errors.firstName}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="last-name">Last name <span className="req">*</span></label>
                  <input
                    type="text"
                    id="last-name"
                    placeholder="Thompson"
                    value={form.lastName}
                    onChange={(e) => updateField("lastName", e.target.value)}
                  />
                  {errors.lastName && <p className="form-error-text show">{errors.lastName}</p>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email address <span className="req">*</span></label>
                <input
                  type="email"
                  id="email"
                  placeholder="ava@example.com"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                />
                {errors.email && <p className="form-error-text show">{errors.email}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="password">Password <span className="req">*</span></label>
                <input
                  type="password"
                  id="password"
                  placeholder="At least 8 characters"
                  value={form.password}
                  onChange={(e) => updateField("password", e.target.value)}
                />
                <p className="form-hint">Use a mix of letters, numbers, and a symbol.</p>
                {errors.password && <p className="form-error-text show">{errors.password}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="confirm-password">Confirm password <span className="req">*</span></label>
                <input
                  type="password"
                  id="confirm-password"
                  value={form.confirmPassword}
                  onChange={(e) => updateField("confirmPassword", e.target.value)}
                />
                {errors.confirmPassword && <p className="form-error-text show">{errors.confirmPassword}</p>}
              </div>

              <div className="form-group">
                <div className="checkbox-row">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={form.terms}
                    onChange={(e) => updateField("terms", e.target.checked)}
                  />
                  <label htmlFor="terms" style={{ margin: "0", fontWeight: "400" }}>
                    I agree to the Terms of Service and Privacy Policy
                  </label>
                </div>
                {errors.terms && <p className="form-error-text show">{errors.terms}</p>}
              </div>

              <button type="submit" className="btn btn-primary btn-block">Create account</button>
            </form>

            <p className="switch">
              Already have an account? <Link to="/login.html">Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
