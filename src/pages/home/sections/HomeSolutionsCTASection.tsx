import { Link } from "react-router-dom";
import { useI18n } from "@/app/I18nProvider";

type SolutionCardData = {
  title: string;
  description: string;
  cta: string;
};

type SolutionCard =
  | { external: true; href: string; data: SolutionCardData }
  | { external?: false; to: string; data: SolutionCardData };

const HomeSolutionsCTASection = () => {
  const { t } = useI18n();

  const cards: SolutionCard[] = [
    { to: "/web-riesenia", data: t.solutions.web, external: false },
    { to: "/podpora", data: t.solutions.support, external: false },
    { to: "/vzdelavanie", data: t.solutions.academy, external: false },
  ];

  return (
    <section className="content-visibility-auto grid gap-4 md:grid-cols-2">
      {cards.map((card, index) => (
        <article key={(card.external ? card.href : card.to) || index} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
          <h3 className="text-xl font-bold leading-tight text-slate-900 md:text-2xl">
            {card.data.title}
          </h3>
          <p className="mt-2 text-sm text-slate-700 md:text-base">
            {card.data.description}
          </p>
          {card.external ? (
            <a
              href={card.href}
              className="mt-3 inline-flex w-fit rounded-lg bg-blue-800 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-900 md:text-base"
            >
              {card.data.cta}
            </a>
          ) : (
            <Link
              to={card.to}
              className="mt-3 inline-flex w-fit rounded-lg bg-blue-800 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-900 md:text-base"
            >
              {card.data.cta}
            </Link>
          )}
        </article>
      ))}
    </section>
  );
};

export default HomeSolutionsCTASection;
