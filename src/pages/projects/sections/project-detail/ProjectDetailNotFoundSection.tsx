import { Link } from "react-router-dom";

type ProjectDetailNotFoundSectionProps = {
  title: string;
  description: string;
  backLabel: string;
};

const ProjectDetailNotFoundSection = ({ title, description, backLabel }: ProjectDetailNotFoundSectionProps) => (
  <div className="space-y-4">
    <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">{title}</h1>
    <p className="text-sm text-slate-700 md:text-base">{description}</p>
    <Link to="/projekty" className="text-blue-700 font-semibold hover:text-blue-800 md:text-base">
      {backLabel}
    </Link>
  </div>
);

export default ProjectDetailNotFoundSection;
