import { renderProjectRichText } from "@/pages/projects/renderProjectRichText";

type ProjectDetailContentSectionProps = {
  paragraphs: string[];
};

const ProjectDetailContentSection = ({ paragraphs }: ProjectDetailContentSectionProps) => (
  <div className="space-y-3 text-slate-700 leading-relaxed md:text-base">
    {paragraphs.map((para) => (
      <p key={para}>{renderProjectRichText(para)}</p>
    ))}
  </div>
);

export default ProjectDetailContentSection;
