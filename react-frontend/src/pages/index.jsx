import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import PageCss from "../components/PageCss";

export default function Index() {
  return (
    <>
      <PageCss href="/css/style.css" />
<PageShell variant="marketing">
    <section className="hero">
      <div className="container">
        <div>
          <span className="eyebrow" style={{color: "#F3D98B"}}>Cohort-based, self-paced, yours to keep</span>
          <h1>Finish courses you actually said you'd finish.</h1>
          <p className="lead">Vantage tracks every lesson, materials download, and quiz — so your progress bar is never a lie. Pick a course, learn on your schedule, and walk away with a certificate that means something.</p>
          <div className="hero-actions">
            <Link to="/browse-courses.html" className="btn btn-primary">
              Browse courses
            </Link>
            <Link to="/register.html" className="btn btn-outline" style={{color: "#fff", borderColor: "rgba(255,255,255,.35)"}}>
              Create free account
            </Link>
          </div>
        </div>
        <div className="hero-card">
          <div className="hero-stat">
            <span>Courses live</span>
            <span className="n">128</span>
          </div>
          <div className="hero-stat">
            <span>Learners enrolled</span>
            <span className="n">42,900</span>
          </div>
          <div className="hero-stat">
            <span>Certificates issued</span>
            <span className="n">16,340</span>
          </div>
          <div className="hero-stat">
            <span>Avg. completion rate</span>
            <span className="n">78%</span>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">How it works</span>
          <h2>Three steps between you and a finished course</h2>
        </div>
        <div className="feature-grid">
          <div className="feature-card">
            <span className="num">01</span>
            <h3>Pick a course</h3>
            <p className="muted">Filter by subject, level, or duration and read the full syllabus before you enrol.</p>
          </div>
          <div className="feature-card">
            <span className="num">02</span>
            <h3>Learn at your pace</h3>
            <p className="muted">Video lessons, downloadable materials, and short checks keep you moving without pressure.</p>
          </div>
          <div className="feature-card">
            <span className="num">03</span>
            <h3>Earn your certificate</h3>
            <p className="muted">Finish every module and your certificate is generated instantly, ready to share or print.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="section" style={{paddingTop: "0"}}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Popular right now</span>
          <h2>Courses learners are starting this week</h2>
        </div>
        <div className="course-grid">
          <div className="course-card">
            <div className="course-thumb">
              <span className="badge badge-gold">Design</span>
            </div>
            <div className="body">
              <h3>UI Design Foundations</h3>
              <p className="meta">6 modules · 9h 40m · Beginner</p>
              <div className="foot">
                <span className="price">$49</span>
                <Link to="/course-details.html" className="btn btn-sm btn-outline">
                  View course
                </Link>
              </div>
            </div>
          </div>
          <div className="course-card">
            <div className="course-thumb">
              <span className="badge badge-teal">Data</span>
            </div>
            <div className="body">
              <h3>SQL for Analysts</h3>
              <p className="meta">8 modules · 11h 05m · Beginner</p>
              <div className="foot">
                <span className="price">$59</span>
                <Link to="/course-details.html" className="btn btn-sm btn-outline">
                  View course
                </Link>
              </div>
            </div>
          </div>
          <div className="course-card">
            <div className="course-thumb">
              <span className="badge badge-ink">Career</span>
            </div>
            <div className="body">
              <h3>Technical Writing 101</h3>
              <p className="meta">5 modules · 6h 20m · Beginner</p>
              <div className="foot">
                <span className="price">$39</span>
                <Link to="/course-details.html" className="btn btn-sm btn-outline">
                  View course
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</PageShell>
    </>
  );
}
