import { Link } from "react-router-dom";
import { useI18n } from "@/app/I18nProvider";
import Seo from "@/components/Seo";

const NotFoundPage = () => {
  const { t } = useI18n();
  return (
    <div className="space-y-4">
      <Seo
        title={t.notFound.title}
        description={t.notFound.description}
        path="/404"
        noindex
      />
      <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">{t.notFound.title}</h1>
      <p className="text-sm text-slate-700 md:text-base">{t.notFound.description}</p>
      <Link to="/" className="text-blue-700 font-semibold hover:text-blue-800 md:text-base">{t.notFound.back}</Link>
    </div>
  );
};

export default NotFoundPage;
