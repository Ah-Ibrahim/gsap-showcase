import { useSlideAnimation } from "@/hooks/useSlideAnimation";
import { useRef } from "react";
import { animations } from "../Basics/constants";
import SlideWrapper from "@/components/shared/SlideWrapper";

function GsapPlugins() {
  const containerRef = useRef<HTMLDivElement>(null);

  useSlideAnimation(containerRef, animations);

  return (
    <SlideWrapper ref={containerRef}>
      <h2 className="text-6xl font-bold uppercase mb-14" data-animation="step">
        GSAP Plugins
      </h2>
      <p className="text-3xl leading-relaxed mb-8" data-animation="step">
        A plugin adds extra capabilities to GSAP's core. Plugins unlock advanced
        features.
      </p>
      <ul className="list-disc list-inside text-3xl space-y-3">
        <li data-animation="step">
          <strong>ScrollTrigger:</strong> Scroll-driven animations
        </li>
        <li data-animation="step">
          <strong>SplitText:</strong> Text effects
        </li>
        <li data-animation="step">
          <strong>DrawSVG:</strong> SVG morphing
        </li>
        <li data-animation="step">other tons of plugins</li>
      </ul>
    </SlideWrapper>
  );
}
export default GsapPlugins;
