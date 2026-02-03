type LegalHeroSectionProps = {
  title: string;
  intro: string;
};

const LegalHeroSection = ({ title, intro }: LegalHeroSectionProps) => (
  <div className="space-y-3">
    <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">{title}</h1>
    <p className="text-sm leading-relaxed text-slate-700 md:text-base">{intro}</p>
  </div>
);

export default LegalHeroSection;
