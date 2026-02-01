import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import Hero from "@/sections/Hero";
import { useI18n } from "@/app/I18nProvider";
import Seo from "@/components/Seo";
import heroWebp from "@/assets-webp/home/hero_.webp";

const SolutionsCTA = lazy(() => import("@/sections/SolutionsCTA"));

const HomePage = () => {
  const { t } = useI18n();
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
    const full = t.offerHeading;
    let i = 0;
    const step = Math.max(25, Math.floor(900 / Math.max(1, full.length))); // ≈1s total
    const tick = setInterval(() => {
      i += 1;
      setTyped(full.slice(0, i));
      if (i >= full.length) {
        clearInterval(tick);
        setTimeout(() => setVisible(true), 80);
      }
    }, step);
    return () => clearInterval(tick);
  }, [hasTriggered, t.offerHeading]);

  return (
    <div className="space-y-8 md:space-y-12">
      <Seo title={t.meta.homeTitle} description={t.meta.homeDescription} path="/home" />
      <Helmet>
        <link rel="preload" as="image" href={heroWebp} type="image/webp" />
      </Helmet>
      <Hero />
      <div
        ref={offerRef}
        className={`relative overflow-hidden rounded-xl border border-blue-100 bg-white/80 px-4 py-3 shadow-sm transition duration-700 ease-out md:px-5 ${
          visible ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-90"
        }`}
      >
        <div className="absolute left-3 top-1/2 h-1 w-12 -translate-y-1/2 bg-gradient-to-r from-blue-700 to-transparent opacity-80 blur-[1px]" aria-hidden />
        <p className="relative pl-8 text-lg font-semibold text-red-600 md:pl-10 md:text-xl">
          <span className="pointer-events-none select-none opacity-0">{t.offerHeading}</span>
          <span aria-hidden className="absolute inset-0 pl-8 md:pl-10">
            {typed}
            {typed.length < t.offerHeading.length && <span className="ml-1 inline-block animate-pulse">▌</span>}
          </span>
        </p>
      </div>
      <Suspense fallback={<div className="min-h-[320px] rounded-2xl border border-slate-200 bg-white/70" />}>
        <SolutionsCTA />
      </Suspense>
    </div>
  );
};

export default HomePage;
