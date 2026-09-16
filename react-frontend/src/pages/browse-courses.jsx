import PageShell from "../components/PageShell";
import PageCss from "../components/PageCss";
import CourseCard from "../components/CourseCard";

export default function BrowseCourses() {
  return (
    <>
      <PageCss href="/css/style.css" />
      <PageShell variant="marketing">
    <div className="container" style={{paddingTop: "2.4rem", paddingBottom: "4rem"}}>
      <div className="section-head">
        <span className="eyebrow">128 courses</span>
        <h1>Browse courses</h1>
      </div>
      <div className="browse-layout">
        <div className="card filter-card">
          <div className="filter-group">
            <h3>Category</h3>
            <label className="filter-option">
              <input type="checkbox" checked />
              Design
            </label>
            <label className="filter-option">
              <input type="checkbox" />
              Data
            </label>
            <label className="filter-option">
              <input type="checkbox" />
              Career
            </label>
            <label className="filter-option">
              <input type="checkbox" />
              Development
            </label>
            <label className="filter-option">
              <input type="checkbox" />
              Marketing
            </label>
          </div>
          <div className="filter-group">
            <h3>Level</h3>
            <label className="filter-option">
              <input type="checkbox" checked />
              Beginner
            </label>
            <label className="filter-option">
              <input type="checkbox" />
              Intermediate
            </label>
            <label className="filter-option">
              <input type="checkbox" />
              Advanced
            </label>
          </div>
          <div className="filter-group">
            <h3>Duration</h3>
            <label className="filter-option">
              <input type="radio" name="dur" />
              Under 5 hours
            </label>
            <label className="filter-option">
              <input type="radio" name="dur" checked />
              5 – 10 hours
            </label>
            <label className="filter-option">
              <input type="radio" name="dur" />
              10+ hours
            </label>
          </div>
          <button type="button" className="btn btn-outline btn-block btn-sm">Clear filters</button>
        </div>
        <div>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.2rem"}}>
            <input type="search" placeholder="Search courses…" style={{maxWidth: "320px"}} />
            <select style={{maxWidth: "200px"}}>
              <option>Sort: Most popular</option>
              <option>Sort: Newest</option>
              <option>Sort: Price, low to high</option>
            </select>
          </div>
          <div className="course-grid">
          <CourseCard category="Design" badgeClass="badge-gold" title="UI Design Foundations" meta="6 modules \u00b7 9h 40m \u00b7 Beginner" price="$49" />
          <CourseCard category="Data" badgeClass="badge-teal" title="SQL for Analysts" meta="8 modules \u00b7 11h 05m \u00b7 Beginner" price="$59" />
          <CourseCard category="Career" badgeClass="badge-ink" title="Technical Writing 101" meta="5 modules \u00b7 6h 20m \u00b7 Beginner" price="$39" />
          <CourseCard category="Data" badgeClass="badge-teal" title="Intro to Data Visualization" meta="7 modules \u00b7 8h 15m \u00b7 Beginner" price="$55" />
          <CourseCard category="Career" badgeClass="badge-ink" title="Product Management Basics" meta="6 modules \u00b7 7h 30m \u00b7 Beginner" price="$45" />
          <CourseCard category="Design" badgeClass="badge-gold" title="Design Systems in Practice" meta="6 modules \u00b7 8h 50m \u00b7 Intermediate" price="$65" />
        </div>
        </div>
      </div>
    </div>
      </PageShell>
    </>
  );
}
