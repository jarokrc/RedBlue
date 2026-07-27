/**
 * Body symbolu RedBlue (dvojica prekrizenych sinusoid - Gerono lemniskata).
 *
 * Suradnice su prebrate 1:1 z assets/logo/svg/redblue-logo.svg, kde je skupina
 * #symbol posunuta o translate(28 28). Su teda v rovnakom priestore ako cely
 * logotyp (viewBox 0 0 1200 340), rovnako ako assets/logo/png/redblue-logo-1200.png.
 * Vdaka tomu sa vektorovo kreslene body a rastrovy zvysok loga presne prekryvaju.
 */

export type SymbolDot = {
  /** x v priestore loga (0-1200) */
  x: number;
  /** y v priestore loga (0-340) */
  y: number;
  color: "blue" | "red";
  /** poradie v ramci vlastnej retaze - obe retaze rastu sucasne */
  order: number;
};

export const LOGO_VIEWBOX = { width: 1200, height: 340 };

/**
 * Skutocne obsadena plocha loga v ramci viewBoxu (zmerane z alfa kanalu
 * redblue-logo-1200.png). Zdrojovy subor ma okolo kresby velky prazdny okraj,
 * takze centrovat a skalovat treba podla tohto obdlznika, nie podla viewBoxu.
 */
export const LOGO_CONTENT_BOX = { x: 48, y: 85, width: 912, height: 175 };

/** polomer bodu v priestore loga */
export const SYMBOL_DOT_RADIUS = 8;

/** posun sedeho tienoveho bodu pod farebnym */
export const SYMBOL_DOT_SHADOW_OFFSET = 5;

/** lava hranica zvysku loga (ciara zacina na 331.7, text na 366) */
export const WORDMARK_CLIP_X = 310;

export const SYMBOL_COLORS = {
  blue: "#1261D8",
  red: "#F01D32",
  shadow: "#081225",
} as const;

const BLUE_CHAIN: [number, number][] = [
  [252.0, 140.0],
  [250.7, 161.7],
  [246.3, 183.0],
  [236.9, 202.4],
  [218.3, 212.0],
  [198.4, 204.1],
  [181.9, 190.0],
  [167.2, 173.9],
  [153.4, 157.1],
  [140.0, 140.0],
  [126.6, 122.9],
  [112.8, 106.1],
  [98.1, 90.0],
  [81.6, 75.9],
  [61.7, 68.0],
  [43.1, 77.6],
  [33.7, 97.0],
  [29.3, 118.3],
];

const RED_CHAIN: [number, number][] = [
  [28.0, 140.0],
  [29.3, 161.7],
  [33.7, 183.0],
  [43.1, 202.4],
  [61.7, 212.0],
  [81.6, 204.1],
  [98.1, 190.0],
  [112.8, 173.9],
  [126.6, 157.1],
  [153.4, 122.9],
  [167.2, 106.1],
  [181.9, 90.0],
  [198.4, 75.9],
  [218.3, 68.0],
  [236.9, 77.6],
  [246.3, 97.0],
  [250.7, 118.3],
];

const SYMBOL_TRANSLATE = { x: 28, y: 28 };

const toDots = (chain: [number, number][], color: SymbolDot["color"]): SymbolDot[] =>
  chain.map(([x, y], order) => ({
    x: x + SYMBOL_TRANSLATE.x,
    y: y + SYMBOL_TRANSLATE.y,
    color,
    order,
  }));

/** najdlhsia retaz urcuje, kolko krokov trva vykreslenie symbolu */
export const SYMBOL_CHAIN_LENGTH = Math.max(BLUE_CHAIN.length, RED_CHAIN.length);

const symbolDots: SymbolDot[] = [...toDots(BLUE_CHAIN, "blue"), ...toDots(RED_CHAIN, "red")];

export default symbolDots;
