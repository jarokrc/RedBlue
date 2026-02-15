type MarketingOverviewSectionProps = {
  title: string;
  text: string;
};

const MarketingOverviewSection = ({ title, text }: MarketingOverviewSectionProps) => {
  const paragraphs = text.split(/\n\s*\n/).filter(Boolean);

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h3 className="shine-text text-xl font-semibold text-slate-900 md:text-2xl">{title}</h3>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-700 md:text-base">
        {paragraphs.map((paragraph, index) => (
          <p key={`${title}-${index}`}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};

export default MarketingOverviewSection;
