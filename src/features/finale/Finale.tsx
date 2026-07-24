import { useSlideAnimation } from "@/hooks/useSlideAnimation";
import { useRef } from "react";
import { animations } from "../Basics/constants";
import SlideWrapper from "@/components/shared/SlideWrapper";

function Finale() {
  const containerRef = useRef<HTMLDivElement>(null);

  useSlideAnimation(containerRef, animations);

  return (
    <SlideWrapper ref={containerRef}>
      <h2 className="text-6xl font-bold uppercase mb-14" data-animation="step">
        Synapse's Landing Page
      </h2>
      <div className="flex flex-col justify-center items-center flex-1">
        <div className="text-5xl finale-heading" data-animation="step">
          Turn a static website into an interactive story.
        </div>
      </div>
    </SlideWrapper>
  );
}
export default Finale;
