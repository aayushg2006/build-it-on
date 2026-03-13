import { motion } from "framer-motion";
import { ReactNode } from "react";

const PageTransition = ({ children, tagline }: { children: ReactNode; tagline?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Entry text overlay */}
      {tagline && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.p
            className="font-display text-xl md:text-3xl font-bold text-center px-8"
            style={{ color: "hsl(210 100% 60%)" }}
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: [0, 1, 1, 0], y: 0 }}
            transition={{ duration: 1.4, times: [0, 0.2, 0.7, 1] }}
          >
            {tagline}
          </motion.p>
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default PageTransition;
