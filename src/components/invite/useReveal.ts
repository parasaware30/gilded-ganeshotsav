import { useEffect, type RefObject } from "react";

type RevealOpts = {
  y?: number;
  scale?: number;
  blur?: number;
  rotateX?: number;
  stagger?: number;
  start?: string;
};

/**
 * Cinematic scroll reveal for [data-reveal] children of the given container.
 * GSAP + ScrollTrigger are loaded lazily on the client only.
 */
export function useReveal(ref: RefObject<HTMLElement | null>, opts: RevealOpts = {}) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.querySelectorAll<HTMLElement>("[data-reveal]").forEach((n) => {
        n.style.opacity = "1";
        n.style.filter = "none";
        n.style.transform = "none";
      });
      return;
    }

    let cleanup = () => {};
    let cancelled = false;

    (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      const targets = el.querySelectorAll<HTMLElement>("[data-reveal]");
      if (!targets.length) return;

      const ctx = gsap.context(() => {
        gsap.fromTo(
          targets,
          {
            opacity: 0,
            y: opts.y ?? 56,
            scale: opts.scale ?? 0.95,
            filter: `blur(${opts.blur ?? 12}px)`,
            rotateX: opts.rotateX ?? 0,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            rotateX: 0,
            duration: 1.15,
            ease: "power3.out",
            stagger: opts.stagger ?? 0.12,
            scrollTrigger: {
              trigger: el,
              start: opts.start ?? "top 78%",
              once: true,
            },
          },
        );
      }, el);

      cleanup = () => ctx.revert();
    })();

    return () => {
      cancelled = true;
      cleanup();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}