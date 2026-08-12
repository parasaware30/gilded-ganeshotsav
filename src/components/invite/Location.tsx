import { useRef } from "react";
import { MapPin, Navigation } from "lucide-react";
import { invitation } from "@/data/invitation";
import { useReveal } from "./useReveal";

export function Location() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref, { y: 44 });
  const { location } = invitation;

  return (
    <section id="location" ref={ref} className="relative px-4 py-24 sm:py-32">
      <div
        data-reveal
        className="gold-hairline reveal-init relative mx-auto max-w-xl overflow-hidden rounded-[2rem] bg-[var(--card)]/70 px-6 py-12 text-center backdrop-blur-sm"
        style={{ boxShadow: "var(--glow-gold)" }}
      >
        <div className="relative mx-auto grid h-16 w-16 place-items-center">
          <span className="animate-pulse-glow absolute inset-0 rounded-full bg-[var(--gold)] opacity-30 blur-xl" />
          <span className="animate-float-y relative grid h-14 w-14 place-items-center rounded-full border border-[var(--gold)]/50 text-[var(--gold)]">
            <MapPin className="h-6 w-6" />
          </span>
        </div>
        <h2 className="font-display text-gold-gradient mt-7 text-2xl sm:text-3xl">
          {location.venue}
        </h2>
        <p className="font-marathi mt-3 text-sm leading-[2] text-[var(--cream)]/80">
          {location.address}
        </p>
        <a
          href={location.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="font-sans group mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/50 px-7 py-3 text-xs tracking-[0.3em] text-[var(--gold-soft)] uppercase transition-all duration-500 hover:scale-[1.04] hover:border-[var(--gold)] hover:text-[var(--ink)]"
          style={{ backgroundImage: "none" }}
        >
          <span className="absolute" />
          <Navigation className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
          Google Maps
        </a>
      </div>
    </section>
  );
}