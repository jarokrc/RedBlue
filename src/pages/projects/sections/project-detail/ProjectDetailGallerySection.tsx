import type { ImageMeta, ProjectImage } from "@/pages/projects/sections/project-detail/projectMedia";

type ProjectDetailGallerySectionProps = {
  images: ProjectImage[];
  title: string;
  imageMetaMap: Record<string, ImageMeta>;
};

const ProjectDetailGallerySection = ({ images, title, imageMetaMap }: ProjectDetailGallerySectionProps) => {
  if (images.length === 0) return null;

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {images.map((img) => {
        const meta = imageMetaMap[img.fallback];
        return (
          <a
            key={img.fallback}
            href={img.fallback}
            target="_blank"
            rel="noreferrer"
            className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            <picture>
              {img.webp && <source srcSet={img.webp} type="image/webp" />}
              <img
                src={img.fallback}
                alt={title}
                className="mx-auto h-auto max-h-64 w-full object-contain p-2"
                loading="lazy"
                decoding="async"
                width={meta?.width}
                height={meta?.height}
              />
            </picture>
          </a>
        );
      })}
    </div>
  );
};

export default ProjectDetailGallerySection;
