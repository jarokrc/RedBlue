import { Link } from "react-router-dom";

type NotFoundCountdownSectionProps = {
  secondsLeft: number;
  countdownTemplate: string;
  backLabel: string;
};

const NotFoundCountdownSection = ({ secondsLeft, countdownTemplate, backLabel }: NotFoundCountdownSectionProps) => {
  const countdownText = countdownTemplate.replace("{seconds}", String(secondsLeft));

  return (
    <div className="space-y-3">
      <p className="text-7xl font-black leading-none text-blue-700 md:text-8xl">{secondsLeft}</p>
      <p className="text-sm font-semibold text-slate-700 md:text-base">{countdownText}</p>
      <Link to="/home" className="text-blue-700 font-semibold hover:text-blue-800 md:text-base">
        {backLabel}
      </Link>
    </div>
  );
};

export default NotFoundCountdownSection;
