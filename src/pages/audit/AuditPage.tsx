import { useI18n } from "@/app/I18nProvider";
import Seo from "@/components/Seo";
import MarketingHeroSection from "@/pages/audit/sections/MarketingHeroSection";
import MarketingOfferingsSection from "@/pages/audit/sections/MarketingOfferingsSection";
import MarketingOverviewSection from "@/pages/audit/sections/MarketingOverviewSection";
import MarketingPackagesSection from "@/pages/audit/sections/MarketingPackagesSection";

const AuditPage = () => {
  const { t } = useI18n();
  const { hero, offerings, offeringsTitle, marketingTitle, marketingText, packages, packagesTitle } = t.marketingPage;

  return (
    <div className="space-y-10">
      <Seo
        title={t.meta.marketingTitle}
        description={t.meta.marketingDescription || t.meta.homeDescription}
        path="/audit"
      />

      <MarketingHeroSection hero={hero} />
      <MarketingOfferingsSection title={offeringsTitle} intro={t.marketingPage.intro} offerings={offerings} />
      <MarketingOverviewSection title={marketingTitle} text={marketingText} />
      <MarketingPackagesSection title={packagesTitle} packages={packages} />
    </div>
  );
};

export default AuditPage;
