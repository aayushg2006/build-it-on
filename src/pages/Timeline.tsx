import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { FileText, Search, Megaphone, AlertCircle, Code } from "lucide-react";

const timelineData = [
  {
    phase: "Phase 1",
    title: "Idea Submission",
    date: "16 March - 25 March",
    icon: <FileText size={24} />,
    desc: "Submit your innovative AI-powered solution ideas for either the Education For All or Sustainability track. Teams can register and share their project proposals.",
    status: "active",
  },
  {
    phase: "Phase 2",
    title: "Online Screening & Shortlisting",
    date: "25 March - 26 March",
    icon: <Search size={24} />,
    desc: "Our expert panel will review all submissions and shortlist the most promising ideas based on innovation, feasibility, and social impact potential.",
    status: "upcoming",
  },
  {
    phase: "Phase 3",
    title: "Finalist Announcement",
    date: "26 March",
    icon: <Megaphone size={24} />,
    desc: "Shortlisted teams will be announced. Finalists will receive confirmation and preparation guidelines for the hackathon day.",
    status: "upcoming",
  },
  {
    phase: "Phase 4",
    title: "Problem Statement Announcement",
    date: "27 March",
    icon: <AlertCircle size={24} />,
    desc: "24 hours prior to the event, the official problem statements will be released. Teams get a head start to strategize and plan their approach.",
    status: "upcoming",
  },
  {
    phase: "Phase 5",
    title: "Hackathon Day — 6 Hour Sprint",
    date: "28 March",
    icon: <Code size={24} />,
    desc: "The final coding sprint! 6 hours of intense building, mentoring, and innovation. Teams present their AI solutions to the judges for evaluation.",
    status: "upcoming",
  },
];

const Timeline = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">Event Schedule</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-6">
            Timeline
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your journey from idea to impact
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-glow-blue md:-translate-x-0.5" />

          {timelineData.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.12}>
              <div className={`relative flex items-start mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                  <motion.div
                    whileHover={{ scale: 1.03, y: -4 }}
                    className="glass rounded-2xl p-6 relative"
                  >
                    <span className="text-primary font-display text-xs font-bold uppercase tracking-wider">
                      {item.phase}
                    </span>
                    <h3 className="font-display text-lg font-bold text-foreground mt-2 mb-1">{item.title}</h3>
                    <p className="text-primary/80 font-display text-sm mb-3">{item.date}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                </div>

                {/* Icon dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-primary z-10 glow-primary">
                  {item.icon}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
