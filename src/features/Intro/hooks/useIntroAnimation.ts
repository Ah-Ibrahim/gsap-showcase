import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

export function useIntroAnimation(
  linkRef: React.RefObject<HTMLAnchorElement | null>,
) {
  useGSAP((_, contextSafe) => {
    if (!linkRef.current) return;
    const tl = gsap.timeline().pause();

    const splitHeading1 = SplitText.create(".hero-heading-1", {
      type: "words",
      mask: "lines",
    });
    const splitHeading2 = SplitText.create(".hero-heading-2", {
      type: "words",
      mask: "lines",
    });

    tl.to(".cover", {
      scale: 0.8,
      duration: 2,
      ease: "power3.out",
    });

    tl.to(".cover", {
      clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)",
      duration: 1,
      ease: "power3.out",
    });

    tl.from(splitHeading1.words, {
      autoAlpha: 0,
      y: 110,
      duration: 1,
      ease: "power3.out",
      stagger: 0.5,
    });

    tl.from(splitHeading2.words, {
      autoAlpha: 0,
      y: 110,
      duration: 1,
      delay: 1,
      ease: "power3.out",
      stagger: 0.5,
    });

    tl.from(".icon", {
      autoAlpha: 0,
      scale: 0.5,
      duration: 1,
      ease: "power3.out",
    });

    tl.to(".icon", {
      rotation: 360,
      duration: 1,
      repeat: -1,
      ease: "linear",
    });

    tl;

    tl.set(document.body, { overflowY: "auto", height: "auto" });

    const onClick = contextSafe!(() => {
      tl.play();
    });

    linkRef.current.addEventListener("click", onClick);

    return () => {
      linkRef.current?.removeEventListener("click", onClick);
    };
  }, []);
}
