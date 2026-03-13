import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import { Gift, Award, Trophy, Star } from "lucide-react";

const PrizePoolCounter = ({ targetValue }: { targetValue: number }) => {
  const counterRef = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(counterRef, { once: true, amount: 0.6 });
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    if (shouldReduceMotion) {
      setDisplayValue(targetValue);
      return;
    }

    const controls = animate(0, targetValue, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, shouldReduceMotion, targetValue]);

  const formattedValue = `${displayValue}+`;
  const staticValue = `${targetValue}+`;

  return (
    <motion.p
      ref={counterRef}
      className="font-display text-6xl md:text-8xl font-bold text-primary tabular-nums tracking-tight"
      style={{ textShadow: "0 0 30px hsla(210, 100%, 50%, 0.6)" }}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12, filter: "blur(10px)" }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.6 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="relative inline-block">
        <span className="invisible">{staticValue}</span>
        <span className="absolute inset-0">{formattedValue}</span>
      </span>
    </motion.p>
  );
};

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
              className="card inline-block glass rounded-3xl px-12 py-10"
              style={{ boxShadow: "0 0 40px hsla(210, 100%, 50%, 0.15)" }}
            >
              <Trophy size={48} className="text-primary mx-auto mb-4" />
              <p className="text-muted-foreground text-sm font-display uppercase tracking-wider mb-3">Total Prize Pool</p>
              <PrizePoolCounter targetValue={10000} />
              <p className="text-muted-foreground text-sm mt-3">&amp; Exciting Goodies and Certificates</p>
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
                  className="card glass rounded-3xl p-8 text-center h-full"
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
