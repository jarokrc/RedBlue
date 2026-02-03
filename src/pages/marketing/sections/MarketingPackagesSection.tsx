import type { Translation } from "@/locales/types";

type MarketingPackagesSectionProps = {
  title: string;
  packages: Translation["marketingPage"]["packages"];
  positioningTags: string[];
};

const MarketingPackagesSection = ({ title, packages, positioningTags }: MarketingPackagesSectionProps) => (
  <section id="packages" className="space-y-4">
    <div className="flex items-center justify-between">
      <h3 className="underline-sweep text-2xl font-bold text-slate-900 md:text-3xl">{title}</h3>
      <span className="text-sm font-semibold text-blue-700">3 balĂ­ky +</span>
    </div>
    <div className="grid gap-4 md:grid-cols-3">
      {packages.map((pack) => (
        <article key={pack.title} className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-pink-50 px-3 py-1 text-sm font-semibold text-pink-700">
            <span aria-hidden>{pack.icon}</span>
            {pack.title}
          </div>
          <p className="text-sm text-slate-700 md:text-base">{pack.description}</p>
          <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
            {positioningTags.map((tag) => (
              <span key={`${pack.title}-${tag}`} className="rounded-full bg-slate-100 px-2 py-1 text-[11px] text-slate-700">
                {tag}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default MarketingPackagesSection;
