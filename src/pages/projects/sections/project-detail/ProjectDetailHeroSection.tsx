import type { ImageMeta, ProjectImage } from "@/pages/projects/sections/project-detail/projectMedia";

type ProjectDetailHeroSectionProps = {
  image?: ProjectImage;
  title: string;
  meta?: ImageMeta;
};

const ProjectDetailHeroSection = ({ image, title, meta }: ProjectDetailHeroSectionProps) => {
  if (!image) return null;

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <a href={image.fallback} target="_blank" rel="noreferrer">
        <picture>
          {image.webp && <source srcSet={image.webp} type="image/webp" />}
          <img
            src={image.fallback}
            alt={title}
            className="mx-auto h-auto max-h-[420px] w-full object-contain p-2 md:max-h-[520px]"
            loading="lazy"
            decoding="async"
            width={meta?.width}
            height={meta?.height}
          />
        </picture>
      </a>
    </div>
  );
};

export default ProjectDetailHeroSection;
