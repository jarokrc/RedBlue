import { useI18n } from "@/app/I18nProvider";
import Seo from "@/components/Seo";
import EducationHeroSection from "@/pages/education/sections/EducationHeroSection";
import EducationIntroSection from "@/pages/education/sections/EducationIntroSection";
import EducationMarketingSection from "@/pages/education/sections/EducationMarketingSection";
import EducationCommsSection from "@/pages/education/sections/EducationCommsSection";
import EducationOfferingsSection from "@/pages/education/sections/EducationOfferingsSection";
import EducationAcademySection from "@/pages/education/sections/EducationAcademySection";

const EducationPage = () => {
  const { t } = useI18n();
  const academyHref = "https://redblueacademy.com/";

  const { hero, intro, offeringsTitle, offerings, marketingTitle, marketingText, commsTitle, comms, academyTitle, academyText } = t.educationPage;

  return (
    <div className="space-y-10">
      <Seo
        title={t.meta.educationTitle}
        description={t.meta.educationDescription || t.meta.homeDescription}
        path="/vzdelavanie"
      />

      <EducationHeroSection hero={hero} academyHref={academyHref} />
      <EducationIntroSection intro={intro} />
      <EducationMarketingSection title={marketingTitle} text={marketingText} />
      <EducationCommsSection title={commsTitle} items={comms} />
      <EducationOfferingsSection title={offeringsTitle} items={offerings} />
      <EducationAcademySection
        badge={hero.badge}
        title={academyTitle}
        text={academyText}
        cta={hero.academyCta}
        academyHref={academyHref}
      />
    </div>
  );
};

export default EducationPage;
