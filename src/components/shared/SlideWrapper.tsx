import noise from "@/assets/noise.jpg";
import { animations } from "@/features/Basics/constants";
import { useSlideAnimation } from "@/hooks/useSlideAnimation";
import { useRef } from "react";

interface SlideWrapperProps {
  ref: React.RefObject<HTMLElement | null>;
  children: React.ReactNode;
}

function SlideWrapper({ children }: SlideWrapperProps) {
  const containerRef = useRef<HTMLElement | null>(null);

  const handlePointerDown = useSlideAnimation(containerRef, animations);

  return (
    <section
      className="relative isolate h-dvh py-16 px-12"
      ref={containerRef}
      onPointerDown={handlePointerDown}
    >
      <div
        className="absolute inset-0 -z-20"
        style={{
          background: `
          radial-gradient(circle at 82% 28%, rgba(68,153,255,.45), rgba(68,153,255,.12) 34%, transparent 70%),
          radial-gradient(circle at 93% 72%, rgba(122,255,255,.18), transparent 35%),
          radial-gradient(circle at 10% 90%, rgba(68,153,255,.45), rgba(68,153,255,.12) 20%, transparent 70%),
          #e6e8eb
        `,
        }}
      />
      <img
        src={noise}
        className="absolute inset-0 h-full w-full pointer-events-none mix-blend-soft-light -z-10"
        style={{ opacity: 0.7 }}
      />
      {children}
    </section>
  );
}
export default SlideWrapper;
