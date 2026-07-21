import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { RefObject } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function useSlideAnimation(
  container: RefObject<HTMLElement | null>,
  animations: Record<string, gsap.TweenVars>,
) {
  useGSAP(
    () => {
      const items = container.current?.querySelectorAll(
        "[data-animation='step']",
      );

      if (!items) return;

      const itemsWithoutBoxes = Array.from(items).filter(
        (item) => !item.classList.contains("box"),
      );

      gsap.set(itemsWithoutBoxes, {
        autoAlpha: 0,
      });

      let current = -1;

      ScrollTrigger.create({
        trigger: container.current,
        start: "top top",
        end: () => "+=" + items.length * window.innerHeight,
        pin: true,
        // markers: true,

        onUpdate(self) {
          const next = Math.floor(self.progress * items.length - 0.5);

          if (next === current) return;

          const animationId =
            items[next].getAttribute("data-animation-id") ?? "default";

          const vars: gsap.TweenVars = animations[animationId];

          gsap.to(items[next], {
            ...vars,
            duration: 0.5,
            ease: "power3.out",
          });

          current = next;
        },
      });
    },

    {
      scope: container,
    },
  );
}
