import type { Translation } from "@/locales/types";

type WebSolutions2ProcessSectionProps = {
  title: string;
  steps: Translation["webSolutionsPage2"]["process"];
};

const WebSolutions2ProcessSection = ({ title, steps }: WebSolutions2ProcessSectionProps) => (
  <section className="max-w-5xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">{title}</h2>

    <div className="space-y-8">
      {steps.map((step) => (
        <div key={step.number} className="flex gap-6 bg-white rounded-2xl p-6 shadow border border-red-100">
          <div className="shrink-0">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-2xl font-bold">
              {step.number}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-slate-700 text-lg">{step.text}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default WebSolutions2ProcessSection;
