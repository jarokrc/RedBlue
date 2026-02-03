import { Link } from "react-router-dom";
import type { Translation } from "@/locales/types";

type ProjectPost = Translation["projects"]["blog"][number];

type ProjectsBlogPostsSectionProps = {
  posts: ProjectPost[];
  detailLabel: string;
  githubLabel: string;
};

const ProjectsBlogPostsSection = ({ posts, detailLabel, githubLabel }: ProjectsBlogPostsSectionProps) => {
  if (posts.length === 0) return null;

  return (
    <section className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post.title} className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-700">
                {post.date} - {post.readTime}
              </p>
              <h3 className="text-xl font-bold text-slate-900 md:text-2xl">{post.title}</h3>
              <p className="text-sm text-slate-700 md:text-base">{post.summary}</p>
            </div>
            <div className="mt-3 space-y-2 text-sm text-slate-700 leading-relaxed md:text-base">
              {post.body.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
            {post.tech && (
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-600">
                Tech: <span className="font-normal normal-case text-slate-700">{post.tech.join(", ")}</span>
              </p>
            )}
            <div className="mt-3 flex gap-3">
              <Link
                to={`/projekty/${post.slug}`}
                className="text-sm font-semibold text-blue-700 hover:text-blue-800 md:text-base"
              >
                {detailLabel}
              </Link>
              {post.link && (
                <a
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-blue-700 hover:text-blue-800 md:text-base"
                >
                  {post.linkLabel || githubLabel}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsBlogPostsSection;
