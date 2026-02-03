type ProjectDetailTechSectionProps = {
  tech?: string[];
};

const ProjectDetailTechSection = ({ tech }: ProjectDetailTechSectionProps) => {
  if (!tech || tech.length === 0) return null;

  return (
    <p className="text-sm font-semibold text-slate-800 md:text-base">
      Tech: <span className="font-normal text-slate-700">{tech.join(", ")}</span>
    </p>
  );
};

export default ProjectDetailTechSection;
