"use client";

import { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: string; 
}

const CountdownTimer: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [hasMounted, setHasMounted] = useState(false); // State to track client-side rendering

  useEffect(() => {
    setHasMounted(true); // Set to true after the first render

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

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!hasMounted) return null; // Prevent rendering until after client-side mount

  return (
    <div className="flex flex-col items-center bg-transparent text-white p-3 lg:p-6 rounded-lg shadow-md max-w-full overflow-hidden">
      <div className="flex items-center gap-3">
        <p className="w-4 h-4 bg-amber-600 mb-2 rounded-full animate-ping"></p>
        <h2 className="text-2xl text-primary font-bold mb-2">Election Countdown</h2>
      </div>
      <div className="flex space-x-3 lg:space-x-4 text-center">
        <div className="p-4 bg-primary rounded-md">
          <span className="text-xl sm:text-2xl md:text-3xl font-bold">{timeLeft.days < 10 ? "0" + timeLeft.days : timeLeft.days}</span>
          <p className="text-sm">Days</p>
        </div>
        <div className="p-4 bg-primary rounded-md">
          <span className="text-xl sm:text-2xl md:text-3xl font-bold">{timeLeft.hours < 10 ? "0" + timeLeft.hours : timeLeft.hours}</span>
          <p className="text-sm">Hours</p>
        </div>
        <div className="p-4 bg-primary rounded-md">
          <span className="text-xl sm:text-2xl md:text-3xl font-bold">{timeLeft.minutes < 10 ? "0" + timeLeft.minutes : timeLeft.minutes}</span>
          <p className="text-sm">Minutes</p>
        </div>
        <div className="p-4 bg-primary rounded-md">
          <span className="text-xl sm:text-2xl md:text-3xl font-bold">{timeLeft.seconds < 10 ? "0" + timeLeft.seconds : timeLeft.seconds}</span>
          <p className="text-sm">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
