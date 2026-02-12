type NavrhHeroSectionProps = {
  title: string;
  subtitle: string;
};

const NavrhHeroSection = ({ title, subtitle }: NavrhHeroSectionProps) => (
  <header className="space-y-3">
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">{title}</p>
    <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">{title}</h1>
    <p className="max-w-2xl text-sm text-slate-600 md:text-base">{subtitle}</p>
  </header>
);

export default NavrhHeroSection;
