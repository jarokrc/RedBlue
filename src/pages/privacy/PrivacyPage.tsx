import { useI18n } from "@/app/I18nProvider";
import Seo from "@/components/Seo";
import LegalHeroSection from "@/features/legal/sections/LegalHeroSection";
import LegalPolicySections from "@/features/legal/sections/LegalPolicySections";
import LegalContactSection from "@/features/legal/sections/LegalContactSection";

const PrivacyPage = () => {
  const { t } = useI18n();
  const contactAnchorId = "privacy-contact";

  return (
    <div className="space-y-6">
      <Seo
        title={t.meta.privacyTitle}
        description={t.meta.privacyDescription || t.meta.homeDescription}
        path="/zasady-ochrany-osobnych-udajov"
      />
      <LegalHeroSection title={t.privacy.title} intro={t.privacy.intro} />

      <div className="space-y-6">
        <LegalPolicySections sections={t.privacy.sections} contactAnchorId={contactAnchorId} />
        <LegalContactSection
          contact={t.privacy.contact}
          contactSection={t.contactSection}
          contactAnchorId={contactAnchorId}
          paragraphKeyPrefix="privacy-contact-paragraph"
        />
      </div>
    </div>
  );
};

export default PrivacyPage;
