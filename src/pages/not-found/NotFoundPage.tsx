import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useI18n } from "@/app/I18nProvider";
import Seo from "@/components/Seo";
import NotFoundIntroSection from "@/pages/not-found/sections/NotFoundIntroSection";
import NotFoundCountdownSection from "@/pages/not-found/sections/NotFoundCountdownSection";

const NotFoundPage = () => {
  const { t } = useI18n();
  const navigate = useNavigate();
  const [secondsLeft, setSecondsLeft] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          navigate("/home", { replace: true });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="space-y-4">
      <Seo
        title={t.notFound.title}
        description={t.notFound.description}
        path="/404"
        noindex
      />
      <NotFoundIntroSection title={t.notFound.title} description={t.notFound.description} />
      <NotFoundCountdownSection
        secondsLeft={secondsLeft}
        countdownTemplate={t.notFound.redirectIn}
        backLabel={t.notFound.back}
      />
    </div>
  );
};

export default NotFoundPage;
