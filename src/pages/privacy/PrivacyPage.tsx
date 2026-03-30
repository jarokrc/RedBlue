import { useI18n } from "@/app/I18nProvider";
import Seo from "@/components/Seo";
import PrivacyHeroSection from "@/features/legal/sections/PrivacyHeroSection";
import PrivacyPolicySections from "@/features/legal/sections/PrivacyPolicySections";
import LegalContactSection from "@/features/legal/sections/LegalContactSection";

const PrivacyPage = () => {
  const { t } = useI18n();
  const contactAnchorId = "privacy-contact";

  return (
    <div className="space-y-8">
      <Seo
        title={t.meta.privacyTitle}
        description={t.meta.privacyDescription || t.meta.homeDescription}
        path="/zasady-ochrany-osobnych-udajov"
      />

      {/* Vylepšená Hero sekcia */}
      <PrivacyHeroSection title={t.privacy.title} intro={t.privacy.intro} />

      {/* Hlavný obsah s tabuľkou pre prvú sekciu */}
      <div className="space-y-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <PrivacyPolicySections sections={t.privacy.sections} contactAnchorId={contactAnchorId} />

        {/* Kontakt sekcia */}
        <div className="border-t border-slate-200 pt-8">
          <LegalContactSection
            contact={t.privacy.contact}
            contactAnchorId={contactAnchorId}
            paragraphKeyPrefix="privacy-contact-paragraph"
          />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
