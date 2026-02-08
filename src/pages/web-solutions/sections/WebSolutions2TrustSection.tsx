import type { Translation } from "@/locales/types";
import kanclWebp from "@/assets/websolutions/webp/kancl.webp";
import kanclJpg from "@/assets/websolutions/png/kancl.jpg";
import imageWebp from "@/assets/websolutions/webp/image.webp";
import imageJpg from "@/assets/websolutions/png/image.jpg";

type WebSolutions2TrustSectionProps = {
  title: string;
  subtitle: string;
  points: string[];
  gallery: Translation["webSolutionsPage2"]["gallery"];
};

const WebSolutions2TrustSection = ({
  title,
  subtitle,
  points,
  gallery,
}: WebSolutions2TrustSectionProps) => (
  <section className="max-w-5xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">{title}</h2>
    <p className="text-xl text-slate-700 text-center mb-10 max-w-3xl mx-auto">{subtitle}</p>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {points.map((point) => (
        <div key={point} className="bg-white rounded-2xl p-6 shadow border border-red-100">
          <p className="text-slate-800 leading-relaxed">{point}</p>
        </div>
      ))}
    </div>

    <div className="mt-12 grid md:grid-cols-2 gap-6">
      <picture className="block">
        <source srcSet={imageWebp} type="image/webp" />
        <img
          src={imageJpg}
          alt={gallery.leftAlt}
          className="rounded-3xl shadow-lg w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </picture>
      <picture className="block">
        <source srcSet={kanclWebp} type="image/webp" />
        <img
          src={kanclJpg}
          alt={gallery.rightAlt}
          className="rounded-3xl shadow-lg w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </picture>
    </div>
  </section>
);

export default WebSolutions2TrustSection;
