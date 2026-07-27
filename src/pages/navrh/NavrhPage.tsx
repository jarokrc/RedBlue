import { useEffect, useMemo, useRef, useState } from "react";
import type { ChangeEvent, DragEvent } from "react";
import { useI18n } from "@/app/I18nProvider";
import Seo from "@/components/Seo";
import NavrhCanvasSection from "@/pages/navrh/sections/NavrhCanvasSection";
import NavrhExportSection from "@/pages/navrh/sections/NavrhExportSection";
import NavrhHeroSection from "@/pages/navrh/sections/NavrhHeroSection";
import NavrhMetaSection from "@/pages/navrh/sections/NavrhMetaSection";
import NavrhPropertiesSection from "@/pages/navrh/sections/NavrhPropertiesSection";
import NavrhToolboxSection from "@/pages/navrh/sections/NavrhToolboxSection";
import type { Block, BlockType, FeaturesItem, LayoutMeta } from "@/pages/navrh/types";

const STORAGE_KEY = "rb-proposal-draft";
const LAYOUT_VERSION = 2;
const CANVAS_WIDTH = 1200;
const CANVAS_HEIGHT = 1600;
const STAGGER_STEP = 26;

const DEFAULT_BLOCK_SIZES: Record<BlockType, { width: number; height: number }> = {
  hero: { width: 760, height: 240 },
  header: { width: 1040, height: 160 },
  footer: { width: 1040, height: 160 },
  text: { width: 560, height: 200 },
  image: { width: 520, height: 320 },
  cta: { width: 520, height: 200 },
  features: { width: 640, height: 260 },
};

const MIN_BLOCK_SIZES: Record<BlockType, { width: number; height: number }> = {
  hero: { width: 360, height: 160 },
  header: { width: 320, height: 140 },
  footer: { width: 320, height: 140 },
  text: { width: 260, height: 140 },
  image: { width: 240, height: 200 },
  cta: { width: 260, height: 140 },
  features: { width: 320, height: 200 },
};

const createId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `block-${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const getStaggeredPosition = (index: number) => {
  const x = 40 + (index * STAGGER_STEP) % 240;
  const y = 40 + (index * STAGGER_STEP) % 240;
  return { x, y };
};

const normalizeLayoutValues = (
  type: BlockType,
  values: { x: number; y: number; width: number; height: number },
) => {
  const minSize = MIN_BLOCK_SIZES[type];
  const width = clamp(values.width, minSize.width, CANVAS_WIDTH);
  const height = clamp(values.height, minSize.height, CANVAS_HEIGHT);
  const x = clamp(values.x, 0, CANVAS_WIDTH - width);
  const y = clamp(values.y, 0, CANVAS_HEIGHT - height);
  return { x, y, width, height };
};
const defaultMeta: LayoutMeta = {
  projectName: "",
  clientName: "",
  contact: "",
  notes: "",
};

const createFeatureItem = (): FeaturesItem => ({
  id: createId(),
  title: "",
  text: "",
});

const createBlock = (type: BlockType, position?: { x: number; y: number }, index = 0): Block => {
  const size = DEFAULT_BLOCK_SIZES[type];
  const fallback = getStaggeredPosition(index);
  const layout = normalizeLayoutValues(type, {
    x: position?.x ?? fallback.x,
    y: position?.y ?? fallback.y,
    width: size.width,
    height: size.height,
  });
  switch (type) {
    case "hero":
      return {
        id: createId(),
        type: "hero",
        ...layout,
        title: "",
        subtitle: "",
        primaryCtaText: "",
        primaryCtaUrl: "",
        secondaryCtaText: "",
        secondaryCtaUrl: "",
      };
    case "header":
      return {
        id: createId(),
        type: "header",
        ...layout,
        title: "",
        body: "",
      };
    case "footer":
      return {
        id: createId(),
        type: "footer",
        ...layout,
        title: "",
        body: "",
      };
    case "text":
      return {
        id: createId(),
        type: "text",
        ...layout,
        title: "",
        body: "",
      };
    case "image":
      return {
        id: createId(),
        type: "image",
        ...layout,
        title: "",
        imageUrl: "",
        caption: "",
        layout: "left",
      };
    case "cta":
      return {
        id: createId(),
        type: "cta",
        ...layout,
        title: "",
        body: "",
        buttonText: "",
        buttonUrl: "",
      };
    case "features":
      return {
        id: createId(),
        type: "features",
        ...layout,
        title: "",
        items: [createFeatureItem()],
      };
  }
};

const cloneBlock = (block: Block): Block => {
  const layout = normalizeLayoutValues(block.type, {
    x: block.x + STAGGER_STEP,
    y: block.y + STAGGER_STEP,
    width: block.width,
    height: block.height,
  });
  if (block.type === "features") {
    return {
      ...block,
      id: createId(),
      ...layout,
      items: block.items.map((item) => ({ ...item, id: createId() })),
    };
  }
  return { ...block, id: createId(), ...layout };
};

const normalizeBlock = (raw: any, index: number): Block | null => {
  if (!raw || typeof raw !== "object") return null;
  const type = raw.type as BlockType;
  const id = typeof raw.id === "string" && raw.id ? raw.id : createId();
  if (!type) return null;
  const fallback = getStaggeredPosition(index);
  const size = DEFAULT_BLOCK_SIZES[type] ?? { width: 520, height: 200 };
  const layout = normalizeLayoutValues(type, {
    x: Number.isFinite(Number(raw.x)) ? Number(raw.x) : fallback.x,
    y: Number.isFinite(Number(raw.y)) ? Number(raw.y) : fallback.y,
    width: Number.isFinite(Number(raw.width)) ? Number(raw.width) : size.width,
    height: Number.isFinite(Number(raw.height)) ? Number(raw.height) : size.height,
  });

  if (type === "hero") {
    return {
      id,
      type,
      ...layout,
      title: String(raw.title ?? ""),
      subtitle: String(raw.subtitle ?? ""),
      primaryCtaText: String(raw.primaryCtaText ?? ""),
      primaryCtaUrl: String(raw.primaryCtaUrl ?? ""),
      secondaryCtaText: String(raw.secondaryCtaText ?? ""),
      secondaryCtaUrl: String(raw.secondaryCtaUrl ?? ""),
    };
  }

  if (type === "header") {
    return {
      id,
      type,
      ...layout,
      title: String(raw.title ?? ""),
      body: String(raw.body ?? ""),
    };
  }

  if (type === "footer") {
    return {
      id,
      type,
      ...layout,
      title: String(raw.title ?? ""),
      body: String(raw.body ?? ""),
    };
  }

  if (type === "text") {
    return {
      id,
      type,
      ...layout,
      title: String(raw.title ?? ""),
      body: String(raw.body ?? ""),
    };
  }

  if (type === "image") {
    const imageLayout = raw.layout === "right" || raw.layout === "full" ? raw.layout : "left";
    return {
      id,
      type,
      ...normalizeLayoutValues(type, {
        x: Number.isFinite(Number(raw.x)) ? Number(raw.x) : fallback.x,
        y: Number.isFinite(Number(raw.y)) ? Number(raw.y) : fallback.y,
        width: Number.isFinite(Number(raw.width)) ? Number(raw.width) : size.width,
        height: Number.isFinite(Number(raw.height)) ? Number(raw.height) : size.height,
      }),
      title: String(raw.title ?? ""),
      imageUrl: String(raw.imageUrl ?? ""),
      caption: String(raw.caption ?? ""),
      layout: imageLayout,
    };
  }

  if (type === "cta") {
    return {
      id,
      type,
      ...layout,
      title: String(raw.title ?? ""),
      body: String(raw.body ?? ""),
      buttonText: String(raw.buttonText ?? ""),
      buttonUrl: String(raw.buttonUrl ?? ""),
    };
  }

  if (type === "features") {
    const itemsRaw: any[] = Array.isArray(raw.items) ? raw.items : [];
    const items = itemsRaw
      .map((item) => ({
        id: typeof item?.id === "string" && item.id ? item.id : createId(),
        title: String(item?.title ?? ""),
        text: String(item?.text ?? ""),
      }))
      .filter(Boolean);
    return {
      id,
      type,
      ...layout,
      title: String(raw.title ?? ""),
      items: items.length > 0 ? items : [createFeatureItem()],
    };
  }

  return null;
};

const normalizeLayout = (raw: any): { meta: LayoutMeta; blocks: Block[] } | null => {
  if (!raw) return null;
  const blocksRaw: any[] | null = Array.isArray(raw) ? raw : Array.isArray(raw.blocks) ? raw.blocks : null;
  if (!blocksRaw) return null;

  const metaRaw = raw.meta ?? {};
  const meta: LayoutMeta = {
    projectName: String(metaRaw.projectName ?? ""),
    clientName: String(metaRaw.clientName ?? ""),
    contact: String(metaRaw.contact ?? ""),
    notes: String(metaRaw.notes ?? ""),
  };

  const blocks = blocksRaw.map((block, index) => normalizeBlock(block, index)).filter(Boolean) as Block[];
  return { meta, blocks };
};

const loadDraft = (): { meta: LayoutMeta; blocks: Block[] } => {
  if (typeof window === "undefined") return { meta: defaultMeta, blocks: [] };
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return { meta: defaultMeta, blocks: [] };
  try {
    const parsed = JSON.parse(raw);
    const normalized = normalizeLayout(parsed);
    return normalized ?? { meta: defaultMeta, blocks: [] };
  } catch {
    return { meta: defaultMeta, blocks: [] };
  }
};

const buildFileName = (name: string) => {
  const base = name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-+|-+$/g, "");
  const safe = base || "navrh";
  const date = new Date().toISOString().slice(0, 10);
  return `${safe}-${date}.json`;
};

const NavrhPage = () => {
  const { t } = useI18n();
  const proposal = t.proposal;
  const initial = useMemo(() => loadDraft(), []);
  const [meta, setMeta] = useState<LayoutMeta>(initial.meta);
  const [blocks, setBlocks] = useState<Block[]>(initial.blocks);
  const [importError, setImportError] = useState<string | null>(null);
  const [copyNotice, setCopyNotice] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(initial.blocks[0]?.id ?? null);

  const layoutData = useMemo(
    () => ({
      version: LAYOUT_VERSION,
      updatedAt: new Date().toISOString(),
      canvas: {
        width: CANVAS_WIDTH,
        height: CANVAS_HEIGHT,
      },
      meta,
      blocks,
    }),
    [meta, blocks],
  );

  const exportJson = useMemo(() => JSON.stringify(layoutData, null, 2), [layoutData]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, exportJson);
  }, [exportJson]);

  useEffect(() => {
    if (!copyNotice) return;
    const timer = window.setTimeout(() => setCopyNotice(null), 2000);
    return () => window.clearTimeout(timer);
  }, [copyNotice]);

  useEffect(() => {
    if (!selectedBlockId) return;
    if (blocks.some((block) => block.id === selectedBlockId)) return;
    setSelectedBlockId(blocks[0]?.id ?? null);
  }, [blocks, selectedBlockId]);

  const updateMeta = (patch: Partial<LayoutMeta>) =>
    setMeta((prev) => ({
      ...prev,
      ...patch,
    }));

  const addBlock = (type: BlockType, position?: { x: number; y: number }) => {
    const nextBlock = createBlock(type, position, blocks.length);
    setBlocks((prev) => [...prev, nextBlock]);
    setSelectedBlockId(nextBlock.id);
  };

  const updateBlock = (id: string, updater: (block: Block) => Block) => {
    setBlocks((prev) => prev.map((block) => (block.id === id ? updater(block) : block)));
  };

  const removeBlock = (id: string) => {
    setBlocks((prev) => prev.filter((block) => block.id !== id));
    if (selectedBlockId === id) {
      setSelectedBlockId(null);
    }
  };

  const duplicateBlock = (id: string) => {
    const source = blocks.find((block) => block.id === id);
    if (!source) return;
    const cloned = cloneBlock(source);
    setBlocks((prev) => {
      const idx = prev.findIndex((block) => block.id === id);
      if (idx === -1) return prev;
      const next = [...prev];
      next.splice(idx + 1, 0, cloned);
      return next;
    });
    setSelectedBlockId(cloned.id);
  };

  const handleReset = () => {
    if (!window.confirm(proposal.notices.resetConfirm)) return;
    setMeta(defaultMeta);
    setBlocks([]);
    setImportError(null);
    setSelectedBlockId(null);
  };

  const triggerImport = () => {
    fileInputRef.current?.click();
  };

  const handleImportFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      const normalized = normalizeLayout(parsed);
      if (!normalized) throw new Error("invalid");
      setMeta(normalized.meta);
      setBlocks(normalized.blocks);
      setImportError(null);
      setSelectedBlockId(normalized.blocks[0]?.id ?? null);
    } catch {
      setImportError(proposal.notices.importError);
    } finally {
      event.target.value = "";
    }
  };

  const handleDownload = () => {
    const blob = new Blob([exportJson], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = buildFileName(meta.projectName || "navrh");
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleCopy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(exportJson);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = exportJson;
        textarea.setAttribute("readonly", "true");
        textarea.style.position = "absolute";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopyNotice(proposal.notices.copied);
    } catch {
      setCopyNotice(null);
    }
  };

  const handleToolboxDragStart = (event: DragEvent<HTMLButtonElement>, type: BlockType) => {
    event.dataTransfer.setData("application/x-navrh-block", type);
    event.dataTransfer.setData("text/plain", type);
    event.dataTransfer.effectAllowed = "copy";
  };

  const selectedBlock = useMemo(
    () => blocks.find((block) => block.id === selectedBlockId) ?? null,
    [blocks, selectedBlockId],
  );

  return (
    <div className="space-y-8">
      <Seo title={t.meta.proposalTitle} description={t.meta.proposalDescription} path="/navrh" />

      <NavrhHeroSection title={proposal.title} subtitle={proposal.subtitle} />

      <section className="space-y-6">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <NavrhMetaSection
            title={proposal.metaTitle}
            description={proposal.metaDescription}
            labels={proposal.meta}
            meta={meta}
            onChange={updateMeta}
          />
          <NavrhToolboxSection
            title={proposal.toolboxTitle}
            hint={proposal.toolboxHint}
            actions={proposal.actions}
            notices={proposal.notices}
            onAddBlock={addBlock}
            onDragStartBlock={handleToolboxDragStart}
          />
        </div>

        <div className="space-y-6">
          <NavrhCanvasSection
            title={proposal.canvasTitle}
            blocks={blocks}
            blockLabels={proposal.blockLabels}
            canvasWidth={CANVAS_WIDTH}
            canvasHeight={CANVAS_HEIGHT}
            selectedBlockId={selectedBlockId}
            onSelectBlock={setSelectedBlockId}
            onUpdateBlock={updateBlock}
            onAddBlockAt={(type, position) => addBlock(type, position)}
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <NavrhPropertiesSection
            title="Vlastnosti"
            emptyTitle={proposal.emptyStateTitle}
            emptyText={proposal.emptyStateText}
            selectedBlock={selectedBlock}
            blockLabels={proposal.blockLabels}
            fieldLabels={proposal.fieldLabels}
            layoutOptions={proposal.layoutOptions}
            buttons={proposal.buttons}
            canvasWidth={CANVAS_WIDTH}
            canvasHeight={CANVAS_HEIGHT}
            onUpdateBlock={updateBlock}
            onRemoveBlock={removeBlock}
            onDuplicateBlock={duplicateBlock}
            createFeatureItem={createFeatureItem}
          />
          <NavrhExportSection
            title={proposal.exportTitle}
            hint={proposal.exportHint}
            exportJson={exportJson}
            actions={proposal.actions}
            onTriggerImport={triggerImport}
            onDownload={handleDownload}
            onCopy={handleCopy}
            onReset={handleReset}
            importError={importError}
            copyNotice={copyNotice}
            fileInputRef={fileInputRef}
            onImportFile={handleImportFile}
          />
        </div>
      </section>
    </div>
  );
};

export default NavrhPage;
