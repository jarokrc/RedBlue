type HomeOfferHeadingSectionProps = { heading: string; eyebrow: string; title: string };

const HomeOfferHeadingSection = ({ heading, eyebrow, title }: HomeOfferHeadingSectionProps) => (
  <section className="grid gap-6 px-1 py-8 md:grid-cols-[.75fr_1.25fr] md:items-end md:gap-12 md:py-12">
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.035em] text-slate-950 md:text-5xl">{title}</h2>
    </div>
    <p className="max-w-2xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">{heading}</p>
  </section>
);

export default HomeOfferHeadingSection;
