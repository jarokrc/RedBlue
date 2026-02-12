export type BlockType = "hero" | "header" | "footer" | "text" | "image" | "cta" | "features";

export type LayoutMeta = {
  projectName: string;
  clientName: string;
  contact: string;
  notes: string;
};

export type BlockBase = {
  id: string;
  type: BlockType;
  x: number;
  y: number;
  width: number;
  height: number;
};

export type HeroBlock = BlockBase & {
  type: "hero";
  title: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaUrl: string;
  secondaryCtaText: string;
  secondaryCtaUrl: string;
};

export type TextBlock = BlockBase & {
  type: "text";
  title: string;
  body: string;
};

export type HeaderBlock = BlockBase & {
  type: "header";
  title: string;
  body: string;
};

export type FooterBlock = BlockBase & {
  type: "footer";
  title: string;
  body: string;
};

export type ImageBlock = BlockBase & {
  type: "image";
  title: string;
  imageUrl: string;
  caption: string;
  layout: "left" | "right" | "full";
};

export type CtaBlock = BlockBase & {
  type: "cta";
  title: string;
  body: string;
  buttonText: string;
  buttonUrl: string;
};

export type FeaturesItem = {
  id: string;
  title: string;
  text: string;
};

export type FeaturesBlock = BlockBase & {
  type: "features";
  title: string;
  items: FeaturesItem[];
};

export type Block = HeroBlock | HeaderBlock | FooterBlock | TextBlock | ImageBlock | CtaBlock | FeaturesBlock;

export type LayoutData = {
  version: number;
  updatedAt: string;
  canvas?: {
    width: number;
    height: number;
  };
  meta: LayoutMeta;
  blocks: Block[];
};
