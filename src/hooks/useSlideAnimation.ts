import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef, type RefObject } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function useSlideAnimation(
  container: RefObject<HTMLElement | null>,
  animations: Record<string, gsap.TweenVars>,
) {
  const nextRef = useRef(0);

  const { contextSafe } = useGSAP(
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
    },
    { scope: container, dependencies: [] },
  );

  const handleClick = contextSafe((e: React.PointerEvent<HTMLElement>) => {
    const items = container.current?.querySelectorAll(
      "[data-animation='step']",
    );

    if (!items) return;

    const next = nextRef.current;
    const animationId =
      items[next].getAttribute("data-animation-id") ?? "default";

    const hidePreviousElement =
      items[next - 1]?.getAttribute("data-animation-hide") === "true";

    const vars: gsap.TweenVars = animations[animationId];

    gsap.to(items[next], {
      ...vars,
      duration: 0.5,
      ease: "power3.out",
      onComplete: () => {
        if (hidePreviousElement) {
          gsap.to(items[next - 1], {
            autoAlpha: 0,
            duration: 0.5,
          });
        }
      },
    });

    // e.preventDefault();
    // if (e.button === 0) {
    //   console.log("Left click detected");
    // } else if (e.button === 2) {
    //   console.log("Right click detected");
    //   nextRef.current = Math.min(0, next - 1);
    // }
    nextRef.current = Math.min(next + 1, items.length - 1);
  });

  return handleClick;
}
