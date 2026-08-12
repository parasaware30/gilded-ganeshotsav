import { useEffect, useRef, useState } from "react";
import { invitation } from "@/data/invitation";
import { CornerFiligree, Ornament } from "./Ornament";

/** Floating 3D invitation card with pointer/tilt parallax. */
export function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setEntered(true), 80);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    let frame = 0;

    const apply = (cx: number, cy: number) => {
      const r = el.getBoundingClientRect();
      const px = (cx - r.left) / r.width - 0.5;
      const py = (cy - r.top) / r.height - 0.5;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setTilt({ x: -py * 12, y: px * 14 }));
    };

    const onMove = (e: PointerEvent) => apply(e.clientX, e.clientY);
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) apply(t.clientX, t.clientY);
    };
    const onLeave = () => setTilt({ x: 0, y: 0 });

    window.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("touchmove", onTouch, { passive: true });
    el.addEventListener("touchend", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      el.removeEventListener("touchmove", onTouch);
      el.removeEventListener("touchend", onLeave);
    };
  }, []);

  const { hero, event } = invitation;

  return (
    <section
      id="home"
      ref={wrapRef}
      className="relative flex min-h-[100svh] items-center justify-center px-4 py-24"
      style={{ perspective: "1400px" }}
    >
      <div
        className="animate-float-y relative w-full max-w-[26rem] will-change-transform sm:max-w-[30rem]"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 500ms cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div
          className="gold-hairline surface-royal relative overflow-hidden rounded-[2rem] px-6 py-10 text-center sm:px-10 sm:py-14"
          style={{
            boxShadow: "var(--shadow-cinema), var(--glow-gold)",
            opacity: entered ? 1 : 0,
            transform: entered ? "translateY(0) scale(1)" : "translateY(60px) scale(0.9)",
            filter: entered ? "blur(0)" : "blur(14px)",
            transition: "all 1600ms cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <div className="pointer-events-none absolute inset-3 rounded-[1.6rem] border border-[var(--gold)]/20" />
          <CornerFiligree className="absolute top-4 left-4 text-[var(--gold)]/60" />
          <CornerFiligree className="absolute top-4 right-4 rotate-90 text-[var(--gold)]/60" />
          <CornerFiligree className="absolute bottom-4 left-4 -rotate-90 text-[var(--gold)]/60" />
          <CornerFiligree className="absolute right-4 bottom-4 rotate-180 text-[var(--gold)]/60" />

          <p className="font-marathi text-[0.7rem] tracking-[0.42em] text-[var(--gold)]/80 sm:text-xs">
            {hero.subline}
          </p>

          <h1
            className="font-display text-gold-gradient mt-5 text-[1.7rem] leading-[1.45] sm:text-4xl"
            style={{ transform: "translateZ(50px)" }}
          >
            {hero.heading}
          </h1>

          <div className="mt-6 flex justify-center text-[var(--gold)]/70">
            <Ornament />
          </div>

          <div className="relative mx-auto mt-6 w-[74%]" style={{ transform: "translateZ(70px)" }}>
            <div className="animate-pulse-glow absolute inset-0 rounded-full bg-[var(--gold)] opacity-25 blur-3xl" />
            <img
              src={hero.image}
              alt="श्री गणेश मूर्ती"
              width={1024}
              height={1280}
              fetchPriority="high"
              className="relative w-full rounded-2xl border border-[var(--gold)]/40 object-cover"
            />
          </div>

          <p className="font-marathi mt-8 text-lg tracking-[0.2em] text-[var(--cream)] sm:text-2xl">
            {hero.mantra}
          </p>
          <p className="font-marathi mt-3 text-sm text-[var(--gold-soft)]/85">
            {event.familyName} · {event.dateLabel}
          </p>
        </div>
      </div>
    </section>
  );
}