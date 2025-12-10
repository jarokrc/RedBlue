import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useI18n } from "@/app/I18nProvider";
import marketingImg from "@/assets-webp/marketing/marketing.webp";

const MarketingPage = () => {
  const { t } = useI18n();
  const { hero, offerings, offeringsTitle, marketingTitle, marketingText, packages, packagesTitle } = t.marketingPage;

  return (
    <div className="space-y-10">
      <Helmet>
        <title>{t.meta.marketingTitle}</title>
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
              href="#packages"
              className="rounded-lg border border-white/40 bg-white/10 px-5 py-3 text-base font-semibold text-white shadow hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 md:text-lg"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-blue-500/20 shadow-2xl shadow-blue-900/30">
          <img
            src={marketingImg}
            alt="Ukážka marketingového obsahu"
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{offeringsTitle}</h2>
        <p className="text-slate-700 md:text-base">{t.marketingPage.intro}</p>
        <div className="grid gap-3 md:grid-cols-2">
          {offerings.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <span className="mt-1 h-2 w-2 rounded-full bg-pink-600" aria-hidden />
              <p className="text-sm text-slate-800 md:text-base">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h3 className="text-xl font-semibold text-slate-900 md:text-2xl">{marketingTitle}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">{marketingText}</p>
      </section>

      <section id="packages" className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">{packagesTitle}</h3>
          <span className="text-sm font-semibold text-blue-700">3 balíky +</span>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {packages.map((pack) => (
            <article key={pack.title} className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-pink-50 px-3 py-1 text-sm font-semibold text-pink-700">
                <span aria-hidden>{pack.icon}</span>
                {pack.title}
              </div>
              <p className="text-sm text-slate-700 md:text-base">{pack.description}</p>
              <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                {hero.positioning.map((tag) => (
                  <span key={`${pack.title}-${tag}`} className="rounded-full bg-slate-100 px-2 py-1 text-[11px] text-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
};

export default MarketingPage;
