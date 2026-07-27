import { useEffect, useRef } from "react";
import symbolDots, {
  LOGO_CONTENT_BOX,
  LOGO_VIEWBOX,
  SYMBOL_CHAIN_LENGTH,
  SYMBOL_COLORS,
  SYMBOL_DOT_RADIUS,
  SYMBOL_DOT_SHADOW_OFFSET,
  WORDMARK_CLIP_X,
} from "@/lib/redblueSymbolDots";
import logoPng from "@/assets/logo/png/redblue-logo-1200.png";
import logoSvg from "@/assets/logo/svg/redblue-logo-tight.svg";

/**
 * Logo, ktore sa prekresluje rovnakym efektom ako intro.
 *
 * Prvy cyklus po nacitani stranky poskladá cele logo - symbol bod po bode
 * a potom sa zlava doprava dopise napis. Napis uz dalej zostava, v slucke
 * sa opakuje len skladanie symbolu vlavo, vzdy s pauzou medzi cyklami.
 *
 * Kresli sa do canvasu vo vyreze zhodnom s redblue-logo-tight.svg, takze
 * vysledok sadne presne na miesto, kde predtym bol staticky obrazok.
 */
const CROP = { x: 40, y: 77, width: 928, height: 190 };

const DOTS_START = 0.05;
const DOT_STEP = 0.045;
const DOT_DURATION = 0.28;
const DOTS_END = DOTS_START + (SYMBOL_CHAIN_LENGTH - 1) * DOT_STEP + DOT_DURATION;
const WORDMARK_START = DOTS_END - 0.1;
const WORDMARK_DURATION = 0.6;
const BUILD_END = WORDMARK_START + WORDMARK_DURATION;
const FADE_DURATION = 0.35;

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const easeOutBack = (t: number) => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

const renderFrame = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  time: number,
  cycleLength: number,
  logoImage: HTMLImageElement,
  firstCycle: boolean
) => {
  ctx.clearRect(0, 0, width, height);

  const scale = height / CROP.height;
  const logoX = -CROP.x * scale;
  const logoY = -CROP.y * scale;

  // posledny usek pauzy patri odchodu symbolu, aby dalsi cyklus nezacal skokom
  const fadeStart = cycleLength - FADE_DURATION;
  const alpha = time > fadeStart ? 1 - clamp((time - fadeStart) / FADE_DURATION, 0, 1) : 1;

  ctx.save();
  ctx.globalAlpha = alpha;

  symbolDots.forEach((dot) => {
    const progress = clamp((time - (DOTS_START + dot.order * DOT_STEP)) / DOT_DURATION, 0, 1);
    if (progress <= 0 || alpha <= 0) return;

    const radius = SYMBOL_DOT_RADIUS * scale * easeOutBack(progress);
    if (radius <= 0) return;
    const cx = logoX + dot.x * scale;
    const cy = logoY + dot.y * scale;

    ctx.save();
    ctx.globalAlpha = alpha * 0.2 * progress;
    ctx.fillStyle = SYMBOL_COLORS.shadow;
    ctx.beginPath();
    ctx.arc(cx, cy + SYMBOL_DOT_SHADOW_OFFSET * scale, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    const color = dot.color === "blue" ? SYMBOL_COLORS.blue : SYMBOL_COLORS.red;
    ctx.save();
    ctx.fillStyle = color;
    if (progress < 1) {
      ctx.shadowBlur = 12 * (1 - progress);
      ctx.shadowColor = color;
    }
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  });

  // napis sa "pise" len v prvom cykle, potom uz zostava vykresleny natrvalo
  const wordmarkProgress = firstCycle ? clamp((time - WORDMARK_START) / WORDMARK_DURATION, 0, 1) : 1;
  if (wordmarkProgress > 0 && logoImage.complete && logoImage.naturalWidth > 0) {
    ctx.globalAlpha = 1;
    const revealStartX = logoX + WORDMARK_CLIP_X * scale;
    const revealFullWidth = (LOGO_CONTENT_BOX.x + LOGO_CONTENT_BOX.width - WORDMARK_CLIP_X) * scale;
    const revealWidth = revealFullWidth * easeOutCubic(wordmarkProgress);

    ctx.save();
    ctx.beginPath();
    ctx.rect(revealStartX, 0, revealWidth, height);
    ctx.clip();
    ctx.drawImage(logoImage, logoX, logoY, LOGO_VIEWBOX.width * scale, LOGO_VIEWBOX.height * scale);
    ctx.restore();

    if (wordmarkProgress < 1) {
      const edgeX = revealStartX + revealWidth;
      ctx.save();
      ctx.globalAlpha = alpha * 0.7;
      ctx.fillStyle = "rgba(18, 97, 216, 0.8)";
      ctx.fillRect(edgeX - 1, height * 0.1, 2, height * 0.8);
      ctx.restore();
    }
  }

  ctx.restore();
};

type AnimatedLogoProps = {
  className?: string;
  alt: string;
  /** pauza medzi cyklami v sekundach */
  pauseSeconds?: number;
};

const AnimatedLogo = ({ className, alt, pauseSeconds = 4 }: AnimatedLogoProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cycleLength = BUILD_END + pauseSeconds;
    const logoImage = new Image();
    logoImage.src = logoPng;

    let rafId: number | null = null;
    let visible = true;
    let start = performance.now();
    // napis sa pise len raz za navstevu, aj ked sa animacia medzitym pozastavi
    let firstCycleDone = false;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const { clientWidth, clientHeight } = canvas;
      if (!clientWidth || !clientHeight) return;
      canvas.width = Math.round(clientWidth * dpr);
      canvas.height = Math.round(clientHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const tick = (now: number) => {
      const elapsed = (now - start) / 1000;
      const time = elapsed % cycleLength;
      const firstCycle = !firstCycleDone && elapsed < cycleLength;
      if (!firstCycle) firstCycleDone = true;
      renderFrame(ctx, canvas.clientWidth, canvas.clientHeight, time, cycleLength, logoImage, firstCycle);
      rafId = window.requestAnimationFrame(tick);
    };

    const play = () => {
      if (rafId !== null) return;
      start = performance.now();
      rafId = window.requestAnimationFrame(tick);
    };

    const stop = () => {
      if (rafId === null) return;
      window.cancelAnimationFrame(rafId);
      rafId = null;
    };

    resize();
    logoImage.onload = () => {
      if (rafId === null && visible) play();
    };
    play();

    // mimo obrazovky ani na neaktivnej zalozke nema zmysel prekreslovat
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) play();
        else stop();
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    const onVisibilityChange = () => {
      if (document.hidden) stop();
      else if (visible) play();
    };

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      stop();
      observer.disconnect();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      logoImage.onload = null;
    };
  }, [pauseSeconds]);

  // pri prefers-reduced-motion sa nic nekresli, preto pod canvasom lezi staticke logo
  return (
    <span className={`relative inline-block ${className ?? ""}`} role="img" aria-label={alt}>
      <img src={logoSvg} alt="" aria-hidden className="h-full w-full motion-safe:invisible" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden />
    </span>
  );
};

export default AnimatedLogo;
