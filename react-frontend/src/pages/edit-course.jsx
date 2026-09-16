import PageShell from "../components/PageShell";
import PageCss from "../components/PageCss";

export default function EditCourse() {
  return (
    <>
      <PageCss href="/css/style.css" />
      <PageShell variant="admin">
    <div className="topbar">
      <h1>Edit course</h1>
      <span className="badge badge-teal">Published</span>
    </div>
    <div className="main-content">
      <div className="crumbs">
        <Link to="/courses.html">
          Courses
        </Link>
        <span>/</span>
        UI Design Foundations
        <span>/</span>
        Edit
      </div>
      <div className="alert alert-feedback" role="alert"></div>
      <form id="edit-course-form" novalidate="">
        <div className="card">
          <div className="card-header">
            <h2>Course details</h2>
          </div>
          <div className="form-group">
            <label htmlFor="title">
              Course title
              <span className="req">*</span>
            </label>
            <input type="text" id="title" value="UI Design Foundations" required="" />
            <p className="form-error-text" id="title-error"></p>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="category">
                Category
                <span className="req">*</span>
              </label>
              <select id="category">
                <option selected="">Design</option>
                <option>Data</option>
                <option>Career</option>
                <option>Development</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="level">
                Level
                <span className="req">*</span>
              </label>
              <select id="level">
                <option selected="">Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="description">
              Course description
              <span className="req">*</span>
            </label>
            <textarea id="description">Learn the fundamentals of user interface design — layout, type, color, and componentry — and build a portfolio-ready project along the way.</textarea>
            <p className="form-error-text" id="description-error"></p>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="duration">Estimated duration</label>
              <input type="text" id="duration" value="9h 40m" />
            </div>
            <div className="form-group">
              <label htmlFor="modules">Number of modules</label>
              <input type="number" id="modules" value="6" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="price">Price (USD)</label>
              <input type="number" id="price" value="49" />
              <p className="form-error-text" id="price-error"></p>
            </div>
            <div className="form-group">
              <label htmlFor="status">Status</label>
              <select id="status">
                <option selected="">Published</option>
                <option>Draft</option>
              </select>
            </div>
          </div>
        </div>
        <div style={{display: "flex", gap: "1rem", marginTop: "1.4rem"}}>
          <button type="submit" className="btn btn-primary">Save changes</button>
          <Link to="/courses.html" className="btn btn-outline">
            Cancel
          </Link>
          <button type="button" className="btn btn-danger-outline" style={{marginLeft: "auto"}}>Unpublish course</button>
        </div>
      </form>
      <div className="card" style={{marginTop: "1.4rem"}}>
        <div className="card-header">
          <h2>Curriculum</h2>
          <button type="button" className="btn btn-outline btn-sm">+ Add module</button>
        </div>
        <div className="lesson-list">
          <div className="lesson-item">
            <span className="lesson-num">1</span>
            Design principles & layout systems
            <span className="lesson-time">42 min</span>
          </div>
          <div className="lesson-item">
            <span className="lesson-num">2</span>
            Typography that holds a page together
            <span className="lesson-time">38 min</span>
          </div>
          <div className="lesson-item">
            <span className="lesson-num">3</span>
            Color, contrast, and accessibility
            <span className="lesson-time">45 min</span>
          </div>
          <div className="lesson-item">
            <span className="lesson-num">4</span>
            Building a component library
            <span className="lesson-time">51 min</span>
          </div>
        </div>
      </div>
    </div>
      </PageShell>
    </>
  );
}
