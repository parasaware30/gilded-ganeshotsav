import { useEffect, useState } from "react";
import { invitation } from "@/data/invitation";

const UNITS = [
  { key: "days", label: "दिवस" },
  { key: "hours", label: "तास" },
  { key: "minutes", label: "मिनिटे" },
  { key: "seconds", label: "सेकंद" },
] as const;

function diff(target: number) {
  const ms = Math.max(0, target - Date.now());
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor(ms / 3600000) % 24,
    minutes: Math.floor(ms / 60000) % 60,
    seconds: Math.floor(ms / 1000) % 60,
  };
}

export function Countdown() {
  const target = new Date(invitation.event.arrivalISO).getTime();
  const [t, setT] = useState(() => diff(target));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = window.setInterval(() => setT(diff(target)), 1000);
    return () => window.clearInterval(id);
  }, [target]);

  return (
    <section className="relative px-4 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-marathi text-xs tracking-[0.12em] text-[var(--gold)]/80">
          बाप्पांच्या आगमनासाठी
        </p>
        <div className="mt-8 grid grid-cols-4 gap-2 sm:gap-5">
          {UNITS.map((u) => (
            <div
              key={u.key}
              className="gold-hairline rounded-2xl bg-[var(--ink)]/60 px-1 py-5 backdrop-blur-sm sm:py-7"
              style={{ boxShadow: "inset 0 0 40px color-mix(in oklab, var(--gold) 8%, transparent)" }}
            >
              <p className="text-gold-gradient font-serif text-3xl tabular-nums sm:text-5xl">
                {String(mounted ? t[u.key] : 0).padStart(2, "0")}
              </p>
              <p className="font-marathi mt-2 text-[10px] tracking-[0.12em] text-[var(--cream)]/60 sm:text-xs">
                {u.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}