import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { invitation } from "@/data/invitation";
import { useReveal } from "./useReveal";

export function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<number | null>(null);
  useReveal(ref, { y: 60, stagger: 0.1, scale: 0.92 });

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <section id="gallery" ref={ref} className="relative px-4 py-24 sm:py-32">
      <h2
        data-reveal
        className="font-display text-gold-gradient reveal-init text-center text-2xl sm:text-4xl"
      >
        क्षणचित्रे
      </h2>

      <div className="mx-auto mt-12 max-w-5xl gap-3 sm:columns-2 lg:columns-3 [&>*]:mb-3">
        {invitation.gallery.map((img, i) => (
          <button
            key={img.src}
            data-reveal
            onClick={() => setOpen(i)}
            className="reveal-init group block w-full overflow-hidden rounded-2xl border border-[var(--gold)]/35"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
            />
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[90] grid place-items-center bg-[var(--ink)]/95 p-4 backdrop-blur-md"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            aria-label="बंद करा"
            className="absolute top-5 right-5 grid h-10 w-10 place-items-center rounded-full border border-[var(--gold)]/50 text-[var(--gold)]"
            onClick={() => setOpen(null)}
          >
            <X className="h-4 w-4" />
          </button>
          <img
            src={invitation.gallery[open]!.src}
            alt={invitation.gallery[open]!.alt}
            className="max-h-[85vh] w-auto animate-[scale-in_0.4s_ease-out] rounded-2xl border border-[var(--gold)]/50"
          />
        </div>
      )}
    </section>
  );
}