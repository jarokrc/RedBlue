import { Link } from "react-router-dom";
import type { Locale } from "@/lib/locale";
import type { Translation } from "@/locales/types";

type IntroContentSectionProps = {
  contentVisible: boolean;
  locale: Locale;
  setLocale: (locale: Locale) => void;
  localeOptions: { value: Locale; label: string }[];
  intro: Translation["intro"];
  showSectionChooser: boolean;
  introLogoWebp: string;
  introLogoPng: string;
  redblueLogoWebp: string;
  redblueLogoPng: string;
  academyLogoWebp: string;
  academyLogoPng: string;
};

const IntroContentSection = ({
  contentVisible,
  locale,
  setLocale,
  localeOptions,
  intro,
  showSectionChooser,
  introLogoWebp,
  introLogoPng,
  redblueLogoWebp,
  redblueLogoPng,
  academyLogoWebp,
  academyLogoPng,
}: IntroContentSectionProps) => (
  <div
    className={`relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-10 px-6 py-16 text-center transition duration-700 ${
      contentVisible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2"
    }`}
  >
    <div className="absolute right-6 top-6 flex items-center gap-3">
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
        {intro.languageLabel}
      </span>
      <div className="relative">
        <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur">
          <span>{locale.toUpperCase()}</span>
        </div>
        <select
          aria-label={intro.languageLabel}
          value={locale}
          onChange={(e) => setLocale(e.target.value as Locale)}
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
        >
          {localeOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
    <picture className="block">
      <source srcSet={introLogoWebp} type="image/webp" />
      <img
        src={introLogoPng}
        alt="RedBlue intro logo"
        className="h-16 w-auto sm:h-20"
        width={320}
        height={120}
        loading="eager"
        decoding="async"
      />
    </picture>

    <div className="max-w-3xl space-y-3">
      <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
        {intro.title}
      </h1>
      <p className="text-sm text-white/70 sm:text-base">
        {intro.subtitle}
      </p>
    </div>

    {showSectionChooser ? (
      <div className="grid w-full max-w-5xl gap-6 md:grid-cols-2">
        <Link
          to="/home"
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-2xl shadow-blue-500/10 backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          aria-label="Vstupis do RedBlue sluzieb"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-400/10 opacity-0 transition duration-500 group-hover:opacity-100" />
          <div className="relative flex h-full flex-col gap-4">
            <picture className="inline-flex">
              <source srcSet={redblueLogoWebp} type="image/webp" />
              <img
                src={redblueLogoPng}
                alt="RedBlue logo"
                className="h-14 w-auto sm:h-16"
                width={280}
                height={92}
                loading="lazy"
                decoding="async"
              />
            </picture>
            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-white sm:text-xl">{intro.redblueTitle}</h2>
              <p className="text-sm text-white/70">
                {intro.redblueDescription}
              </p>
            </div>
            <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-white/80">
              {intro.redblueCta}
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                {"->"}
              </span>
            </span>
          </div>
        </Link>

        <a
          href="https://academy.redblue.sk/"
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-2xl shadow-rose-500/10 backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          aria-label="Vstupis do Akademie vzdelavania"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-transparent to-orange-400/10 opacity-0 transition duration-500 group-hover:opacity-100" />
          <div className="relative flex h-full flex-col gap-4">
            <picture className="inline-flex">
              <source srcSet={academyLogoWebp} type="image/webp" />
              <img
                src={academyLogoPng}
                alt="RedBlue Academy logo"
                className="h-14 w-auto sm:h-16"
                width={280}
                height={92}
                loading="lazy"
                decoding="async"
              />
            </picture>
            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-white sm:text-xl">{intro.academyTitle}</h2>
              <p className="text-sm text-white/70">
                {intro.academyDescription}
              </p>
            </div>
            <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-white/80">
              {intro.academyCta}
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                {"->"}
              </span>
            </span>
          </div>
        </a>
      </div>
    ) : null}
  </div>
);

export default IntroContentSection;
