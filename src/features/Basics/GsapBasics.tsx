import Code from "@/components/shared/Code";
import { animations, TWEEN_CODE } from "./constants";
import { useSlideAnimation } from "../../hooks/useSlideAnimation";
import { useRef } from "react";

function GsapBasics() {
  const containerRef = useRef<HTMLElement | null>(null);

  useSlideAnimation(containerRef, animations);

  return (
    <section className="section-padding h-dvh section" ref={containerRef}>
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
          Introducing Tween:
        </h3>

        <div className="grid grid-cols-2">
          <div className="space-y-12">
            <p className="text-3xl leading-relaxed" data-animation="step">
              Tween is a single animation on an element.
            </p>
            <div data-animation="step">
              <Code language="ts">{TWEEN_CODE}</Code>
            </div>
          </div>
          {/* Here will be animations showcasing GSAP capabilities */}
          <div className="flex items-center px-16" data-animation="step">
            <div
              className="box"
              data-animation="step"
              data-animation-id="box"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default GsapBasics;
