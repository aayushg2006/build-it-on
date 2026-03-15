import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  Clock3,
  Code,
  FileText,
  Megaphone,
  Search,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import {
  TIMELINE_PHASES,
  getCurrentPhaseIndex,
  getCurrentTimelineStatus,
  type TimelinePhase,
} from "@/lib/eventTimeline";

type TimelineItem = TimelinePhase & {
  icon: JSX.Element;
};

const timelineIcons: JSX.Element[] = [
  <FileText size={22} />,
  <Search size={22} />,
  <Megaphone size={22} />,
  <AlertCircle size={22} />,
  <Code size={22} />,
];

const timelineData: TimelineItem[] = TIMELINE_PHASES.map((item, index) => ({
  ...item,
  icon: timelineIcons[index],
}));

const STATUS_REFRESH_INTERVAL_MS = 60 * 1000;

const getStateClass = (state: string) => {
  if (state === "In Progress") return "text-accent";
  if (state === "Completed") return "text-primary";
  return "text-muted-foreground";
};

const Timeline = () => {
  const shouldReduceMotion = useReducedMotion();
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const intervalId = window.setInterval(() => setNow(new Date()), STATUS_REFRESH_INTERVAL_MS);
    return () => window.clearInterval(intervalId);
  }, []);

  const currentPhase = getCurrentPhaseIndex(now);

  const getStatus = (index: number) => {
    if (index < currentPhase) return "completed";
    if (index === currentPhase) return "active";
    return "upcoming";
  };

  const progressRatio =
    currentPhase < 0 ? 0 : currentPhase >= timelineData.length ? 1 : (currentPhase + 1) / timelineData.length;

  const currentStatusText = getCurrentTimelineStatus(now);
  const currentStateClass = getStateClass(currentStatusText.state);

  return (
    <PageTransition tagline="Your Journey From Idea to Impact">
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-10">
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">Event Schedule</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-6">Timeline</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Current phase updates based on today&apos;s date</p>
          </AnimatedSection>

          <AnimatedSection className="max-w-4xl mx-auto mb-12">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="card glass rounded-2xl p-6 md:p-8 text-center border"
              style={{ borderColor: "hsla(210, 100%, 50%, 0.35)" }}
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                  <Clock3 size={20} className="text-primary" />
                </motion.div>
                <span className="font-display text-sm font-bold text-primary uppercase tracking-wider">Current Status</span>
              </div>
              <p className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">{currentStatusText.title}</p>
              <p className="text-muted-foreground text-sm">{currentStatusText.date}</p>
              <p className={`mt-3 text-sm font-semibold ${currentStateClass}`}>{currentStatusText.state}</p>

              <div className="mt-6">
                <div className="relative max-w-2xl mx-auto px-3">
                  <div className="absolute left-5 right-5 top-4 h-0.5 rounded-full bg-muted/50" />
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `calc((100% - 2.5rem) * ${progressRatio})` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute left-5 top-4 h-0.5 rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg, hsl(150 100% 45%), hsl(210 100% 50%), hsl(210 90% 60%))",
                    }}
                  />

                  <div className="relative grid grid-cols-5 gap-1">
                    {timelineData.map((item, index) => {
                      const status = getStatus(index);
                      const isActive = status === "active";
                      const isCompleted = status === "completed";
                      return (
                        <div key={item.phase} className="flex flex-col items-center">
                          <motion.div
                            whileHover={
                              shouldReduceMotion
                                ? undefined
                                : {
                                    scale: 1.1,
                                    y: -1,
                                    boxShadow: "0 0 20px hsla(210, 100%, 58%, 0.32)",
                                  }
                            }
                            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                            className="h-8 w-8 rounded-full glass border flex items-center justify-center text-xs font-bold"
                            style={{
                              color: isCompleted
                                ? "hsl(150 100% 45%)"
                                : isActive
                                  ? "hsl(210 100% 55%)"
                                  : "hsl(var(--muted-foreground))",
                              borderColor: isActive ? "hsla(210, 100%, 50%, 0.45)" : "hsla(210, 20%, 70%, 0.2)",
                              boxShadow: isActive ? "0 0 14px hsla(210, 100%, 50%, 0.2)" : "none",
                            }}
                          >
                            {isCompleted ? <CheckCircle2 size={14} /> : index + 1}
                          </motion.div>
                          <p className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">{`P${index + 1}`}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto relative">
            <motion.div
              className="pointer-events-none absolute left-6 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] rounded-full z-0"
              style={{
                background:
                  "linear-gradient(180deg, hsl(213 100% 74%) 0%, hsl(210 100% 57%) 40%, hsl(203 100% 46%) 100%)",
                boxShadow: "0 0 20px hsl(210 100% 55% / 0.58)",
                backgroundSize: "100% 220%",
              }}
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      backgroundPosition: ["50% 0%", "50% 100%"],
                      opacity: [0.88, 1, 0.88],
                    }
              }
              transition={
                shouldReduceMotion
                  ? undefined
                  : {
                      duration: 3.2,
                      ease: "linear",
                      repeat: Infinity,
                    }
              }
            />

            <motion.div
              className="pointer-events-none absolute left-6 md:left-1/2 -translate-x-1/2 top-0 h-16 w-[8px] rounded-full z-0"
              style={{
                background:
                  "linear-gradient(180deg, hsla(207, 100%, 88%, 0), hsla(207, 100%, 78%, 0.9), hsla(207, 100%, 88%, 0))",
                filter: "blur(1.8px)",
              }}
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, 420, 840],
                      opacity: [0, 0.95, 0],
                    }
              }
              transition={
                shouldReduceMotion
                  ? undefined
                  : {
                      duration: 2.4,
                      ease: "linear",
                      repeat: Infinity,
                    }
              }
            />

            <AnimatedSection className="relative z-10" staggerChildren staggerStep={0.1}>
              {timelineData.map((item, index) => {
                const status = getStatus(index);
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={item.phase}
                    className={`relative flex items-start mb-12 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                        isEven ? "md:pr-8 md:text-right" : "md:pl-8"
                      }`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.03, y: -4 }}
                        className={`card glass rounded-2xl p-6 relative ${status === "active" ? "border" : ""}`}
                        style={
                          status === "active"
                            ? {
                                borderColor: "hsla(210, 100%, 50%, 0.4)",
                                boxShadow: "0 0 20px hsla(210, 100%, 50%, 0.15)",
                              }
                            : {}
                        }
                      >
                        <div
                          className={`flex items-center gap-2 mb-2 ${
                            isEven ? "md:justify-end" : "md:justify-start"
                          }`}
                        >
                          <span className="text-primary font-display text-xs font-bold uppercase tracking-wider">
                            {item.phase}
                          </span>
                          {status === "completed" && <CheckCircle2 size={14} className="text-accent" />}
                          {status === "active" && (
                            <motion.span
                              className="w-2 h-2 rounded-full"
                              style={{ background: "hsl(150 100% 45%)" }}
                              animate={{ opacity: [1, 0.3, 1] }}
                              transition={{ duration: 1, repeat: Infinity }}
                            />
                          )}
                        </div>
                        <h3 className="font-display text-lg font-bold text-foreground mb-1">{item.title}</h3>
                        <p className="text-primary/80 font-display text-sm mb-3">{item.date}</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      </motion.div>
                    </div>

                    <div className="absolute left-6 md:left-1/2 top-2 -translate-x-1/2 z-10">
                      <motion.div
                        whileHover={
                          shouldReduceMotion
                            ? undefined
                            : {
                                scale: 1.12,
                                y: -2,
                                boxShadow: "0 0 26px hsla(210, 100%, 58%, 0.42)",
                                borderColor: "hsla(210, 100%, 66%, 0.56)",
                              }
                        }
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="w-12 h-12 rounded-full glass border flex items-center justify-center"
                        style={{
                          color:
                            status === "completed"
                              ? "hsl(150 100% 45%)"
                              : status === "active"
                                ? "hsl(210 100% 55%)"
                                : "hsl(var(--muted-foreground))",
                          borderColor:
                            status === "active"
                              ? "hsla(210, 100%, 50%, 0.4)"
                              : status === "completed"
                                ? "hsla(150, 100%, 45%, 0.32)"
                                : "hsla(210, 20%, 70%, 0.2)",
                          boxShadow:
                            status === "active"
                              ? "0 0 20px hsla(210, 100%, 50%, 0.3)"
                              : status === "completed"
                                ? "0 0 15px hsla(150, 100%, 45%, 0.2)"
                                : "none",
                        }}
                      >
                        <motion.span
                          className="inline-flex items-center justify-center"
                          animate={
                            shouldReduceMotion
                              ? undefined
                              : status === "active"
                                ? { rotate: [0, -4, 4, 0] }
                                : undefined
                          }
                          transition={shouldReduceMotion ? undefined : { duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
                        >
                          {item.icon}
                        </motion.span>
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </AnimatedSection>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Timeline;
