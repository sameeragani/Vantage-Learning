import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import PageShell from "../components/PageShell";
import PageCss from "../components/PageCss";
import { getCourseById, updateCourse, deleteCourse } from "../data/courseStore";

export default function EditCourse() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const id = searchParams.get("id");
  const course = id ? getCourseById(id) : null;

  const [form, setForm] = useState(() =>
    course
      ? {
          title: course.title,
          category: course.category,
          description: course.description,
          duration: course.duration,
          modules: course.modules,
          price: course.price,
          status: course.status,
        }
      : null
  );
  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState(null);

  if (!course || !form) {
    return (
      <>
        <PageCss href="/css/style.css" />
        <PageShell variant="admin">
          <div className="topbar"><h1>Edit course</h1></div>
          <div className="main-content">
            <p className="muted">That course doesn't exist.</p>
            <Link to="/courses.html" className="btn btn-primary">Back to courses</Link>
          </div>
        </PageShell>
      </>
    );
  }

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function validate() {
    const next = {};
    if (!form.title.trim()) next.title = "Course title is required.";
    if (!form.description.trim()) next.description = "Course description is required.";
    if (form.price !== "" && Number(form.price) < 0) next.price = "Price can't be negative.";
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
    updateCourse(course.id, {
      title: form.title.trim(),
      category: form.category,
      description: form.description.trim(),
      duration: form.duration,
      modules: Number(form.modules) || 0,
      price: Number(form.price) || 0,
      status: form.status,
    });
    setFeedback({ type: "success", message: "Changes saved! Redirecting to course list…" });
    setTimeout(() => navigate("/courses.html"), 700);
  }

  function handleUnpublish() {
    const confirmed = window.confirm(
      `Remove "${course.title}" permanently? This can't be undone.`
    );
    if (!confirmed) return;
    deleteCourse(course.id);
    navigate("/courses.html");
  }

  return (
    <>
      <PageCss href="/css/style.css" />
      <PageShell variant="admin">
        <div className="topbar">
          <h1>Edit course</h1>
          <span className={`badge ${form.status === "Published" ? "badge-teal" : "badge-ink"}`}>{form.status}</span>
        </div>
        <div className="main-content">
          <div className="crumbs">
            <Link to="/courses.html">Courses</Link><span>/</span>{course.title}<span>/</span>Edit
          </div>

          {feedback && (
            <div className={`alert show ${feedback.type === "error" ? "alert-error" : "alert-success"}`} role="alert">
              {feedback.message}
            </div>
          )}

          <form noValidate onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-header"><h2>Course details</h2></div>

              <div className="form-group">
                <label htmlFor="title">Course title <span className="req">*</span></label>
                <input type="text" id="title" value={form.title} onChange={(e) => updateField("title", e.target.value)} />
                {errors.title && <p className="form-error-text show">{errors.title}</p>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <select id="category" value={form.category} onChange={(e) => updateField("category", e.target.value)}>
                    <option>Design</option>
                    <option>Data</option>
                    <option>Career</option>
                    <option>Development</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="duration">Estimated duration</label>
                  <input type="text" id="duration" value={form.duration} onChange={(e) => updateField("duration", e.target.value)} />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="description">Course description <span className="req">*</span></label>
                <textarea id="description" value={form.description} onChange={(e) => updateField("description", e.target.value)}></textarea>
                {errors.description && <p className="form-error-text show">{errors.description}</p>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="modules">Number of modules</label>
                  <input type="number" id="modules" value={form.modules} onChange={(e) => updateField("modules", e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="price">Price (₹)</label>
                  <input type="number" id="price" value={form.price} onChange={(e) => updateField("price", e.target.value)} />
                  {errors.price && <p className="form-error-text show">{errors.price}</p>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="status">Status</label>
                <select id="status" value={form.status} onChange={(e) => updateField("status", e.target.value)}>
                  <option>Published</option>
                  <option>Draft</option>
                </select>
              </div>
            </div>

            <div style={{ display: "flex", gap: "1rem", marginTop: "1.4rem" }}>
              <button type="submit" className="btn btn-primary">Save changes</button>
              <Link to="/courses.html" className="btn btn-outline">Cancel</Link>
              <button type="button" className="btn btn-danger-outline" style={{ marginLeft: "auto" }} onClick={handleUnpublish}>
                Unpublish course
              </button>
            </div>
          </form>
        </div>
      </PageShell>
    </>
  );
}
