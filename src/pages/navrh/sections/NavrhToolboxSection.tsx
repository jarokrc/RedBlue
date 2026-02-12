import type { DragEvent } from "react";
import type { Translation } from "@/locales/types";
import type { BlockType } from "@/pages/navrh/types";

type NavrhToolboxSectionProps = {
  title: string;
  hint: string;
  notices: Pick<Translation["proposal"]["notices"], "autoSave">;
  onAddBlock: (type: BlockType) => void;
  onDragStartBlock: (event: DragEvent<HTMLButtonElement>, type: BlockType) => void;
  actions: Pick<
    Translation["proposal"]["actions"],
    "addHeader" | "addFooter" | "addHero" | "addText" | "addImage" | "addCta" | "addFeatures"
  >;
};

const NavrhToolboxSection = ({
  title,
  hint,
  notices,
  onAddBlock,
  onDragStartBlock,
  actions,
}: NavrhToolboxSectionProps) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div>
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        <p className="mt-1 text-sm text-slate-600">{hint}</p>
      </div>
      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{notices.autoSave}</span>
    </div>
    <div className="mt-4 flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => onAddBlock("header")}
        onDragStart={(event) => onDragStartBlock(event, "header")}
        draggable
        className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-800 shadow-sm transition hover:border-blue-700 hover:text-blue-700"
      >
        {actions.addHeader}
      </button>
      <button
        type="button"
        onClick={() => onAddBlock("footer")}
        onDragStart={(event) => onDragStartBlock(event, "footer")}
        draggable
        className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-800 shadow-sm transition hover:border-blue-700 hover:text-blue-700"
      >
        {actions.addFooter}
      </button>
      <button
        type="button"
        onClick={() => onAddBlock("hero")}
        onDragStart={(event) => onDragStartBlock(event, "hero")}
        draggable
        className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-800 shadow-sm transition hover:border-blue-700 hover:text-blue-700"
      >
        {actions.addHero}
      </button>
      <button
        type="button"
        onClick={() => onAddBlock("text")}
        onDragStart={(event) => onDragStartBlock(event, "text")}
        draggable
        className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-800 shadow-sm transition hover:border-blue-700 hover:text-blue-700"
      >
        {actions.addText}
      </button>
      <button
        type="button"
        onClick={() => onAddBlock("image")}
        onDragStart={(event) => onDragStartBlock(event, "image")}
        draggable
        className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-800 shadow-sm transition hover:border-blue-700 hover:text-blue-700"
      >
        {actions.addImage}
      </button>
      <button
        type="button"
        onClick={() => onAddBlock("cta")}
        onDragStart={(event) => onDragStartBlock(event, "cta")}
        draggable
        className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-800 shadow-sm transition hover:border-blue-700 hover:text-blue-700"
      >
        {actions.addCta}
      </button>
      <button
        type="button"
        onClick={() => onAddBlock("features")}
        onDragStart={(event) => onDragStartBlock(event, "features")}
        draggable
        className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-800 shadow-sm transition hover:border-blue-700 hover:text-blue-700"
      >
        {actions.addFeatures}
      </button>
    </div>
  </div>
);

export default NavrhToolboxSection;
