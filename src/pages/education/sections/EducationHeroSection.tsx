import type { Translation } from "@/locales/types";
import educationPng from "@/assets/education/png/education.png";
import educationWebp from "@/assets/education/webp/education.webp";
import introVideoWebm from "@/assets/education/webm/intro1.webm";
import introVideoMp4 from "@/assets/education/mp4/intro1.mp4";

type EducationHeroSectionProps = {
  hero: Translation["educationPage"]["hero"];
  academyHref: string;
};

const EducationHeroSection = ({ hero, academyHref }: EducationHeroSectionProps) => (
  <section className="grid gap-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900 px-8 py-12 text-white shadow-lg ring-1 ring-blue-900/30 md:grid-cols-[1.1fr,0.9fr] md:items-center md:px-12 md:py-14">
    <div className="space-y-4">
      <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-blue-100">
        {hero.badge}
      </div>
      <h1 className="text-3xl font-bold leading-tight md:text-4xl">{hero.title}</h1>
      <p className="max-w-2xl text-base text-blue-100 md:text-lg">{hero.subtitle}</p>
      <div className="flex flex-wrap gap-2">
        {hero.positioning.map((item) => (
          <span key={item} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100">
            {item}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        <a
          href={academyHref}
          className="orbit-glow rounded-lg bg-red-500 px-5 py-3 text-base font-semibold text-white shadow hover:bg-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 md:text-lg"
          target="_blank"
          rel="noreferrer"
        >
          {hero.ctaPrimary}
        </a>
        <a
          href="#why"
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
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={educationPng}
        aria-label="RedBlue Academy intro"
      >
        <source src={introVideoWebm} type="video/webm" />
        <source src={introVideoMp4} type="video/mp4" />
        <picture>
          <source srcSet={educationWebp} type="image/webp" />
          <img
            src={educationPng}
            alt="RedBlue Academy intro"
            className="h-full w-full object-cover"
            width={1536}
            height={1024}
          />
        </picture>
      </video>
    </div>
  </section>
);

export default EducationHeroSection;
