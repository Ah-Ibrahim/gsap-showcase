import { useSlideAnimation } from "@/hooks/useSlideAnimation";
import { useRef } from "react";
import { animations } from "../Basics/constants";

function Finale() {
  const containerRef = useRef<HTMLDivElement>(null);

  useSlideAnimation(containerRef, animations);

  return (
    <section
      className="h-dvh text-primary-foreground section-padding section"
      ref={containerRef}
    >
      <div className="bg-[#f6f7ff]  text-[#16202c] h-full section-content py-16 px-12 flex flex-col">
        <h2
          className="text-6xl font-bold uppercase mb-14"
          data-animation="step"
        >
          Synapse's Landing Page
        </h2>
        <div className="flex flex-col justify-center items-center flex-1">
          <div className="text-5xl finale-heading" data-animation="step">
            Turn a static website into an interactive story.
          </div>
        </div>
      </div>
    </section>
  );
}
export default Finale;
