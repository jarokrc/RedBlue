type ProjectDetailExternalLinkSectionProps = {
  href?: string;
  label: string;
};

const ProjectDetailExternalLinkSection = ({ href, label }: ProjectDetailExternalLinkSectionProps) => {
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex w-fit rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-800 md:text-base"
    >
      {label}
    </a>
  );
};

export default ProjectDetailExternalLinkSection;
