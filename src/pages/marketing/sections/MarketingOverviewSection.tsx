type MarketingOverviewSectionProps = {
  title: string;
  text: string;
};

const MarketingOverviewSection = ({ title, text }: MarketingOverviewSectionProps) => (
  <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
    <h3 className="shine-text text-xl font-semibold text-slate-900 md:text-2xl">{title}</h3>
    <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">{text}</p>
  </section>
);

export default MarketingOverviewSection;
