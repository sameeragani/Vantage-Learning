import { Link } from "react-router-dom";
import PageCss from "../components/PageCss";

export default function Register() {
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
        <div className="quote">
          "I stopped losing my place halfway through courses. The progress tracker actually made me finish."
          <div className="quote-who">— Priya N., UI Design Foundations, completed March 2026</div>
        </div>
      </div>
      <div className="auth-form-side">
        <div className="auth-card">
          <span className="eyebrow">Step 1 of 1</span>
          <h1>Create your account</h1>
          <p className="muted" style={{marginBottom: "1.6rem"}}>Free to join. Pay only when you enrol in a course.</p>
          <div className="alert alert-feedback" role="alert"></div>
          <form id="register-form" noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="first-name">
                  First name
                  <span className="req">*</span>
                </label>
                <input type="text" id="first-name" name="first-name" placeholder="Ava" required />
                <p className="form-error-text" id="first-name-error"></p>
              </div>
              <div className="form-group">
                <label htmlFor="last-name">
                  Last name
                  <span className="req">*</span>
                </label>
                <input type="text" id="last-name" name="last-name" placeholder="Thompson" required />
                <p className="form-error-text" id="last-name-error"></p>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">
                Email address
                <span className="req">*</span>
              </label>
              <input type="email" id="email" name="email" placeholder="ava@example.com" required />
              <p className="form-error-text" id="email-error"></p>
            </div>
            <div className="form-group">
              <label htmlFor="password">
                Password
                <span className="req">*</span>
              </label>
              <input type="password" id="password" name="password" placeholder="At least 8 characters" required />
              <p className="form-hint">Use a mix of letters, numbers, and a symbol.</p>
              <p className="form-error-text" id="password-error"></p>
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">
                Confirm password
                <span className="req">*</span>
              </label>
              <input type="password" id="confirm-password" name="confirm-password" required />
              <p className="form-error-text" id="confirm-password-error"></p>
            </div>
            <div className="form-group">
              <div className="checkbox-row">
                <input type="checkbox" id="terms" name="terms" />
                <label htmlFor="terms" style={{margin: "0", fontWeight: "400"}}>I agree to the Terms of Service and Privacy Policy</label>
              </div>
              <p className="form-error-text" id="terms-error"></p>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Create account</button>
          </form>
          <p className="switch">
            Already have an account?
            <Link to="/login.html">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
