import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useI18n } from "@/app/I18nProvider";
import heroPng from "@/assets/home/png/kancl.jpg";
import heroWebp from "@/assets/home/webp/kancl.webp";

const HomeHeroSection = () => {
  const { t, locale } = useI18n();
  const heroImage = { png: heroPng, webp: heroWebp };

  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href={heroImage.webp} type="image/webp" />
      </Helmet>
      <section className="grid gap-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900 px-8 py-12 text-white shadow-lg ring-1 ring-blue-900/30 md:grid-cols-[auto,1fr] md:items-center md:px-12 md:py-14">
        <div className="flex justify-center md:justify-start">
          <div className="rounded-3xl bg-white/90 p-0 shadow-lg ring-1 ring-slate-200/60 overflow-hidden">
            <picture>
              <source srcSet={heroImage.webp} type="image/webp" />
              <img
                src={heroImage.png}
                alt="RedBlue hero visual"
                className="h-auto w-80 object-cover md:w-[26rem]"
                width={1208}
                height={395}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                sizes="(min-width: 768px) 26rem, 20rem"
              />
            </picture>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHeroSection;
