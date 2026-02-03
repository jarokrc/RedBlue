import { useParams } from "react-router-dom";
import { useI18n } from "@/app/I18nProvider";
import Seo from "@/components/Seo";
import { galleryMap, imageMap, imageMeta } from "@/pages/projects/sections/project-detail/projectMedia";
import ProjectDetailNotFoundSection from "@/pages/projects/sections/project-detail/ProjectDetailNotFoundSection";
import ProjectDetailHeaderSection from "@/pages/projects/sections/project-detail/ProjectDetailHeaderSection";
import ProjectDetailHeroSection from "@/pages/projects/sections/project-detail/ProjectDetailHeroSection";
import ProjectDetailContentSection from "@/pages/projects/sections/project-detail/ProjectDetailContentSection";
import ProjectDetailTechSection from "@/pages/projects/sections/project-detail/ProjectDetailTechSection";
import ProjectDetailGallerySection from "@/pages/projects/sections/project-detail/ProjectDetailGallerySection";
import ProjectDetailExternalLinkSection from "@/pages/projects/sections/project-detail/ProjectDetailExternalLinkSection";

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useI18n();

  const post = t.projects.blog.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="space-y-4">
        <Seo title={t.notFound.title} description={t.notFound.description} path="/projekty" noindex />
        <ProjectDetailNotFoundSection
          title={t.notFound.title}
          description={t.notFound.description}
          backLabel={t.notFound.back}
        />
      </div>
    );
  }

  const canonicalPath = `/projekty/${slug || ""}`;
  const metaDescription = post.summary || t.meta.projectsDescription || t.meta.homeDescription;
  const heroImage = post.image ? imageMap[post.slug] : undefined;
  const galleryImages = post.gallery?.length ? galleryMap[post.slug] || [] : [];
  const heroMeta = heroImage ? imageMeta[heroImage.fallback] : undefined;

  return (
    <div className="space-y-6">
      <Seo title={post.title} description={metaDescription} path={canonicalPath} />

      <ProjectDetailHeaderSection post={post} backLabel={t.nav.projects} />
      <ProjectDetailHeroSection image={heroImage} title={post.title} meta={heroMeta} />
      <ProjectDetailContentSection paragraphs={post.content} />
      <ProjectDetailTechSection tech={post.tech} />
      <ProjectDetailGallerySection images={galleryImages} title={post.title} imageMetaMap={imageMeta} />
      <ProjectDetailExternalLinkSection
        href={post.link}
        label={post.linkLabel || t.projects.githubLabel || "GitHub"}
      />
    </div>
  );
};

export default ProjectDetailPage;
