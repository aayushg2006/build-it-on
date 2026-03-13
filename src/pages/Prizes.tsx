import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Trophy, Medal, Award, Gift } from "lucide-react";

const Prizes = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">Rewards</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-6">
            Prizes & Awards
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Exciting prizes await the most innovative AI solutions
          </p>
        </AnimatedSection>

        {/* Total Prize Pool */}
        <AnimatedSection className="text-center mb-16">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block glass rounded-3xl px-12 py-8 glow-primary"
          >
            <Gift size={40} className="text-primary mx-auto mb-3" />
            <p className="text-muted-foreground text-sm font-display uppercase tracking-wider mb-2">Total Prize Pool</p>
            <p className="font-display text-5xl md:text-6xl font-bold text-gradient">₹15,000+</p>
          </motion.div>
        </AnimatedSection>

        {/* Prize Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {[
            {
              place: "1st Place",
              prize: "₹7,000",
              icon: <Trophy size={40} />,
              color: "from-yellow-400/20 to-yellow-600/10",
              iconColor: "text-yellow-400",
              borderColor: "border-yellow-400/30",
              desc: "Winner takes home the grand prize along with certificates and mentorship opportunities.",
            },
            {
              place: "2nd Place",
              prize: "₹5,000",
              icon: <Medal size={40} />,
              color: "from-gray-300/20 to-gray-400/10",
              iconColor: "text-gray-300",
              borderColor: "border-gray-300/30",
              desc: "Runner-up receives a substantial prize with recognition and certificates.",
            },
            {
              place: "3rd Place",
              prize: "₹3,000",
              icon: <Award size={40} />,
              color: "from-amber-600/20 to-amber-700/10",
              iconColor: "text-amber-600",
              borderColor: "border-amber-600/30",
              desc: "Second runner-up is awarded for their innovative contribution and effort.",
            },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -12, scale: 1.03 }}
                className={`glass rounded-3xl p-8 text-center h-full border ${item.borderColor} relative overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${item.color} opacity-50`} />
                <div className="relative z-10">
                  <div className={`${item.iconColor} mx-auto mb-4`}>{item.icon}</div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{item.place}</h3>
                  <p className="font-display text-4xl font-bold text-gradient mb-4">{item.prize}</p>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Additional Prizes */}
        <AnimatedSection className="max-w-3xl mx-auto">
          <div className="glass rounded-2xl p-8 text-center">
            <h3 className="font-display text-xl font-bold text-foreground mb-4">Additional Perks</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
              {["Certificates for All", "Mentorship Access", "Networking", "Swag & Goodies"].map((perk, i) => (
                <div key={i} className="bg-muted/30 rounded-xl p-4">
                  <p className="font-medium text-foreground">{perk}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Prizes;
