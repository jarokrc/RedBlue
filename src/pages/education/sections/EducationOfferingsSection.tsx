type EducationOfferingsSectionProps = {
  title: string;
  items: string[];
};

const EducationOfferingsSection = ({ title, items }: EducationOfferingsSectionProps) => (
  <section id="why" className="space-y-4">
    <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{title}</h2>
    <div className="grid gap-3 md:grid-cols-2">
      {items.map((item) => (
        <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
          <span className="mt-1 h-2 w-2 rounded-full bg-blue-700" aria-hidden />
          <p className="text-sm text-slate-800 md:text-base">{item}</p>
        </div>
      ))}
    </div>
  </section>
);

export default EducationOfferingsSection;
