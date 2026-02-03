import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useI18n } from "@/app/I18nProvider";
import Seo from "@/components/Seo";
import introVideoWebm from "@/assets/intro/webm/redblue-intro-whitebg.webm";
import introVideoMp4 from "@/assets/intro/mp4/redblue-intro.mp4";
import Intro2VideoSplashSection from "@/pages/intro2/sections/Intro2VideoSplashSection";

const IntroPage2 = () => {
  const { t } = useI18n();
  const navigate = useNavigate();
  const [isImploding, setIsImploding] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  const implodeDurationMs = 700;

  useEffect(() => {
    if (!videoEnded) return;
    setIsImploding(true);
    const timer = window.setTimeout(() => {
      navigate("/home", { replace: true });
    }, implodeDurationMs);
    return () => window.clearTimeout(timer);
  }, [videoEnded, navigate]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-slate-900">
      <Seo title={t.meta.homeTitle} description={t.meta.homeDescription} path="/intro2" />
      <Intro2VideoSplashSection
        isImploding={isImploding}
        videoEnded={videoEnded}
        introVideoWebm={introVideoWebm}
        introVideoMp4={introVideoMp4}
        onVideoEnd={() => setVideoEnded(true)}
      />
    </div>
  );
};

export default IntroPage2;
