import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import { FileText, Search, Megaphone, AlertCircle, Code, CheckCircle, Clock, ArrowRight } from "lucide-react";

const timelineData = [
  {
    phase: "Phase 1",
    title: "Idea Submission",
    date: "16 March - 25 March",
    dateStart: new Date("2025-03-16"),
    dateEnd: new Date("2025-03-25"),
    icon: <FileText size={24} />,
    desc: "Submit your innovative AI-powered solution ideas for either the Education For All, Sustainability, or Social Issues track. Teams can register and share their project proposals.",
  },
  {
    phase: "Phase 2",
    title: "Online Screening & Shortlisting",
    date: "25 March - 26 March",
    dateStart: new Date("2025-03-25"),
    dateEnd: new Date("2025-03-26"),
    icon: <Search size={24} />,
    desc: "Our expert panel will review all submissions and shortlist the most promising ideas based on innovation, feasibility, and social impact potential.",
  },
  {
    phase: "Phase 3",
    title: "Finalist Announcement",
    date: "26 March",
    dateStart: new Date("2025-03-26"),
    dateEnd: new Date("2025-03-26T23:59:59"),
    icon: <Megaphone size={24} />,
    desc: "Shortlisted teams will be announced. Finalists will receive confirmation and preparation guidelines for the hackathon day.",
  },
  {
    phase: "Phase 4",
    title: "Problem Statement Announcement",
    date: "27 March",
    dateStart: new Date("2025-03-27"),
    dateEnd: new Date("2025-03-27T23:59:59"),
    icon: <AlertCircle size={24} />,
    desc: "24 hours prior to the event, the official problem statements will be released. Teams get a head start to strategize and plan their approach.",
  },
  {
    phase: "Phase 5",
    title: "Hackathon Day — 6 Hour Sprint",
    date: "28 March",
    dateStart: new Date("2025-03-28"),
    dateEnd: new Date("2025-03-28T23:59:59"),
    icon: <Code size={24} />,
    desc: "The final coding sprint! 6 hours of intense building, mentoring, and innovation. Teams present their AI solutions to the judges for evaluation.",
  },
];

const getCurrentPhase = () => {
  const now = new Date();
  for (let i = 0; i < timelineData.length; i++) {
    if (now >= timelineData[i].dateStart && now <= timelineData[i].dateEnd) {
      return i;
    }
  }
  // If before first phase
  if (now < timelineData[0].dateStart) return -1;
  // If after last phase
  return timelineData.length;
};

const Timeline = () => {
  const currentPhase = getCurrentPhase();

  const getStatus = (index: number) => {
    if (index < currentPhase) return "completed";
    if (index === currentPhase) return "active";
    return "upcoming";
  };

  return (
    <PageTransition tagline="Your Journey From Idea to Impact">
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-10">
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">Event Schedule</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-6">
              Timeline
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Your journey from idea to impact
            </p>
          </AnimatedSection>

          {/* Current Phase Indicator */}
          <AnimatedSection className="max-w-3xl mx-auto mb-12">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="glass rounded-2xl p-6 text-center border"
              style={{ borderColor: "hsla(210, 100%, 50%, 0.3)" }}
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Clock size={20} className="text-primary" />
                </motion.div>
                <span className="font-display text-sm font-bold text-primary uppercase tracking-wider">Current Status</span>
              </div>
              {currentPhase >= 0 && currentPhase < timelineData.length ? (
                <div>
                  <p className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">
                    {timelineData[currentPhase].title}
                  </p>
                  <p className="text-muted-foreground text-sm">{timelineData[currentPhase].date}</p>
                  <div className="mt-3 flex items-center justify-center gap-2">
                    <motion.span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: "hsl(150 100% 45%)" }}
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span className="text-accent text-sm font-semibold">In Progress</span>
                  </div>
                </div>
              ) : currentPhase === -1 ? (
                <p className="font-display text-lg font-bold text-foreground">
                  Registrations Opening Soon!
                </p>
              ) : (
                <p className="font-display text-lg font-bold text-foreground">
                  Event Completed! 🎉
                </p>
              )}
            </motion.div>
          </AnimatedSection>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-0.5"
              style={{ background: "linear-gradient(to bottom, hsl(210 100% 50%), hsl(150 100% 45%), hsl(210 80% 55%))" }}
            />

            {timelineData.map((item, i) => {
              const status = getStatus(i);
              return (
                <AnimatedSection key={i} delay={i * 0.12}>
                  <div className={`relative flex items-start mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                      <motion.div
                        whileHover={{ scale: 1.03, y: -4 }}
                        className={`glass rounded-2xl p-6 relative ${status === "active" ? "border" : ""}`}
                        style={status === "active" ? { borderColor: "hsla(210, 100%, 50%, 0.4)", boxShadow: "0 0 20px hsla(210, 100%, 50%, 0.15)" } : {}}
                      >
                        <div className="flex items-center gap-2 mb-2" style={{ justifyContent: i % 2 === 0 ? "flex-end" : "flex-start" }}>
                          <span className="text-primary font-display text-xs font-bold uppercase tracking-wider">
                            {item.phase}
                          </span>
                          {status === "completed" && <CheckCircle size={14} className="text-accent" />}
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

                    {/* Icon dot */}
                    <div
                      className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full glass flex items-center justify-center z-10"
                      style={{
                        color: status === "completed" ? "hsl(150 100% 45%)" : status === "active" ? "hsl(210 100% 55%)" : "hsl(var(--muted-foreground))",
                        boxShadow: status === "active" ? "0 0 20px hsla(210, 100%, 50%, 0.3)" : status === "completed" ? "0 0 15px hsla(150, 100%, 45%, 0.2)" : "none",
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
