import { Children, ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  staggerChildren?: boolean;
  staggerStep?: number;
}

const EXPO_EASE = [0.16, 1, 0.3, 1] as const;

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  threshold = 0.16,
  staggerChildren = false,
  staggerStep = 0.1,
}: AnimatedSectionProps) => {
  const shouldReduceMotion = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(shouldReduceMotion);

  useEffect(() => {
    if (shouldReduceMotion) {
      setRevealed(true);
      return;
    }

    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [shouldReduceMotion, threshold]);

  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 38, filter: "blur(10px)" },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          delay,
          duration: 0.76,
          ease: EXPO_EASE,
          ...(staggerChildren
            ? {
                delayChildren: 0.04,
                staggerChildren: staggerStep,
              }
            : {}),
        },
      },
    }),
    [delay, staggerChildren, staggerStep],
  );

  const childVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          duration: 0.58,
          ease: EXPO_EASE,
        },
      },
    }),
    [],
  );

  if (shouldReduceMotion) {
    return (
      <div ref={rootRef} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={rootRef}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={revealed ? "visible" : "hidden"}
    >
      {staggerChildren
        ? Children.toArray(children).map((child, index) => (
            <motion.div key={`reveal-child-${index}`} variants={childVariants}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
};

export default AnimatedSection;
