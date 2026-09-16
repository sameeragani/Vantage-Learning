import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export default function PageShell({ children, variant = "marketing" }) {
  if (variant === "student" || variant === "admin") {
    return (
      <div className="app-shell">
        <Sidebar admin={variant === "admin"} />
        <div className="main">{children}</div>
      </div>
    );
  }

  if (variant === "marketing") {
    return (
      <>
        <Navbar />
        {children}
        <Footer />
      </>
    );
  }

  return children;
}
