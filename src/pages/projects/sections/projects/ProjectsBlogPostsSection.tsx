import { Link } from "react-router-dom";
import type { Translation } from "@/locales/types";
import { renderProjectRichText } from "@/pages/projects/renderProjectRichText";
import { imageMap, imageMeta } from "@/pages/projects/sections/project-detail/projectMedia";

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
        {posts.map((post) => {
          const previewImage = post.image ? imageMap[post.slug] : undefined;
          const previewMeta = previewImage ? imageMeta[previewImage.fallback] : undefined;

          return (
            <article
              key={post.title}
              className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              {previewImage && (
                <Link to={`/projekty/${post.slug}`} className="block bg-slate-100">
                  <picture>
                    {previewImage.webp && <source srcSet={previewImage.webp} type="image/webp" />}
                    <img
                      src={previewImage.fallback}
                      alt={post.title}
                      className="h-48 w-full object-cover object-top"
                      loading="lazy"
                      decoding="async"
                      width={previewMeta?.width}
                      height={previewMeta?.height}
                    />
                  </picture>
                </Link>
              )}
              <div className="flex flex-1 flex-col p-5">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-700">
                    {post.date} - {post.readTime}
                  </p>
                  <h3 className="text-xl font-bold text-slate-900 md:text-2xl">{post.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-700 md:text-base">
                    {renderProjectRichText(post.summary)}
                  </p>
                </div>
                <div className="mt-4 flex gap-3">
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
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsBlogPostsSection;
