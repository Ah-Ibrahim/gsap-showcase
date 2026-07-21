import { useRef } from "react";
import { useSlideAnimation } from "../../hooks/useSlideAnimation";
import { animations } from "./constants";

function GsapIntro() {
  const containerRef = useRef<HTMLElement | null>(null);

  useSlideAnimation(containerRef, animations);
  return (
    <section className="section-padding h-dvh section" ref={containerRef}>
      <div className="bg-destructive text-destructive-foreground h-full section-content py-16 px-12">
        <h2
          className="text-6xl font-bold uppercase mb-14"
          data-animation="step"
        >
          What is GSAP?
        </h2>
        <p className="text-3xl leading-relaxed mb-6" data-animation="step">
          GSAP (GreenSock Animation Platform) is a high-performance JavaScript
          animation library used to create smooth, complex, and interactive web
          animations.
        </p>
        <div className="grid grid-cols-2">
          <ul className="list-disc list-inside text-3xl space-y-3">
            <li data-animation="step">
              Framework agnostic (Vanilla JS, React, Vue, Angular)
            </li>
            <li data-animation="step">Simple and intuitive API</li>
            <li data-animation="step">
              Support for CSS, SVG, and custom properties
            </li>
            <li data-animation="step">
              Advanced features like timelines and easing functions
            </li>
          </ul>
          {/* Here will be animations showcasing GSAP capabilities */}
          <div></div>
        </div>
      </div>
    </section>
  );
}
export default GsapIntro;
