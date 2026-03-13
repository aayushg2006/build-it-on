import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { BookOpen, Leaf, Brain, Globe, Lightbulb, Recycle } from "lucide-react";

const Tracks = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">Hackathon Tracks</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-6">
            Choose Your Track
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Build AI-powered solutions in one of two impactful tracks
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Education Track */}
          <AnimatedSection delay={0.1}>
            <motion.div
              whileHover={{ y: -8 }}
              className="glass rounded-3xl p-8 md:p-10 h-full border-primary/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-glow-blue/5 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-glow-blue/20 flex items-center justify-center mb-6">
                  <BookOpen size={32} className="text-glow-blue" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Education For All
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Leverage AI to break barriers in education. Build solutions that make learning accessible,
                  personalized, and effective for everyone regardless of their background, location, or abilities.
                </p>
                <div className="space-y-4">
                  <h4 className="font-display text-sm font-bold text-primary uppercase tracking-wider">Problem Areas</h4>
                  {[
                    { icon: <Brain size={18} />, text: "AI-powered personalized learning platforms" },
                    { icon: <Globe size={18} />, text: "Multilingual education tools for rural areas" },
                    { icon: <Lightbulb size={18} />, text: "Smart tutoring systems for underprivileged students" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-glow-blue mt-0.5">{item.icon}</span>
                      <span className="text-sm">{item.text}</span>
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
              className="glass rounded-3xl p-8 md:p-10 h-full border-accent/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                  <Leaf size={32} className="text-accent" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Sustainability
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Use AI to tackle environmental challenges. Create innovative solutions that promote
                  sustainable practices, reduce waste, and help build a greener future for generations to come.
                </p>
                <div className="space-y-4">
                  <h4 className="font-display text-sm font-bold text-accent uppercase tracking-wider">Problem Areas</h4>
                  {[
                    { icon: <Recycle size={18} />, text: "AI waste management & recycling optimization" },
                    { icon: <Leaf size={18} />, text: "Smart energy consumption monitoring systems" },
                    { icon: <Globe size={18} />, text: "Carbon footprint tracking & reduction tools" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-accent mt-0.5">{item.icon}</span>
                      <span className="text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
