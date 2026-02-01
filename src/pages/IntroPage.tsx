import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useI18n } from "@/app/I18nProvider";
import Seo from "@/components/Seo";
import type { Locale } from "@/lib/locale";
import introLogoWebp from "@/assets-webp/logo/logoIntro.webp";
import introLogoPng from "@/assets-webp/logo/logoIntro.png";
import redblueLogoWebp from "@/assets-webp/logo/logo.webp";
import redblueLogoPng from "@/assets-webp/logo/logo.png";
import academyLogoWebp from "@/assets-webp/logo/logo_academy.webp";
import academyLogoPng from "@/assets-webp/logo/logo_academy.png";

type Point = { x: number; y: number };
type CircuitPath = { points: Point[]; delay: number; duration: number; length: number; depth: number; isBranch: boolean };
type CircuitNode = { x: number; y: number; delay: number; size: number };
type CircuitLayout = {
  width: number;
  height: number;
  center: Point;
  chipSize: number;
  grid: number;
  paths: CircuitPath[];
  nodes: CircuitNode[];
};

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));
const snapToGrid = (value: number, grid: number) => Math.round(value / grid) * grid;

const mulberry32 = (seed: number) => () => {
  let t = (seed += 0x6d2b79f5);
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

const pathLength = (points: Point[]) => {
  let total = 0;
  for (let i = 0; i < points.length - 1; i += 1) {
    const dx = points[i + 1].x - points[i].x;
    const dy = points[i + 1].y - points[i].y;
    total += Math.hypot(dx, dy);
  }
  return total;
};

const pointAtLength = (points: Point[], target: number) => {
  let remaining = target;
  for (let i = 0; i < points.length - 1; i += 1) {
    const start = points[i];
    const end = points[i + 1];
    const seg = Math.hypot(end.x - start.x, end.y - start.y);
    if (remaining <= seg) {
      const ratio = seg === 0 ? 0 : remaining / seg;
      return {
        x: start.x + (end.x - start.x) * ratio,
        y: start.y + (end.y - start.y) * ratio,
      };
    }
    remaining -= seg;
  }
  return points[points.length - 1];
};

const buildManhattanPath = (start: Point, end: Point, rand: () => number, grid: number) => {
  const points: Point[] = [start];
  const midCount = 2 + Math.floor(rand() * 2);
  let current = start;
  const axisFirst = rand() > 0.5 ? "x" : "y";
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const split = (value: number, steps: number) => {
    const parts: number[] = [];
    let remaining = value;
    for (let i = 0; i < steps; i += 1) {
      const weight = i === steps - 1 ? 1 : 0.2 + rand() * 0.6;
      const step = remaining * weight;
      parts.push(step);
      remaining -= step;
    }
    return parts;
  };

  const xSteps = split(dx, midCount);
  const ySteps = split(dy, midCount);
  for (let i = 0; i < midCount; i += 1) {
    if (axisFirst === "x") {
      current = { x: snapToGrid(current.x + xSteps[i], grid), y: current.y };
      points.push(current);
      current = { x: current.x, y: snapToGrid(current.y + ySteps[i], grid) };
      points.push(current);
    } else {
      current = { x: current.x, y: snapToGrid(current.y + ySteps[i], grid) };
      points.push(current);
      current = { x: snapToGrid(current.x + xSteps[i], grid), y: current.y };
      points.push(current);
    }
  }
  points.push(end);
  return points.filter((point, index) => index === 0 || point.x !== points[index - 1].x || point.y !== points[index - 1].y);
};

const pickBranchPoint = (points: Point[], rand: () => number) => {
  if (points.length < 3) return points[points.length - 1];
  const index = 1 + Math.floor(rand() * (points.length - 2));
  return points[index];
};

const drawRoundedRect = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) => {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
};

const createCircuitLayout = (width: number, height: number, seed: number): CircuitLayout => {
  const rand = mulberry32(seed);
  const minSide = Math.min(width, height);
  const grid = Math.max(24, Math.floor(minSide / 20));
  const margin = Math.max(20, Math.floor(minSide / 12));
  const center = { x: width / 2, y: height / 2 };
  const chipSize = Math.min(Math.max(minSide * 0.26, 150), 220);
  const maxRadius = Math.hypot(width, height) * 0.55;

  const clampPoint = (p: Point) => ({
    x: clamp(p.x, margin, width - margin),
    y: clamp(p.y, margin, height - margin),
  });

  const toPoint = (angle: number, radius: number) => ({
    x: snapToGrid(center.x + Math.cos(angle) * radius, grid),
    y: snapToGrid(center.y + Math.sin(angle) * radius, grid),
  });

  const paths: CircuitPath[] = [];
  const nodes: CircuitNode[] = [];

  type SeedNode = { point: Point; depth: number };
  const seedNodes: SeedNode[] = [{ point: center, depth: 0 }];
  const maxDepth = 4;
  const maxPaths = 70;
  const baseDelay = 0.25;
  const baseAngleOffset = rand() * Math.PI * 2;

  for (let depth = 0; depth < maxDepth; depth += 1) {
    const layerNodes = seedNodes.filter((node) => node.depth === depth);
    layerNodes.forEach((node, nodeIndex) => {
      if (paths.length >= maxPaths) return;
      const branchCount = depth === 0 ? 8 + Math.floor(rand() * 4) : 2 + Math.floor(rand() * 2);
      for (let b = 0; b < branchCount; b += 1) {
        if (paths.length >= maxPaths) break;
        const angle =
          baseAngleOffset +
          (nodeIndex / Math.max(1, layerNodes.length)) * Math.PI * 2 +
          (b / branchCount) * (Math.PI / 4) +
          (rand() - 0.5) * 0.8;
        const lengthBase = maxRadius * (0.35 + rand() * 0.3) * (1 - depth * 0.12);
        const length = lengthBase * (0.7 + rand() * 0.6);
        const end = clampPoint(toPoint(angle, length));
        const points = buildManhattanPath(node.point, end, rand, grid);
        const pathLen = pathLength(points);
        const endDist = Math.hypot(end.x - center.x, end.y - center.y);
        const isBranch = depth > 0;
        paths.push({
          points,
          length: pathLen,
          delay: baseDelay + depth * 0.35 + (endDist / maxRadius) * 0.6 + rand() * 0.15,
          duration: 0.7 + rand() * 0.6,
          depth,
          isBranch,
        });
        const branchPoint = pickBranchPoint(points, rand);
        seedNodes.push({ point: branchPoint, depth: depth + 1 });
        nodes.push({
          x: end.x,
          y: end.y,
          delay: baseDelay + depth * 0.35 + (endDist / maxRadius) * 0.6,
          size: 3 + rand() * 3,
        });
      }
    });
  }

  return { width, height, center, chipSize, grid, paths, nodes };
};

const drawPartialPath = (
  ctx: CanvasRenderingContext2D,
  points: Point[],
  totalLength: number,
  progress: number
) => {
  const target = totalLength * progress;
  let remaining = target;
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 0; i < points.length - 1; i += 1) {
    const start = points[i];
    const end = points[i + 1];
    const seg = Math.hypot(end.x - start.x, end.y - start.y);
    if (remaining <= 0) break;
    if (remaining >= seg) {
      ctx.lineTo(end.x, end.y);
      remaining -= seg;
    } else {
      const ratio = seg === 0 ? 0 : remaining / seg;
      ctx.lineTo(start.x + (end.x - start.x) * ratio, start.y + (end.y - start.y) * ratio);
      remaining = 0;
    }
  }
  ctx.stroke();
};

const renderCircuit = (
  ctx: CanvasRenderingContext2D,
  layout: CircuitLayout,
  time: number,
  logoImage: HTMLImageElement | null
) => {
  const { width, height, center, grid, paths, nodes } = layout;
  ctx.clearRect(0, 0, width, height);

  ctx.fillStyle = "#02040a";
  ctx.fillRect(0, 0, width, height);

  const glow = ctx.createRadialGradient(center.x, center.y, 0, center.x, center.y, width * 0.7);
  glow.addColorStop(0, "rgba(255, 255, 255, 0.12)");
  glow.addColorStop(0.4, "rgba(56, 189, 248, 0.1)");
  glow.addColorStop(1, "rgba(2, 6, 23, 0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, width, height);

  ctx.save();
  ctx.strokeStyle = "rgba(148, 163, 184, 0.05)";
  ctx.lineWidth = 1;
  for (let x = 0; x <= width; x += grid) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = 0; y <= height; y += grid) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
  ctx.restore();

  paths.forEach((path, index) => {
    const progress = clamp((time - path.delay) / path.duration, 0, 1);
    if (progress <= 0) return;

    ctx.save();
    ctx.shadowBlur = 14;
    ctx.shadowColor = "rgba(56, 189, 248, 0.3)";
    ctx.strokeStyle = "rgba(125, 211, 252, 0.25)";
    ctx.lineWidth = 2.5;
    drawPartialPath(ctx, path.points, path.length, progress);
    ctx.restore();

    ctx.save();
    ctx.strokeStyle = "rgba(226, 232, 240, 0.65)";
    ctx.lineWidth = 1.2;
    drawPartialPath(ctx, path.points, path.length, progress);
    ctx.restore();

    if (progress > 0.02) {
      const head = pointAtLength(path.points, path.length * progress);
      ctx.save();
      ctx.fillStyle = "rgba(125, 211, 252, 0.85)";
      ctx.shadowBlur = 10;
      ctx.shadowColor = "rgba(56, 189, 248, 0.7)";
      ctx.beginPath();
      ctx.arc(head.x, head.y, 2.5 + (index % 2), 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    if (path.isBranch && progress > 0.08 && progress < 0.45) {
      const sparkHead = pointAtLength(path.points, path.length * progress);
      ctx.save();
      ctx.globalAlpha = 0.95;
      ctx.shadowBlur = 18;
      ctx.shadowColor = "rgba(255, 255, 255, 0.85)";
      ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
      ctx.beginPath();
      ctx.arc(sparkHead.x, sparkHead.y, 4.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      ctx.save();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.9)";
      ctx.lineWidth = 2.5;
      drawPartialPath(ctx, path.points, path.length, Math.min(progress + 0.02, 1));
      ctx.restore();
    }
  });

  nodes.forEach((node) => {
    const pulse = 0.6 + 0.4 * Math.sin((time + node.delay) * 3.5);
    ctx.save();
    ctx.globalAlpha = clamp(pulse, 0.2, 1);
    ctx.fillStyle = "rgba(226, 232, 240, 0.7)";
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  });

  const logoWidth = logoImage?.naturalWidth ? Math.min(logoImage.naturalWidth, width * 0.7) : width * 0.5;
  const logoHeight = logoImage?.naturalWidth
    ? (logoImage.naturalHeight / logoImage.naturalWidth) * logoWidth
    : logoWidth * 0.35;
  const logoX = center.x - logoWidth / 2;
  const logoY = center.y - logoHeight / 2;

  ctx.save();
  ctx.shadowBlur = 24;
  ctx.shadowColor = "rgba(255, 255, 255, 0.6)";
  ctx.fillStyle = "#ffffff";
  drawRoundedRect(ctx, logoX - 24, logoY - 18, logoWidth + 48, logoHeight + 36, 26);
  ctx.fill();
  ctx.restore();

  if (logoImage && logoImage.complete) {
    ctx.save();
    ctx.globalAlpha = 1;
    ctx.drawImage(logoImage, logoX, logoY, logoWidth, logoHeight);
    ctx.restore();
  }

  const flashStart = 2.1;
  const flashWindow = 0.35;
  if (time > flashStart) {
    const phase = clamp((time - flashStart) / flashWindow, 0, 1);
    const alpha = Math.sin(phase * Math.PI) * 0.35;
    ctx.save();
    ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
    ctx.fillRect(0, 0, width, height);
    ctx.restore();
  }

};

const IntroPage = () => {
  const { t, locale, setLocale } = useI18n();
  const navigate = useNavigate();
  const [bootDone, setBootDone] = useState(false);
  const [isImploding, setIsImploding] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const seedRef = useRef(Math.floor(Math.random() * 1_000_000));
  const rafRef = useRef<number | null>(null);
  // useEffect(() => {
  //   const introStorageKey = "rb-intro-last-seen";
  //   if (typeof window === "undefined" || typeof localStorage === "undefined") return;
  //   const now = new Date();
  //   const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(
  //     now.getDate()
  //   ).padStart(2, "0")}`;
  //   const lastSeen = localStorage.getItem(introStorageKey);
  //   if (lastSeen === today) {
  //     navigate("/home", { replace: true });
  //     return;
  //   }
  //   localStorage.setItem(introStorageKey, today);
  // }, [navigate]);
  const localeOptions: { value: Locale; label: string }[] = [
    { value: "sk", label: "SK" },
    { value: "en", label: "EN" },
    { value: "de", label: "DE" },
  ];
  const totalDurationMs = 3000;
  const implodeStartMs = totalDurationMs - 300;
  const contentVisible = bootDone;
  const showSectionChooser = false; // docasne vypnute (povodny vyber sekcie po canvas efekte)

  useEffect(() => {
    if (typeof window === "undefined") {
      setBootDone(true);
      return;
    }
    // Disabled daily intro lock for debugging.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setBootDone(true);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) {
      setBootDone(true);
      return;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      setBootDone(true);
      return;
    }

    let layout = createCircuitLayout(canvas.clientWidth, canvas.clientHeight, seedRef.current);
    let running = true;
    let imploding = false;
    const logoImage = new Image();
    logoImage.src = introLogoPng;
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const { clientWidth, clientHeight } = canvas;
      canvas.width = clientWidth * dpr;
      canvas.height = clientHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      layout = createCircuitLayout(clientWidth, clientHeight, seedRef.current);
    };

    resize();
    const start = performance.now();
    const tick = (now: number) => {
      if (!running) return;
      const elapsed = (now - start) / 1000;
      renderCircuit(ctx, layout, elapsed, logoImage);
      if (!imploding && now - start >= implodeStartMs) {
        imploding = true;
        setIsImploding(true);
      }
      if (now - start < totalDurationMs + 400) {
        rafRef.current = window.requestAnimationFrame(tick);
      } else {
        setBootDone(true);
      }
    };

    rafRef.current = window.requestAnimationFrame(tick);
    window.addEventListener("resize", resize);

    return () => {
      running = false;
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (bootDone) return;
    if (!window.matchMedia("(max-width: 640px)").matches) return;
    const centerView = () => {
      const doc = document.documentElement;
      const totalHeight = Math.max(doc.scrollHeight, document.body.scrollHeight);
      const target = Math.max(0, (totalHeight - window.innerHeight) / 2);
      window.scrollTo({ top: target, behavior: "auto" });
    };
    const raf = window.requestAnimationFrame(() => window.requestAnimationFrame(centerView));
    return () => window.cancelAnimationFrame(raf);
  }, [bootDone]);

  useEffect(() => {
    if (!bootDone) return;
    navigate("/home", { replace: true });
  }, [bootDone, navigate]);

  const mobileHeightClass = bootDone ? "min-h-[100svh]" : "min-h-[112svh]";

  return (
    <div
      className={`relative ${mobileHeightClass} sm:min-h-screen overflow-x-hidden overflow-y-auto sm:overflow-y-hidden bg-slate-950 text-white`}
    >
      <Seo title={t.meta.homeTitle} description={t.meta.homeDescription} path="/" />

      <div
        className={`absolute inset-0 z-20 flex items-center justify-center bg-slate-950 origin-center transition-[opacity,transform,filter] duration-700 ease-in-out ${
          bootDone ? "pointer-events-none opacity-0 scale-0 blur-[2px]" : isImploding ? "opacity-100 scale-0 blur-[2px]" : "opacity-100 scale-100"
        }`}
        aria-hidden
      >
        <canvas ref={canvasRef} className="h-full w-full" />
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-blue-500/30 blur-3xl motion-safe:animate-pulse" />
        <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-rose-500/20 blur-3xl motion-safe:animate-pulse" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
      </div>

      <div
        className={`relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-10 px-6 py-16 text-center transition duration-700 ${
          contentVisible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2"
        }`}
      >
        <div className="absolute right-6 top-6 flex items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
            {t.intro.languageLabel}
          </span>
          <div className="relative">
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur">
              <span>{locale.toUpperCase()}</span>
            </div>
            <select
              aria-label={t.intro.languageLabel}
              value={locale}
              onChange={(e) => setLocale(e.target.value as Locale)}
              className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
            >
              {localeOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <picture className="block">
          <source srcSet={introLogoWebp} type="image/webp" />
          <img
            src={introLogoPng}
            alt="RedBlue intro logo"
            className="h-16 w-auto sm:h-20"
            width={320}
            height={120}
            loading="eager"
            decoding="async"
          />
        </picture>

        <div className="max-w-3xl space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            {t.intro.title}
          </h1>
          <p className="text-sm text-white/70 sm:text-base">
            {t.intro.subtitle}
          </p>
        </div>

        {showSectionChooser ? (
          <div className="grid w-full max-w-5xl gap-6 md:grid-cols-2">
            <Link
              to="/home"
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-2xl shadow-blue-500/10 backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              aria-label="Vst\u00fapi\u0161 do RedBlue slu\u017eieb"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-400/10 opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="relative flex h-full flex-col gap-4">
                <picture className="inline-flex">
                  <source srcSet={redblueLogoWebp} type="image/webp" />
                  <img
                    src={redblueLogoPng}
                    alt="RedBlue logo"
                    className="h-14 w-auto sm:h-16"
                    width={280}
                    height={92}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
                <div className="space-y-2">
                  <h2 className="text-lg font-semibold text-white sm:text-xl">{t.intro.redblueTitle}</h2>
                  <p className="text-sm text-white/70">
                    {t.intro.redblueDescription}
                  </p>
                </div>
                <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-white/80">
                  {t.intro.redblueCta}
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                    {"\u2192"}
                  </span>
                </span>
              </div>
            </Link>

            <a
              href="https://academy.redblue.sk/"
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-2xl shadow-rose-500/10 backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              aria-label="Vst\u00fapi\u0161 do Akad\u00e9mie vzdel\u00e1vania"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-transparent to-orange-400/10 opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="relative flex h-full flex-col gap-4">
                <picture className="inline-flex">
                  <source srcSet={academyLogoWebp} type="image/webp" />
                  <img
                    src={academyLogoPng}
                    alt="RedBlue Academy logo"
                    className="h-14 w-auto sm:h-16"
                    width={280}
                    height={92}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
                <div className="space-y-2">
                  <h2 className="text-lg font-semibold text-white sm:text-xl">{t.intro.academyTitle}</h2>
                  <p className="text-sm text-white/70">
                    {t.intro.academyDescription}
                  </p>
                </div>
                <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-white/80">
                  {t.intro.academyCta}
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                    {"\u2192"}
                  </span>
                </span>
              </div>
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default IntroPage;
