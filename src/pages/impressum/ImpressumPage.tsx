import { useI18n } from "@/app/I18nProvider";
import Seo from "@/components/Seo";
import ImpressumHeroSection from "@/features/legal/sections/ImpressumHeroSection";
import ImpressumPolicySections from "@/features/legal/sections/ImpressumPolicySections";
import LegalContactSection from "@/features/legal/sections/LegalContactSection";

const ImpressumPage = () => {
  const { t } = useI18n();
  const contactAnchorId = "impressum-contact";

  return (
    <div className="space-y-8">
      <Seo
        title={t.meta.impressumTitle || `${t.impressum.title} | RedBlue.sk`}
        description={t.meta.impressumDescription || t.impressum.intro}
        path="/impressum"
      />

      {/* Vylepšená Hero sekcia */}
      <ImpressumHeroSection title={t.impressum.title} intro={t.impressum.intro} />

      {/* Hlavný obsah s tabuľkami */}
      <div className="space-y-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <ImpressumPolicySections sections={t.impressum.sections} contactAnchorId={contactAnchorId} />

        {/* Kontakt sekcia */}
        <div className="border-t border-slate-200 pt-8">
          <LegalContactSection
            contact={t.impressum.contact}
            contactAnchorId={contactAnchorId}
            paragraphKeyPrefix="impressum-contact-paragraph"
          />
        </div>
      </div>

      {/* Footer s dátumom aktualizácie */}
      {t.impressum.lastUpdated && (
        <div className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
          <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm font-medium text-slate-600">{t.impressum.lastUpdated}</span>
        </div>
      )}
    </div>
  );
};

export default ImpressumPage;
