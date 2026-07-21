export const HOOK_CODE = `// Similar to useEffect
useGSAP(
  () => {
    gsap.to(elementRef.current, {
      x: 100,
      duration: 2,
    });
  },
  [], // Reactive dependencies
  { scope: container }, // options? (scope, revertOnUpdate, etc.)
);`;
