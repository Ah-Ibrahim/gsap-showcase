import { useSlideAnimation } from "@/hooks/useSlideAnimation";
import { useRef } from "react";
import { animations } from "../Basics/constants";
import SlideWrapper from "@/components/shared/SlideWrapper";

function CssShow() {
  const containerRef = useRef<HTMLDivElement>(null);

  useSlideAnimation(containerRef, animations);

  return (
    <SlideWrapper ref={containerRef}>
      <h2 className="text-6xl font-bold uppercase mb-14" data-animation="step">
        CSS vs GSAP
      </h2>
      <p className="text-3xl leading-relaxed mb-12" data-animation="step">
        It's not about replacing CSS, it's about choosing the right tool.
      </p>
      <h3 className="text-4xl font-bold mb-6" data-animation="step">
        CSS
      </h3>
      <div className="grid grid-cols-2">
        <div className="space-y-2">
          <p
            className="text-3xl border-b-3 border-dashed w-max"
            data-animation="step"
          >
            Best for:
          </p>
          <ul className="list-disc list-inside text-3xl space-y-3">
            <li data-animation="step">Hover effects ✅</li>
            <li data-animation="step">Micro-interactions (e.g. opacity) ✅</li>
            <li data-animation="step">
              Simple transitions (e.g. fade, slide) ✅
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <p
            className="text-3xl border-b-3 border-dashed w-max"
            data-animation="step"
          >
            Limitations:
          </p>
          <ul className="list-disc list-inside text-3xl space-y-3">
            <li data-animation="step">
              Difficult to coordinate multiple animations ❌
            </li>
            <li data-animation="step">
              Limited runtime control (pause, reverse, seek) ❌
            </li>
            <li data-animation="step">No scroll-based storytelling ❌</li>
          </ul>
        </div>
      </div>
    </SlideWrapper>
  );
}
export default CssShow;
