import Contact from "@/sections/Contact";
import { useI18n } from "@/app/I18nProvider";
import Seo from "@/components/Seo";

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
      <Contact />
    </div>
  );
};

export default ContactPage;
