type ProjectDetailContentSectionProps = {
  paragraphs: string[];
};

const ProjectDetailContentSection = ({ paragraphs }: ProjectDetailContentSectionProps) => (
  <div className="space-y-3 text-slate-700 leading-relaxed md:text-base">
    {paragraphs.map((para) => (
      <p key={para}>{para}</p>
    ))}
  </div>
);

export default ProjectDetailContentSection;
