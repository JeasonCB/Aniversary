import { useState, useEffect } from "react";
import { intervalToDuration, isBefore } from "date-fns";

export interface TimeDifference {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function useTimeDifference(targetDate: Date) {
  const [diff, setDiff] = useState<TimeDifference>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // If target is in the future, we count down. If in past, we count up (anniversary).
      // The user wants "counter... tracking time since", implying count UP for past events.
      // But the dates provided are:
      // 1. 15 March 2025 (Future, since now is Dec 2025? Wait.)
      // Additional Metadata says: "The current local time is: 2025-12-17".
      // So March 2025 is in the PAST.
      // So this is a "Time Since" counter.

      const start = isBefore(now, targetDate) ? now : targetDate;
      const end = isBefore(now, targetDate) ? targetDate : now;

      const duration = intervalToDuration({
        start,
        end,
      });

      setDiff({
        years: duration.years || 0,
        months: duration.months || 0,
        days: duration.days || 0,
        hours: duration.hours || 0,
        minutes: duration.minutes || 0,
        seconds: duration.seconds || 0,
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return diff;
}
