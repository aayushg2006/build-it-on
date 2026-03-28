import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type ScheduleSlot = {
  start: Date;
  end: Date;
  route: string;
};

const buildSlot = (startHour: number, startMinute: number, endHour: number, endMinute: number, route: string): ScheduleSlot => ({
  start: new Date(2026, 2, 28, startHour, startMinute, 0, 0),
  end: new Date(2026, 2, 28, endHour, endMinute, 0, 0),
  route,
});

const SCHEDULE: ScheduleSlot[] = [
  buildSlot(8, 0, 8, 30, "/live/registration"),
  buildSlot(8, 30, 9, 30, "/live/breakfast"),
  buildSlot(9, 30, 10, 30, "/live/inauguration"),
  buildSlot(10, 30, 12, 30, "/live/round-1"),
  buildSlot(12, 30, 13, 0, "/live/eval-1"),
  buildSlot(13, 0, 14, 0, "/live/lunch"),
  buildSlot(14, 0, 16, 0, "/live/round-2"),
  buildSlot(16, 0, 17, 0, "/live/submission"),
  buildSlot(17, 0, 18, 0, "/live/prize"),
];

const getScheduledRoute = (now: Date): string => {
  const firstSlot = SCHEDULE[0];
  const lastSlot = SCHEDULE[SCHEDULE.length - 1];

  if (now < firstSlot.start) return firstSlot.route;

  const activeSlot = SCHEDULE.find((slot) => now >= slot.start && now < slot.end);
  if (activeSlot) return activeSlot.route;

  if (now >= lastSlot.end) return lastSlot.route;

  return firstSlot.route;
};

const LiveAutoDirector = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkScheduleAndRedirect = () => {
      const targetRoute = getScheduledRoute(new Date());

      if (location.pathname !== targetRoute) {
        navigate(targetRoute, { replace: true });
      }
    };

    checkScheduleAndRedirect();
    const intervalId = window.setInterval(checkScheduleAndRedirect, 10_000);

    return () => window.clearInterval(intervalId);
  }, [location.pathname, navigate]);

  return (
    <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(210_100%_52%/.15),transparent_58%)]" />
      <div className="glass-strong relative z-10 rounded-2xl border-primary/35 px-8 py-6 text-center shadow-[0_0_45px_hsla(210,100%,55%,0.25)]">
        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-2 border-primary/30 border-t-primary" />
        <p className="font-display text-lg uppercase tracking-[0.14em] text-gradient-blue">Initializing Projector System...</p>
      </div>
    </div>
  );
};

export default LiveAutoDirector;
