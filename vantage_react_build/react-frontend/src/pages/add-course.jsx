import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageShell from "../components/PageShell";
import PageCss from "../components/PageCss";
import { addCourse } from "../data/courseStore";

const initialForm = {
  title: "",
  category: "Design",
  description: "",
  duration: "",
  modules: "",
  price: "",
  status: "Draft",
};

export default function AddCourse() {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState(null);

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

    addCourse({
      title: form.title.trim(),
      category: form.category,
      description: form.description.trim(),
      duration: form.duration.trim() || "—",
      modules: Number(form.modules) || 0,
      price: Number(form.price) || 0,
      status: form.status,
    });

    setFeedback({ type: "success", message: "Course saved! Redirecting to course list…" });
    setTimeout(() => navigate("/courses.html"), 700);
  }

  return (
    <>
      <PageCss href="/css/style.css" />
      <PageShell variant="admin">
        <div className="topbar"><h1>Add a new course</h1></div>
        <div className="main-content">
          <div className="crumbs"><Link to="/courses.html">Courses</Link><span>/</span>Add course</div>

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
                <input
                  type="text"
                  id="title"
                  placeholder="e.g. Intro to Data Visualization"
                  value={form.title}
                  onChange={(e) => updateField("title", e.target.value)}
                />
                {errors.title && <p className="form-error-text show">{errors.title}</p>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="category">Category <span className="req">*</span></label>
                  <select id="category" value={form.category} onChange={(e) => updateField("category", e.target.value)}>
                    <option>Design</option>
                    <option>Data</option>
                    <option>Career</option>
                    <option>Development</option>
                    <option>Marketing</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="duration">Estimated duration</label>
                  <input
                    type="text"
                    id="duration"
                    placeholder="e.g. 9h 40m"
                    value={form.duration}
                    onChange={(e) => updateField("duration", e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="description">Course description <span className="req">*</span></label>
                <textarea
                  id="description"
                  placeholder="What will learners be able to do after finishing this course?"
                  value={form.description}
                  onChange={(e) => updateField("description", e.target.value)}
                ></textarea>
                {errors.description && <p className="form-error-text show">{errors.description}</p>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="modules">Number of modules</label>
                  <input
                    type="number"
                    id="modules"
                    placeholder="6"
                    value={form.modules}
                    onChange={(e) => updateField("modules", e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="price">Price (₹)</label>
                  <input
                    type="number"
                    id="price"
                    placeholder="4100"
                    value={form.price}
                    onChange={(e) => updateField("price", e.target.value)}
                  />
                  {errors.price && <p className="form-error-text show">{errors.price}</p>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="status">Status</label>
                <select id="status" value={form.status} onChange={(e) => updateField("status", e.target.value)}>
                  <option>Draft</option>
                  <option>Published</option>
                </select>
              </div>
            </div>

            <div style={{ display: "flex", gap: "1rem", marginTop: "1.4rem" }}>
              <button type="submit" className="btn btn-primary">Save course</button>
              <Link to="/courses.html" className="btn btn-outline">Cancel</Link>
            </div>
          </form>
        </div>
      </PageShell>
    </>
  );
}
