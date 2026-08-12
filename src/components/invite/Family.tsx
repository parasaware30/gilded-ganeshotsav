import { useEffect, useRef, useState } from "react";
import { invitation } from "@/data/invitation";
import { Ornament } from "./Ornament";

/** Host photo revealed through a 3D rotating, blur-to-sharp gold-framed card. */
export function Family() {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);
  const { host } = invitation;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="family"
      ref={ref}
      className="relative px-4 py-24 sm:py-32"
      style={{ perspective: "1400px" }}
    >
      <div className="mx-auto max-w-md text-center">
        <div
          className="relative"
          style={{
            transform: shown
              ? "translateX(0) rotateY(0deg) scale(1)"
              : "translateX(18%) rotateY(-22deg) scale(0.9)",
            filter: shown ? "blur(0)" : "blur(16px)",
            opacity: shown ? 1 : 0,
            transition: "all 1700ms cubic-bezier(0.16,1,0.3,1)",
            transformStyle: "preserve-3d",
          }}
        >
          <div
            className="absolute -inset-2 rounded-[1.9rem] opacity-70 blur-2xl"
            style={{ background: "var(--gradient-gold)", opacity: shown ? 0.35 : 0 }}
          />
          <div className="relative overflow-hidden rounded-[1.6rem] border border-[var(--gold)]/60 p-2">
            <img
              src={host.photo}
              alt={host.name}
              width={1024}
              height={1280}
              loading="lazy"
              className="w-full rounded-[1.2rem] object-cover"
            />
          </div>
        </div>

        <p
          className="font-marathi mt-9 text-xs tracking-[0.42em] text-[var(--gold)]/80"
          style={{
            opacity: shown ? 1 : 0,
            transition: "opacity 1000ms ease 900ms",
          }}
        >
          {host.kicker}
        </p>
        <h3
          className="font-display text-gold-gradient mt-4 text-2xl leading-relaxed sm:text-3xl"
          style={{
            opacity: shown ? 1 : 0,
            transform: shown ? "translateY(0)" : "translateY(20px)",
            transition: "all 1100ms cubic-bezier(0.16,1,0.3,1) 1100ms",
          }}
        >
          {host.name}
        </h3>
        <p className="font-marathi mt-2 text-sm text-[var(--cream)]/70">{host.note}</p>
        <div className="mt-6 flex justify-center text-[var(--gold)]/60">
          <Ornament />
        </div>
      </div>
    </section>
  );
}