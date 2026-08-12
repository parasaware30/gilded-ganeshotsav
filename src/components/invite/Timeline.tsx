import { useRef } from "react";
import { invitation } from "@/data/invitation";
import { useReveal } from "./useReveal";

export function Timeline() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref, { y: 40, stagger: 0.18, blur: 8 });

  return (
    <section id="events" ref={ref} className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl">
        <h2
          data-reveal
          className="font-display text-gold-gradient reveal-init text-center text-2xl sm:text-4xl"
        >
          उत्सव सोहळा
        </h2>

        <div className="relative mt-14 pl-10 sm:pl-16">
          <span className="absolute top-2 bottom-2 left-[13px] w-px bg-gradient-to-b from-transparent via-[var(--gold)]/60 to-transparent sm:left-[29px]" />
          {invitation.timeline.map((item) => (
            <div key={item.title} data-reveal className="reveal-init relative pb-12 last:pb-0">
              <span className="absolute top-2 -left-[30px] grid h-[13px] w-[13px] place-items-center rounded-full bg-[var(--gold)] sm:-left-[46px]">
                <span className="animate-pulse-glow absolute h-6 w-6 rounded-full bg-[var(--gold)] opacity-40 blur-md" />
              </span>
              <p className="font-display text-lg text-[var(--gold-soft)] sm:text-2xl">
                {item.title}
              </p>
              <p className="font-marathi mt-1 text-sm text-[var(--cream)]/80">{item.time}</p>
              <p className="font-marathi mt-1 text-xs text-[var(--cream)]/55">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}