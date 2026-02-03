import { useI18n } from "@/app/I18nProvider";
import Seo from "@/components/Seo";
import WebSolutionsHeroSection from "@/pages/web-solutions/sections/WebSolutionsHeroSection";
import WebSolutionsOfferingsSection from "@/pages/web-solutions/sections/WebSolutionsOfferingsSection";
import WebSolutionsOverviewSection from "@/pages/web-solutions/sections/WebSolutionsOverviewSection";
import WebSolutionsPackagesSection from "@/pages/web-solutions/sections/WebSolutionsPackagesSection";
import WebSolutionsProcessSection from "@/pages/web-solutions/sections/WebSolutionsProcessSection";
import WebSolutionsStackSection from "@/pages/web-solutions/sections/WebSolutionsStackSection";
import WebSolutionsCtaSection from "@/pages/web-solutions/sections/WebSolutionsCtaSection";

const WebSolutionsPage = () => {
  const { t } = useI18n();
  const {
    hero,
    offerings,
    offeringsTitle,
    marketingTitle,
    marketingText,
    packages,
    packagesTitle,
    packagesIntro,
    packagesCtaTitle,
    packagesCtaText,
    packagesCtaPrimary,
    process,
    processTitle,
    stackTitle,
    stacks,
    ctaTitle,
    ctaText,
    ctaPrimary,
    ctaSecondary,
  } = t.webPage;

  return (
    <div className="space-y-10">
      <Seo
        title={t.meta.webTitle}
        description={t.meta.webDescription || t.meta.homeDescription}
        path="/web-riesenia"
      />

      <WebSolutionsHeroSection hero={hero} />
      <WebSolutionsOfferingsSection title={offeringsTitle} intro={t.webPage.intro} offerings={offerings} />
      <WebSolutionsOverviewSection title={marketingTitle} text={marketingText} />
      <WebSolutionsPackagesSection
        title={packagesTitle}
        intro={packagesIntro}
        packages={packages}
        ctaTitle={packagesCtaTitle}
        ctaText={packagesCtaText}
        ctaPrimary={packagesCtaPrimary}
      />
      <WebSolutionsProcessSection title={processTitle} steps={process} />
      <WebSolutionsStackSection title={stackTitle} stacks={stacks} />
      <WebSolutionsCtaSection title={ctaTitle} text={ctaText} primary={ctaPrimary} secondary={ctaSecondary} />
    </div>
  );
};

export default WebSolutionsPage;
