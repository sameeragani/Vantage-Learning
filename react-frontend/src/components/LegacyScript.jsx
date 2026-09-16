import { useEffect } from "react";

export default function LegacyScript({ src, module = false }) {
  useEffect(() => {
    const existing = document.querySelector(`script[data-legacy-script="${src}"]`);
    if (existing) return;

    const script = document.createElement("script");
    script.src = src;
    script.type = module ? "module" : "text/javascript";
    script.async = false;
    script.dataset.legacyScript = src;

    script.onload = () => {
      document.dispatchEvent(new Event("DOMContentLoaded"));
      window.dispatchEvent(new Event("load"));
    };

    script.onerror = (error) => {
      console.error("Unable to load legacy script:", src, error);
    };

    document.body.appendChild(script);
  }, [src, module]);

  return null;
}
