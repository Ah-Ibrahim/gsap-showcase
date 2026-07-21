import { useRef } from "react";
import { useIntroAnimation } from "./hooks/useIntroAnimation";

function GsapIntro() {
  const linkRef = useRef<HTMLAnchorElement>(null);

  useIntroAnimation(linkRef);

  return (
    <>
      <section
        className="h-dvh bg-primary text-primary-foreground p-4 flex flex-col justify-center items-center 
  text-6xl hero"
      >
        <div className="section-padding h-full cover bg-accent-foreground">
          <div className="bg-white text-primary-foreground h-full p-4 rounded-lg">
            <h1 className="text-5xl font-bold mb-10 text-blue-500 underline">
              <a className="text-blue-500 underline" ref={linkRef}>
                Agenda
              </a>
            </h1>
            <ul className="list-disc list-inside text-xl mt-4 space-y-3">
              <li>What is GSAP?</li>
              <li>Why use GSAP?</li>
              <li>Getting Started</li>
              <li>Core Concepts</li>
              <li>Advanced Techniques</li>
            </ul>
          </div>
        </div>
        <div className="hero-heading-1 overflow-y-hidden leading-[1.2]">
          Nobody remembers text
        </div>
        <div className="relative">
          <div className="hero-heading-2 overflow-y-hidden leading-[1.2]">
            People remember experiences
          </div>
          <svg
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 -right-12 w-25 aspect-square -z-10 icon"
          >
            <defs>
              <clipPath id="a">
                <path
                  fill="currentColor"
                  d="M810 641.5Q663 783 461.5 849.5T214.5 708Q169 500 214 291t272-184.5q227 24.5 349 209t-25 326Z"
                />
              </clipPath>
            </defs>
            <g clip-path="url(#a)">
              <path
                fill="#9dc3c2"
                d="M810 641.5Q663 783 461.5 849.5T214.5 708Q169 500 214 291t272-184.5q227 24.5 349 209t-25 326Z"
              />
            </g>
          </svg>
        </div>
      </section>
    </>
  );
}
export default GsapIntro;
