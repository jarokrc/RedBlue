import { useEffect, useRef, useState } from "react";

type HomeOfferHeadingSectionProps = {
  heading: string;
};

const HomeOfferHeadingSection = ({ heading }: HomeOfferHeadingSectionProps) => {
  const [typed, setTyped] = useState("");
  const [visible, setVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const offerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = offerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasTriggered) return;
    setTyped("");
    setVisible(false);
    let i = 0;
    const step = Math.max(25, Math.floor(900 / Math.max(1, heading.length))); // ~1s total
    const tick = setInterval(() => {
      i += 1;
      setTyped(heading.slice(0, i));
      if (i >= heading.length) {
        clearInterval(tick);
        setTimeout(() => setVisible(true), 80);
      }
    }, step);
    return () => clearInterval(tick);
  }, [hasTriggered, heading]);

  return (
    <div
      ref={offerRef}
      className={`relative overflow-hidden rounded-xl border border-blue-100 bg-white/80 px-4 py-3 shadow-sm transition duration-700 ease-out md:px-5 ${
        visible ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-90"
      }`}
    >
      <div className="absolute left-3 top-1/2 h-1 w-12 -translate-y-1/2 bg-gradient-to-r from-blue-700 to-transparent opacity-80 blur-[1px]" aria-hidden />
      <p className="relative pl-8 text-lg font-semibold text-slate-700 md:pl-10 md:text-xl">
        <span className="pointer-events-none select-none opacity-0">{heading}</span>
        <span aria-hidden className="absolute inset-0 pl-8 md:pl-10">
          {typed}
          {typed.length < heading.length && <span className="ml-1 inline-block animate-pulse">|</span>}
        </span>
      </p>
    </div>
  );
};

export default HomeOfferHeadingSection;
