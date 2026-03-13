import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import { Handshake } from "lucide-react";
import { motion } from "framer-motion";

const Sponsors = () => {
  return (
    <PageTransition tagline="Our Partners in Innovation">
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">Our Partners</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-6">
              Sponsors
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Build-it ON is made possible by the generous support of our sponsors
            </p>
          </AnimatedSection>

          {[
            { tier: "Title Sponsor", sponsors: ["Coming Soon"] },
            { tier: "Gold Sponsors", sponsors: ["Coming Soon", "Coming Soon"] },
            { tier: "Silver Sponsors", sponsors: ["Coming Soon", "Coming Soon", "Coming Soon"] },
          ].map((tier, i) => (
            <AnimatedSection key={i} delay={i * 0.15} className="mb-16">
              <h3 className="font-display text-xl font-bold text-foreground text-center mb-8">{tier.tier}</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {tier.sponsors.map((s, j) => (
                  <motion.div
                    key={j}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="glass rounded-2xl p-8 w-48 h-32 flex items-center justify-center card-hover"
                  >
                    <Handshake size={32} className="text-muted-foreground/50" />
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          ))}

          <AnimatedSection className="text-center">
            <div className="glass rounded-2xl p-8 max-w-lg mx-auto">
              <h3 className="font-display text-lg font-bold text-foreground mb-3">Want to Sponsor?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Partner with us to support AI innovation for social impact
              </p>
              <a href="mailto:ewt.tcet@gmail.com" className="inline-block px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm">
                Contact Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </PageTransition>
  );
};

export default Sponsors;
