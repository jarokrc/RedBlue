import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "@/app/I18nProvider";
import Seo from "@/components/Seo";
import HomeHeroSection from "@/pages/home/sections/HomeHeroSection";
import HomeOfferHeadingSection from "@/pages/home/sections/HomeOfferHeadingSection";

const HomeSolutionsCTASection = lazy(() => import("@/pages/home/sections/HomeSolutionsCTASection"));

const HomePage = () => {
  const { t } = useI18n();

  return (
    <div className="relative isolate space-y-4 pb-6 md:space-y-6 md:pb-10">
      <div className="pointer-events-none absolute inset-0 -z-10 hidden lg:block" aria-hidden>
        <span className="page-orb page-orb-blue absolute -left-36 top-[24rem] h-56 w-56" />
        <span className="page-orb page-orb-red absolute -right-40 top-[50rem] h-64 w-64" />
        <span className="page-orb page-orb-blue page-orb-small absolute -left-24 top-[83rem] h-36 w-36" />
      </div>
      <Seo title={t.meta.homeTitle} description={t.meta.homeDescription} path="/home" />
      <HomeHeroSection />
      <HomeOfferHeadingSection heading={t.offerHeading} eyebrow={t.offerEyebrow} title={t.offerTitle} />
      <Suspense fallback={<div className="min-h-[320px] rounded-2xl border border-slate-200 bg-white/70" />}>
        <HomeSolutionsCTASection />
      </Suspense>
      <section className="relative mt-8 overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-blue-800 to-[#07152f] px-7 py-10 text-white md:flex md:items-center md:justify-between md:px-12 md:py-12">
        <div className="absolute -right-12 -top-24 h-64 w-64 rounded-full border-[42px] border-white/5" aria-hidden />
        <div className="relative max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">RedBlue</p>
          <h2 className="mt-3 text-2xl font-bold tracking-[-0.03em] md:text-4xl">{t.finalCta.title}</h2>
          <p className="mt-3 text-sm leading-6 text-blue-100 md:text-base">{t.finalCta.description}</p>
        </div>
        <Link to="/kontakt" className="relative mt-7 inline-flex shrink-0 items-center rounded-full bg-white px-6 py-3.5 text-sm font-bold text-blue-900 shadow-xl transition hover:-translate-y-0.5 md:ml-10 md:mt-0">
          {t.finalCta.cta} <span className="ml-2">→</span>
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
