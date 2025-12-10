import { Link } from "react-router-dom";
import { useI18n } from "@/app/I18nProvider";
import logoImg from "@/assets-webp/logo/logo.webp";

const Hero = () => {
  const { t } = useI18n();
  return (
    <section className="grid gap-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900 px-8 py-12 text-white shadow-lg ring-1 ring-blue-900/30 md:grid-cols-[auto,1fr] md:items-center md:px-12 md:py-14">
      <div className="flex justify-center md:justify-start">
        <div className="rounded-2xl bg-white/90 p-5 shadow-lg ring-1 ring-slate-200/60">
          <img src={logoImg} alt="RedBlue logo" className="h-32 w-auto md:h-40" />
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.22em] text-blue-100 md:text-sm">{t.hero.label}</p>
        <h1 className="text-4xl font-bold leading-tight md:text-5xl sr-only">{t.hero.heading}</h1>
        <p className="max-w-2xl text-base text-blue-50 md:text-lg">{t.hero.subheading}</p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/kontakt"
            className="rounded-lg bg-red-600 px-5 py-3 text-base font-semibold text-white shadow hover:bg-red-700 md:text-lg"
          >
            {t.hero.ctaPrimary}
          </Link>
          <Link
            to="/web-riesenia"
            className="rounded-lg border border-blue-200/70 bg-white/5 px-5 py-3 text-base font-semibold text-blue-50 hover:bg-white/10 md:text-lg"
          >
            {t.hero.ctaSecondary}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
