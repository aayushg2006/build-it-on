import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 800);
    const t2 = setTimeout(() => setPhase(2), 2400);
    const t3 = setTimeout(() => onComplete(), 3200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 2 && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-background"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Neural network lines */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border"
              style={{
                width: 180 + i * 140,
                height: 180 + i * 140,
                borderColor: `rgba(0, 120, 255, ${0.12 - i * 0.03})`,
              }}
              initial={{ scale: 0, opacity: 0, rotate: 0 }}
              animate={{
                scale: [0, 1.2, 1],
                opacity: [0, 0.5, 0.15],
                rotate: i % 2 === 0 ? 360 : -360,
              }}
              transition={{
                duration: 2,
                delay: i * 0.15,
                rotate: { duration: 10 + i * 3, repeat: Infinity, ease: "linear" },
              }}
            />
          ))}

          {/* Particles burst */}
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i / 24) * Math.PI * 2;
            const dist = 100 + Math.random() * 100;
            return (
              <motion.div
                key={`p-${i}`}
                className="absolute w-1.5 h-1.5 rounded-full"
                style={{ background: `rgba(${i % 3 === 0 ? "0,120,255" : i % 3 === 1 ? "0,200,180" : "50,255,150"}, 0.9)` }}
                initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                animate={{
                  x: Math.cos(angle) * dist,
                  y: Math.sin(angle) * dist,
                  opacity: [0, 1, 0],
                  scale: [0, 2, 0],
                }}
                transition={{ duration: 1.8, delay: 0.4, ease: "easeOut" }}
              />
            );
          })}

          {/* Glowing backdrop */}
          <motion.div
            className="absolute w-96 h-96 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(0,120,255,0.15) 0%, transparent 70%)",
            }}
            animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />

          {/* Text reveal - Build-it ON */}
          <motion.div
            className="relative z-10 text-center"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          >
            <h1 className="font-display text-4xl md:text-6xl font-bold">
              <span style={{ color: "hsl(210 100% 50%)" }}>Build-it</span>{" "}
              <span style={{ color: "hsl(150 100% 50%)" }}>ON</span>
            </h1>
          </motion.div>

          <motion.div
            className="relative z-10 mt-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <motion.p
              className="font-display text-xs md:text-sm tracking-[0.3em] uppercase"
              style={{ color: "hsl(210 80% 60%)" }}
              initial={{ opacity: 0 }}
              animate={phase >= 1 ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              AI For Social Impact & Sustainability
            </motion.p>
          </motion.div>

          {/* Loading bar */}
          <motion.div
            className="absolute bottom-12 w-48 h-0.5 rounded-full overflow-hidden"
            style={{ background: "rgba(0,120,255,0.1)" }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, hsl(210 100% 50%), hsl(150 100% 50%))" }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
