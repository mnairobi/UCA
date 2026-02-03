"use client";

import { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: string;
}

const pad2 = (n: number) => String(n).padStart(2, "0");

const CountdownTimer: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();
      if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!hasMounted) return null;

  return (
    <div className="w-full text-white">
      {/* Header */}
      <div className="flex items-center justify-center sm:justify-start gap-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400" />
        </span>

        <h2 className="text-sm sm:text-base font-semibold text-white">
          Election Countdown
        </h2>
      </div>

      {/* Tiles: 2 cols on mobile, 4 cols on sm+ */}
      <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 w-full">
        <TimeBox label="Days" value={String(timeLeft.days)} />
        <TimeBox label="Hours" value={pad2(timeLeft.hours)} />
        <TimeBox label="Minutes" value={pad2(timeLeft.minutes)} />
        <TimeBox label="Seconds" value={pad2(timeLeft.seconds)} />
      </div>
    </div>
  );
};

function TimeBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0 rounded-xl bg-white/10 border border-white/15 px-3 py-2 sm:px-4 sm:py-3 text-center">
      <div className="text-2xl sm:text-3xl font-bold tabular-nums leading-none truncate">
        {value}
      </div>
      <div className="mt-1 text-[11px] sm:text-xs text-white/80">
        {label}
      </div>
    </div>
  );
}

export default CountdownTimer;