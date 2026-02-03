import type { Translation } from "@/locales/types";

type WebSolutionsStackSectionProps = {
  title: string;
  stacks: Translation["webPage"]["stacks"];
};

const WebSolutionsStackSection = ({ title, stacks }: WebSolutionsStackSectionProps) => (
  <section className="space-y-3">
    <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">{title}</h3>
    <div className="grid gap-3 md:grid-cols-3 sm:grid-cols-2">
      {stacks.map((stack) => (
        <div key={stack.title} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-sm font-semibold text-slate-800 md:text-base">{stack.title}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {stack.items.map((item) => (
              <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default WebSolutionsStackSection;
