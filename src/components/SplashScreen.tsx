import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState(0); // 0=logo, 1=text, 2=exit

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 800);
    const t2 = setTimeout(() => setPhase(2), 2200);
    const t3 = setTimeout(() => onComplete(), 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 2 && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "hsl(210 40% 4%)" }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Animated rings */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border"
              style={{
                width: 200 + i * 150,
                height: 200 + i * 150,
                borderColor: `rgba(0, 220, 200, ${0.15 - i * 0.04})`,
              }}
              initial={{ scale: 0, opacity: 0, rotate: 0 }}
              animate={{
                scale: [0, 1.2, 1],
                opacity: [0, 0.6, 0.2],
                rotate: 360,
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                rotate: { duration: 8 + i * 4, repeat: Infinity, ease: "linear" },
              }}
            />
          ))}

          {/* Particles burst */}
          {Array.from({ length: 20 }).map((_, i) => {
            const angle = (i / 20) * Math.PI * 2;
            const dist = 120 + Math.random() * 80;
            return (
              <motion.div
                key={`p-${i}`}
                className="absolute w-1.5 h-1.5 rounded-full"
                style={{ background: `rgba(${i % 2 ? "0,220,200" : "80,255,150"}, 0.8)` }}
                initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                animate={{
                  x: Math.cos(angle) * dist,
                  y: Math.sin(angle) * dist,
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              />
            );
          })}

          {/* Glowing backdrop pulse */}
          <motion.div
            className="absolute w-80 h-80 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(0,220,200,0.2) 0%, transparent 70%)",
            }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Logo */}
          <motion.img
            src={logo}
            alt="Build It On"
            className="w-32 h-32 md:w-44 md:h-44 relative z-10 drop-shadow-2xl"
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          />

          {/* Text reveal */}
          <motion.div
            className="relative z-10 mt-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-display text-3xl md:text-5xl font-bold text-gradient">
              Build It On
            </h1>
            <motion.p
              className="text-primary/80 font-display text-xs md:text-sm tracking-[0.3em] uppercase mt-2"
              initial={{ opacity: 0 }}
              animate={phase >= 1 ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              AI For Social Impact
            </motion.p>
          </motion.div>

          {/* Bottom loading bar */}
          <motion.div
            className="absolute bottom-12 w-48 h-0.5 rounded-full overflow-hidden"
            style={{ background: "rgba(0,220,200,0.1)" }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, hsl(175 70% 45%), hsl(140 60% 45%))" }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
