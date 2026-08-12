import { useEffect, useRef, useState } from "react";
import emblem from "@/assets/emblem.png";
import { invitation } from "@/data/invitation";

export function Outro() {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e?.isIntersecting && setShown(true), {
      threshold: 0.4,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[90svh] flex-col items-center justify-center overflow-hidden px-4 text-center"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[var(--ink)]/80 to-[var(--ink)]" />
      <div
        className="relative"
        style={{
          opacity: shown ? 1 : 0,
          transform: `scale(${shown ? 1 : 0.75})`,
          transition: "all 2000ms cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div className="animate-pulse-glow absolute inset-0 rounded-full bg-[var(--gold)] opacity-25 blur-3xl" />
        <img
          src={emblem}
          alt="श्री गणेश मुद्रा"
          width={816}
          height={816}
          loading="lazy"
          className="relative h-28 w-28 sm:h-36 sm:w-36"
        />
      </div>
      <h2
        className="font-serif text-gold-gradient relative mt-10 text-3xl tracking-[0.12em] sm:text-5xl"
        style={{
          opacity: shown ? 1 : 0,
          transition: "opacity 1600ms ease 700ms",
        }}
      >
        {invitation.outro.title}
      </h2>
      <p className="font-marathi relative mt-4 text-sm tracking-[0.12em] text-[var(--cream)]/70">
        {invitation.outro.subtitle}
      </p>
      <p className="font-sans relative mt-10 text-[11px] tracking-[0.4em] text-[var(--gold)]/55 uppercase">
        {invitation.outro.credit}
      </p>
    </section>
  );
}