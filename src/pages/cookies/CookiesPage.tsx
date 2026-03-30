import { useI18n } from "@/app/I18nProvider";
import Seo from "@/components/Seo";
import CookiesHeroSection from "@/features/legal/sections/CookiesHeroSection";
import CookiesPolicySections from "@/features/legal/sections/CookiesPolicySections";
import LegalContactSection from "@/features/legal/sections/LegalContactSection";

const CookiesPage = () => {
  const { t } = useI18n();
  const contactAnchorId = "cookies-contact";

  return (
    <div className="space-y-8">
      <Seo
        title={t.meta.cookiesTitle}
        description={t.meta.cookiesDescription || t.meta.homeDescription}
        path="/cookies"
      />

      {/* Vylepšená Hero sekcia */}
      <CookiesHeroSection title={t.cookies.title} intro={t.cookies.intro} />

      {/* Hlavný obsah s tabuľkou pre prvú sekciu */}
      <div className="space-y-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <CookiesPolicySections sections={t.cookies.sections} contactAnchorId={contactAnchorId} />

        {/* Kontakt sekcia */}
        <div className="border-t border-slate-200 pt-8">
          <LegalContactSection
            contact={t.cookies.contact}
            contactAnchorId={contactAnchorId}
            paragraphKeyPrefix="cookies-contact-paragraph"
          />
        </div>
      </div>
    </div>
  );
};

export default CookiesPage;
