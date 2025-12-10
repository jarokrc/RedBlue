import { Helmet } from "react-helmet-async";
import { useI18n } from "@/app/I18nProvider";
import authorImg from "@/assets-webp/about/author.webp";

const AboutPage = () => {
  const { t } = useI18n();
  return (
    <div className="space-y-5">
      <Helmet>
        <title>{t.meta.aboutTitle}</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">{t.nav.about}</h1>

      <section className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[320px,1fr] md:items-center">
        <div className="relative overflow-hidden rounded-2xl bg-slate-100">
          <img src={authorImg} alt={t.aboutProfile.name} className="h-full w-full object-cover" />
        </div>
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">{t.aboutProfile.tagline}</p>
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{t.aboutProfile.name}</h2>
            <p className="text-sm font-semibold text-slate-700 md:text-base">{t.aboutProfile.role}</p>
            <p className="text-sm text-slate-600 md:text-base">{t.aboutProfile.location}</p>
          </div>
          <p className="text-base text-slate-700 leading-relaxed md:text-lg">{t.aboutProfile.summary}</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {t.aboutProfile.highlights.map((item) => (
              <div key={item} className="flex items-start gap-2 rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-700">
                <span className="mt-1 h-2 w-2 rounded-full bg-red-600" aria-hidden />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">{t.aboutSummaryTitle}</h2>
        <div className="space-y-3 text-slate-700 leading-relaxed md:text-base">
          {t.aboutSummary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">{t.aboutTech.title}</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {t.aboutTech.rows.map((row) => (
            <div key={row.label} className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 shadow-inner">
              <p className="text-sm font-semibold text-slate-800 md:text-base">{row.label}</p>
              <p className="mt-1 text-sm text-slate-700 leading-relaxed md:text-base">{row.items.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
