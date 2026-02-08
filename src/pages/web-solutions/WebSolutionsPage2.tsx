import Seo from "@/components/Seo";
import { useI18n } from "@/app/I18nProvider";
import WebSolutions2HeroSection from "@/pages/web-solutions/sections/WebSolutions2HeroSection";
import WebSolutions2WhatWeCreateSection from "@/pages/web-solutions/sections/WebSolutions2WhatWeCreateSection";
import WebSolutions2ForWhomSection from "@/pages/web-solutions/sections/WebSolutions2ForWhomSection";
import WebSolutions2TrustSection from "@/pages/web-solutions/sections/WebSolutions2TrustSection";
import WebSolutions2PackagesSection from "@/pages/web-solutions/sections/WebSolutions2PackagesSection";
import WebSolutions2ProcessSection from "@/pages/web-solutions/sections/WebSolutions2ProcessSection";
import WebSolutions2CtaSection from "@/pages/web-solutions/sections/WebSolutions2CtaSection";

const WebSolutionsPage2 = () => {
  const { t } = useI18n();
  const { webSolutionsPage2 } = t;
  return (
    <div className="space-y-20 md:space-y-24 pb-20">
      <Seo title={t.meta.webTitle} description={webSolutionsPage2.intro} path="/web-riesenia" />

      <WebSolutions2HeroSection hero={webSolutionsPage2.hero} />
      <WebSolutions2WhatWeCreateSection
        title={webSolutionsPage2.whatWeCreateTitle}
        items={webSolutionsPage2.whatWeCreate}
        showcase={webSolutionsPage2.showcase}
      />
      <WebSolutions2ForWhomSection
        title={webSolutionsPage2.forWhomTitle}
        bullets={webSolutionsPage2.forWhomBullets}
      />
      <WebSolutions2TrustSection
        title={webSolutionsPage2.trustTitle}
        subtitle={webSolutionsPage2.trustSubtitle}
        points={webSolutionsPage2.trustPoints}
        gallery={webSolutionsPage2.gallery}
      />
      <WebSolutions2PackagesSection
        title={webSolutionsPage2.packagesTitle}
        intro={webSolutionsPage2.packagesIntro}
        packages={webSolutionsPage2.packages}
        helpTitle={webSolutionsPage2.packagesHelpTitle}
        helpText={webSolutionsPage2.packagesHelpText}
        helpCta={webSolutionsPage2.packagesHelpCta}
      />
      <WebSolutions2ProcessSection
        title={webSolutionsPage2.processTitle}
        steps={webSolutionsPage2.process}
      />
      <WebSolutions2CtaSection
        title={webSolutionsPage2.ctaBigTitle}
        text={webSolutionsPage2.ctaBigText}
        ctaPrimary={webSolutionsPage2.ctaPrimary}
        ctaSecondary={webSolutionsPage2.ctaSecondary}
        techStackTitle={webSolutionsPage2.techStackTitle}
        techStackIntro={webSolutionsPage2.techStackIntro}
        techStacks={webSolutionsPage2.techStacks}
      />
    </div>
  );
};

export default WebSolutionsPage2;
