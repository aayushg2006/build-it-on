import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import { BookOpen, Leaf, Users, Brain, Globe, Lightbulb, Recycle, Heart, Shield } from "lucide-react";

const Tracks = () => {
  return (
    <PageTransition tagline="Choose Your Track • Build With AI">
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">Hackathon Tracks</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-6">
              Choose Your Track
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Build AI-powered solutions in one of three impactful tracks
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Education Track */}
            <AnimatedSection delay={0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="glass rounded-3xl p-7 md:p-8 h-full relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl" style={{ background: "hsla(210, 100%, 50%, 0.05)" }} />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: "hsla(210, 100%, 50%, 0.15)" }}>
                    <BookOpen size={28} style={{ color: "hsl(210 100% 55%)" }} />
                  </div>
                  <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                    Education For All
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-5 text-sm">
                    Leverage AI to break barriers in education. Build solutions that make learning accessible,
                    personalized, and effective for everyone.
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-display text-xs font-bold uppercase tracking-wider" style={{ color: "hsl(210 100% 55%)" }}>Problem Areas</h4>
                    {[
                      { icon: <Brain size={16} />, text: "AI-powered personalized learning" },
                      { icon: <Globe size={16} />, text: "Multilingual education tools" },
                      { icon: <Lightbulb size={16} />, text: "Smart tutoring systems" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-muted-foreground">
                        <span className="mt-0.5" style={{ color: "hsl(210 100% 55%)" }}>{item.icon}</span>
                        <span className="text-xs">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Sustainability Track */}
            <AnimatedSection delay={0.2}>
              <motion.div
                whileHover={{ y: -8 }}
                className="glass rounded-3xl p-7 md:p-8 h-full relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl" style={{ background: "hsla(150, 100%, 45%, 0.05)" }} />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: "hsla(150, 100%, 45%, 0.15)" }}>
                    <Leaf size={28} className="text-accent" />
                  </div>
                  <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                    Sustainability
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-5 text-sm">
                    Use AI to tackle environmental challenges. Create solutions that promote sustainable practices
                    and build a greener future.
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-display text-xs font-bold text-accent uppercase tracking-wider">Problem Areas</h4>
                    {[
                      { icon: <Recycle size={16} />, text: "AI waste management optimization" },
                      { icon: <Leaf size={16} />, text: "Smart energy monitoring" },
                      { icon: <Globe size={16} />, text: "Carbon footprint tracking" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-muted-foreground">
                        <span className="text-accent mt-0.5">{item.icon}</span>
                        <span className="text-xs">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Social Issues Track */}
            <AnimatedSection delay={0.3}>
              <motion.div
                whileHover={{ y: -8 }}
                className="glass rounded-3xl p-7 md:p-8 h-full relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl" style={{ background: "hsla(280, 80%, 50%, 0.05)" }} />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: "hsla(210, 80%, 55%, 0.15)" }}>
                    <Heart size={28} className="text-primary" />
                  </div>
                  <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                    Social Issues
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-5 text-sm">
                    Harness AI to address pressing social challenges. Build tools that empower communities
                    and drive positive social change.
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-display text-xs font-bold text-primary uppercase tracking-wider">Problem Areas</h4>
                    {[
                      { icon: <Shield size={16} />, text: "Public safety & welfare systems" },
                      { icon: <Users size={16} />, text: "Community health solutions" },
                      { icon: <Heart size={16} />, text: "Accessibility & inclusion tools" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-muted-foreground">
                        <span className="text-primary mt-0.5">{item.icon}</span>
                        <span className="text-xs">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Tracks;
