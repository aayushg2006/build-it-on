import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const FALLBACK_CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

type ScrambleTextProps = {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  charset?: string;
};

const ScrambleText = ({
  text,
  className,
  delay = 0,
  duration = 820,
  charset = FALLBACK_CHARSET,
}: ScrambleTextProps) => {
  const shouldReduceMotion = useReducedMotion();
  const [renderedText, setRenderedText] = useState(text);
  const chars = useMemo(() => Array.from(text), [text]);

  useEffect(() => {
    if (shouldReduceMotion) {
      setRenderedText(text);
      return;
    }

    let frame = 0;
    let startAt = 0;
    const effectiveCharset = charset.length > 0 ? charset : FALLBACK_CHARSET;

    const tick = (time: number) => {
      if (!startAt) {
        startAt = time + delay;
      }

      if (time < startAt) {
        frame = requestAnimationFrame(tick);
        return;
      }

      const elapsed = time - startAt;
      const progress = Math.min(elapsed / duration, 1);
      const lockedChars = Math.floor(progress * chars.length);

      const next = chars
        .map((char, idx) => {
          if (char === " ") return " ";
          if (idx < lockedChars) return char;
          return effectiveCharset[Math.floor(Math.random() * effectiveCharset.length)];
        })
        .join("");

      setRenderedText(next);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setRenderedText(text);
      }
    };

    setRenderedText(
      chars
        .map((char) => {
          if (char === " ") return " ";
          return effectiveCharset[Math.floor(Math.random() * effectiveCharset.length)];
        })
        .join(""),
    );
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [chars, charset, delay, duration, shouldReduceMotion, text]);

  return (
    <span className={cn("relative inline-block align-top whitespace-pre", className)} aria-label={text}>
      <span className="invisible">{text}</span>
      <span className="absolute inset-0">{renderedText}</span>
    </span>
  );
};

export default ScrambleText;
