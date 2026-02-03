type EducationCommsSectionProps = {
  title: string;
  items: string[];
};

const EducationCommsSection = ({ title, items }: EducationCommsSectionProps) => (
  <section className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
    <h3 className="text-xl font-semibold text-slate-900 md:text-2xl">{title}</h3>
    <div className="grid gap-3 md:grid-cols-3">
      {items.map((item) => (
        <div key={item} className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-4 text-sm font-semibold text-slate-800 shadow-inner">
          {item}
        </div>
      ))}
    </div>
  </section>
);

export default EducationCommsSection;
