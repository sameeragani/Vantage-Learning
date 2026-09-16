import { Link } from "react-router-dom";
import PageCss from "../components/PageCss";

export default function Certificate() {
  return (
    <>
      <PageCss href="/css/style.css" />
    <div className="certificate-wrap">
      <div style={{width: "100%", maxWidth: "860px"}}>
        <div className="certificate">
          <span className="eyebrow">Certificate of Completion</span>
          <p className="muted" style={{marginTop: "1.2rem"}}>This certifies that</p>
          <div className="cert-name">Ava Thompson</div>
          <p className="muted">has successfully completed</p>
          <div className="cert-course">Technical Writing 101</div>
          <div className="cert-seal">
            <svg width="86" height="86" viewbox="0 0 30 30" fill="none" style={{color: "var(--gold-dark)"}}>
              <circle cx="15" cy="12" r="9" stroke="currentColor" strokeWidth="1.4"></circle>
              <path d="M9 19 L7 27 L15 24 L23 27 L21 19" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"></path>
              <path d="M15 7 L16.7 10.5 L20.5 11 L17.7 13.6 L18.4 17.4 L15 15.5 L11.6 17.4 L12.3 13.6 L9.5 11 L13.3 10.5 Z" fill="currentColor"></path>
            </svg>
          </div>
          <div className="cert-footer">
            <div className="sig">
              <div className="name">Renata Osei</div>
              <div className="muted" style={{fontSize: ".82rem"}}>Head of Learning, Vantage Learning</div>
            </div>
            <div style={{textAlign: "right"}}>
              <div className="muted" style={{fontSize: ".82rem"}}>Completed May 2, 2026</div>
              <div className="cert-id">Certificate ID: VL-CERT-77284</div>
            </div>
          </div>
        </div>
        <div className="print-actions">
          <Link to="/progress.html" className="btn btn-outline">
            Back to progress
          </Link>
          <a href="#" className="btn btn-primary" style={{marginLeft: ".7em"}}>Download PDF</a>
        </div>
      </div>
    </div>
    </>
  );
}
