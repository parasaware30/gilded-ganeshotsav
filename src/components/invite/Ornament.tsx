type Props = { className?: string; flip?: boolean };

/** Thin gold decorative divider inspired by traditional Indian motifs. */
export function Ornament({ className = "", flip = false }: Props) {
  return (
    <svg
      viewBox="0 0 240 24"
      aria-hidden="true"
      className={`h-5 w-40 sm:w-56 ${flip ? "rotate-180" : ""} ${className}`}
      fill="none"
    >
      <path
        d="M2 12h72M166 12h72"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M120 2c6 6 10 7 18 10-8 3-12 4-18 10-6-6-10-7-18-10 8-3 12-4 18-10Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle cx="90" cy="12" r="2.5" stroke="currentColor" strokeWidth="1" />
      <circle cx="150" cy="12" r="2.5" stroke="currentColor" strokeWidth="1" />
      <path d="M78 12h6M156 12h6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

/** Corner filigree for card frames. */
export function CornerFiligree({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={`h-10 w-10 ${className}`} fill="none">
      <path
        d="M2 30V10a8 8 0 0 1 8-8h20"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path d="M8 34V16a8 8 0 0 1 8-8h18" stroke="currentColor" strokeWidth="0.7" opacity="0.7" />
      <circle cx="14" cy="14" r="2" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  );
}