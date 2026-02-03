type MarketingOfferingsSectionProps = {
  title: string;
  intro: string;
  offerings: string[];
};

const MarketingOfferingsSection = ({ title, intro, offerings }: MarketingOfferingsSectionProps) => (
  <section className="space-y-4">
    <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{title}</h2>
    <p className="text-slate-700 md:text-base">{intro}</p>
    <div className="grid gap-3 md:grid-cols-2">
      {offerings.map((item) => (
        <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
          <span className="mt-1 h-2 w-2 rounded-full bg-pink-600" aria-hidden />
          <p className="text-sm text-slate-800 md:text-base">{item}</p>
        </div>
      ))}
    </div>
  </section>
);

export default MarketingOfferingsSection;
