import type { ChangeEvent } from "react";
import type { Translation } from "@/locales/types";
import supportPng from "@/assets/support/png/support.png";
import supportWebp from "@/assets/support/webp/support.webp";
import type { Block, BlockType, FeaturesItem, ImageBlock } from "@/pages/navrh/types";

type NavrhPropertiesSectionProps = {
  title: string;
  emptyTitle: string;
  emptyText: string;
  selectedBlock: Block | null;
  blockLabels: Translation["proposal"]["blockLabels"];
  fieldLabels: Translation["proposal"]["fieldLabels"];
  layoutOptions: Translation["proposal"]["layoutOptions"];
  buttons: Translation["proposal"]["buttons"];
  canvasWidth: number;
  canvasHeight: number;
  onUpdateBlock: (id: string, updater: (block: Block) => Block) => void;
  onRemoveBlock: (id: string) => void;
  onDuplicateBlock: (id: string) => void;
  createFeatureItem: () => FeaturesItem;
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const getMinSize = (type: BlockType) => {
  switch (type) {
    case "hero":
      return { width: 360, height: 160 };
    case "header":
    case "footer":
      return { width: 320, height: 140 };
    case "image":
      return { width: 240, height: 200 };
    case "features":
      return { width: 320, height: 200 };
    default:
      return { width: 260, height: 140 };
  }
};

const templateImages = [
  { id: "support-webp", src: supportWebp },
  { id: "support-png", src: supportPng },
];

const NavrhPropertiesSection = ({
  title,
  emptyTitle,
  emptyText,
  selectedBlock,
  blockLabels,
  fieldLabels,
  layoutOptions,
  buttons,
  canvasWidth,
  canvasHeight,
  onUpdateBlock,
  onRemoveBlock,
  onDuplicateBlock,
  createFeatureItem,
}: NavrhPropertiesSectionProps) => {
  if (!selectedBlock) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        <div className="mt-4 rounded-xl border border-dashed border-slate-200 p-6 text-center">
          <p className="text-sm font-semibold text-slate-900">{emptyTitle}</p>
          <p className="mt-1 text-sm text-slate-600">{emptyText}</p>
        </div>
      </div>
    );
  }

  const minSize = getMinSize(selectedBlock.type);
  const textBlock =
    selectedBlock.type === "text" || selectedBlock.type === "header" || selectedBlock.type === "footer"
      ? selectedBlock
      : null;

  const updateNumberField = (field: "x" | "y" | "width" | "height", value: number) => {
    if (!Number.isFinite(value)) return;
    onUpdateBlock(selectedBlock.id, (prev) => {
      const next = { ...prev, [field]: value };
      const width = clamp(next.width, minSize.width, canvasWidth);
      const height = clamp(next.height, minSize.height, canvasHeight);
      const x = clamp(next.x, 0, canvasWidth - width);
      const y = clamp(next.y, 0, canvasHeight - height);
      return { ...next, width, height, x, y };
    });
  };

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || selectedBlock.type !== "image") return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result !== "string") return;
      onUpdateBlock(selectedBlock.id, (prev) => {
        if (prev.type !== "image") return prev;
        return {
          ...prev,
          imageUrl: result,
          caption: prev.caption || file.name,
        };
      });
    };
    reader.readAsDataURL(file);
    event.target.value = "";
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
          <p className="mt-1 text-sm text-slate-600">{blockLabels[selectedBlock.type]}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => onDuplicateBlock(selectedBlock.id)}
            className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-700"
          >
            {buttons.duplicate}
          </button>
          <button
            type="button"
            onClick={() => onRemoveBlock(selectedBlock.id)}
            className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700 transition hover:border-rose-300"
          >
            {buttons.remove}
          </button>
        </div>
      </div>

      <div className="mt-4 grid gap-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            <span>X</span>
            <input
              type="number"
              value={Math.round(selectedBlock.x)}
              onChange={(e) => updateNumberField("x", Number(e.target.value))}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900"
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            <span>Y</span>
            <input
              type="number"
              value={Math.round(selectedBlock.y)}
              onChange={(e) => updateNumberField("y", Number(e.target.value))}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900"
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            <span>W</span>
            <input
              type="number"
              value={Math.round(selectedBlock.width)}
              onChange={(e) => updateNumberField("width", Number(e.target.value))}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900"
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            <span>H</span>
            <input
              type="number"
              value={Math.round(selectedBlock.height)}
              onChange={(e) => updateNumberField("height", Number(e.target.value))}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900"
            />
          </label>
        </div>

        {selectedBlock.type === "hero" && (
          <div className="grid gap-3">
            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              <span>{fieldLabels.title}</span>
              <input
                type="text"
                value={selectedBlock.title}
                onChange={(e) =>
                  onUpdateBlock(selectedBlock.id, (prev) => ({
                    ...prev,
                    title: e.target.value,
                  }))
                }
                className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              <span>{fieldLabels.subtitle}</span>
              <textarea
                rows={3}
                value={selectedBlock.subtitle}
                onChange={(e) =>
                  onUpdateBlock(selectedBlock.id, (prev) => ({
                    ...prev,
                    subtitle: e.target.value,
                  }))
                }
                className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900"
              />
            </label>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                <span>{fieldLabels.primaryCtaText}</span>
                <input
                  type="text"
                  value={selectedBlock.primaryCtaText}
                  onChange={(e) =>
                    onUpdateBlock(selectedBlock.id, (prev) => ({
                      ...prev,
                      primaryCtaText: e.target.value,
                    }))
                  }
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                <span>{fieldLabels.primaryCtaUrl}</span>
                <input
                  type="text"
                  value={selectedBlock.primaryCtaUrl}
                  onChange={(e) =>
                    onUpdateBlock(selectedBlock.id, (prev) => ({
                      ...prev,
                      primaryCtaUrl: e.target.value,
                    }))
                  }
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                <span>{fieldLabels.secondaryCtaText}</span>
                <input
                  type="text"
                  value={selectedBlock.secondaryCtaText}
                  onChange={(e) =>
                    onUpdateBlock(selectedBlock.id, (prev) => ({
                      ...prev,
                      secondaryCtaText: e.target.value,
                    }))
                  }
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                <span>{fieldLabels.secondaryCtaUrl}</span>
                <input
                  type="text"
                  value={selectedBlock.secondaryCtaUrl}
                  onChange={(e) =>
                    onUpdateBlock(selectedBlock.id, (prev) => ({
                      ...prev,
                      secondaryCtaUrl: e.target.value,
                    }))
                  }
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900"
                />
              </label>
            </div>
          </div>
        )}

        {textBlock && (
          <div className="grid gap-3">
            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              <span>{fieldLabels.title}</span>
              <input
                type="text"
                value={textBlock.title}
                onChange={(e) =>
                  onUpdateBlock(textBlock.id, (prev) => ({
                    ...prev,
                    title: e.target.value,
                  }))
                }
                className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              <span>{fieldLabels.body}</span>
              <textarea
                rows={4}
                value={textBlock.body}
                onChange={(e) =>
                  onUpdateBlock(textBlock.id, (prev) => ({
                    ...prev,
                    body: e.target.value,
                  }))
                }
                className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900"
              />
            </label>
          </div>
        )}

        {selectedBlock.type === "image" && (
          <div className="grid gap-3">
            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              <span>{fieldLabels.title}</span>
              <input
                type="text"
                value={selectedBlock.title}
                onChange={(e) =>
                  onUpdateBlock(selectedBlock.id, (prev) => ({
                    ...prev,
                    title: e.target.value,
                  }))
                }
                className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              <span>{fieldLabels.imageUrl}</span>
              <input
                type="text"
                value={selectedBlock.imageUrl}
                onChange={(e) =>
                  onUpdateBlock(selectedBlock.id, (prev) => ({
                    ...prev,
                    imageUrl: e.target.value,
                  }))
                }
                className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900"
              />
            </label>
            <div className="grid gap-2 text-sm font-semibold text-slate-700">
              <span>{fieldLabels.uploadImage}</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900"
              />
            </div>
            <div className="grid gap-2 text-sm font-semibold text-slate-700">
              <span>{fieldLabels.template}</span>
              <div className="flex flex-wrap gap-2">
                {templateImages.map((image) => (
                  <button
                    key={image.id}
                    type="button"
                    onClick={() =>
                      onUpdateBlock(selectedBlock.id, (prev) => {
                        if (prev.type !== "image") return prev;
                        return { ...prev, imageUrl: image.src };
                      })
                    }
                    className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-700"
                  >
                    {image.id === "support-webp" ? fieldLabels.templateSupportWebp : fieldLabels.templateSupportPng}
                  </button>
                ))}
              </div>
              {selectedBlock.imageUrl && (
                <div className="mt-2 overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
                  <img
                    src={selectedBlock.imageUrl}
                    alt={selectedBlock.title || "Preview"}
                    className="h-32 w-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              <span>{fieldLabels.caption}</span>
              <input
                type="text"
                value={selectedBlock.caption}
                onChange={(e) =>
                  onUpdateBlock(selectedBlock.id, (prev) => ({
                    ...prev,
                    caption: e.target.value,
                  }))
                }
                className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              <span>{fieldLabels.layout}</span>
              <select
                value={selectedBlock.layout}
                onChange={(e) =>
                  onUpdateBlock(selectedBlock.id, (prev) => ({
                    ...prev,
                    layout: e.target.value as ImageBlock["layout"],
                  }))
                }
                className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900"
              >
                <option value="left">{layoutOptions.left}</option>
                <option value="right">{layoutOptions.right}</option>
                <option value="full">{layoutOptions.full}</option>
              </select>
            </label>
          </div>
        )}

        {selectedBlock.type === "cta" && (
          <div className="grid gap-3">
            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              <span>{fieldLabels.title}</span>
              <input
                type="text"
                value={selectedBlock.title}
                onChange={(e) =>
                  onUpdateBlock(selectedBlock.id, (prev) => ({
                    ...prev,
                    title: e.target.value,
                  }))
                }
                className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              <span>{fieldLabels.body}</span>
              <textarea
                rows={3}
                value={selectedBlock.body}
                onChange={(e) =>
                  onUpdateBlock(selectedBlock.id, (prev) => ({
                    ...prev,
                    body: e.target.value,
                  }))
                }
                className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900"
              />
            </label>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                <span>{fieldLabels.buttonText}</span>
                <input
                  type="text"
                  value={selectedBlock.buttonText}
                  onChange={(e) =>
                    onUpdateBlock(selectedBlock.id, (prev) => ({
                      ...prev,
                      buttonText: e.target.value,
                    }))
                  }
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                <span>{fieldLabels.buttonUrl}</span>
                <input
                  type="text"
                  value={selectedBlock.buttonUrl}
                  onChange={(e) =>
                    onUpdateBlock(selectedBlock.id, (prev) => ({
                      ...prev,
                      buttonUrl: e.target.value,
                    }))
                  }
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900"
                />
              </label>
            </div>
          </div>
        )}

        {selectedBlock.type === "features" && (
          <div className="grid gap-3">
            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              <span>{fieldLabels.title}</span>
              <input
                type="text"
                value={selectedBlock.title}
                onChange={(e) =>
                  onUpdateBlock(selectedBlock.id, (prev) => ({
                    ...prev,
                    title: e.target.value,
                  }))
                }
                className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900"
              />
            </label>
            <div className="grid gap-3">
              {selectedBlock.items.map((item) => (
                <div key={item.id} className="rounded-lg border border-slate-200 bg-white p-3">
                  <label className="grid gap-2 text-sm font-semibold text-slate-700">
                    <span>{fieldLabels.itemsTitle}</span>
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) =>
                        onUpdateBlock(selectedBlock.id, (prev) => {
                          if (prev.type !== "features") return prev;
                          return {
                            ...prev,
                            items: prev.items.map((entry) =>
                              entry.id === item.id ? { ...entry, title: e.target.value } : entry,
                            ),
                          };
                        })
                      }
                      className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900"
                    />
                  </label>
                  <label className="mt-3 grid gap-2 text-sm font-semibold text-slate-700">
                    <span>{fieldLabels.itemsText}</span>
                    <textarea
                      rows={3}
                      value={item.text}
                      onChange={(e) =>
                        onUpdateBlock(selectedBlock.id, (prev) => {
                          if (prev.type !== "features") return prev;
                          return {
                            ...prev,
                            items: prev.items.map((entry) =>
                              entry.id === item.id ? { ...entry, text: e.target.value } : entry,
                            ),
                          };
                        })
                      }
                      className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900"
                    />
                  </label>
                  <div className="mt-3 flex justify-end">
                    <button
                      type="button"
                      onClick={() =>
                        onUpdateBlock(selectedBlock.id, (prev) => {
                          if (prev.type !== "features") return prev;
                          const nextItems = prev.items.filter((entry) => entry.id !== item.id);
                          return {
                            ...prev,
                            items: nextItems.length > 0 ? nextItems : [createFeatureItem()],
                          };
                        })
                      }
                      className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700"
                    >
                      {buttons.removeItem}
                    </button>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  onUpdateBlock(selectedBlock.id, (prev) => {
                    if (prev.type !== "features") return prev;
                    return { ...prev, items: [...prev.items, createFeatureItem()] };
                  })
                }
                className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700"
              >
                {buttons.addItem}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavrhPropertiesSection;
