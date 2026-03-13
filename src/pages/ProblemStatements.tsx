import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import { Lock, Sparkles, Rocket } from "lucide-react";

const ProblemStatements = () => {
  return (
    <PageTransition tagline="Something Big Is Coming...">
      <div className="min-h-screen pt-24 pb-16 flex items-center">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">Challenge Awaits</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-6">
              Problem Statements
            </h1>
          </AnimatedSection>

          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass rounded-3xl p-10 md:p-16 relative overflow-hidden"
            >
              {/* Animated lock icon */}
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
                The problem statements will be revealed 24 hours before the hackathon. Get ready to put your AI skills to the ultimate test!
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
};

export default ProblemStatements;
