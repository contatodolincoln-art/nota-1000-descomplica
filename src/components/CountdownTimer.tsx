import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date("2025-10-31T18:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-accent text-accent-foreground rounded-lg px-4 py-3 min-w-[70px] shadow-soft">
        <span className="text-3xl font-bold">{String(value).padStart(2, "0")}</span>
      </div>
      <span className="text-sm text-muted-foreground mt-2 font-medium">{label}</span>
    </div>
  );

  return (
    <div className="flex gap-3 justify-center items-center animate-fade-in">
      <TimeBlock value={timeLeft.days} label="Dias" />
      <span className="text-2xl font-bold text-primary mb-6">:</span>
      <TimeBlock value={timeLeft.hours} label="Horas" />
      <span className="text-2xl font-bold text-primary mb-6">:</span>
      <TimeBlock value={timeLeft.minutes} label="Min" />
      <span className="text-2xl font-bold text-primary mb-6">:</span>
      <TimeBlock value={timeLeft.seconds} label="Seg" />
    </div>
  );
};
