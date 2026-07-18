import { Link } from "react-router-dom";
import { useI18n } from "@/app/I18nProvider";
import webImage from "@/assets/home/services/web-redesign.webp";
import auditImage from "@/assets/home/services/audit-redesign.webp";
import supportImage from "@/assets/home/services/support-redesign.webp";
import academyImage from "@/assets/home/services/academy-redesign.webp";

const HomeSolutionsCTASection = () => {
  const { t } = useI18n();
  const cards = [
    { to: "/web-riesenia", data: t.solutions.web, image: webImage },
    { to: "/audit", data: t.solutions.audit, image: auditImage },
    { to: "/podpora", data: t.solutions.support, image: supportImage },
    { to: "/vzdelavanie", data: t.solutions.academy, image: academyImage },
  ];

  return (
    <section className="content-visibility-auto grid gap-4 md:grid-cols-2">
      {cards.map((card) => (
        <Link key={card.to} to={card.to} className="solution-depth-card group relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-[0_18px_50px_-36px_rgba(15,23,42,.45)] transition duration-300 hover:border-slate-300">
          <div className="relative aspect-[16/9] overflow-hidden bg-[#07152f]">
            <img src={card.image} alt="" className="h-full w-full object-cover saturate-[.88] transition duration-700 ease-out group-hover:scale-[1.04] group-hover:saturate-100" width={1200} height={800} loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07152f]/35 via-blue-950/5 to-transparent" aria-hidden />
          </div>
          <div className="p-7 md:p-9">
            <h3 className="max-w-sm text-2xl font-bold tracking-[-0.025em] text-slate-950 md:text-3xl">{card.data.title}</h3>
            <p className="mt-3 line-clamp-3 max-w-lg text-sm leading-6 text-slate-600 md:text-base md:leading-7">{card.data.description}</p>
            <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-slate-900">
              {card.data.cta}<span className="transition-transform group-hover:translate-x-1">→</span>
            </span>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default HomeSolutionsCTASection;
