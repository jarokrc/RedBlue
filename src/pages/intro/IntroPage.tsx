import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useI18n } from "@/app/I18nProvider";
import Seo from "@/components/Seo";
import type { Locale } from "@/lib/locale";
import introLogoWebp from "@/assets/logo/webp/logoIntro.webp";
import introLogoPng from "@/assets/logo/png/logoIntro.png";
import redblueLogoWebp from "@/assets/logo/webp/logo.webp";
import redblueLogoPng from "@/assets/logo/png/logo.png";
import academyLogoWebp from "@/assets/logo/webp/logo_academy.webp";
import academyLogoPng from "@/assets/logo/png/logo_academy.png";
import IntroCircuitSplashSection from "@/pages/intro/sections/IntroCircuitSplashSection";
import IntroAmbientBackgroundSection from "@/pages/intro/sections/IntroAmbientBackgroundSection";
import IntroContentSection from "@/pages/intro/sections/IntroContentSection";

const IntroPage = () => {
  const { t, locale, setLocale } = useI18n();
  const navigate = useNavigate();
  const [bootDone, setBootDone] = useState(false);
  const localeOptions: { value: Locale; label: string }[] = [
    { value: "sk", label: "SK" },
    { value: "en", label: "EN" },
    { value: "de", label: "DE" },
  ];
  const contentVisible = bootDone;
  const showSectionChooser = false; // temporary: original section chooser disabled
  const handleBootComplete = useCallback(() => setBootDone(true), []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (bootDone) return;
    if (!window.matchMedia("(max-width: 640px)").matches) return;
    const centerView = () => {
      const doc = document.documentElement;
      const totalHeight = Math.max(doc.scrollHeight, document.body.scrollHeight);
      const target = Math.max(0, (totalHeight - window.innerHeight) / 2);
      window.scrollTo({ top: target, behavior: "auto" });
    };
    const raf = window.requestAnimationFrame(() => window.requestAnimationFrame(centerView));
    return () => window.cancelAnimationFrame(raf);
  }, [bootDone]);

  useEffect(() => {
    if (!bootDone) return;
    navigate("/home", { replace: true });
  }, [bootDone, navigate]);

  const mobileHeightClass = bootDone ? "min-h-[100svh]" : "min-h-[112svh]";

  return (
    <div
      className={`relative ${mobileHeightClass} sm:min-h-screen overflow-x-hidden overflow-y-auto sm:overflow-y-hidden bg-white text-slate-900`}
    >
      <Seo title={t.meta.homeTitle} description={t.meta.homeDescription} path="/" />
      <IntroCircuitSplashSection bootDone={bootDone} introLogoPng={introLogoPng} onComplete={handleBootComplete} />
      <IntroAmbientBackgroundSection />
      <IntroContentSection
        contentVisible={contentVisible}
        locale={locale}
        setLocale={setLocale}
        localeOptions={localeOptions}
        intro={t.intro}
        showSectionChooser={showSectionChooser}
        introLogoWebp={introLogoWebp}
        introLogoPng={introLogoPng}
        redblueLogoWebp={redblueLogoWebp}
        redblueLogoPng={redblueLogoPng}
        academyLogoWebp={academyLogoWebp}
        academyLogoPng={academyLogoPng}
      />
    </div>
  );
};

export default IntroPage;
