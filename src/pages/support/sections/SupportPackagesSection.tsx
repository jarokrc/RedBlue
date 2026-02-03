import type { Translation } from "@/locales/types";

type SupportPackagesSectionProps = {
  title: string;
  packages: Translation["supportPage"]["packages"];
};

const SupportPackagesSection = ({ title, packages }: SupportPackagesSectionProps) => (
  <section id="packages" className="space-y-4">
    <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">{title}</h3>
    <div className="grid gap-4 md:grid-cols-2">
      {packages.map((pack) => (
        <article key={pack.title} className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-800">
            <span aria-hidden>{pack.icon}</span>
            {pack.title}
          </div>
          <p className="text-sm text-slate-700 md:text-base">{pack.description}</p>
        </article>
      ))}
    </div>
  </section>
);

export default SupportPackagesSection;
