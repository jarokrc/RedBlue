type ImpressumHeroSectionProps = {
  title: string;
  intro: string;
};

const ImpressumHeroSection = ({ title, intro }: ImpressumHeroSectionProps) => (
  <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 px-6 py-10 shadow-sm md:px-10 md:py-14">
    {/* Dekoratívne pozadie */}
    <div className="absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-blue-100/20 blur-3xl" />
    <div className="absolute bottom-0 left-0 h-48 w-48 -translate-x-1/2 translate-y-1/2 rounded-full bg-slate-100/30 blur-3xl" />

    <div className="relative z-10 mx-auto max-w-3xl space-y-4 text-center">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700 backdrop-blur-sm">
        <span className="flex h-2 w-2">
          <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
        </span>
        Právne informácie
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
        {title}
      </h1>

      {/* Intro */}
      <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
        {intro}
      </p>

      {/* Doplnkové info */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span>Slovenská republika</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Aktualizované: 30. 3. 2026</span>
        </div>
      </div>
    </div>
  </section>
);

export default ImpressumHeroSection;
