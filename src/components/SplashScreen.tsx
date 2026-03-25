import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 900);
    const t2 = setTimeout(() => setPhase(2), 2800);
    const t3 = setTimeout(() => onComplete(), 3600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 2 && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Glow */}
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(0,120,255,0.2) 0%, rgba(0,255,150,0.15) 40%, transparent 70%)",
            }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Neural Rings */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border"
              style={{
                width: 200 + i * 140,
                height: 200 + i * 140,
                borderColor: `rgba(0, 180, 255, ${0.12 - i * 0.03})`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.2, 1],
                opacity: [0, 0.4, 0.1],
                rotate: i % 2 === 0 ? 360 : -360,
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                rotate: {
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            />
          ))}

          {/* Particle Burst */}
          {Array.from({ length: 20 }).map((_, i) => {
            const angle = (i / 20) * Math.PI * 2;
            const dist = 120 + Math.random() * 80;

            return (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full"
                style={{
                  background:
                    i % 3 === 0
                      ? "#00bfff"
                      : i % 3 === 1
                      ? "#00ff99"
                      : "#ffaa00",
                }}
                initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                animate={{
                  x: Math.cos(angle) * dist,
                  y: Math.sin(angle) * dist,
                  opacity: [0, 1, 0],
                  scale: [0, 2, 0],
                }}
                transition={{ duration: 1.8, delay: 0.5 }}
              />
            );
          })}

          {/* LOGO */}
          <motion.div
            className="relative z-10 flex flex-col items-center"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <motion.img
  src="/pragatibuilditon.png"
  alt="Pragati 2.0 Build-it ON"
  className="w-[360px] md:w-[560px] lg:w-[680px] object-contain"
  initial={{ scale: 0.7 }}
  animate={{ scale: [0.7, 1.08, 1] }}
  transition={{ duration: 1.3, ease: "easeOut" }}
/>

            {/* Tagline */}
            <motion.p
              className="mt-4 text-xs md:text-sm tracking-[0.3em] uppercase text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              AI for Social Impact & Sustainability
            </motion.p>
          </motion.div>

          {/* Loading Bar */}
          <motion.div
            className="absolute bottom-12 w-56 h-[3px] rounded-full overflow-hidden"
            style={{ background: "rgba(255,255,255,0.1)" }}
          >
            <motion.div
              className="h-full"
              style={{
                background:
                  "linear-gradient(90deg, #ffaa00, #00bfff, #00ff99)",
              }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;