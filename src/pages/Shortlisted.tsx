import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Building2, Search, Trophy, UserRound } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type ShortlistedTeam = {
  teamName: string;
  leaderName: string;
  instituteName: string;
};

const shortlistedTeams: ShortlistedTeam[] = [
  { teamName: "Zephyrus", leaderName: "Nikhil Mishra", instituteName: "Thakur Shyamnarayan Degree College, Mumbai, Maharashtra" },
  { teamName: "Prodebuggers", leaderName: "Sampada Anil Daware", instituteName: "Sardar Patel Institute of Technology (SPIT), Mumbai" },
  { teamName: "Null Pointers", leaderName: "Aniket Gupta", instituteName: "Thakur College of Engineering and Technology (TCET), Mumbai" },
  { teamName: "Synaptic surge", leaderName: "Ayesha Lukman Shaikh", instituteName: "M.H. Saboo Siddik College Of Engineering" },
  { teamName: "BitBusters", leaderName: "Pallavi Pathak", instituteName: "Thakur Shyamanarayan Engineering College, Mumbai" },
  { teamName: "Team Mario Bros.", leaderName: "Mihir Gaonkar", instituteName: "Thakur College of Engineering & Technology (TCET), Mumbai" },
  { teamName: "Team Innovators", leaderName: "Neha", instituteName: "Vidyavardhini College of Engineering and Technology, Mumbai" },
  { teamName: "Quantum Coders", leaderName: "Kush Vinesh Mamania", instituteName: "Shri Vile Parle Kelavani Mandal's Dwarkadas J. Sanghvi College of Engineering (DJSCE), Mumbai" },
  { teamName: "Ecolytes", leaderName: "Nihita Vijay Prajapati", instituteName: "Usha Mittal Institute of Technology (UMIT), Mumbai" },
  { teamName: "Stack OverflowWale", leaderName: "Advait Raut", instituteName: "Vidyavardhini's College of Engineering and Technology, Maharashtra" },
  { teamName: "Tech Titans", leaderName: "Tanishka Ashish Patil", instituteName: "Viva Institute of Technology (VIT), Mumbai" },
  { teamName: "SAAS Coders", leaderName: "SHREYAS MIRASHI", instituteName: "Xavier Institute of Engineering" },
  { teamName: "Team Rockett", leaderName: "Ruchi Yadav", instituteName: "Thakur College of Engineering and Technology (TCET), Mumbai" },
  { teamName: "ByteAlchemy", leaderName: "Ashwath Ranjith", instituteName: "SIES GST Nerul" },
  { teamName: "Duo codes", leaderName: "Mamta Rajpurohit", instituteName: "Thakur College Of Engineering And Technology (TCET), Mumbai" },
  { teamName: "Byte Bandits", leaderName: "Soorya Srihari", instituteName: "Thakur College of Engineering and Technology (TCET), Mumbai" },
  { teamName: "The Outliers", leaderName: "Reyyan S", instituteName: "Nashik District Maratha Vidya Prasarak Samaj's Karmaveer Baburao Thakare College of Engineering (NDMVPSKBTCOE), Nashik, Maharashtra" },
  { teamName: "El Classico", leaderName: "Shreeyans Vichare", instituteName: "Shri Bhagubhai Mafatlal Polytechnic" },
  { teamName: "Hexcorp", leaderName: "Vedant Suhas Dusane", instituteName: "Thakur College of Engineering & Technology (TCET), Mumbai" },
  { teamName: "ByteAlchemy", leaderName: "Vaidehi Suhas Mandhare", instituteName: "SIES Graduate School of Technology" },
  { teamName: "MindGuard", leaderName: "Ritesh Gupta", instituteName: "Shri Vile Parle Kelavani Mandal's Dwarkadas J. Sanghvi College of Engineering (DJSCE), Mumbai" },
];

const Shortlisted = () => {
  const shouldReduceMotion = useReducedMotion();
  const [query, setQuery] = useState("");

  const filteredTeams = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return shortlistedTeams;

    return shortlistedTeams.filter(
      (team) =>
        team.teamName.toLowerCase().includes(normalizedQuery) ||
        team.leaderName.toLowerCase().includes(normalizedQuery) ||
        team.instituteName.toLowerCase().includes(normalizedQuery),
    );
  }, [query]);

  const gridVariants = shouldReduceMotion
    ? { hidden: {}, visible: {} }
    : {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
            delayChildren: 0.14,
          },
        },
      };

  const cardVariants = shouldReduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 20, scale: 0.97 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.45,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      };

  return (
    <PageTransition tagline="Celebrating The Top Teams Of Build-it ON">
      <div className="relative min-h-screen overflow-hidden pt-24 pb-16">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full blur-3xl"
          style={{ background: "hsla(210, 100%, 55%, 0.23)" }}
          animate={shouldReduceMotion ? undefined : { x: [0, 16, 0], y: [0, -20, 0], opacity: [0.65, 1, 0.65] }}
          transition={shouldReduceMotion ? undefined : { duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-20 top-1/3 h-80 w-80 rounded-full blur-3xl"
          style={{ background: "hsla(150, 100%, 45%, 0.2)" }}
          animate={shouldReduceMotion ? undefined : { x: [0, -18, 0], y: [0, 16, 0], opacity: [0.5, 0.85, 0.5] }}
          transition={shouldReduceMotion ? undefined : { duration: 7.6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container relative z-10 mx-auto px-4">
          <AnimatedSection className="mx-auto mb-10 max-w-3xl text-center">
            <motion.div
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/15 px-4 py-2 text-xs font-display uppercase tracking-[0.22em] text-primary"
              animate={shouldReduceMotion ? undefined : { boxShadow: ["0 0 0px hsla(210,100%,55%,0)", "0 0 22px hsla(210,100%,55%,0.34)", "0 0 0px hsla(210,100%,55%,0)"] }}
              transition={shouldReduceMotion ? undefined : { duration: 2.5, repeat: Infinity }}
            >
              <Trophy size={14} />
              Finalist Announcement
            </motion.div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-5">
              Shortlisted Teams
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Congratulations to the teams selected for the next stage. Search the list below and celebrate the finalists.
            </p>
          </AnimatedSection>

          <AnimatedSection className="mx-auto mb-10 max-w-2xl">
            <div className="rounded-2xl border border-primary/25 bg-card/50 p-4 backdrop-blur-xl shadow-[0_0_40px_hsla(210,100%,55%,0.12)]">
              <div className="relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/80" />
                <Input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search by team, leader, or institute..."
                  className="h-12 rounded-xl border-primary/30 bg-background/70 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus-visible:ring-primary/70"
                />
              </div>
              <p className="mt-3 text-xs md:text-sm text-muted-foreground">
                Showing <span className="font-bold text-primary">{filteredTeams.length}</span> shortlisted teams
              </p>
            </div>
          </AnimatedSection>

          {filteredTeams.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto max-w-xl rounded-2xl border border-border/60 bg-card/45 p-10 text-center backdrop-blur-xl"
            >
              <p className="font-display text-lg text-foreground mb-2">No Teams Found</p>
              <p className="text-muted-foreground text-sm">Try a different team or institute keyword.</p>
            </motion.div>
          ) : (
            <motion.div
              variants={gridVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
            >
              {filteredTeams.map((team) => (
                <motion.div
                  key={`${team.teamName}-${team.leaderName}`}
                  variants={cardVariants}
                  whileHover={shouldReduceMotion ? undefined : { y: -5, scale: 1.01 }}
                  transition={{ duration: 0.25 }}
                >
                  <Card className="card glass h-full rounded-2xl border-primary/25 bg-card/55 shadow-[0_18px_35px_-25px_hsla(210,100%,60%,0.8)]">
                    <CardContent className="p-6">
                      <div className="mb-5">
                        <div>
                          <h2 className="font-display text-xl font-bold leading-tight text-foreground">
                            {team.teamName}
                          </h2>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2.5 text-sm text-foreground/90">
                          <UserRound size={16} className="text-primary" />
                          <span>{team.leaderName}</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                          <Building2 size={16} className="text-accent" />
                          <span>{team.instituteName}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default Shortlisted;
