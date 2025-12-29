import { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
  className?: string;
  duration?: number; // total duration in ms
  threshold?: number;
  cursor?: boolean;
};

const TypewriterText = ({ text, className = "", duration = 1000, threshold = 0.35, cursor = true }: Props) => {
  const [display, setDisplay] = useState("");
  const [ready, setReady] = useState(false);
  const ref = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReady(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  useEffect(() => {
    if (!ready) return;
    setDisplay("");
    let i = 0;
    const step = Math.max(25, Math.floor(duration / Math.max(1, text.length)));
    const id = setInterval(() => {
      i += 1;
      setDisplay(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
      }
    }, step);
    return () => clearInterval(id);
  }, [ready, text, duration]);

  return (
    <p ref={ref} className={className}>
      {display}
      {cursor && display.length < text.length && <span className="ml-1 inline-block animate-pulse">▌</span>}
    </p>
  );
};

export default TypewriterText;
