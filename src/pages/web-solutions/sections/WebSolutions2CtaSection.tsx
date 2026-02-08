import { Link } from "react-router-dom";
import type { Translation } from "@/locales/types";

type WebSolutions2CtaSectionProps = {
  title: string;
  text: string;
  ctaPrimary: string;
  ctaSecondary: string;
  techStackTitle: string;
  techStackIntro: string;
  techStacks: Translation["webSolutionsPage2"]["techStacks"];
};

const WebSolutions2CtaSection = ({
  title,
  text,
  ctaPrimary,
  ctaSecondary,
  techStackTitle,
  techStackIntro,
  techStacks,
}: WebSolutions2CtaSectionProps) => (
  <section className="relative overflow-hidden rounded-3xl mx-6 md:mx-auto max-w-5xl px-8 py-16 text-center text-white shadow-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.35),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(239,68,68,0.3),transparent_60%)]" />
    <div className="absolute inset-0 bg-slate-950/60" />
    <div className="relative">
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">{title}</h2>
      <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed text-white/90">{text}</p>

      <div className="flex flex-col sm:flex-row justify-center gap-5">
        <Link
          to="/kontakt"
          className="bg-white text-red-800 hover:bg-red-50 font-bold px-10 py-5 rounded-full text-xl shadow-lg"
        >
          {ctaPrimary}
        </Link>
      </div>

      <details className="mt-10 mx-auto max-w-4xl text-left">
        <summary className="cursor-pointer list-none text-lg font-semibold text-white/90 hover:text-white transition">
          {ctaSecondary}
        </summary>
        <div className="mt-4">
          <p className="text-white/80 text-sm uppercase tracking-wide">{techStackTitle}</p>
          <p className="mt-2 text-sm text-white/70">{techStackIntro}</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {techStacks.map((stack) => (
              <div key={stack.title} className="rounded-xl border border-white/15 bg-white/10 p-4">
                <p className="text-sm font-semibold text-white">{stack.title}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {stack.items.map((item) => (
                    <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </details>
    </div>
  </section>
);

export default WebSolutions2CtaSection;
