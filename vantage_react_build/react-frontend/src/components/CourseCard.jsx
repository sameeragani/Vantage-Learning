import { Link } from "react-router-dom";

export default function CourseCard({ category, badgeClass = "badge-gold", title, meta, price, to = "/course-details.html" }) {
  return (
    <div className="course-card">
      <div className="course-thumb"><span className={`badge ${badgeClass}`}>{category}</span></div>
      <div className="body">
        <h3>{title}</h3>
        <p className="meta">{meta}</p>
        <div className="foot">
          {price && <span className="price">{price}</span>}
          <Link to={to} className="btn btn-sm btn-outline">View</Link>
        </div>
      </div>
    </div>
  );
}
