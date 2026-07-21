import Code from "@/components/shared/Code";
import { HOOK_CODE } from "./constants";
import { animations } from "../Basics/constants";
import { useSlideAnimation } from "@/hooks/useSlideAnimation";
import { useRef } from "react";

function ReactPlugin() {
  const containerRef = useRef<HTMLDivElement>(null);

  useSlideAnimation(containerRef, animations);

  return (
    <section className="section-padding h-dvh" ref={containerRef}>
      <div className="bg-accent text-accent-foreground h-full section-content py-16 px-12">
        <h2
          className="text-6xl font-bold uppercase mb-14"
          data-animation="step"
        >
          GSAP React Plugin
        </h2>
        <p className="text-3xl leading-relaxed mb-8" data-animation="step">
          GSAP provides a React hook called <code>useGsap</code> that allows you
          to easily integrate GSAP animations into your React components.
        </p>
        <div className="w-2xl" data-animation="step">
          <Code language="tsx">{HOOK_CODE}</Code>
        </div>
      </div>
    </section>
  );
}
export default ReactPlugin;
