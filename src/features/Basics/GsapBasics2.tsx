import Code from "@/components/shared/Code";
import {
  animations,
  TWEEN_FROM_CODE,
  TWEEN_FROM_TO_CODE,
  TWEEN_TO_CODE,
} from "./constants";
import { useRef } from "react";
import SlideWrapper from "@/components/shared/SlideWrapper";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function GsapBasics2() {
  const containerRef = useRef<HTMLElement | null>(null);
  const nextRef = useRef(0);

  // useSlideAnimation(containerRef, animations);

  const { contextSafe } = useGSAP(
    () => {
      const items = containerRef.current?.querySelectorAll(
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
    { scope: containerRef, dependencies: [] },
  );

  const handleClick = contextSafe(() => {
    const items = containerRef.current?.querySelectorAll(
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

    nextRef.current = next + 1;
  });
  return (
    <SlideWrapper ref={containerRef}>
      <h2 className="text-6xl font-bold uppercase mb-14" data-animation="step">
        GSAP Basics
      </h2>
      <h3
        className="text-4xl font-semibold mb-6 border-b-3 w-max"
        data-animation="step"
      >
        Three Methods for Creating Tweens:
      </h3>

      <div className="space-y-6">
        <ul className="list-disc list-inside text-3xl space-y-3">
          <li data-animation="step">gsap.to( )</li>
          <li data-animation="step">gsap.from( )</li>
          <li data-animation="step">gsap.fromTo( )</li>
        </ul>
        <div className="relative">
          <div
            className="absolute grid grid-cols-2 w-full"
            data-animation="step"
          >
            <div>
              <Code language="ts">{TWEEN_TO_CODE}</Code>
            </div>
            <div className="flex items-center px-16" data-animation="step">
              <div
                className="box"
                data-animation="step"
                data-animation-id="box"
                data-animation-hide
              />
            </div>
          </div>
          <div
            className="absolute grid grid-cols-2 w-full"
            data-animation="step"
          >
            <div>
              <Code language="ts">{TWEEN_FROM_CODE}</Code>
            </div>
            <div className="flex items-center px-16" data-animation="step">
              <div
                className="box translate-x-[100px]"
                data-animation="step"
                data-animation-id="boxFrom"
                data-animation-hide
              />
            </div>
          </div>
          <div
            className="absolute grid grid-cols-2 w-full"
            data-animation="step"
          >
            <div>
              <Code language="ts">{TWEEN_FROM_TO_CODE}</Code>
            </div>
            <div className="flex items-center px-16" data-animation="step">
              <div
                className="box translate-x-[100px]"
                data-animation="step"
                data-animation-id="boxFromTo"
              />
            </div>
          </div>
        </div>
        {/* Here will be animations showcasing GSAP capabilities */}
        <div></div>
      </div>
    </SlideWrapper>
  );
}
export default GsapBasics2;
