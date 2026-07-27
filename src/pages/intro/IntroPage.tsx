import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useI18n } from "@/app/I18nProvider";
import Seo from "@/components/Seo";
import introLogoPng from "@/assets/logo/png/redblue-logo-1200.png";
import introSoundMp3 from "@/assets/intro/mp3/intro-logo.mp3";
import IntroSplashSection from "@/pages/intro/sections/IntroSplashSection";

/**
 * Uvodne intro: na bielom pozadi sa v strede sklada velky symbol bod po bode,
 * potom sa zmensi na svoje miesto v logu a dopise sa zvysok loga.
 * Po dobehnuti animacie sa presmeruje na /home.
 */
const IntroPage = () => {
  const { t } = useI18n();
  const navigate = useNavigate();
  const [bootDone, setBootDone] = useState(false);
  const handleBootComplete = useCallback(() => setBootDone(true), []);

  useEffect(() => {
    if (!bootDone) return;
    navigate("/home", { replace: true });
  }, [bootDone, navigate]);

  return (
    <div className="relative min-h-[100svh] overflow-hidden bg-white text-slate-900 sm:min-h-screen">
      <Seo title={t.meta.homeTitle} description={t.meta.homeDescription} path="/" />
      <IntroSplashSection
        bootDone={bootDone}
        introLogoPng={introLogoPng}
        introSoundMp3={introSoundMp3}
        onComplete={handleBootComplete}
      />
    </div>
  );
};

export default IntroPage;
