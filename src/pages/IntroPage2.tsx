import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useI18n } from "@/app/I18nProvider";
import Seo from "@/components/Seo";

const IntroPage2 = () => {
  const { t } = useI18n();
  const navigate = useNavigate();
  const [isImploding, setIsImploding] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  const introManimWebm = `${import.meta.env.BASE_URL}intro/redblue-intro.webm`;
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

      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-white origin-center transition-[opacity,transform,filter] duration-700 ease-in-out ${
          isImploding ? "opacity-100 scale-0 blur-[2px]" : "opacity-100 scale-100"
        }`}
        aria-hidden
      >
        {!videoEnded ? (
          <video
            className="absolute inset-0 h-full w-full object-contain bg-white"
            autoPlay
            muted
            playsInline
            onEnded={() => setVideoEnded(true)}
          >
            <source src={introManimWebm} type="video/webm" />
          </video>
        ) : null}
      </div>
    </div>
  );
};

export default IntroPage2;
