import { motion } from "framer-motion";
import { ReactNode } from "react";

const PageTransition = ({ children, tagline }: { children: ReactNode; tagline?: string }) => {
  const taglineWords = tagline ? tagline.split(" ") : [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {tagline && (
        <motion.div
          className="fixed inset-0 z-50 pointer-events-none overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.1, delay: 1.3, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ color: "hsl(210 100% 60%)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.95, 0.3] }}
            transition={{ duration: 1.5, times: [0, 0.45, 1], ease: "easeOut" }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 22% 28%, hsla(210, 100%, 58%, 0.2), transparent 55%), radial-gradient(circle at 76% 74%, hsla(150, 100%, 45%, 0.16), transparent 58%), rgba(2, 8, 20, 0.48)",
              }}
            />
          </motion.div>

          <motion.div
            className="absolute left-1/2 top-1/2 h-px w-[72vw] max-w-[940px] -translate-x-1/2 -translate-y-1/2"
            style={{
              background:
                "linear-gradient(90deg, transparent, hsla(210, 100%, 65%, 0.85), hsla(150, 100%, 45%, 0.85), transparent)",
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: [0, 1, 0.5] }}
            transition={{ duration: 1.15, ease: "easeOut", delay: 0.06 }}
          />

          <motion.div
            className="absolute left-1/2 top-1/2 h-px w-[72vw] max-w-[940px] -translate-x-1/2 -translate-y-1/2 blur-sm"
            style={{
              background:
                "linear-gradient(90deg, transparent, hsla(210, 100%, 65%, 0.45), hsla(150, 100%, 45%, 0.4), transparent)",
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: [0, 0.8, 0.25] }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.14 }}
          />

          <div className="absolute inset-0 flex items-center justify-center px-8">
            <motion.p
              className="font-display text-xl md:text-3xl font-bold text-center leading-tight flex flex-wrap justify-center gap-x-2 gap-y-1"
              style={{
                color: "hsl(210 100% 72%)",
                textShadow:
                  "0 0 24px hsla(210, 100%, 65%, 0.45), 0 0 44px hsla(150, 100%, 45%, 0.2)",
              }}
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: [0, 1, 1, 0], y: [20, 0, 0, -8] }}
              transition={{ duration: 1.55, times: [0, 0.22, 0.72, 1], ease: "easeOut" }}
            >
              {taglineWords.map((word, idx) => (
                <motion.span
                  key={`${word}-${idx}`}
                  initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
                  animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -7], filter: ["blur(6px)", "blur(0px)", "blur(0px)", "blur(2px)"] }}
                  transition={{ duration: 1.45, delay: 0.08 + idx * 0.05, times: [0, 0.24, 0.72, 1], ease: "easeOut" }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
          </div>
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 42, scale: 0.988, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.82, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default PageTransition;