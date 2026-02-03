import { useI18n } from "@/app/I18nProvider";
import Seo from "@/components/Seo";
import SupportHeroSection from "@/pages/support/sections/SupportHeroSection";
import SupportOfferingsSection from "@/pages/support/sections/SupportOfferingsSection";
import SupportPackagesSection from "@/pages/support/sections/SupportPackagesSection";

const SupportPage = () => {
  const { t } = useI18n();
  const { hero, intro, offerings, offeringsTitle, packages, packagesTitle } = t.supportPage;

  return (
    <div className="space-y-10">
      <Seo
        title={t.meta.supportTitle}
        description={t.meta.supportDescription || t.meta.homeDescription}
        path="/podpora"
      />

      <SupportHeroSection hero={hero} />
      <SupportOfferingsSection intro={intro} title={offeringsTitle} offerings={offerings} />
      <SupportPackagesSection title={packagesTitle} packages={packages} />
    </div>
  );
};

export default SupportPage;
