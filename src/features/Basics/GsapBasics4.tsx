import Code from "@/components/shared/Code";
import { animations, TIMELINE_CODE } from "./constants";
import { useSlideAnimation } from "@/hooks/useSlideAnimation";
import { useRef } from "react";
import SlideWrapper from "@/components/shared/SlideWrapper";

function GsapBasics4() {
  const containerRef = useRef<HTMLElement | null>(null);

  useSlideAnimation(containerRef, animations);
  return (
    <SlideWrapper ref={containerRef}>
      <h2 className="text-6xl font-bold uppercase mb-14" data-animation="step">
        GSAP Basics
      </h2>
      <h3
        className="text-4xl font-semibold mb-6 border-b-3 w-max"
        data-animation="step"
      >
        Introducing Timeline:
      </h3>
      <div className="grid grid-rows-2">
        <div className="space-y-6">
          <p className="text-3xl leading-relaxed" data-animation="step">
            Timeline is a sequence of tweens, allowing for complex animations to
            be created with ease.
          </p>
          {/* Here will be animations showcasing GSAP capabilities */}
          <div className="grid grid-cols-2">
            <div data-animation="step">
              <Code language="ts">{TIMELINE_CODE}</Code>
            </div>
            <div className="ps-6 flex flex-col gap-3" data-animation="step">
              <div
                className="box w-28"
                data-animation="step"
                data-animation-id="red"
              ></div>
              <div
                className="box  w-28 beige"
                data-animation="step"
                data-animation-id="beige"
              ></div>
              <div
                className="box  w-28 orange"
                data-animation="step"
                data-animation-id="orange"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
export default GsapBasics4;
