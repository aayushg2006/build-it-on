import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import { Gift, Award, Trophy, Star } from "lucide-react";

const Prizes = () => {
  return (
    <PageTransition tagline="Amazing Rewards Await You">
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">What You Win</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-6">
              Rewards
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Exciting rewards for the most innovative AI solutions
            </p>
          </AnimatedSection>

          {/* Total Prize Pool */}
          <AnimatedSection className="text-center mb-16">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-block glass rounded-3xl px-12 py-10"
              style={{ boxShadow: "0 0 40px hsla(210, 100%, 50%, 0.15)" }}
            >
              <Trophy size={48} className="text-primary mx-auto mb-4" />
              <p className="text-muted-foreground text-sm font-display uppercase tracking-wider mb-3">Total Prize Pool</p>
              <p className="font-display text-6xl md:text-8xl font-bold text-primary" style={{ textShadow: "0 0 30px hsla(210, 100%, 50%, 0.6)" }}>₹10,000</p>
              <p className="text-muted-foreground text-sm mt-3">+ Exciting Goodies & Certificates</p>
            </motion.div>
          </AnimatedSection>

          {/* Reward Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {[
              {
                icon: <Award size={36} />,
                title: "Certificates",
                desc: "All participants will receive official certificates of participation recognizing their contribution and effort.",
                color: "210 100% 55%",
              },
              {
                icon: <Gift size={36} />,
                title: "Goodies & Swag",
                desc: "Exciting goodies, merchandise, and swag packs for participants to take home as memories.",
                color: "150 100% 45%",
              },
              {
                icon: <Star size={36} />,
                title: "Recognition",
                desc: "Top teams get recognized, featured, and gain networking opportunities with industry mentors.",
                color: "210 80% 60%",
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="glass rounded-3xl p-8 text-center h-full"
                >
                  <div className="mx-auto mb-4" style={{ color: `hsl(${item.color})` }}>
                    {item.icon}
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Prizes;
