import { Link } from "react-router-dom";
import type { Translation } from "@/locales/types";
import { renderProjectRichText } from "@/pages/projects/renderProjectRichText";

type ProjectPost = Translation["projects"]["blog"][number];

type ProjectDetailHeaderSectionProps = {
  post: ProjectPost;
  backLabel: string;
};

const ProjectDetailHeaderSection = ({ post, backLabel }: ProjectDetailHeaderSectionProps) => (
  <div className="space-y-2">
    <Link to="/projekty" className="text-sm font-semibold text-blue-700 hover:text-blue-800 md:text-base">
      {backLabel}
    </Link>
    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-700">
      {post.date} - {post.readTime}
    </p>
    <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">{post.title}</h1>
    <p className="text-sm text-slate-700 md:text-base">{renderProjectRichText(post.summary)}</p>
  </div>
);

export default ProjectDetailHeaderSection;
