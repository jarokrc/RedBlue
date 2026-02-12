import { useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties, DragEvent, PointerEvent as ReactPointerEvent } from "react";
import type { Translation } from "@/locales/types";
import type { Block, BlockType } from "@/pages/navrh/types";

type GridSettings = {
  enabled: boolean;
  size: number;
};

type NavrhCanvasSectionProps = {
  title: string;
  hint?: string;
  blocks: Block[];
  blockLabels: Translation["proposal"]["blockLabels"];
  canvasWidth: number;
  canvasHeight: number;
  selectedBlockId: string | null;
  onSelectBlock: (id: string | null) => void;
  onUpdateBlock: (id: string, updater: (block: Block) => Block) => void;
  onAddBlockAt: (type: BlockType, position: { x: number; y: number }) => void;
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
const snap = (value: number, size: number) => Math.round(value / size) * size;

const getBlockPreview = (block: Block) => {
  if (block.type === "hero") return block.subtitle || block.title || "Hero";
  if (block.type === "header") return block.body || block.title || "Header";
  if (block.type === "footer") return block.body || block.title || "Footer";
  if (block.type === "text") return block.body || block.title || "Text";
  if (block.type === "image") return block.caption || (block.imageUrl ? "" : "Image");
  if (block.type === "cta") return block.body || block.title || "CTA";
  if (block.type === "features") return block.items.map((item) => item.title).filter(Boolean).join(", ") || "Features";
  return "";
};

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

const NavrhCanvasSection = ({
  title,
  hint,
  blocks,
  blockLabels,
  canvasWidth,
  canvasHeight,
  selectedBlockId,
  onSelectBlock,
  onUpdateBlock,
  onAddBlockAt,
}: NavrhCanvasSectionProps) => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const [grid, setGrid] = useState<GridSettings>({ enabled: false, size: 16 });
  const [autoZoom, setAutoZoom] = useState(true);
  const [zoom, setZoom] = useState(1);
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!viewportRef.current) return;
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      setViewportSize({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      });
    });
    observer.observe(viewportRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!autoZoom || viewportSize.width === 0 || viewportSize.height === 0) return;
    const paddedWidth = Math.max(viewportSize.width - 32, 200);
    const fit = Math.min(paddedWidth / canvasWidth, 1.2);
    setZoom(Number(fit.toFixed(3)));
  }, [autoZoom, viewportSize, canvasWidth, canvasHeight]);

  const scaledSize = useMemo(
    () => ({
      width: canvasWidth * zoom,
      height: canvasHeight * zoom,
    }),
    [canvasWidth, canvasHeight, zoom],
  );

  const gridStyle = useMemo(() => {
    if (!grid.enabled) return undefined;
    const size = grid.size;
    return {
      backgroundImage:
        "linear-gradient(to right, rgba(148, 163, 184, 0.28) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.28) 1px, transparent 1px)",
      backgroundSize: `${size}px ${size}px`,
    } as CSSProperties;
  }, [grid]);

  const getCanvasPoint = (clientX: number, clientY: number) => {
    if (!pageRef.current) return { x: 0, y: 0 };
    const rect = pageRef.current.getBoundingClientRect();
    const x = (clientX - rect.left) / zoom;
    const y = (clientY - rect.top) / zoom;
    return { x: clamp(x, 0, canvasWidth), y: clamp(y, 0, canvasHeight) };
  };

  const startMove = (event: ReactPointerEvent<HTMLDivElement>, block: Block) => {
    event.preventDefault();
    event.stopPropagation();
    const start = { x: event.clientX, y: event.clientY };
    const origin = { x: block.x, y: block.y };
    const { width, height } = block;
    const min = getMinSize(block.type);

    const handleMove = (moveEvent: PointerEvent) => {
      const dx = (moveEvent.clientX - start.x) / zoom;
      const dy = (moveEvent.clientY - start.y) / zoom;
      let nextX = origin.x + dx;
      let nextY = origin.y + dy;
      if (grid.enabled) {
        nextX = snap(nextX, grid.size);
        nextY = snap(nextY, grid.size);
      }
      nextX = clamp(nextX, 0, canvasWidth - Math.max(width, min.width));
      nextY = clamp(nextY, 0, canvasHeight - Math.max(height, min.height));
      onUpdateBlock(block.id, (prev) => ({ ...prev, x: nextX, y: nextY }));
    };

    const handleUp = () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
  };

  const startResize = (
    event: ReactPointerEvent<HTMLDivElement>,
    block: Block,
    handle: "nw" | "ne" | "sw" | "se",
  ) => {
    event.preventDefault();
    event.stopPropagation();
    const start = { x: event.clientX, y: event.clientY };
    const origin = { x: block.x, y: block.y, width: block.width, height: block.height };
    const min = getMinSize(block.type);

    const handleMove = (moveEvent: PointerEvent) => {
      const dx = (moveEvent.clientX - start.x) / zoom;
      const dy = (moveEvent.clientY - start.y) / zoom;
      let nextX = origin.x;
      let nextY = origin.y;
      let nextWidth = origin.width;
      let nextHeight = origin.height;

      if (handle === "se") {
        nextWidth = origin.width + dx;
        nextHeight = origin.height + dy;
      }
      if (handle === "sw") {
        nextWidth = origin.width - dx;
        nextHeight = origin.height + dy;
        nextX = origin.x + dx;
      }
      if (handle === "ne") {
        nextWidth = origin.width + dx;
        nextHeight = origin.height - dy;
        nextY = origin.y + dy;
      }
      if (handle === "nw") {
        nextWidth = origin.width - dx;
        nextHeight = origin.height - dy;
        nextX = origin.x + dx;
        nextY = origin.y + dy;
      }

      if (grid.enabled) {
        nextX = snap(nextX, grid.size);
        nextY = snap(nextY, grid.size);
        nextWidth = snap(nextWidth, grid.size);
        nextHeight = snap(nextHeight, grid.size);
      }

      nextWidth = clamp(nextWidth, min.width, canvasWidth - nextX);
      nextHeight = clamp(nextHeight, min.height, canvasHeight - nextY);
      nextX = clamp(nextX, 0, canvasWidth - nextWidth);
      nextY = clamp(nextY, 0, canvasHeight - nextHeight);

      onUpdateBlock(block.id, (prev) => ({
        ...prev,
        x: nextX,
        y: nextY,
        width: nextWidth,
        height: nextHeight,
      }));
    };

    const handleUp = () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const type =
      (event.dataTransfer.getData("application/x-navrh-block") as BlockType) ||
      (event.dataTransfer.getData("text/plain") as BlockType);
    if (!type) return;
    const point = getCanvasPoint(event.clientX, event.clientY);
    onAddBlockAt(type, point);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
          {hint && <p className="mt-1 text-sm text-slate-600">{hint}</p>}
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600">
          <button
            type="button"
            onClick={() => setAutoZoom(true)}
            className={`rounded-full border px-3 py-1 transition ${
              autoZoom ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-200 bg-white"
            }`}
          >
            Auto zoom
          </button>
          <button
            type="button"
            onClick={() => {
              setAutoZoom(false);
              setZoom(1);
            }}
            className="rounded-full border border-slate-200 bg-white px-3 py-1 transition hover:border-blue-600 hover:text-blue-700"
          >
            Náhľad 1:1
          </button>
          <button
            type="button"
            onClick={() => setGrid((prev) => ({ ...prev, enabled: !prev.enabled }))}
            className={`rounded-full border px-3 py-1 transition ${
              grid.enabled ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-200 bg-white"
            }`}
          >
            Mriežka
          </button>
          <select
            value={grid.size}
            onChange={(e) => setGrid((prev) => ({ ...prev, size: Number(e.target.value) }))}
            className="rounded-full border border-slate-200 bg-white px-2 py-1 text-xs font-semibold text-slate-600"
          >
            <option value={8}>8px</option>
            <option value={16}>16px</option>
            <option value={24}>24px</option>
          </select>
          <div className="flex items-center gap-2">
            <span>{Math.round(zoom * 100)}%</span>
            <input
              type="range"
              min={0.4}
              max={1.2}
              step={0.05}
              value={zoom}
              onChange={(e) => {
                setAutoZoom(false);
                setZoom(Number(e.target.value));
              }}
              className="accent-blue-600"
            />
          </div>
        </div>
      </div>

      <div
        ref={viewportRef}
        className="mt-4 overflow-auto rounded-xl border border-slate-200 bg-slate-50 p-4"
        style={{ height: "calc(100vh - 360px)", minHeight: 520, maxHeight: 900 }}
        onDragOver={(event) => event.preventDefault()}
        onDrop={handleDrop}
      >
        <div style={{ width: scaledSize.width, height: scaledSize.height }}>
          <div
            ref={pageRef}
            className="relative origin-top-left rounded-2xl border border-slate-200 bg-white shadow-sm"
            style={{
              width: canvasWidth,
              height: canvasHeight,
              transform: `scale(${zoom})`,
              ...gridStyle,
            }}
            onPointerDown={(event) => {
              if (event.target === event.currentTarget) {
                onSelectBlock(null);
              }
            }}
          >
            {blocks.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-slate-400">
                Pretiahni blok zľava na plátno.
              </div>
            )}
            {blocks.map((block) => {
              const isSelected = block.id === selectedBlockId;
              const preview = getBlockPreview(block);
              return (
                <div
                  key={block.id}
                  role="button"
                  tabIndex={0}
                  onPointerDown={(event) => {
                    onSelectBlock(block.id);
                    startMove(event, block);
                  }}
                  className={`absolute cursor-move rounded-lg border bg-white/90 p-3 text-left shadow-sm transition ${
                    isSelected ? "border-blue-600 ring-2 ring-blue-200" : "border-slate-200 hover:border-blue-400"
                  }`}
                  style={{
                    left: block.x,
                    top: block.y,
                    width: block.width,
                    height: block.height,
                  }}
                >
                  <div className="flex h-full flex-col">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-700">
                        {blockLabels[block.type]}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-500">
                        {Math.round(block.width)}×{Math.round(block.height)}
                      </span>
                    </div>
                    <div className="mt-2 text-sm font-semibold text-slate-900">
                      {block.title || blockLabels[block.type]}
                    </div>
                    <div className="mt-1 text-xs text-slate-600">{preview}</div>
                    {block.type === "image" && block.imageUrl && (
                      <div className="mt-2 flex-1 overflow-hidden rounded-md border border-slate-200 bg-slate-50">
                        <img
                          src={block.imageUrl}
                          alt={block.title || "Preview"}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>

                  {isSelected && (
                    <>
                      <div
                        role="button"
                        tabIndex={0}
                        onPointerDown={(event) => startResize(event, block, "nw")}
                        className="absolute -left-2 -top-2 h-3 w-3 cursor-nwse-resize rounded-full border border-blue-600 bg-white"
                      />
                      <div
                        role="button"
                        tabIndex={0}
                        onPointerDown={(event) => startResize(event, block, "ne")}
                        className="absolute -right-2 -top-2 h-3 w-3 cursor-nesw-resize rounded-full border border-blue-600 bg-white"
                      />
                      <div
                        role="button"
                        tabIndex={0}
                        onPointerDown={(event) => startResize(event, block, "sw")}
                        className="absolute -left-2 -bottom-2 h-3 w-3 cursor-nesw-resize rounded-full border border-blue-600 bg-white"
                      />
                      <div
                        role="button"
                        tabIndex={0}
                        onPointerDown={(event) => startResize(event, block, "se")}
                        className="absolute -right-2 -bottom-2 h-3 w-3 cursor-nwse-resize rounded-full border border-blue-600 bg-white"
                      />
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavrhCanvasSection;
