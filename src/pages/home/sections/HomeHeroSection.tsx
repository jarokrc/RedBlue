import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useI18n } from "@/app/I18nProvider";
import heroPng from "@/assets/home/png/kancl.jpg";
import heroWebp from "@/assets/home/webp/kancl.webp";

const ArrowIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
    <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HomeHeroSection = () => {
  const { t } = useI18n();

  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href={heroWebp} type="image/webp" />
      </Helmet>
      <section className="home-hero relative isolate overflow-hidden rounded-[2rem] bg-[#07152f] text-white shadow-[0_28px_80px_-36px_rgba(7,21,47,0.8)]">
        <div className="absolute -left-28 top-16 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" aria-hidden />
        <div className="absolute bottom-0 right-1/3 h-56 w-56 rounded-full bg-red-500/15 blur-3xl" aria-hidden />
        <div className="hero-perspective-grid absolute inset-x-0 bottom-0 h-72 opacity-25" aria-hidden />

        <div className="relative grid min-h-[620px] lg:grid-cols-[1.02fr_.98fr]">
          <div className="z-10 flex flex-col justify-center px-7 py-14 sm:px-12 lg:px-16 lg:py-20">
            <div className="mb-8 inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_0_5px_rgba(239,68,68,.13)]" />
              {t.hero.label}
            </div>

            <h1 className="max-w-2xl text-[2.7rem] font-bold leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-[4.5rem]">
              {t.hero.headingPrefix}{" "}
              <span className="bg-gradient-to-r from-[#70a7ff] via-white to-[#ff7881] bg-clip-text text-transparent">
                {t.hero.headingAccent}
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              {t.hero.subheading}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link to="/kontakt" className="group inline-flex items-center gap-3 rounded-full bg-red-500 px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_32px_-10px_rgba(239,68,68,.75)] transition hover:-translate-y-0.5 hover:bg-red-400">
                {t.hero.ctaPrimary}
                <ArrowIcon />
              </Link>
              <Link to="/projekty" className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.05] px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10">
                {t.hero.ctaSecondary}
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
              {t.hero.trust.map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="text-blue-400">✓</span>{item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative min-h-[390px] lg:min-h-full">
            <div className="absolute inset-5 overflow-hidden rounded-[1.65rem] border border-white/10 sm:inset-8 lg:bottom-8 lg:left-0 lg:right-8 lg:top-8">
              <picture>
                <source srcSet={heroWebp} type="image/webp" />
                <img src={heroPng} alt={t.hero.imageAlt} className="h-full w-full object-cover object-[52%_center] transition duration-700 hover:scale-[1.025]" width={1208} height={800} loading="eager" decoding="async" fetchPriority="high" sizes="(min-width: 1024px) 48vw, 100vw" />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-[#07152f]/65 via-transparent to-transparent" aria-hidden />
            </div>
            <div className="absolute bottom-10 left-9 rounded-2xl border border-white/20 bg-[#07152f]/75 px-5 py-4 shadow-2xl backdrop-blur-xl sm:bottom-14 sm:left-12 lg:left-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300">RedBlue</p>
              <p className="mt-1 text-sm font-semibold text-white">{t.hero.imageCaption}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHeroSection;
