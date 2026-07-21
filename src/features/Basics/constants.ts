export const TWEEN_CODE = `// target: the object(s) whose properties you want to animate.
// vars: an object containing all the properties you want to animate.
gsap.to(target, vars);

gsap.to(".box", {
  x: 100,
  duration: 1,
});`;

export const TWEEN_TO_CODE = `// target: the object(s) whose properties you want to animate.
// vars: an object containing all the properties you want to animate.
gsap.to(target, vars);

// From initial state to this state
gsap.to(".box", {
  x: 100,
  duration: 1,
});`;

export const TWEEN_FROM_CODE = `// target: the object(s) whose properties you want to animate.
// vars: an object containing all the properties you want to animate.
gsap.from(target, vars);

// From this state to initial state
gsap.from(".box", {
  x: 100,
  duration: 1,
});`;

export const TWEEN_FROM_TO_CODE = `gsap.fromTo(target, varsFrom, varsTo);

gsap.fromTo(
  ".box",
  {
    x: 100,
    duration: 1,
  },
  {
    x: 200,
  },
);`;

export const MULTIPLE_TWEENS_CODE = `gsap.to(".red", {
  x: 100,
  duration: 2, // duration number
});

gsap.to(".beige", {
  x: 200,
  duration: 1,
  delay: 2, // has to be same
});

gsap.to(".orange", {
  x: 300,
  duration: 1,
  delay: 3, // has to be sum of previous 2 + 1
});`;

export const TIMELINE_CODE = `const timeline = gsap.timeline();

timeline.to(".red", {
  x: 100,
  duration: 2,
});

timeline.to(".beige", {
  x: 200,
  duration: 1,
});

timeline.to(".orange", {
  x: 300,
  duration: 1,
});`;

export const animations: Record<string, gsap.TweenVars> = {
  default: { autoAlpha: 1, duration: 0.5, ease: "power3.out" },
  box: { x: 100, duration: 1, ease: "linear" },
  boxFrom: { x: 0, duration: 1, ease: "linear" },
  boxFromTo: { x: 200, duration: 1, ease: "linear" },
  red: { x: 100, duration: 2 },
  beige: { x: 200, duration: 1 },
  orange: { x: 300, duration: 1 },
};
