import { useEffect, useRef, useState } from "react";
import symbolDots, {
  LOGO_CONTENT_BOX,
  LOGO_VIEWBOX,
  SYMBOL_CHAIN_LENGTH,
  SYMBOL_COLORS,
  SYMBOL_DOT_RADIUS,
  SYMBOL_DOT_SHADOW_OFFSET,
  WORDMARK_CLIP_X,
} from "@/pages/intro/sections/redblueSymbolDots";

/**
 * Intro - ciste biele pozadie.
 *
 * 1. na strede sa bod po bode sklada velmi velky symbol,
 * 2. po dokresleni sa symbol zmensi a presunie na svoje miesto v logu,
 * 3. dopise sa zvysok loga (napis, linka, claim).
 */
const DOTS_START = 0.25;
const DOT_STEP = 0.05;
const DOT_DURATION = 0.36;
const DOTS_END = DOTS_START + (SYMBOL_CHAIN_LENGTH - 1) * DOT_STEP + DOT_DURATION;
const SHRINK_START = DOTS_END + 0.15;
const SHRINK_DURATION = 0.7;
const WORDMARK_START = SHRINK_START + SHRINK_DURATION - 0.05;
const WORDMARK_DURATION = 0.85;

/** stred symbolu v suradniciach loga (bounding box bodov vratane polomeru) */
const SYMBOL_CENTER = { x: 168, y: 168 };
const SYMBOL_SIZE = { width: 240, height: 160 };

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));
const lerp = (from: number, to: number, t: number) => from + (to - from) * t;
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const easeOutBack = (t: number) => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

const getLayout = (width: number, height: number) => {
  // cielovy stav - cele logo vycentrovane podla skutocneho obsahu
  const widthRatio = width < 640 ? 0.84 : 0.56;
  const contentWidth = Math.min(width * widthRatio, 820);
  const finalScale = contentWidth / LOGO_CONTENT_BOX.width;
  const contentHeight = LOGO_CONTENT_BOX.height * finalScale;
  const contentX = width / 2 - contentWidth / 2;
  const contentY = height / 2 - contentHeight / 2;
  const logoX = contentX - LOGO_CONTENT_BOX.x * finalScale;
  const logoY = contentY - LOGO_CONTENT_BOX.y * finalScale;

  // uvodny stav - symbol cez podstatnu cast obrazovky
  const bigHeight = Math.min(height * 0.5, (width * 0.62 * SYMBOL_SIZE.height) / SYMBOL_SIZE.width);
  const bigScale = bigHeight / SYMBOL_SIZE.height;

  return {
    finalScale,
    contentY,
    contentHeight,
    contentEndX: LOGO_CONTENT_BOX.x + LOGO_CONTENT_BOX.width,
    logoX,
    logoY,
    logoWidth: LOGO_VIEWBOX.width * finalScale,
    logoHeight: LOGO_VIEWBOX.height * finalScale,
    finalSymbolX: logoX + SYMBOL_CENTER.x * finalScale,
    finalSymbolY: logoY + SYMBOL_CENTER.y * finalScale,
    bigScale: Math.max(bigScale, finalScale),
    bigSymbolX: width / 2,
    bigSymbolY: height / 2,
  };
};

const renderLightSplash = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  time: number,
  logoImage: HTMLImageElement | null
) => {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);

  const layout = getLayout(width, height);
  const shrink = easeInOutCubic(clamp((time - SHRINK_START) / SHRINK_DURATION, 0, 1));
  const scale = lerp(layout.bigScale, layout.finalScale, shrink);
  const originX = lerp(layout.bigSymbolX, layout.finalSymbolX, shrink);
  const originY = lerp(layout.bigSymbolY, layout.finalSymbolY, shrink);

  symbolDots.forEach((dot) => {
    const progress = clamp((time - (DOTS_START + dot.order * DOT_STEP)) / DOT_DURATION, 0, 1);
    if (progress <= 0) return;

    const radius = SYMBOL_DOT_RADIUS * scale * easeOutBack(progress);
    if (radius <= 0) return;
    const cx = originX + (dot.x - SYMBOL_CENTER.x) * scale;
    const cy = originY + (dot.y - SYMBOL_CENTER.y) * scale;

    ctx.save();
    ctx.globalAlpha = 0.2 * progress;
    ctx.fillStyle = SYMBOL_COLORS.shadow;
    ctx.beginPath();
    ctx.arc(cx, cy + SYMBOL_DOT_SHADOW_OFFSET * scale, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    const color = dot.color === "blue" ? SYMBOL_COLORS.blue : SYMBOL_COLORS.red;
    ctx.save();
    ctx.fillStyle = color;
    if (progress < 1) {
      ctx.shadowBlur = 30 * (1 - progress);
      ctx.shadowColor = color;
    }
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // rozpinajuci sa prstenec v barve bodu - na bielom pozadi citatelnejsi ako biely zablesk
    if (progress < 1) {
      ctx.save();
      ctx.globalAlpha = (1 - progress) * 0.5;
      ctx.strokeStyle = color;
      ctx.lineWidth = Math.max(1, 2 * scale);
      ctx.beginPath();
      ctx.arc(cx, cy, radius + 16 * scale * (1 - progress), 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }
  });

  const wordmarkProgress = clamp((time - WORDMARK_START) / WORDMARK_DURATION, 0, 1);
  if (wordmarkProgress > 0 && logoImage && logoImage.complete && logoImage.naturalWidth > 0) {
    const revealStartX = layout.logoX + WORDMARK_CLIP_X * layout.finalScale;
    const revealFullWidth = (layout.contentEndX - WORDMARK_CLIP_X) * layout.finalScale;
    const revealWidth = revealFullWidth * easeOutCubic(wordmarkProgress);

    ctx.save();
    ctx.beginPath();
    ctx.rect(revealStartX, layout.contentY - layout.contentHeight, revealWidth, layout.contentHeight * 3);
    ctx.clip();
    ctx.drawImage(logoImage, layout.logoX, layout.logoY, layout.logoWidth, layout.logoHeight);
    ctx.restore();

    if (wordmarkProgress < 1) {
      const edgeX = revealStartX + revealWidth;
      const glowWidth = 44 * layout.finalScale;
      const gradient = ctx.createLinearGradient(edgeX - glowWidth, 0, edgeX, 0);
      gradient.addColorStop(0, "rgba(18, 97, 216, 0)");
      gradient.addColorStop(1, "rgba(18, 97, 216, 0.22)");
      ctx.save();
      ctx.fillStyle = gradient;
      ctx.fillRect(edgeX - glowWidth, layout.contentY, glowWidth, layout.contentHeight);
      ctx.fillStyle = "rgba(18, 97, 216, 0.7)";
      ctx.fillRect(edgeX - 1.5, layout.contentY, 3, layout.contentHeight);
      ctx.restore();
    }
  }
};

type IntroSplashSectionProps = {
  bootDone: boolean;
  introLogoPng: string;
  introSoundMp3: string;
  onComplete: () => void;
};

const IntroSplashSection = ({ bootDone, introLogoPng, introSoundMp3, onComplete }: IntroSplashSectionProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const finishedRef = useRef(false);
  const [isFading, setIsFading] = useState(false);
  const totalDurationMs = 3400;
  const fadeStartMs = totalDurationMs - 400;

  useEffect(() => {
    const finish = () => {
      if (finishedRef.current) return;
      finishedRef.current = true;
      onComplete();
    };

    if (typeof window === "undefined") {
      finish();
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finish();
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) {
      finish();
      return;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      finish();
      return;
    }

    let running = true;
    let fading = false;
    const logoImage = new Image();
    logoImage.src = introLogoPng;

    // Zvuk: prehliadace blokuju autoplay so zvukom, kym stranka nema "media engagement".
    // Skusime prehrat hned, a ak to prehliadac odmietne, spustime pri prvom dotyku/kliku.
    const sound = new Audio(introSoundMp3);
    sound.volume = 0.55;
    sound.preload = "auto";
    let unlockSound: (() => void) | null = null;
    const playSound = () => {
      const attempt = sound.play();
      if (!attempt) return;
      attempt.catch(() => {
        if (unlockSound) return;
        unlockSound = () => {
          if (!running) return;
          sound.play().catch(() => undefined);
        };
        window.addEventListener("pointerdown", unlockSound, { once: true });
        window.addEventListener("keydown", unlockSound, { once: true });
      });
    };
    playSound();

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const { clientWidth, clientHeight } = canvas;
      canvas.width = clientWidth * dpr;
      canvas.height = clientHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const start = performance.now();
    const tick = (now: number) => {
      if (!running) return;
      const elapsed = (now - start) / 1000;
      renderLightSplash(ctx, canvas.clientWidth, canvas.clientHeight, elapsed, logoImage);
      if (!fading && now - start >= fadeStartMs) {
        fading = true;
        setIsFading(true);
      }
      if (now - start < totalDurationMs + 300) {
        rafRef.current = window.requestAnimationFrame(tick);
      } else {
        finish();
      }
    };

    rafRef.current = window.requestAnimationFrame(tick);
    window.addEventListener("resize", resize);

    return () => {
      running = false;
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      if (unlockSound) {
        window.removeEventListener("pointerdown", unlockSound);
        window.removeEventListener("keydown", unlockSound);
      }
      sound.pause();
      sound.currentTime = 0;
    };
  }, [fadeStartMs, introLogoPng, introSoundMp3, onComplete, totalDurationMs]);

  return (
    <div
      className={`absolute inset-0 z-20 flex items-center justify-center bg-white origin-center transition-[opacity,transform] duration-500 ease-out ${
        bootDone ? "pointer-events-none opacity-0 scale-105" : isFading ? "opacity-100 scale-[1.03]" : "opacity-100 scale-100"
      }`}
      aria-hidden
    >
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
};

export default IntroSplashSection;
