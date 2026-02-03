import { Link } from "react-router-dom";
import TypewriterText from "@/components/TypewriterText";
import supportImgWebp from "@/assets/support/webp/support.webp";
import supportImgPng from "@/assets/support/png/support.png";
import type { Translation } from "@/locales/types";

type SupportHeroSectionProps = {
  hero: Translation["supportPage"]["hero"];
};

const SupportHeroSection = ({ hero }: SupportHeroSectionProps) => (
  <section className="grid gap-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900 px-8 py-12 text-white shadow-lg ring-1 ring-blue-900/30 md:grid-cols-[1.1fr,0.9fr] md:items-center md:px-12 md:py-14">
    <div className="space-y-4">
      <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-blue-100">
        {hero.badge}
      </div>
      <h1 className="text-3xl font-bold leading-tight md:text-4xl">{hero.title}</h1>
      <TypewriterText text={hero.subtitle} className="max-w-2xl text-base text-blue-100 md:text-lg" />
      <div className="flex flex-wrap gap-3">
        <Link
          to="/kontakt"
          className="glow-cta rounded-lg bg-red-500 px-5 py-3 text-base font-semibold text-white shadow hover:bg-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 md:text-lg"
        >
          {hero.ctaPrimary}
        </Link>
        <a
          href="#packages"
          className="rounded-lg border border-white/40 bg-white/10 px-5 py-3 text-base font-semibold text-white shadow hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 md:text-lg"
        >
          {hero.ctaSecondary}
        </a>
      </div>
    </div>
    <div
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-blue-500/20 shadow-2xl shadow-blue-900/30"
      style={{ aspectRatio: "3 / 2" }}
    >
      <picture>
        <source srcSet={supportImgWebp} type="image/webp" />
        <img
          src={supportImgPng}
          alt="TechCare & IT Support"
          className="heartbeat h-full w-full object-cover"
          loading="lazy"
          decoding="async"
          width={480}
          height={320}
        />
      </picture>
    </div>
  </section>
);

export default SupportHeroSection;
