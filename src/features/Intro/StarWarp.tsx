import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Star = {
  angle: number;
  radius: number;
  z: number;
  hue: number;
};

const STAR_COUNT = 1200;

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function createStars(): Star[] {
  return Array.from({ length: STAR_COUNT }, () => ({
    angle: random(0, Math.PI * 2),
    radius: Math.pow(Math.random(), 0.5),
    z: Math.random(),
    hue: [190, 205, 220, 260][Math.floor(Math.random() * 4)],
  }));
}

export default function StarWarp() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let width = 0;
    let height = 0;
    let centerX = 0;
    let centerY = 0;

    const stars = createStars();

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = width + "px";
      canvas.style.height = height + "px";

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      centerX = width / 2;
      centerY = height / 2;
    }

    resize();

    window.addEventListener("resize", resize);

    function draw(progress: number) {
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, width, height);

      const maxRadius = Math.max(width, height) * 0.55;

      for (const star of stars) {
        let depth = star.z - progress * 2;

        while (depth <= 0) depth += 1;
        while (depth > 1) depth -= 1;

        const perspective = 1 / depth;
        const prevPerspective = 1 / (depth + 0.03);

        const baseRadius = star.radius * maxRadius;

        const x = centerX + Math.cos(star.angle) * baseRadius * perspective;

        const y = centerY + Math.sin(star.angle) * baseRadius * perspective;

        const px =
          centerX + Math.cos(star.angle) * baseRadius * prevPerspective;

        const py =
          centerY + Math.sin(star.angle) * baseRadius * prevPerspective;

        const alpha = Math.min(1, perspective * 0.08);

        ctx.strokeStyle = `hsla(${star.hue},100%,70%,${alpha})`;
        ctx.lineWidth = Math.min(3, perspective * 0.6);

        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(x, y);
        ctx.stroke();

        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, Math.min(2.5, perspective * 0.8), 0, Math.PI * 2);
        ctx.fill();
      }
    }

    draw(0);

    // const trigger = ScrollTrigger.create({
    //   trigger: canvas,
    //   start: "top top",
    //   end: "+=3000",
    //   scrub: true,

    //   onUpdate(self) {
    //     draw(self.progress);
    //   },
    // });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: canvas,
        start: "top top",
        end: "+=300%",
        pin: true,
        scrub: true,
        onUpdate(self) {
          draw(self.progress); // your canvas stars
        },
      },
    });

    tl.fromTo(
      ".heading",
      {
        scale: 0.65,
        opacity: 0,
        filter: "blur(5px)",
        y: 75,
      },
      {
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      },
    );

    return () => {
      window.removeEventListener("resize", resize);
      tl.kill();
    };
  }, []);

  return (
    <section className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

        <div className="relative z-10 flex h-full items-center justify-center">
          <h1 className="text-center text-7xl font-black uppercase text-white heading">
            GSAP
            <br />
            TELLS
            <br />A STORY
          </h1>
        </div>
      </div>
    </section>
  );
}
