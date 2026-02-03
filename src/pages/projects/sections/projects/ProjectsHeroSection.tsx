type ProjectsHeroSectionProps = {
  title: string;
  intro: string;
};

const ProjectsHeroSection = ({ title, intro }: ProjectsHeroSectionProps) => (
  <>
    <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">{title}</h1>
    <p className="text-slate-700 md:text-base">{intro}</p>
  </>
);

export default ProjectsHeroSection;
