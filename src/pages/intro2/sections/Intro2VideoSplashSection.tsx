type Intro2VideoSplashSectionProps = {
  isImploding: boolean;
  videoEnded: boolean;
  introVideoWebm: string;
  introVideoMp4: string;
  onVideoEnd: () => void;
};

const Intro2VideoSplashSection = ({
  isImploding,
  videoEnded,
  introVideoWebm,
  introVideoMp4,
  onVideoEnd,
}: Intro2VideoSplashSectionProps) => (
  <div
    className={`fixed inset-0 z-50 flex items-center justify-center bg-white origin-center transition-[opacity,transform,filter] duration-700 ease-in-out ${
      isImploding ? "opacity-100 scale-0 blur-[2px]" : "opacity-100 scale-100"
    }`}
    aria-hidden
  >
    {!videoEnded ? (
      <video
        className="absolute inset-0 h-full w-full object-contain bg-white"
        autoPlay
        muted
        playsInline
        onEnded={onVideoEnd}
      >
        <source src={introVideoWebm} type="video/webm" />
        <source src={introVideoMp4} type="video/mp4" />
      </video>
    ) : null}
  </div>
);

export default Intro2VideoSplashSection;
