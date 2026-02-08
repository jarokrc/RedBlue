import { Link } from "react-router-dom";
import type { Translation } from "@/locales/types";

type WebSolutions2HeroSectionProps = {
  hero: Translation["webSolutionsPage2"]["hero"];
};

const WebSolutions2HeroSection = ({ hero }: WebSolutions2HeroSectionProps) => (
  <section className="relative bg-gradient-to-br from-blue-50 via-white to-red-50/30 rounded-3xl overflow-hidden shadow-xl px-6 py-14 md:p-20">
    <div className="relative max-w-5xl mx-auto text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">{hero.title}</h1>

      <p className="mt-6 text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">{hero.subtitle}</p>

      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
        <Link
          to="/kontakt"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg shadow-red-500/30 transition"
        >
          {hero.ctaPrimary}
        </Link>
        <a
          href="#balicky"
          className="border-2 border-blue-600 text-blue-700 hover:bg-blue-50 font-semibold px-8 py-4 rounded-full text-lg transition"
        >
          {hero.ctaSecondary}
        </a>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {hero.positioning.map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full text-sm font-medium text-slate-700 shadow-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default WebSolutions2HeroSection;
