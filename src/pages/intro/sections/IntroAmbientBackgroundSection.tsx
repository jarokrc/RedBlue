const IntroAmbientBackgroundSection = () => (
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-blue-500/30 blur-3xl motion-safe:animate-pulse" />
    <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-rose-500/20 blur-3xl motion-safe:animate-pulse" />
    <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
  </div>
);

export default IntroAmbientBackgroundSection;
