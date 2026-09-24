import { useMemo, useState } from "react";
import PageShell from "../components/PageShell";
import PageCss from "../components/PageCss";
import CourseCard from "../components/CourseCard";
import { getPublishedCourses, formatPrice } from "../data/courseStore";

const CATEGORIES = ["Design", "Data", "Career"];

export default function BrowseCourses() {
  const allCourses = useMemo(() => getPublishedCourses(), []);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [search, setSearch] = useState("");

  function toggleCategory(category) {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  }

  function clearFilters() {
    setSelectedCategories([]);
    setSearch("");
  }

  const filteredCourses = allCourses.filter((course) => {
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(course.category);
    const matchesSearch = course.title.toLowerCase().includes(search.trim().toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <PageCss href="/css/style.css" />
      <PageShell variant="marketing">
        <div className="container" style={{ paddingTop: "2.4rem", paddingBottom: "4rem" }}>
          <div className="section-head">
            <span className="eyebrow">{filteredCourses.length} course{filteredCourses.length === 1 ? "" : "s"}</span>
            <h1>Browse courses</h1>
          </div>
          <div className="browse-layout">
            <div className="card filter-card">
              <div className="filter-group">
                <h3>Category</h3>
                {CATEGORIES.map((category) => (
                  <label className="filter-option" key={category}>
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                    />
                    {category}
                  </label>
                ))}
              </div>
              <button type="button" className="btn btn-outline btn-block btn-sm" onClick={clearFilters}>
                Clear filters
              </button>
            </div>

            <div>
              <div style={{ marginBottom: "1.2rem" }}>
                <input
                  type="search"
                  placeholder="Search courses…"
                  style={{ maxWidth: "320px" }}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              {filteredCourses.length === 0 ? (
                <p className="muted">No courses match your filters.</p>
              ) : (
                <div className="course-grid">
                  {filteredCourses.map((course) => (
                    <CourseCard
                      key={course.id}
                      category={course.category}
                      badgeClass={course.badgeClass}
                      title={course.title}
                      meta={`${course.modules} modules \u00b7 ${course.duration}`}
                      price={formatPrice(course.price)}
                      to={`/course-details.html?id=${course.id}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </PageShell>
    </>
  );
}
