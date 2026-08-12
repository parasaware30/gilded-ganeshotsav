import { useEffect, useRef, useState } from "react";
import emblem from "@/assets/emblem.png";
import { invitation } from "@/data/invitation";

/** Full-screen cinematic intro: dark -> emerald reveal -> emblem -> 3D zoom out. */
export function Intro({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"dark" | "reveal" | "exit">("dark");
  const doneRef = useRef(false);

  useEffect(() => {
    const t1 = window.setTimeout(() => setPhase("reveal"), 250);
    const t2 = window.setTimeout(() => finish(), 5200);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function finish() {
    if (doneRef.current) return;
    doneRef.current = true;
    setPhase("exit");
    window.setTimeout(onDone, 1200);
  }

  return (
    <div
      className={`fixed inset-0 z-[80] flex items-center justify-center overflow-hidden transition-opacity duration-1000 ${
        phase === "exit" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      style={{ perspective: "1200px" }}
      role="dialog"
      aria-label="Invitation opening"
    >
      <div
        className="surface-royal absolute inset-0 transition-opacity duration-[2200ms] ease-out"
        style={{ opacity: phase === "dark" ? 0 : 1 }}
      />
      <div className="absolute inset-0 bg-[var(--ink)]" style={{ zIndex: -1 }} />

      {/* thin golden light lines */}
      <div className="absolute inset-0 flex justify-center gap-6 sm:gap-14">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className="h-full w-px bg-gradient-to-b from-transparent via-[var(--gold)] to-transparent transition-all duration-[2600ms] ease-out"
            style={{
              opacity: phase === "dark" ? 0 : 0.12 + (i === 2 ? 0.22 : 0),
              transform: `scaleY(${phase === "dark" ? 0.2 : 1})`,
              transitionDelay: `${300 + i * 160}ms`,
            }}
          />
        ))}
      </div>

      <div
        className="relative flex flex-col items-center px-6 text-center transition-all duration-[2600ms]"
        style={{
          transform:
            phase === "exit"
              ? "translateZ(420px) scale(1.9)"
              : phase === "reveal"
                ? "scale(1)"
                : "scale(0.55)",
          opacity: phase === "dark" ? 0 : 1,
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="relative">
          <div className="animate-pulse-glow absolute inset-0 rounded-full bg-[var(--gold)] opacity-30 blur-3xl" />
          <img
            src={emblem}
            alt="श्री गणेश मुद्रा"
            width={816}
            height={816}
            className="relative h-32 w-32 sm:h-44 sm:w-44"
          />
        </div>
        <p
          className="font-marathi mt-8 text-lg tracking-[0.12em] text-[var(--gold-soft)] transition-opacity duration-1000 sm:text-2xl"
          style={{ opacity: phase === "dark" ? 0 : 1, transitionDelay: "1400ms" }}
        >
          {invitation.intro.mantra}
        </p>
        <button
          onClick={finish}
          className="font-marathi mt-10 text-xs tracking-[0.12em] text-[var(--gold)]/70 uppercase transition-colors hover:text-[var(--gold)]"
        >
          {invitation.intro.tap}
        </button>
      </div>
    </div>
  );
}