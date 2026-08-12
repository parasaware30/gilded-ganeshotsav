import { useRef } from "react";
import { CalendarDays, Clock, MapPin, Flame } from "lucide-react";
import { invitation } from "@/data/invitation";
import { Ornament } from "./Ornament";
import { useReveal } from "./useReveal";

export function Invitation() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref, { rotateX: 8 });
  const { event, location } = invitation;

  const rows = [
    { icon: CalendarDays, label: "आगमन दिनांक", value: event.dateLabel },
    { icon: Clock, label: "वेळ", value: event.timeLabel },
    { icon: MapPin, label: "स्थळ", value: `${location.venue}, ${location.address}` },
    { icon: Flame, label: "पूजा", value: event.puja },
  ];

  return (
    <section
      id="invitation"
      ref={ref}
      className="relative px-4 py-24 sm:py-32"
      style={{ perspective: "1200px" }}
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2
          data-reveal
          className="font-display text-gold-gradient reveal-init text-3xl sm:text-5xl"
        >
          गणपती बाप्पा मोरया!
        </h2>
        <div data-reveal className="reveal-init mt-5 flex justify-center text-[var(--gold)]/70">
          <Ornament />
        </div>
        <p
          data-reveal
          className="font-marathi reveal-init mx-auto mt-8 max-w-xl text-base leading-[2] text-[var(--cream)]/85 sm:text-lg"
        >
          {event.message}
        </p>

        <div className="mt-12 grid gap-4 text-left sm:grid-cols-2">
          {rows.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              data-reveal
              className="gold-hairline reveal-init rounded-2xl bg-[var(--card)]/70 p-5 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full border border-[var(--gold)]/40 text-[var(--gold)]">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="font-marathi text-xs tracking-[0.28em] text-[var(--gold)]/80">
                  {label}
                </span>
              </div>
              <p className="font-marathi mt-3 text-sm leading-relaxed text-[var(--cream)]/90">
                {value}
              </p>
            </div>
          ))}
        </div>

        <p
          data-reveal
          className="font-display reveal-init mt-12 text-xl text-[var(--gold-soft)] sm:text-2xl"
        >
          — {event.familyName}
        </p>
      </div>
    </section>
  );
}