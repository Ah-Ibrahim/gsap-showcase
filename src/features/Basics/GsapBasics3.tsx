import Code from "@/components/shared/Code";
import { animations, MULTIPLE_TWEENS_CODE } from "./constants";
import { useSlideAnimation } from "@/hooks/useSlideAnimation";
import { useRef } from "react";
import SlideWrapper from "@/components/shared/SlideWrapper";

function GsapBasics3() {
  const containerRef = useRef<HTMLElement | null>(null);

  useSlideAnimation(containerRef, animations);

  return (
    <SlideWrapper ref={containerRef}>
      <h2 className="text-6xl font-bold uppercase mb-14" data-animation="step">
        GSAP Basics
      </h2>
      <h3
        className="text-4xl font-semibold mb-12 border-b-3 w-max"
        data-animation="step"
      >
        Having Multiple Tweens:
      </h3>

      <div className="grid grid-cols-2">
        <div className="space-y-6" data-animation="step">
          <Code language="ts">{MULTIPLE_TWEENS_CODE}</Code>
        </div>
        <div className="ps-6 flex flex-col gap-3" data-animation="step">
          <div
            className="box"
            data-animation="step"
            data-animation-id="red"
          ></div>
          <div
            className="box beige"
            data-animation="step"
            data-animation-id="beige"
          ></div>
          <div
            className="box orange"
            data-animation="step"
            data-animation-id="orange"
          ></div>
        </div>
      </div>
    </SlideWrapper>
  );
}
export default GsapBasics3;
