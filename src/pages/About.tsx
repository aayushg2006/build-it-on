import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import BrandName from "@/components/BrandName";
import { Target, Lightbulb, Users, Heart, Brain, GraduationCap, Rocket } from "lucide-react";

const objectives = [
  "Encourage students to build AI-based solutions",
  "Promote innovation for social and sustainability problems",
  "Improve technical and teamwork skills",
  "Provide hands-on learning experience",
  "Support problem solving in education and society",
];

const expectedOutcomes = [
  "Increased awareness of AI technologies",
  "Practical project development experience",
  "Better teamwork and innovation skills",
  "Solutions for real-world problems",
];

const committeeMembers = [
  { name: "Chairperson", designation: "Event Head", initials: "CH" },
  { name: "Vice Chairperson", designation: "Co-Event Head", initials: "VC" },
  { name: "Technical Lead", designation: "Tech Head", initials: "TL" },
  { name: "Design Lead", designation: "Creative Head", initials: "DL" },
  { name: "PR Lead", designation: "Outreach Head", initials: "PR" },
  { name: "Logistics Lead", designation: "Operations Head", initials: "LG" },
];

const About = () => {
  return (
    <PageTransition tagline="Innovate - Build - Impact">
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">About The Event</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <BrandName />
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              AI For Social Impact & Sustainability — A structured hackathon initiative organized by the Extension Work Team (EWT)
              aimed at promoting innovation, technical learning, and social responsibility among students.
            </p>
          </AnimatedSection>

          {/* What is Build-it ON */}
          <AnimatedSection className="max-w-4xl mx-auto mb-16">
            <div className="card glass-strong rounded-3xl p-8 md:p-12 border border-primary/20 shadow-[0_0_30px_hsla(210,100%,50%,0.1)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Brain size={24} className="text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  What is <BrandName />?
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <BrandName /> is a structured hackathon initiative organized by the Extension Work Team (EWT) aimed at promoting innovation,
                technical learning, and social responsibility among students. The event focuses on developing Artificial Intelligence based
                solutions to address real-world challenges related to society, sustainability, and education.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The hackathon will provide a collaborative platform where students can work in teams, apply their knowledge, and build practical
                solutions using modern AI tools and technologies. This initiative supports the overall development of students by encouraging
                creativity, teamwork, and problem-solving skills while contributing towards meaningful social impact.
              </p>
            </div>
          </AnimatedSection>

          {/* Objectives & Expected Outcomes */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
            <AnimatedSection delay={0.1}>
              <div className="card glass-strong rounded-3xl p-8 h-full border border-border/50 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Target size={24} className="text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">Objectives</h3>
                </div>
                <ul className="space-y-3">
                  {objectives.map((obj, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ background: "hsl(210 100% 55%)" }} />
                      <span>{obj}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="card glass-strong rounded-3xl p-8 h-full border border-border/50 hover:border-accent/30 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Rocket size={24} className="text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">Expected Outcomes</h3>
                </div>
                <ul className="space-y-3">
                  {expectedOutcomes.map((outcome, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ background: "hsl(150 100% 45%)" }} />
                      <span>{outcome}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-20">
            {[
              { icon: <GraduationCap size={24} />, title: "6-Hour Sprint", desc: "Intensive coding" },
              { icon: <Users size={24} />, title: "Team-Based", desc: "Collaborate & build" },
              { icon: <Lightbulb size={24} />, title: "AI-Powered", desc: "Modern AI tools" },
              { icon: <Heart size={24} />, title: "Social Impact", desc: "Real-world solutions" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="card glass rounded-2xl p-5 text-center"
                >
                  <div className="text-primary mx-auto mb-3 flex justify-center">{item.icon}</div>
                  <h4 className="font-display text-sm font-bold text-foreground mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-xs">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Organizing Committee */}
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient mb-4">
              Organizing Committee
            </h2>
            <p className="text-muted-foreground">
              The team behind <BrandName />
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {committeeMembers.map((member, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="card glass rounded-2xl p-6 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 text-primary font-display font-bold text-xl">
                    {member.initials}
                  </div>
                  <h4 className="font-display text-sm font-bold text-foreground mb-1">{member.name}</h4>
                  <p className="text-muted-foreground text-xs">{member.designation}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
