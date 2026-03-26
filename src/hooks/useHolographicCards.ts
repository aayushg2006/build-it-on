import { useEffect } from "react";

const DEFAULT_CARD_SELECTOR = ".card";

const applyResetState = (element: HTMLElement) => {
  element.style.setProperty("--card-rotate-x", "0deg");
  element.style.setProperty("--card-rotate-y", "0deg");
  element.style.setProperty("--card-spotlight-x", "50%");
  element.style.setProperty("--card-spotlight-y", "50%");
  element.removeAttribute("data-holo-active");
};

const useHolographicCards = (scopeKey: string, selector = DEFAULT_CARD_SELECTOR) => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (reduceMotion || !canHover) {
      return;
    }

    const cards = Array.from(document.querySelectorAll<HTMLElement>(selector)).filter(
      (card) => card.dataset.localHolo !== "true",
    );
    if (cards.length === 0) return;

    const cleanups = cards.map((card) => {
      applyResetState(card);
      let frameId = 0;

      const onPointerEnter = () => {
        card.setAttribute("data-holo-active", "true");
      };

      const onPointerMove = (event: PointerEvent) => {
        if (frameId) cancelAnimationFrame(frameId);

        frameId = requestAnimationFrame(() => {
          const rect = card.getBoundingClientRect();
          const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
          const y = Math.max(0, Math.min(event.clientY - rect.top, rect.height));
          const px = (x / rect.width) * 100;
          const py = (y / rect.height) * 100;
          const rotateY = ((px - 50) / 50) * 7.5;
          const rotateX = ((50 - py) / 50) * 7.5;

          card.style.setProperty("--card-spotlight-x", `${px.toFixed(2)}%`);
          card.style.setProperty("--card-spotlight-y", `${py.toFixed(2)}%`);
          card.style.setProperty("--card-rotate-x", `${rotateX.toFixed(2)}deg`);
          card.style.setProperty("--card-rotate-y", `${rotateY.toFixed(2)}deg`);
        });
      };

      const onPointerLeave = () => {
        if (frameId) cancelAnimationFrame(frameId);
        applyResetState(card);
      };

      card.addEventListener("pointerenter", onPointerEnter);
      card.addEventListener("pointermove", onPointerMove);
      card.addEventListener("pointerleave", onPointerLeave);

      return () => {
        if (frameId) cancelAnimationFrame(frameId);
        card.removeEventListener("pointerenter", onPointerEnter);
        card.removeEventListener("pointermove", onPointerMove);
        card.removeEventListener("pointerleave", onPointerLeave);
        applyResetState(card);
      };
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [scopeKey, selector]);
};

export default useHolographicCards;
