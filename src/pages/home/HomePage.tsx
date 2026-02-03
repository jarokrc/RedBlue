import { Suspense, lazy } from "react";
import { useI18n } from "@/app/I18nProvider";
import Seo from "@/components/Seo";
import HomeHeroSection from "@/pages/home/sections/HomeHeroSection";
import HomeOfferHeadingSection from "@/pages/home/sections/HomeOfferHeadingSection";

const HomeSolutionsCTASection = lazy(() => import("@/pages/home/sections/HomeSolutionsCTASection"));

const HomePage = () => {
  const { t } = useI18n();

  return (
    <div className="space-y-8 md:space-y-12">
      <Seo title={t.meta.homeTitle} description={t.meta.homeDescription} path="/home" />
      <HomeHeroSection />
      <HomeOfferHeadingSection heading={t.offerHeading} />
      <Suspense fallback={<div className="min-h-[320px] rounded-2xl border border-slate-200 bg-white/70" />}>
        <HomeSolutionsCTASection />
      </Suspense>
    </div>
  );
};

export default HomePage;
