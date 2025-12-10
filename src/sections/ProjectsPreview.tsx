import { Link } from "react-router-dom";
import { useI18n } from "@/app/I18nProvider";

const ProjectsPreview = () => {
  const { t } = useI18n();
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-blue-700">{t.nav.projects}</p>
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{t.projects.title}</h2>
        </div>
        <Link to="/projekty" className="text-sm font-semibold text-blue-700 hover:text-blue-800 md:text-base">
          {t.projects.title}
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {t.projects.items.map((project) => (
          <article key={project.name} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 md:text-xl">{project.name}</h3>
            <p className="mt-2 text-sm text-slate-600 md:text-base">{project.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPreview;
