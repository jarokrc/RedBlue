import type { Translation } from "@/locales/types";

type MarketingPackagesSectionProps = {
  title: string;
  packages: Translation["marketingPage"]["packages"];
};

const MarketingPackagesSection = ({ title, packages }: MarketingPackagesSectionProps) => (
  <section id="packages" className="space-y-4">
    <div className="flex items-center justify-between">
      <h3 className="underline-sweep text-2xl font-bold text-slate-900 md:text-3xl">{title}</h3>
      <span className="text-sm font-semibold text-blue-700">3 výstupy +</span>
    </div>
    <div className="grid gap-4 md:grid-cols-3">
      {packages.map((pack) => (
        <article key={pack.title} className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-pink-50 px-3 py-1 text-sm font-semibold text-pink-700">
            <span aria-hidden>{pack.icon}</span>
            {pack.title}
          </div>
          {pack.subtitle ? (
            <p className="text-sm font-semibold text-slate-900 md:text-base">{pack.subtitle}</p>
          ) : null}
          <p className="text-sm text-slate-700 md:text-base">{pack.description}</p>
          {pack.bullets?.length ? (
            <ul className="space-y-1 text-sm text-slate-600 md:text-base">
              {pack.bullets.map((bullet) => (
                <li key={`${pack.title}-${bullet}`} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" aria-hidden />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          ) : null}
          {pack.note ? <p className="text-xs font-semibold text-slate-500">{pack.note}</p> : null}
        </article>
      ))}
    </div>
  </section>
);

export default MarketingPackagesSection;
