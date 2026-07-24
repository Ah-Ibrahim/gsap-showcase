import { useSlideAnimation } from "@/hooks/useSlideAnimation";
import { useRef } from "react";
import { animations } from "../Basics/constants";
import SlideWrapper from "@/components/shared/SlideWrapper";

function GsapShow() {
  const containerRef = useRef<HTMLDivElement>(null);

  useSlideAnimation(containerRef, animations);

  return (
    <SlideWrapper ref={containerRef}>
      <h2 className="text-6xl font-bold uppercase mb-14">CSS vs GSAP</h2>
      <p className="text-3xl leading-relaxed mb-12">
        It's not about replacing CSS, it's about choosing the right tool.
      </p>
      <h3 className="text-4xl font-bold mb-6" data-animation="step">
        GSAP
      </h3>
      <div className="grid grid-cols-2">
        <div className="space-y-2">
          <p
            className="text-3xl border-b-3 border-dashed w-max"
            data-animation="step"
          >
            Best for:
          </p>
          <ul
            className="list-disc list-inside text-3xl space-y-3"
            data-animation="step"
          >
            <li data-animation="step">Complex timelines ✅</li>
            <li data-animation="step">Scroll-driven experiences ✅</li>
            <li data-animation="step">Powerful animation control ✅</li>
          </ul>
        </div>
        <div className="space-y-2">
          <p
            className="text-3xl border-b-3 border-dashed w-max"
            data-animation="step"
          >
            Limitations:
          </p>
          <ul
            className="list-disc list-inside text-3xl space-y-3"
            data-animation="step"
          >
            <li data-animation="step">Additional dependency ❌</li>
            <li data-animation="step">Slightly steeper learning curve ❌</li>
            <li data-animation="step">Performance overhead ❌</li>
          </ul>
        </div>
      </div>
    </SlideWrapper>
  );
}
export default GsapShow;
