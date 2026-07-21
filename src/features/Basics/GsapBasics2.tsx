import Code from "@/components/shared/Code";
import {
  animations,
  TWEEN_FROM_CODE,
  TWEEN_FROM_TO_CODE,
  TWEEN_TO_CODE,
} from "./constants";
import { useRef } from "react";
import { useSlideAnimation } from "@/hooks/useSlideAnimation";

function GsapBasics2() {
  const containerRef = useRef<HTMLElement | null>(null);

  useSlideAnimation(containerRef, animations);
  return (
    <section className="section-padding h-dvh" ref={containerRef}>
      <div className="bg-secondary text-secondary-foreground h-full section-content py-16 px-12">
        <h2
          className="text-6xl font-bold uppercase mb-14"
          data-animation="step"
        >
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
              className="absolute grid grid-cols-2 bg-secondary w-full"
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
                />
              </div>
            </div>
            <div
              className="absolute grid grid-cols-2 bg-secondary w-full"
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
                />
              </div>
            </div>
            <div
              className="absolute grid grid-cols-2 bg-secondary w-full"
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
      </div>
    </section>
  );
}
export default GsapBasics2;
