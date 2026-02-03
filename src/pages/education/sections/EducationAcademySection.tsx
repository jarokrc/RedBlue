type EducationAcademySectionProps = {
  badge: string;
  title: string;
  text: string;
  cta: string;
  academyHref: string;
};

const EducationAcademySection = ({ badge, title, text, cta, academyHref }: EducationAcademySectionProps) => (
  <section id="academy" className="space-y-3 rounded-2xl border border-blue-100 bg-blue-50 p-6 shadow-sm md:p-8">
    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">{badge}</p>
        <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">{title}</h3>
      </div>
      <a
        href={academyHref}
        className="inline-flex w-fit items-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
        target="_blank"
        rel="noreferrer"
      >
        {cta}
      </a>
    </div>
    <p className="text-sm leading-relaxed text-slate-700 md:text-base">{text}</p>
  </section>
);

export default EducationAcademySection;
