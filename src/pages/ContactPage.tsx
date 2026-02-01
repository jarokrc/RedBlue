import { Suspense, lazy } from "react";
import { useI18n } from "@/app/I18nProvider";
import Seo from "@/components/Seo";

const Contact = lazy(() => import("@/sections/Contact"));

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
      <Suspense fallback={<div className="min-h-[520px] rounded-2xl border border-slate-200 bg-white/70" />}>
        <Contact />
      </Suspense>
    </div>
  );
};

export default ContactPage;
