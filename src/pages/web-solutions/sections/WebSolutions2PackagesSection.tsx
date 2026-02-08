import { Link } from "react-router-dom";
import type { Translation } from "@/locales/types";

type WebSolutions2PackagesSectionProps = {
  title: string;
  intro: string;
  packages: Translation["webSolutionsPage2"]["packages"];
  helpTitle: string;
  helpText: string;
  helpCta: string;
};

const WebSolutions2PackagesSection = ({
  title,
  intro,
  packages,
  helpTitle,
  helpText,
  helpCta,
}: WebSolutions2PackagesSectionProps) => (
  <section id="balicky" className="max-w-6xl mx-auto px-6 pt-10">
    <h2 className="text-4xl font-bold text-center mb-4">{title}</h2>
    <p className="text-xl text-slate-600 text-center mb-12">{intro}</p>

    <div className="grid md:grid-cols-3 gap-8">
      {packages.map((pkg, i) => (
        <div
          key={pkg.title}
          className={`rounded-3xl p-8 shadow-xl transition hover:scale-[1.03] ${
            i === 1 ? "bg-gradient-to-b from-red-50 to-white border-2 border-red-400" : "bg-white border border-blue-200"
          }`}
        >
          <div className="text-5xl mb-4">{pkg.icon}</div>
          <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
          <p className="text-slate-600 mb-6 min-h-[3rem]">{pkg.subtitle}</p>
          <p className="text-slate-700 mb-6">{pkg.description}</p>

          <ul className="space-y-3 mb-8">
            {pkg.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2">
                <span className="text-blue-600 mt-1.5">●</span>
                <span className="text-slate-800">{bullet}</span>
              </li>
            ))}
          </ul>

          {pkg.note && <p className="text-sm font-semibold text-red-700 italic">{pkg.note}</p>}
        </div>
      ))}
    </div>

    <div className="mt-14 bg-white rounded-3xl p-8 shadow-lg text-center border border-blue-200">
      <h3 className="text-2xl font-bold mb-3">{helpTitle}</h3>
      <p className="text-slate-700 mb-6">{helpText}</p>
      <Link
        to="/kontakt"
        className="bg-red-600 hover:bg-red-700 text-white font-semibold px-10 py-4 rounded-full text-lg inline-block"
      >
        {helpCta}
      </Link>
    </div>
  </section>
);

export default WebSolutions2PackagesSection;
