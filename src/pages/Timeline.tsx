import { motion } from "framer-motion";
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

type TimelineItem = {
  phase: string;
  title: string;
  date: string;
  dateStart: Date;
  dateEnd: Date;
  icon: JSX.Element;
  desc: string;
};

const timelineData: TimelineItem[] = [
  {
    phase: "Phase 1",
    title: "Idea Submission",
    date: "March 16 - March 25, 2026",
    dateStart: new Date("2026-03-16T00:00:00+05:30"),
    dateEnd: new Date("2026-03-25T23:59:59+05:30"),
    icon: <FileText size={22} />,
    desc: "Teams register and submit their AI-powered ideas for Education For All, Sustainability, or Social Issues.",
  },
  {
    phase: "Phase 2",
    title: "Online Screening & Shortlisting",
    date: "March 25 - March 26, 2026",
    dateStart: new Date("2026-03-25T00:00:00+05:30"),
    dateEnd: new Date("2026-03-26T23:59:59+05:30"),
    icon: <Search size={22} />,
    desc: "The review panel evaluates submissions on innovation, feasibility, and measurable social impact.",
  },
  {
    phase: "Phase 3",
    title: "Finalist Announcement",
    date: "March 26, 2026",
    dateStart: new Date("2026-03-26T00:00:00+05:30"),
    dateEnd: new Date("2026-03-26T23:59:59+05:30"),
    icon: <Megaphone size={22} />,
    desc: "Shortlisted teams are announced and receive all instructions needed for the final hackathon round.",
  },
  {
    phase: "Phase 4",
    title: "Problem Statement Announcement",
    date: "March 27, 2026",
    dateStart: new Date("2026-03-27T00:00:00+05:30"),
    dateEnd: new Date("2026-03-27T23:59:59+05:30"),
    icon: <AlertCircle size={22} />,
    desc: "Official problem statements are released 24 hours before the event for final preparation and planning.",
  },
  {
    phase: "Phase 5",
    title: "Hackathon Day - 6 Hour Sprint",
    date: "March 28, 2026",
    dateStart: new Date("2026-03-28T00:00:00+05:30"),
    dateEnd: new Date("2026-03-28T23:59:59+05:30"),
    icon: <Code size={22} />,
    desc: "Final sprint day with mentoring, judging, and live presentations of working AI solutions.",
  },
];

const getCurrentPhase = () => {
  const now = new Date();

  for (let i = 0; i < timelineData.length; i += 1) {
    if (now >= timelineData[i].dateStart && now <= timelineData[i].dateEnd) {
      return i;
    }
  }

  if (now < timelineData[0].dateStart) return -1;
  return timelineData.length;
};

const Timeline = () => {
  const currentPhase = getCurrentPhase();

  const getStatus = (index: number) => {
    if (index < currentPhase) return "completed";
    if (index === currentPhase) return "active";
    return "upcoming";
  };

  const progressRatio =
    currentPhase < 0 ? 0 : currentPhase >= timelineData.length ? 1 : (currentPhase + 1) / timelineData.length;

  const currentStatusText =
    currentPhase >= 0 && currentPhase < timelineData.length
      ? {
          title: timelineData[currentPhase].title,
          date: timelineData[currentPhase].date,
          state: "In Progress",
        }
      : currentPhase === -1
        ? {
            title: "Registrations Open",
            date: "Phase 1 starts on March 16, 2026",
            state: "Upcoming",
          }
        : {
            title: "Hackathon Completed",
            date: "Final phase completed on March 28, 2026",
            state: "Completed",
          };

  const currentStateClass =
    currentStatusText.state === "In Progress"
      ? "text-accent"
      : currentStatusText.state === "Completed"
        ? "text-primary"
        : "text-muted-foreground";

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
              className="glass rounded-2xl p-6 md:p-8 text-center border"
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
                          <div
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
                          </div>
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
            <div
              className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-0.5"
              style={{
                background:
                  "linear-gradient(to bottom, hsl(210 100% 50%), hsl(150 100% 45%), hsl(210 80% 55%))",
              }}
            />

            {timelineData.map((item, index) => {
              const status = getStatus(index);
              const isEven = index % 2 === 0;
              return (
                <AnimatedSection key={item.phase} delay={index * 0.12}>
                  <div
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
                        className={`glass rounded-2xl p-6 relative ${status === "active" ? "border" : ""}`}
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

                    <div
                      className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full glass flex items-center justify-center z-10"
                      style={{
                        color:
                          status === "completed"
                            ? "hsl(150 100% 45%)"
                            : status === "active"
                              ? "hsl(210 100% 55%)"
                              : "hsl(var(--muted-foreground))",
                        boxShadow:
                          status === "active"
                            ? "0 0 20px hsla(210, 100%, 50%, 0.3)"
                            : status === "completed"
                              ? "0 0 15px hsla(150, 100%, 45%, 0.2)"
                              : "none",
                      }}
                    >
                      {item.icon}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Timeline;
