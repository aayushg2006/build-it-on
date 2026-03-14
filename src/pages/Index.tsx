import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, MapPin } from "lucide-react";
import ScrambleText from "@/components/ScrambleText";
import BrandName from "@/components/BrandName";
import ApplyWithDevfolioButton from "@/components/ApplyWithDevfolioButton";
import useDevfolioSdk from "@/hooks/useDevfolioSdk";

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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const Index = () => {
  const shouldReduceMotion = useReducedMotion();
  const [countdown, setCountdown] = useState<CountdownState>(() => getCountdown());
  useDevfolioSdk();

  useEffect(() => {
    const intervalId = window.setInterval(() => setCountdown(getCountdown()), 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  const hasStarted = countdown.totalMs <= 0;

  const itemVariants = shouldReduceMotion
    ? {
        hidden: { opacity: 1, y: 0, filter: "blur(0px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      }
    : {
        hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
        },
      };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-x-clip pb-32">
      <motion.div
        className="relative z-10 container mx-auto px-6 text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-strong border-primary/30 text-xs md:text-sm shadow-[0_0_20px_hsla(210,100%,50%,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="font-body text-primary font-bold tracking-wide">Phase 1: Registrations Open</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <p className="font-display text-xs md:text-sm text-muted-foreground uppercase tracking-[0.3em] mb-4 font-semibold">
            TCET EWT Students Chapter Presents
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight">
            <ScrambleText
              text="Build-it"
              className="text-[hsl(210_100%_55%)]"
              delay={260}
              duration={840}
            />
            <span aria-hidden="true"> </span>
            <ScrambleText
              text="ON"
              className="text-[hsl(150_100%_45%)]"
              delay={420}
              duration={720}
            />
          </h1>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg font-body text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          A college-level tech hackathon driving <span className="text-foreground font-semibold">AI for Social Impact & Sustainability</span>.
          Registrations are <span className="text-accent font-bold">FREE</span> for all students across Mumbai.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-3 sm:gap-4 text-xs md:text-sm font-medium mb-12 flex-wrap max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl glass bg-card/30 border-border/50 text-left hover:border-primary/40 transition-colors">
            <MapPin size={18} className="text-primary shrink-0" />
            <span className="text-foreground/90">Thakur College of Engineering and Technology</span>
          </div>
          <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl glass bg-card/30 border-border/50 hover:border-primary/40 transition-colors">
            <Calendar size={18} className="text-primary shrink-0" />
            <span className="text-foreground/90">March 28, 2026</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
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
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-sm sm:max-w-none mx-auto"
        >
          <ApplyWithDevfolioButton className="w-full sm:w-auto flex justify-center" buttonWidth={312} />
          <Link
            to="/about"
            data-glitch-text="EXPLORE EVENT"
            className="glitch-trigger w-full sm:w-auto px-8 py-4 rounded-xl glass border-primary/30 font-display font-semibold text-base md:text-lg transition-all hover:bg-primary/10 hover:border-primary/50 text-center"
            style={{ color: "hsl(210 100% 65%)" }}
          >
            EXPLORE EVENT
          </Link>
        </motion.div>
      </motion.div>

      <motion.footer
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={shouldReduceMotion ? { duration: 0 } : { delay: 0.9, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 right-0 py-6 text-center text-muted-foreground text-xs"
      >
        <p>
          Copyright 2026 <BrandName /> - AI For Social Impact & Sustainability
        </p>
        <p className="mt-1">Organized by TCET EWT Students Chapter</p>
      </motion.footer>
    </div>
  );
};

export default Index;
