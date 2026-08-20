import { animate } from "framer-motion";
import { useCallback } from "react";

const DEFAULT_SCROLL_DURATION = 0.7;

export function useScrollToAnchor(duration: number = DEFAULT_SCROLL_DURATION) {
  return useCallback(
    (targetId: string) => {
      const element = document.getElementById(targetId);
      if (!element) return;

      const targetY = element.offsetTop;
      const currentY = window.scrollY;

      animate(currentY, targetY, {
        duration,
        onUpdate: (value) => {
          window.scrollTo(0, value);
        },
      });
    },
    [duration],
  );
}
