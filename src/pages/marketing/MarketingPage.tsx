import { useI18n } from "@/app/I18nProvider";
import Seo from "@/components/Seo";
import MarketingHeroSection from "@/pages/marketing/sections/MarketingHeroSection";
import MarketingOfferingsSection from "@/pages/marketing/sections/MarketingOfferingsSection";
import MarketingOverviewSection from "@/pages/marketing/sections/MarketingOverviewSection";
import MarketingPackagesSection from "@/pages/marketing/sections/MarketingPackagesSection";

const MarketingPage = () => {
  const { t } = useI18n();
  const { hero, offerings, offeringsTitle, marketingTitle, marketingText, packages, packagesTitle } = t.marketingPage;

  return (
    <div className="space-y-10">
      <Seo
        title={t.meta.marketingTitle}
        description={t.meta.marketingDescription || t.meta.homeDescription}
        path="/marketing"
      />

      <MarketingHeroSection hero={hero} />
      <MarketingOfferingsSection title={offeringsTitle} intro={t.marketingPage.intro} offerings={offerings} />
      <MarketingOverviewSection title={marketingTitle} text={marketingText} />
      <MarketingPackagesSection title={packagesTitle} packages={packages} positioningTags={hero.positioning} />
    </div>
  );
};

export default MarketingPage;
