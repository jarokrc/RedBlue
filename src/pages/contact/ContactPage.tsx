import { useI18n } from "@/app/I18nProvider";
import Seo from "@/components/Seo";
import ContactHeroSection from "@/pages/contact/sections/ContactHeroSection";
import ContactDetailsSection from "@/pages/contact/sections/ContactDetailsSection";

const ContactPage = () => {
  const { t } = useI18n();
  const title = `${t.nav.contact} | RedBlue.sk`;

  return (
    <div className="space-y-6">
      <Seo
        title={title}
        description={t.meta.contactDescription || t.meta.homeDescription}
        path="/kontakt"
      />
      <ContactHeroSection title={t.contact.title} subtitle={t.contact.subtitle} />
      <ContactDetailsSection heroLabel={t.hero.label} contactSection={t.contactSection} />
      {/* Kontakt formular bude rieseny neskor v backende (bezpecny submit + ochrana proti spamu). */}
    </div>
  );
};

export default ContactPage;
