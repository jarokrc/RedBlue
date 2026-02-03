import { useI18n } from "@/app/I18nProvider";
import Seo from "@/components/Seo";
import LegalHeroSection from "@/features/legal/sections/LegalHeroSection";
import LegalPolicySections from "@/features/legal/sections/LegalPolicySections";
import LegalContactSection from "@/features/legal/sections/LegalContactSection";

const CookiesPage = () => {
  const { t } = useI18n();
  const contactAnchorId = "cookies-contact";

  return (
    <div className="space-y-6">
      <Seo
        title={t.meta.cookiesTitle}
        description={t.meta.cookiesDescription || t.meta.homeDescription}
        path="/cookies"
      />

      <LegalHeroSection title={t.cookies.title} intro={t.cookies.intro} />

      <div className="space-y-6">
        <LegalPolicySections sections={t.cookies.sections} contactAnchorId={contactAnchorId} />
        <LegalContactSection
          contact={t.cookies.contact}
          contactSection={t.contactSection}
          contactAnchorId={contactAnchorId}
          paragraphKeyPrefix="cookies-contact-paragraph"
        />
      </div>
    </div>
  );
};

export default CookiesPage;
