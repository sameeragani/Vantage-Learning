import { useEffect } from "react";

export default function PageCss({ href = "/css/style.css" }) {
  useEffect(() => {
    const existing = document.querySelector(`link[data-page-css="${href}"]`);
    if (existing) return;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.dataset.pageCss = href;
    document.head.appendChild(link);

    return () => link.remove();
  }, [href]);

  return null;
}
