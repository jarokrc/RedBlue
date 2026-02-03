type NotFoundIntroSectionProps = {
  title: string;
  description: string;
};

const NotFoundIntroSection = ({ title, description }: NotFoundIntroSectionProps) => (
  <div className="space-y-2">
    <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">{title}</h1>
    <p className="text-sm text-slate-700 md:text-base">{description}</p>
  </div>
);

export default NotFoundIntroSection;
