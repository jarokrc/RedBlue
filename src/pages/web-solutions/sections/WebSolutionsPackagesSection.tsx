import { Link } from "react-router-dom";
import type { Translation } from "@/locales/types";

type WebSolutionsPackagesSectionProps = {
  title: string;
  intro: string;
  packages: Translation["webPage"]["packages"];
  ctaTitle: string;
  ctaText: string;
  ctaPrimary: string;
};

const WebSolutionsPackagesSection = ({
  title,
  intro,
  packages,
  ctaTitle,
  ctaText,
  ctaPrimary,
}: WebSolutionsPackagesSectionProps) => (
  <section id="packages" className="space-y-6">
    <div className="space-y-2">
      <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">{title}</h3>
      <p className="text-sm text-slate-700 md:text-base">{intro}</p>
    </div>
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {packages.map((pack) => (
        <article key={pack.title} className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-800">
            <span aria-hidden>{pack.icon}</span>
            <span>{pack.title}</span>
          </div>
          <p className="text-sm font-semibold text-slate-900 md:text-base">{pack.subtitle}</p>
          <p className="text-sm text-slate-700 md:text-base">{pack.description}</p>
          <ul className="space-y-2 text-sm text-slate-700 md:text-base">
            {pack.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-700" aria-hidden />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          {pack.note ? <p className="text-sm font-semibold text-blue-800 md:text-base">{pack.note}</p> : null}
        </article>
      ))}
    </div>
    <div className="flex flex-col gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-5 shadow-sm md:flex-row md:items-center md:justify-between md:p-6">
      <div className="space-y-1">
        <p className="text-base font-semibold text-slate-900 md:text-lg">{ctaTitle}</p>
        <p className="text-sm text-slate-700 md:text-base">{ctaText}</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link
          to="/kontakt"
          className="rounded-lg bg-blue-700 px-5 py-3 text-base font-semibold text-white shadow hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-50"
        >
          {ctaPrimary}
        </Link>
      </div>
    </div>
  </section>
);

export default WebSolutionsPackagesSection;
