import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Leaf,
  Lock,
  Recycle,
  Rocket,
  Sparkles,
  Users,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type TrackType = "Social Issues" | "Education For All" | "Sustainability";

interface ProblemStatementData {
  id: string;
  code: string;
  tabLabel: string;
  track: TrackType;
  title: string;
  description: string[];
  requirement: string;
  outcomes: string[];
  note?: string;
  icon: LucideIcon;
}

const problemStatements: ProblemStatementData[] = [
  {
    id: "s1",
    code: "S1",
    tabLabel: "Smart LPG Crisis Distribution",
    track: "Social Issues",
    title: "Smart & Fair LPG Distribution During Crisis",
    icon: Users,
    description: [
      "During situations like supply disruptions, natural disasters, or global conflicts, LPG (cooking gas) can become limited.",
      "This leads to panic booking, shortages, unfair distribution, and black marketing. Some households book multiple cylinders while needy families do not get even one.",
      "Current systems are usually first-come-first-served and are not smart enough for crisis conditions because they do not predict demand, show live availability, or enforce fair access.",
    ],
    requirement:
      "Design a software-based solution that manages LPG distribution in a smarter and fairer way by predicting demand, reducing misuse, and ensuring equitable access.",
    outcomes: [
      "Predict LPG demand in different areas",
      "Show real-time cylinder availability",
      "Reduce panic booking and misuse",
      "Distribute cylinders based on need (fair system)",
      "Help distributors plan deliveries better",
      "Detect unusual activities like multiple bookings",
      "Provide clear updates and information to users",
    ],
  },
  {
    id: "s2",
    code: "S2",
    tabLabel: "Food Waste Redistribution",
    track: "Social Issues",
    title: "Reducing Food Waste and Improving Food Redistribution",
    icon: UtensilsCrossed,
    description: [
      "A large amount of edible food is wasted daily by restaurants and grocery stores, while many people still face hunger.",
      "In practice, this is difficult because of food-safety regulations, late-night surplus timing, limited logistics, human effort in data entry, and high transportation costs.",
    ],
    requirement:
      "Design a practical and scalable solution that enables safe, efficient, and timely redistribution of surplus food while handling perishability, legal risk, and operational feasibility.",
    outcomes: [
      "Enable easy reporting of surplus food with minimal effort",
      "Ensure food safety and reduce legal risks",
      "Optimize pickup and delivery logistics",
      "Work within real-world constraints like time, cost, and availability",
      "Provide a scalable and sustainable model for food redistribution",
    ],
  },
  {
    id: "e1",
    code: "E1",
    tabLabel: "Adaptive Learning Paths",
    track: "Education For All",
    title: "Adaptive Learning Path System for Underprivileged Students",
    icon: GraduationCap,
    description: [
      "Students from low-resource schools often lack guidance, structured paths, and access to quality support. Many rely on limited resources or self-study without knowing what to learn next.",
      "AI-generated roadmaps are often generic and may not account for weak fundamentals, changing performance, or irregular study patterns.",
      "A fixed roadmap is not enough. Students need step-by-step guidance that continuously adapts to progress, struggles, and goal changes.",
    ],
    requirement:
      "Build a software-based adaptive learning system that creates and updates personalized learning paths for low-resource environments, including support for basic devices and limited connectivity.",
    outcomes: [
      "Generate a simple learning path based on student level and goals",
      "Identify weak areas and update the path accordingly",
      "Adapt continuously based on student progress and activity",
      "Work on low-end devices with minimal internet",
      "Support simple or local-language content",
      "Provide easy-to-understand feedback and guidance",
      "Recommend next steps based on performance (not just a fixed roadmap)",
      "Handle irregular learning patterns and drop-offs",
      "Be scalable for schools or community use",
    ],
  },
  {
    id: "e2",
    code: "E2",
    tabLabel: "Inclusive AI Learning",
    track: "Education For All",
    title: "AI-Based Smart Learning System for Inclusive Education",
    icon: BookOpen,
    description: [
      "Students with visual, hearing, or learning disabilities often struggle with standard education systems.",
      "Most existing tools offer only basic support and do not adapt to each student's needs, pace, understanding, or progress.",
      "Creating accessible content in multiple formats is still time-consuming for educators and platforms.",
    ],
    requirement:
      "Build an AI-powered software solution that converts content into multiple accessible formats and adapts learning content based on student needs and learning speed.",
    outcomes: [
      "Convert content into accessible formats (audio, text, captions, visuals)",
      "Use AI (text, speech, image processing) to improve learning",
      "Adjust content based on student performance and needs",
      "Support different types of disabilities in one system",
      "Provide simple feedback and track student progress",
      "Work on basic devices with low internet",
      "Be practical and scalable for real use",
    ],
  },
  {
    id: "su1",
    code: "SU1",
    tabLabel: "Sustainable Product Recommender",
    track: "Sustainability",
    title: "Smart Sustainable Product Recommendation System",
    icon: Leaf,
    description: [
      "People often buy products without understanding their environmental impact, and it is difficult to find eco-friendly alternatives because information is unclear and labels are confusing.",
      "Sustainability is not a single fixed metric. It depends on materials, packaging, carbon impact, usability, and often incomplete or inconsistent product data.",
    ],
    requirement:
      "Build a software-based recommendation system that suggests better sustainable alternatives and clearly explains why each alternative is more sustainable.",
    outcomes: [
      "Take product input from users (name or category)",
      "Recommend eco-friendly alternatives",
      "Compare products and explain why one is more sustainable",
      "Show basic environmental impact (for example, less plastic or lower carbon footprint)",
      "Work with small or limited datasets",
      "Be simple, useful, and easy to use",
    ],
  },
  {
    id: "su2",
    code: "SU2",
    tabLabel: "Smart Waste + E-Waste",
    track: "Sustainability",
    title: "Smart Waste Collection and E-Waste Disposal Optimization",
    icon: Recycle,
    description: [
      "Urban waste management in cities like Mumbai faces inefficiencies due to static routes and limited real-time visibility.",
      "Collections are often done from fixed pickup points without dynamic planning, causing missed pickups, uneven service, and higher operating costs.",
      "Improper e-waste disposal is also growing because citizens struggle to find verified recycling centers and guidance on correct disposal methods.",
    ],
    requirement:
      "Build a software-based solution that improves waste collection efficiency and enables easy access to e-waste disposal services, with focus on intelligent routing and practical user interaction.",
    outcomes: [
      "Demonstrate optimized waste collection routes using logic, assumptions, or user inputs",
      "Allow users/societies to report waste levels or request pickups",
      "Provide an interactive map or visualization of routes and service areas",
      "Help users find or simulate nearby e-waste disposal centers with relevant details",
      "Show efficiency gains (time, cost, or coverage) using logic or simulation",
      "Clearly explain assumptions and approach used in the system",
    ],
    note: "Participants can use simulated data, user inputs, and assumptions to demonstrate their approach.",
  },
];

const trackStyles: Record<
  TrackType,
  {
    triggerState: string;
    badge: string;
    icon: string;
    border: string;
    glow: string;
  }
> = {
  "Social Issues": {
    triggerState:
      "data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:border-primary/45",
    badge: "bg-primary/15 text-primary border-primary/35",
    icon: "text-primary",
    border: "border-primary/20",
    glow: "from-primary/30 via-primary/5 to-transparent",
  },
  "Education For All": {
    triggerState:
      "data-[state=active]:bg-accent/20 data-[state=active]:text-accent data-[state=active]:border-accent/45",
    badge: "bg-accent/15 text-accent border-accent/35",
    icon: "text-accent",
    border: "border-accent/20",
    glow: "from-accent/25 via-accent/5 to-transparent",
  },
  Sustainability: {
    triggerState:
      "data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-300 data-[state=active]:border-cyan-400/45",
    badge: "bg-cyan-500/15 text-cyan-300 border-cyan-400/35",
    icon: "text-cyan-300",
    border: "border-cyan-400/20",
    glow: "from-cyan-400/25 via-cyan-400/5 to-transparent",
  },
};

const outcomeListVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.08,
    },
  },
};

const outcomeItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

const contentStaggerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const contentItemVariants = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.42, ease: [0.16, 1, 0.3, 1] },
  },
};

const tabContentSlideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction === 0 ? 0 : direction > 0 ? 72 : -72,
    filter: "blur(8px)",
  }),
  center: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction === 0 ? 0 : direction > 0 ? -72 : 72,
    filter: "blur(6px)",
    transition: { duration: 0.34, ease: [0.16, 1, 0.3, 1] },
  }),
};

const PROBLEM_RELEASE_AT = new Date("2026-03-27T09:00:00+05:30");

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const resetInteractiveCard = (card: HTMLElement) => {
  card.style.setProperty("--card-rotate-x", "0deg");
  card.style.setProperty("--card-rotate-y", "0deg");
  card.style.setProperty("--card-spotlight-x", "50%");
  card.style.setProperty("--card-spotlight-y", "50%");
  card.removeAttribute("data-holo-active");
};

const setInteractiveCardState = (
  card: HTMLElement,
  clientX: number,
  clientY: number,
  intensity: number,
) => {
  const rect = card.getBoundingClientRect();
  const x = clamp(clientX - rect.left, 0, rect.width);
  const y = clamp(clientY - rect.top, 0, rect.height);
  const px = (x / rect.width) * 100;
  const py = (y / rect.height) * 100;
  const rotateY = ((px - 50) / 50) * intensity;
  const rotateX = ((50 - py) / 50) * intensity;

  card.setAttribute("data-holo-active", "true");
  card.style.setProperty("--card-spotlight-x", `${px.toFixed(2)}%`);
  card.style.setProperty("--card-spotlight-y", `${py.toFixed(2)}%`);
  card.style.setProperty("--card-rotate-x", `${rotateX.toFixed(2)}deg`);
  card.style.setProperty("--card-rotate-y", `${rotateY.toFixed(2)}deg`);
};

const ProblemStatements = () => {
  const [activeTab, setActiveTab] = useState(problemStatements[0].id);
  const [tabSlideDirection, setTabSlideDirection] = useState(0);
  const [interactiveCardElement, setInteractiveCardElement] = useState<HTMLElement | null>(null);
  const [currentTime, setCurrentTime] = useState(() => new Date());

  const activeProblem = useMemo(
    () => problemStatements.find((item) => item.id === activeTab) ?? problemStatements[0],
    [activeTab],
  );

  const style = trackStyles[activeProblem.track];
  const ActiveIcon = activeProblem.icon;
  const isProblemStatementsReleased = currentTime.getTime() >= PROBLEM_RELEASE_AT.getTime();

  const interactiveCardRef = useCallback((node: HTMLElement | null) => {
    setInteractiveCardElement(node);
  }, []);

  const getTabIndex = useCallback((tabId: string) => {
    return problemStatements.findIndex((statement) => statement.id === tabId);
  }, []);

  const switchToTab = useCallback(
    (nextTabId: string) => {
      if (nextTabId === activeTab) return;

      const currentIndex = getTabIndex(activeTab);
      const nextIndex = getTabIndex(nextTabId);
      if (currentIndex === -1 || nextIndex === -1) return;

      setTabSlideDirection(nextIndex > currentIndex ? 1 : -1);
      setActiveTab(nextTabId);
    },
    [activeTab, getTabIndex],
  );

  const shiftTabBy = useCallback(
    (offset: number) => {
      const currentIndex = getTabIndex(activeTab);
      if (currentIndex === -1) return;

      const nextIndex = clamp(currentIndex + offset, 0, problemStatements.length - 1);
      if (nextIndex === currentIndex) return;

      setTabSlideDirection(offset > 0 ? 1 : -1);
      setActiveTab(problemStatements[nextIndex].id);
    },
    [activeTab, getTabIndex],
  );

  useEffect(() => {
    const card = interactiveCardElement;
    if (!card || typeof window === "undefined") return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      resetInteractiveCard(card);
      return;
    }

    let frameId = 0;
    let touchResetTimeout = 0;
    let touchStartX = 0;
    let touchStartY = 0;
    let touchLastX = 0;
    let touchLastY = 0;

    const updateWithRaf = (clientX: number, clientY: number, intensity = 8.5) => {
      if (frameId) cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        setInteractiveCardState(card, clientX, clientY, intensity);
      });
    };

    const onMouseEnter = (event: MouseEvent) => {
      if (touchResetTimeout) {
        window.clearTimeout(touchResetTimeout);
        touchResetTimeout = 0;
      }
      updateWithRaf(event.clientX, event.clientY, 8.5);
    };

    const onMouseMove = (event: MouseEvent) => {
      updateWithRaf(event.clientX, event.clientY, 8.5);
    };

    const onMouseLeave = () => {
      if (frameId) cancelAnimationFrame(frameId);
      resetInteractiveCard(card);
    };

    const onTouchStart = (event: TouchEvent) => {
      if (touchResetTimeout) {
        window.clearTimeout(touchResetTimeout);
        touchResetTimeout = 0;
      }
      const touch = event.touches[0];
      if (!touch) return;
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
      touchLastX = touch.clientX;
      touchLastY = touch.clientY;
      updateWithRaf(touch.clientX, touch.clientY, 11);
    };

    const onTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;
      touchLastX = touch.clientX;
      touchLastY = touch.clientY;
      updateWithRaf(touch.clientX, touch.clientY, 11);
    };

    const onTouchEnd = () => {
      const deltaX = touchLastX - touchStartX;
      const deltaY = touchLastY - touchStartY;
      const horizontalSwipe =
        Math.abs(deltaX) > 58 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2;

      if (horizontalSwipe) {
        if (deltaX < 0) {
          shiftTabBy(1);
        } else {
          shiftTabBy(-1);
        }
      }

      if (frameId) cancelAnimationFrame(frameId);
      touchResetTimeout = window.setTimeout(() => {
        resetInteractiveCard(card);
      }, 140);
    };

    card.addEventListener("mouseenter", onMouseEnter);
    card.addEventListener("mousemove", onMouseMove);
    card.addEventListener("mouseleave", onMouseLeave);
    card.addEventListener("touchstart", onTouchStart, { passive: true });
    card.addEventListener("touchmove", onTouchMove, { passive: true });
    card.addEventListener("touchend", onTouchEnd, { passive: true });
    card.addEventListener("touchcancel", onTouchEnd, { passive: true });

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      if (touchResetTimeout) window.clearTimeout(touchResetTimeout);

      card.removeEventListener("mouseenter", onMouseEnter);
      card.removeEventListener("mousemove", onMouseMove);
      card.removeEventListener("mouseleave", onMouseLeave);
      card.removeEventListener("touchstart", onTouchStart);
      card.removeEventListener("touchmove", onTouchMove);
      card.removeEventListener("touchend", onTouchEnd);
      card.removeEventListener("touchcancel", onTouchEnd);

      resetInteractiveCard(card);
    };
  }, [interactiveCardElement, shiftTabBy]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const intervalId = window.setInterval(() => {
      setCurrentTime(new Date());
    }, 10000);

    return () => window.clearInterval(intervalId);
  }, []);

  if (!isProblemStatementsReleased) {
    return (
      <PageTransition tagline="Something Big Is Coming...">
        <div className="min-h-screen pt-24 pb-16 flex items-center">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
                Challenge Awaits
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-6">
                Problem Statements
              </h1>
            </AnimatedSection>

            <AnimatedSection className="max-w-2xl mx-auto text-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="card glass rounded-3xl p-10 md:p-16 relative overflow-hidden"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="mb-8"
                >
                  <Lock size={64} className="text-primary mx-auto" />
                </motion.div>

                <h2 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-2 drop-shadow-[0_0_20px_rgba(0,180,255,0.4)]">
                  TBA
                </h2>
                <p className="font-display text-sm md:text-base text-primary uppercase tracking-[0.3em] font-semibold mb-8">
                  (To Be Announced)
                </p>

                <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-md mx-auto">
                  The problem statements will be revealed 24 hours before the Buildathon. Get
                  ready to put your AI skills to the ultimate test!
                </p>

                <motion.div
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-sm"
                  style={{ color: "hsl(210 100% 60%)" }}
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles size={16} />
                  <span className="font-display tracking-wider">Stay Tuned for the Big Reveal</span>
                </motion.div>

                <div className="mt-8 pt-6 border-t border-border/30">
                  <motion.p
                    className="text-muted-foreground text-sm italic flex items-center justify-center gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Rocket size={16} className="text-accent" />
                    "The best solutions come from the most unexpected challenges."
                  </motion.p>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition tagline="Real Problems. AI-First Solutions.">
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-8 md:mb-10">
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
              Hackathon Challenges
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-4">
              Problem Statements
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto">
              Six real-world challenges. One weekend to build. Choose a track below and find the problem your team was meant to solve.
            </p>
          </AnimatedSection>

          <AnimatedSection className="max-w-6xl mx-auto">
            <Tabs value={activeTab} onValueChange={switchToTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 xl:grid-cols-6 h-auto gap-2 bg-transparent p-0">
                {problemStatements.map((item) => {
                  const Icon = item.icon;
                  const itemStyle = trackStyles[item.track];
                  const isActive = activeTab === item.id;

                  return (
                    <TabsTrigger
                      key={item.id}
                      value={item.id}
                      className={`relative h-auto min-h-[86px] w-full overflow-hidden rounded-2xl border border-border/60 bg-card/40 px-3 py-3 text-left !whitespace-normal !items-start !justify-start transition-all duration-300 hover:-translate-y-0.5 hover:bg-card/70 hover:border-border ${itemStyle.triggerState}`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="active-problem-tab-indicator"
                          className="pointer-events-none absolute inset-0 rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/18 via-primary/8 to-transparent"
                          transition={{ type: "spring", bounce: 0.25, duration: 0.55 }}
                        />
                      )}

                      <motion.div
                        className="relative z-10 flex w-full flex-col items-start gap-1.5"
                        animate={isActive ? { y: [-1, 0], opacity: [0.8, 1] } : { y: 0, opacity: 0.94 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                      >
                        <div className="flex items-center gap-2">
                          <Icon size={15} className={itemStyle.icon} />
                          <span className="font-display text-xs sm:text-sm leading-none">
                            {item.code}
                          </span>
                        </div>
                        <p className="w-full text-[11px] sm:text-xs leading-[1.3] text-muted-foreground text-left break-words">
                          {item.tabLabel}
                        </p>
                      </motion.div>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </Tabs>

            <p className="mt-3 text-[11px] text-muted-foreground text-center md:hidden">
              Swipe left or right on the statement card to change tabs.
            </p>

            <div className="mt-6 md:mt-8">
              <AnimatePresence mode="wait" custom={tabSlideDirection}>
                <motion.article
                  key={activeProblem.id}
                  custom={tabSlideDirection}
                  variants={tabContentSlideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  ref={interactiveCardRef}
                  data-local-holo="true"
                  className={`card glass rounded-3xl p-5 md:p-8 lg:p-10 border ${style.border} relative overflow-hidden`}
                  style={{ touchAction: "pan-y" }}
                >
                  <motion.div
                    className={`pointer-events-none absolute -right-24 -top-28 h-64 w-64 rounded-full bg-gradient-to-br ${style.glow} blur-3xl`}
                    animate={{ scale: [1, 1.14, 1], x: [0, -14, 0], y: [0, 10, 0], opacity: [0.3, 0.65, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-primary/10 blur-3xl"
                    animate={{ scale: [1, 1.1, 1], x: [0, 10, 0], opacity: [0.22, 0.42, 0.22] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.35 }}
                  />

                  <motion.div
                    className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary/15 via-accent/90 to-primary/15"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: [0, 1, 0.65] }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    style={{ transformOrigin: "left center" }}
                  />

                  <motion.div
                    className="relative z-10"
                    variants={contentStaggerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div variants={contentItemVariants} className="flex flex-wrap items-center gap-2 mb-4">
                      <span
                        className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold ${style.badge}`}
                      >
                        <Sparkles size={13} />
                        {activeProblem.code}
                      </span>
                      <span className="inline-flex items-center rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs text-muted-foreground">
                        Track: {activeProblem.track}
                      </span>
                    </motion.div>

                    <motion.div variants={contentItemVariants} className="flex items-start gap-3 mb-5">
                      <div className="mt-1 rounded-xl border border-border/60 bg-card/60 p-2.5">
                        <ActiveIcon size={20} className={style.icon} />
                      </div>
                      <motion.h2
                        className="font-display text-2xl md:text-3xl font-bold leading-tight"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.1 }}
                      >
                        {activeProblem.title}
                      </motion.h2>
                    </motion.div>

                    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                      <motion.section variants={contentItemVariants} className="space-y-5">
                        <motion.div variants={contentItemVariants}>
                          <h3 className="font-display text-base md:text-lg text-foreground mb-3">
                            Problem Description
                          </h3>
                          <div className="space-y-3">
                            {activeProblem.description.map((line, idx) => (
                              <motion.p
                                key={`${activeProblem.id}-desc-${idx}`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.12 + idx * 0.06 }}
                                className="text-sm md:text-base leading-relaxed text-foreground/90"
                              >
                                {line}
                              </motion.p>
                            ))}
                          </div>
                        </motion.div>

                        <motion.div
                          variants={contentItemVariants}
                          className="rounded-2xl border border-border/60 bg-card/40 p-4 md:p-5"
                        >
                          <h3 className="font-display text-sm md:text-base text-primary mb-2">
                            Participant Requirement
                          </h3>
                          <p className="text-sm md:text-base text-foreground/90 leading-relaxed">
                            {activeProblem.requirement}
                          </p>
                        </motion.div>
                      </motion.section>

                      <motion.aside
                        variants={contentItemVariants}
                        className="rounded-2xl border border-border/60 bg-card/45 p-4 md:p-5"
                      >
                        <h3 className="font-display text-base md:text-lg text-foreground mb-4">
                          Expected Outcome
                        </h3>
                        <motion.ul
                          className="space-y-3"
                          variants={outcomeListVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          {activeProblem.outcomes.map((item, idx) => (
                            <motion.li
                              key={`${activeProblem.id}-outcome-${idx}`}
                              variants={outcomeItemVariants}
                              className="flex items-start gap-2.5 text-sm md:text-[15px] text-foreground/90 leading-relaxed"
                            >
                              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" />
                              <span>{item}</span>
                            </motion.li>
                          ))}
                        </motion.ul>

                        {activeProblem.note && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35, delay: 0.18 }}
                            className="mt-5 rounded-xl border border-primary/25 bg-primary/10 p-3.5"
                          >
                            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                              {activeProblem.note}
                            </p>
                          </motion.div>
                        )}
                      </motion.aside>
                    </div>
                  </motion.div>
                </motion.article>
              </AnimatePresence>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </PageTransition>
  );
};

export default ProblemStatements;
