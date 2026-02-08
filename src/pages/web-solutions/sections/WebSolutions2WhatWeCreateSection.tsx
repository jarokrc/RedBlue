import type { Translation } from "@/locales/types";
import webSolutionsWebp from "@/assets/websolutions/webp/kolaz.webp";
import webSolutionsPng from "@/assets/websolutions/png/kolaz.png";

type WebSolutions2WhatWeCreateSectionProps = {
  title: string;
  items: string[];
  showcase: Translation["webSolutionsPage2"]["showcase"];
};

const WebSolutions2WhatWeCreateSection = ({
  title,
  items,
  showcase,
}: WebSolutions2WhatWeCreateSectionProps) => (
  <section className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">{title}</h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <div
          key={item}
          className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition border border-blue-100"
        >
          <div className="text-red-500 text-2xl mb-3">0{i + 1}</div>
          <p className="text-slate-800 text-lg leading-relaxed">{item}</p>
        </div>
      ))}
    </div>

    <div className="mt-14 rounded-3xl overflow-hidden">
      <picture>
        <source srcSet={webSolutionsWebp} type="image/webp" />
        <img
          src={webSolutionsPng}
          alt={showcase.alt}
          className="w-full h-auto object-cover"
          loading="lazy"
          decoding="async"
        />
      </picture>
      <p className="text-center text-sm text-slate-600 py-3">{showcase.caption}</p>
    </div>
  </section>
);

export default WebSolutions2WhatWeCreateSection;
