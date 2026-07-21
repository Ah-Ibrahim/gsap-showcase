import { useSlideAnimation } from "@/hooks/useSlideAnimation";
import { useRef } from "react";
import { animations } from "../Basics/constants";

function GsapInWorld() {
  const containerRef = useRef<HTMLDivElement>(null);

  useSlideAnimation(containerRef, animations);

  return (
    <section className="section-padding h-dvh" ref={containerRef}>
      <div className="bg-secondary text-accent-foreground h-full section-content py-16 px-12">
        <h2
          className="text-6xl font-bold uppercase mb-14"
          data-animation="step"
        >
          GSAP in the Real World
        </h2>
        <p className="text-3xl leading-relaxed mb-12" data-animation="step">
          Powering some of the web's most engaging digital experiences.
        </p>
        <div className="grid grid-cols-3 gap-8">
          <a
            href="https://www.dock.cool/"
            target="_blank"
            data-animation="step"
            className="bg-[#0B3142] text-white px-6 rounded-lg py-14 flex items-center justify-center flex-col"
          >
            <h3 className="text-2xl font-bold mb-4">🚀 Product Launches</h3>
            <p className="text-lg">Create excitement around new products.</p>
          </a>
          <a
            href="https://www.hirotos.com/"
            target="_blank"
            data-animation="step"
            className="bg-[#0B3142] text-white px-6 rounded-lg py-14 flex items-center justify-center flex-col"
          >
            <h3 className="text-2xl font-bold mb-4">
              🎨 Award-Winning Websites
            </h3>
            <p className="text-lg">
              Turn static landing pages into interactive experiences.
            </p>
          </a>
          <a
            href="https://primora.xyz/"
            target="_blank"
            data-animation="step"
            className="bg-[#0B3142] text-white px-6 rounded-lg py-14 flex items-center justify-center flex-col"
          >
            <h3 className="text-2xl font-bold mb-4">📊 Data Visualization</h3>
            <p className="text-lg">Bring complex data to life.</p>
          </a>
        </div>
      </div>
    </section>
  );
}
export default GsapInWorld;
