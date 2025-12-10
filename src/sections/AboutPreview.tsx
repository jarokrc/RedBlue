import { Link } from "react-router-dom";
import { useI18n } from "@/app/I18nProvider";

const AboutPreview = () => {
  const { t } = useI18n();
  return (
    <section className="grid gap-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2">
      <div className="space-y-3">
        <p className="text-sm font-semibold text-blue-700">{t.nav.about}</p>
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{t.about.title}</h2>
        <p className="text-sm text-slate-700 leading-relaxed md:text-base">{t.about.intro}</p>
      </div>
      <div className="space-y-3">
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700 md:text-base">
          {t.about.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Link to="/o-mne" className="inline-flex w-fit rounded-lg bg-blue-700 px-4 py-2 text-base font-semibold text-white shadow hover:bg-blue-800 md:text-lg">
          {t.nav.about}
        </Link>
      </div>
    </section>
  );
};

export default AboutPreview;
