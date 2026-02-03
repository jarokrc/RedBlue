import { useI18n } from "@/app/I18nProvider";
import Seo from "@/components/Seo";
import ProjectsHeroSection from "@/pages/projects/sections/projects/ProjectsHeroSection";
import ProjectsBlogPostsSection from "@/pages/projects/sections/projects/ProjectsBlogPostsSection";

const ProjectsPage = () => {
  const { t } = useI18n();
  const blogPosts = [...(t.projects.blog || [])].sort((a, b) => {
    const da = new Date(a.date).getTime();
    const db = new Date(b.date).getTime();
    return isNaN(db - da) ? 0 : db - da;
  });

  return (
    <div className="space-y-8">
      <Seo
        title={t.meta.projectsTitle}
        description={t.meta.projectsDescription || t.meta.homeDescription}
        path="/projekty"
      />
      <ProjectsHeroSection title={t.projects.title} intro={t.projects.intro} />
      <ProjectsBlogPostsSection
        posts={blogPosts}
        detailLabel={t.projects.detailLabel || "Detail"}
        githubLabel={t.projects.githubLabel || "GitHub"}
      />
    </div>
  );
};

export default ProjectsPage;
