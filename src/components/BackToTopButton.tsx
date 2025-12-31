import { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      className={`fixed bottom-5 right-4 z-40 h-12 w-12 rounded-full border border-red-200 bg-white/95 p-3 text-red-600 shadow-lg shadow-red-900/15 transition duration-200 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-full w-full"
        role="presentation"
        focusable="false"
      >
        <circle cx="12" cy="12" r="12" fill="none" />
        <path
          d="M12 18V7m0 0-5 5m5-5 5 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default BackToTopButton;
