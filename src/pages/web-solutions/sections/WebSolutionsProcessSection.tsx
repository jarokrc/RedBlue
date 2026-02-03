import type { Translation } from "@/locales/types";

type WebSolutionsProcessSectionProps = {
  title: string;
  steps: Translation["webPage"]["process"];
};

const WebSolutionsProcessSection = ({ title, steps }: WebSolutionsProcessSectionProps) => (
  <section className="space-y-4">
    <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">{title}</h3>
    <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3">
      {steps.map((step, index) => (
        <article key={step.title} className="h-full rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-800">{index + 1}</span>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-slate-900 md:text-base">{step.title}</p>
              <p className="text-sm text-slate-700 md:text-base">{step.description}</p>
              {step.note ? <p className="text-sm font-semibold text-blue-800 md:text-base">{step.note}</p> : null}
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default WebSolutionsProcessSection;
