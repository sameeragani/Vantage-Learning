import PageShell from "../components/PageShell";
import PageCss from "../components/PageCss";

export default function AddCourse() {
  return (
    <>
      <PageCss href="/css/style.css" />
      <PageShell variant="admin">
    <div className="topbar">
      <h1>Add a new course</h1>
    </div>
    <div className="main-content">
      <div className="crumbs">
        <Link to="/courses.html">
          Courses
        </Link>
        <span>/</span>
        Add course
      </div>
      <div className="alert alert-feedback" role="alert"></div>
      <form id="add-course-form" novalidate="">
        <div className="card">
          <div className="card-header">
            <h2>Course details</h2>
          </div>
          <div className="form-group">
            <label htmlFor="title">
              Course title
              <span className="req">*</span>
            </label>
            <input type="text" id="title" placeholder="e.g. Intro to Data Visualization" required="" />
            <p className="form-error-text" id="title-error"></p>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="category">
                Category
                <span className="req">*</span>
              </label>
              <select id="category">
                <option>Design</option>
                <option>Data</option>
                <option>Career</option>
                <option>Development</option>
                <option>Marketing</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="level">
                Level
                <span className="req">*</span>
              </label>
              <select id="level">
                <option>Beginner</option>
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
            <textarea id="description" placeholder="What will learners be able to do after finishing this course?"></textarea>
            <p className="form-error-text" id="description-error"></p>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="duration">Estimated duration</label>
              <input type="text" id="duration" placeholder="e.g. 9h 40m" />
            </div>
            <div className="form-group">
              <label htmlFor="modules">Number of modules</label>
              <input type="number" id="modules" placeholder="6" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="price">Price (USD)</label>
              <input type="number" id="price" placeholder="49" />
              <p className="form-error-text" id="price-error"></p>
            </div>
            <div className="form-group">
              <label htmlFor="status">Status</label>
              <select id="status">
                <option>Draft</option>
                <option>Published</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="thumbnail">Course thumbnail</label>
            <input type="text" id="thumbnail" placeholder="Upload or paste image URL" />
            <p className="form-hint">Recommended size: 1200 × 675px.</p>
          </div>
        </div>
        <div style={{display: "flex", gap: "1rem", marginTop: "1.4rem"}}>
          <button type="submit" className="btn btn-primary">Save course</button>
          <Link to="/courses.html" className="btn btn-outline">
            Cancel
          </Link>
        </div>
      </form>
    </div>
      </PageShell>
    </>
  );
}
