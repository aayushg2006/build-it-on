import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Zap } from "lucide-react";
import devfolioLogo from "@/assets/devfolio-logo.png";

const DEVFOLIO_URL = "https://devfolio.co";
const HACKATHON_DATE = new Date("2026-03-28T00:00:00+05:30");

type CountdownState = {
  totalMs: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const getCountdown = (): CountdownState => {
  const totalMs = HACKATHON_DATE.getTime() - Date.now();
  const safeMs = Math.max(totalMs, 0);

  return {
    totalMs,
    days: Math.floor(safeMs / (1000 * 60 * 60 * 24)),
    hours: Math.floor((safeMs / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((safeMs / (1000 * 60)) % 60),
    seconds: Math.floor((safeMs / 1000) % 60),
  };
};

const Index = () => {
  const [countdown, setCountdown] = useState<CountdownState>(() => getCountdown());

  useEffect(() => {
    const intervalId = window.setInterval(() => setCountdown(getCountdown()), 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  const hasStarted = countdown.totalMs <= 0;

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-xs md:text-sm mb-8"
          style={{ color: "hsl(210 80% 65%)" }}
        >
          <Zap size={14} className="text-accent" />
          <span className="font-display tracking-[0.2em] uppercase">College Level Tech Hackathon</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="text-muted-foreground text-sm md:text-base font-body mb-4 tracking-wide"
        >
          TCET EWT Students Chapter Presents
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.7, type: "spring" }}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
            <span className="text-foreground">EWT </span>
            <span style={{ color: "hsl(210 100% 55%)" }}>Build-it</span>{" "}
            <span style={{ color: "hsl(150 100% 45%)" }}>ON</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-lg md:text-xl font-body mb-3"
          style={{ color: "hsl(210 80% 60%)" }}
        >
          AI For Social Impact & Sustainability
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="text-muted-foreground text-sm md:text-base mb-3"
        >
          Registrations are <span className="font-bold text-accent">FREE</span> for students across Mumbai
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.5 }}
          className="flex items-center justify-center gap-4 text-muted-foreground text-xs md:text-sm mb-8 flex-wrap"
        >
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-primary" />
            Thakur College of Engineering and Technology
          </span>
          <span>&bull;</span>
          <span className="flex items-center gap-1.5">
            <Calendar size={14} className="text-primary" />
            28th March 2026
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.02, duration: 0.5 }}
          className="mb-8"
        >
          <div className="inline-flex flex-col items-center gap-4 px-6 py-4 rounded-2xl glass">
            <p className="font-display text-xs tracking-[0.2em] uppercase text-primary">Countdown To Hackathon Day</p>
            {hasStarted ? (
              <p className="font-display text-base md:text-lg text-accent font-bold">Hackathon Day Is Live</p>
            ) : (
              <div className="grid grid-cols-4 gap-3 md:gap-4">
                {[
                  { label: "Days", value: countdown.days },
                  { label: "Hours", value: countdown.hours },
                  { label: "Minutes", value: countdown.minutes },
                  { label: "Seconds", value: countdown.seconds },
                ].map((item) => (
                  <div key={item.label} className="min-w-[64px] md:min-w-[76px] rounded-xl bg-muted/40 border border-border/60 px-3 py-2">
                    <p className="font-display text-xl md:text-2xl font-bold text-foreground">{String(item.value).padStart(2, "0")}</p>
                    <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href={DEVFOLIO_URL}
            target="_blank"
            rel="noreferrer"
            className="group px-8 py-4 rounded-xl font-display font-bold text-base md:text-lg flex items-center gap-3 transition-all hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, hsl(210 100% 50%), hsl(200 100% 45%))",
              color: "white",
              boxShadow: "0 0 30px hsla(210, 100%, 50%, 0.3), 0 0 60px hsla(210, 100%, 50%, 0.1)",
            }}
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white ring-1 ring-white/70 shadow-sm">
              <img src={devfolioLogo} alt="Devfolio" className="h-4 w-4 object-contain" />
            </span>
            REGISTER NOW
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </a>
          <Link
            to="/about"
            className="px-8 py-4 rounded-xl glass font-display font-semibold text-base md:text-lg transition-all hover:bg-muted/30"
            style={{ color: "hsl(210 100% 60%)" }}
          >
            EXPLORE EVENT
          </Link>
        </motion.div>
      </div>

      <footer className="absolute bottom-0 left-0 right-0 py-6 text-center text-muted-foreground text-xs">
        <p>Copyright 2026 Build-it ON - AI For Social Impact & Sustainability</p>
        <p className="mt-1">Organized by TCET EWT Students Chapter</p>
      </footer>
    </div>
  );
};

export default Index;
