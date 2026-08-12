import { useMemo } from "react";

/**
 * Very light-weight ambience: gold dust particles, light rays and bokeh.
 * Pure CSS transforms only — no canvas, no rAF loop.
 */
export function Atmosphere({ density = 18 }: { density?: number }) {
  const motes = useMemo(
    () =>
      Array.from({ length: density }, (_, i) => ({
        id: i,
        left: `${(i * 37) % 100}%`,
        size: 1 + ((i * 7) % 4),
        delay: (i * 1.37) % 18,
        duration: 18 + ((i * 5) % 16),
        dx: `${((i % 5) - 2) * 26}px`,
        opacity: 0.25 + ((i % 4) * 0.15),
      })),
    [density],
  );

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* light rays */}
      <div
        className="absolute -top-1/3 left-1/2 h-[140vh] w-[70vw] -translate-x-1/2 opacity-[0.13] blur-2xl"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 0%, transparent 0deg, var(--gold) 8deg, transparent 16deg, transparent 30deg, var(--gold) 38deg, transparent 46deg, transparent 70deg, var(--gold) 76deg, transparent 84deg)",
        }}
      />
      {/* bokeh */}
      <div className="animate-pulse-glow absolute top-[18%] -left-24 h-72 w-72 rounded-full bg-[var(--emerald)] opacity-25 blur-[90px]" />
      <div className="animate-pulse-glow absolute right-[-6rem] bottom-[12%] h-80 w-80 rounded-full bg-[var(--gold-deep)] opacity-15 blur-[110px]" />

      {/* gold dust */}
      {motes.map((m) => (
        <span
          key={m.id}
          className="absolute bottom-[-10vh] rounded-full bg-[var(--gold-soft)]"
          style={{
            left: m.left,
            width: m.size,
            height: m.size,
            opacity: m.opacity,
            boxShadow: "0 0 8px var(--gold)",
            animation: `drift ${m.duration}s linear ${m.delay}s infinite`,
            ["--dx" as string]: m.dx,
          }}
        />
      ))}
    </div>
  );
}