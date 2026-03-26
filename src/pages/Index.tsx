import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, MapPin } from "lucide-react";
import ScrambleText from "@/components/ScrambleText";
import { getCurrentTimelineStatus } from "@/lib/eventTimeline";

// Using the exact paths from your folder structure!
import geekRoomLogo from "@/assets/Sponsor Logos/GeekRoom.png";
import xyzLogo from "@/assets/Sponsor Logos/xyz.png";
import n8nLogo from "@/assets/Sponsor Logos/n8n.svg";

const BUILDATHON_DATE = new Date("2026-03-28T00:00:00+05:30");

type CountdownState = {
  totalMs: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const getCountdown = (): CountdownState => {
  const totalMs = BUILDATHON_DATE.getTime() - Date.now();
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

  useEffect(() => {
    const intervalId = window.setInterval(() => setCountdown(getCountdown()), 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  const hasStarted = countdown.totalMs <= 0;
  const currentTimelineStatus = getCurrentTimelineStatus(new Date());
  const showProblemStatementsLink =
    currentTimelineStatus.phase === "Phase 4" || currentTimelineStatus.phase === "Phase 5";
  const currentStatusLabel = currentTimelineStatus.phase
    ? `${currentTimelineStatus.phase}: ${currentTimelineStatus.title}`
    : currentTimelineStatus.title;

  const currentStatusClass =
    currentTimelineStatus.state === "In Progress"
      ? "text-accent"
      : currentTimelineStatus.state === "Completed"
        ? "text-primary"
        : "text-primary";

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
        className="relative z-10 container mx-auto px-6 text-center mt-24"
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
            <div className="flex flex-col items-start leading-tight">
              <span className={`font-body font-bold tracking-wide ${currentStatusClass}`}>{currentStatusLabel}</span>
              <span className="font-body text-[10px] md:text-xs text-muted-foreground">{currentTimelineStatus.date}</span>
              {currentTimelineStatus.phase === "Phase 3" && (
                <Link
                  to="/shortlisted"
                  className="mt-1 font-body text-[11px] md:text-xs font-bold underline underline-offset-4 decoration-2 text-primary hover:text-primary/80 transition-colors"
                >
                  View the Shortlisted Teams →
                </Link>
              )}
              {showProblemStatementsLink && (
                <Link
                  to="/problem-statements"
                  className="mt-1 font-body text-[11px] md:text-xs font-bold underline underline-offset-4 decoration-2 text-accent hover:text-accent/80 transition-colors"
                >
                  View Problem Statements →
                </Link>
              )}
            </div>
          </div>
        </motion.div>

      <motion.div variants={itemVariants} className="mb-8">
  <p className="font-display text-xs md:text-sm text-muted-foreground uppercase tracking-[0.3em] mb-4 font-semibold">
    TCET EWT Students Chapter Presents
  </p>

  <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight">
    <div className="block">
      <ScrambleText
        text="Pragati 2.0"
        className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
        style={{
          lineHeight: 1,
          background: "linear-gradient(90deg, #ffaa00, #00ff99)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        delay={120}
        duration={980}
      />
    </div>

    {/* Build-it ON */}
    <div className="block leading-none mt-2">
      <ScrambleText
        text="Build-it"
        className="text-[#00bfff] drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
        delay={260}
        duration={840}
      />
      <span className="mx-2"> </span>
      <ScrambleText
        text="ON"
        className="text-[#00ff99] font-extrabold drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
        delay={420}
        duration={720}
      />
    </div>

  </h1>
</motion.div>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg font-body text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          A college-level tech Buildathon driving <span className="text-foreground font-semibold">AI for Social Impact & Sustainability</span>.
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
            <p className="font-display text-xs tracking-[0.2em] uppercase text-primary">Countdown To Buildathon Day</p>
            {hasStarted ? (
              <p className="font-display text-base md:text-lg text-accent font-bold">Buildathon Day Is Live</p>
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
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-sm sm:max-w-none mx-auto mb-24"
        >
          <Link
            to="/shortlisted"
            className="inline-flex w-full sm:w-[320px] h-[56px] items-center justify-center rounded-lg border border-primary/45 bg-primary/20 px-5 font-display text-base font-bold text-primary shadow-[0_0_35px_hsla(210,100%,55%,0.45)] transition-all duration-300 hover:scale-[1.03] hover:bg-primary/30 hover:shadow-[0_0_45px_hsla(210,100%,55%,0.58)]"
          >
            🎉 View Shortlisted Teams
          </Link>
          <Link
            to="/about"
            data-glitch-text="EXPLORE EVENT"
            className="glitch-trigger flex items-center justify-center w-full sm:w-[280px] h-[56px] rounded-lg glass border-primary/30 font-display font-semibold text-base transition-all hover:bg-primary/10 hover:border-primary/50 text-center"
            style={{ color: "hsl(210 100% 65%)" }}
          >
            EXPLORE EVENT
          </Link>
        </motion.div>

        {/* --- ENHANCED PARTNERS SECTION --- */}
        <motion.div variants={itemVariants} className="mt-16 w-full max-w-5xl mx-auto relative z-10 border-t border-border/40 pt-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-display tracking-[0.2em] uppercase mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Supported By
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[hsl(150_100%_45%)]">Sponsors</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              Providing tools, resources, and exclusive perks for participants.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Geek Room Partner */}
            <a 
              href="https://forms.gle/VHo7F48CJ9ULxpM2A" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative group flex flex-col items-center justify-center p-8 md:p-10 rounded-3xl glass bg-card/20 border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_hsla(210,100%,50%,0.25)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 h-20 md:h-24 w-full flex items-center justify-center mb-4">
                <img 
                  src={geekRoomLogo} 
                  alt="Geek Room Logo" 
                  className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100 drop-shadow-lg" 
                />
              </div>
              <p className="relative z-10 font-display text-sm font-semibold tracking-wide text-foreground/70 group-hover:text-primary transition-colors">
                {/* Community Partner */}
              </p>
            </a>

            {/* .xyz Partner */}
            <a 
              href="https://gen.xyz/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative group flex flex-col items-center justify-center p-8 md:p-10 rounded-3xl glass bg-card/20 border-border/50 hover:border-[hsl(150_100%_45%)]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_hsla(150,100%,45%,0.25)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(150_100%_45%)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 h-20 md:h-24 w-full flex items-center justify-center mb-4">
                <img 
                  src={xyzLogo} 
                  alt=".xyz Logo" 
                  className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100 drop-shadow-lg" 
                />
              </div>
              <p className="relative z-10 font-display text-sm font-semibold tracking-wide text-foreground/70 group-hover:text-[hsl(150_100%_45%)] transition-colors">
                {/* Domain Partner */}
              </p>
            </a>

            {/* n8n Partner */}
            <a 
              href="https://n8n.io/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative group flex flex-col items-center justify-center p-8 md:p-10 rounded-3xl glass bg-card/20 border-border/50 hover:border-[#EA4B71]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_hsla(346,80%,60%,0.25)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#EA4B71]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 h-20 md:h-24 w-full flex items-center justify-center mb-4">
                <img 
                  src={n8nLogo} 
                  alt="n8n Logo" 
                  className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100" 
                />
              </div>
              <p className="relative z-10 font-display text-sm font-semibold tracking-wide text-foreground/70 group-hover:text-[#EA4B71] transition-colors">
                {/* Workflow Partner */}
              </p>
            </a>
          </div>
        </motion.div>
        {/* ------------------------------------ */}

      </motion.div>
    </div>
  );
};

export default Index;
