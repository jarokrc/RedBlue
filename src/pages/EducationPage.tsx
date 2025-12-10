import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useI18n } from "@/app/I18nProvider";
import { detectCountryCode } from "@/lib/locale";
import educationImg from "@/assets-webp/education/education.webp";

const EducationPage = () => {
  const { t, locale } = useI18n();
  const country = detectCountryCode().toUpperCase();
  const academyHref =
    locale === "sk" || country === "SK" || country === "CZ"
      ? "https://redblueacademy.com/"
      : "https://redblueacademy.com/en";

  const { hero, intro, offeringsTitle, offerings, marketingTitle, marketingText, commsTitle, comms, academyTitle, academyText } = t.educationPage;

  return (
    <div className="space-y-10">
      <Helmet>
        <title>{t.meta.educationTitle}</title>
      </Helmet>

      <section className="grid gap-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900 px-8 py-12 text-white shadow-lg ring-1 ring-blue-900/30 md:grid-cols-[1.1fr,0.9fr] md:items-center md:px-12 md:py-14">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-blue-100">
            {hero.badge}
          </div>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">{hero.title}</h1>
          <p className="max-w-2xl text-base text-blue-100 md:text-lg">{hero.subtitle}</p>
          <div className="flex flex-wrap gap-2">
            {hero.positioning.map((item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100">
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/kontakt"
              className="rounded-lg bg-red-500 px-5 py-3 text-base font-semibold text-white shadow hover:bg-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 md:text-lg"
            >
              {hero.ctaPrimary}
            </Link>
            <a
              href="#academy"
              className="rounded-lg border border-white/40 bg-white/10 px-5 py-3 text-base font-semibold text-white shadow hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 md:text-lg"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-blue-500/20 shadow-2xl shadow-blue-900/30">
          <img
            src={educationImg}
            alt="Education & Tech Leadership"
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <section className="space-y-3">
        <p className="text-slate-700 md:text-base">{intro}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{offeringsTitle}</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {offerings.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-700" aria-hidden />
              <p className="text-sm text-slate-800 md:text-base">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h3 className="text-xl font-semibold text-slate-900 md:text-2xl">{marketingTitle}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">{marketingText}</p>
      </section>

      <section className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h3 className="text-xl font-semibold text-slate-900 md:text-2xl">{commsTitle}</h3>
        <div className="grid gap-2 md:grid-cols-2">
          {comms.map((item) => (
            <div key={item} className="rounded-lg border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 shadow-inner">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="academy" className="space-y-3 rounded-2xl border border-blue-100 bg-blue-50 p-6 shadow-sm md:p-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">{hero.badge}</p>
            <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">{academyTitle}</h3>
          </div>
          <a
            href={academyHref}
            className="inline-flex w-fit items-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
            target="_blank"
            rel="noreferrer"
          >
            {hero.academyCta}
          </a>
        </div>
        <p className="text-sm leading-relaxed text-slate-700 md:text-base">{academyText}</p>
      </section>
    </div>
  );
};

export default EducationPage;
