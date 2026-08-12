import { useEffect, useState } from "react";
import { Home, ScrollText, CalendarHeart, Images, MapPin } from "lucide-react";

const ITEMS = [
  { id: "home", label: "मुख्यपृष्ठ", Icon: Home },
  { id: "invitation", label: "आमंत्रण", Icon: ScrollText },
  { id: "events", label: "सोहळा", Icon: CalendarHeart },
  { id: "gallery", label: "क्षणचित्रे", Icon: Images },
  { id: "location", label: "स्थळ", Icon: MapPin },
];

export function FloatingNav() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < 120 || y < last);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="विभाग"
      className="fixed bottom-5 left-1/2 z-50 transition-all duration-500 sm:bottom-7"
      style={{
        opacity: visible ? 1 : 0,
        transform: `translateX(-50%) translateY(${visible ? 0 : 28}px)`,
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <ul className="flex items-center gap-1 rounded-full border border-[var(--gold)]/35 bg-[var(--ink)]/70 px-2 py-2 backdrop-blur-md">
        {ITEMS.map(({ id, label, Icon }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-full text-[var(--gold-soft)]/70 transition-all duration-300 hover:bg-[var(--gold)]/15 hover:text-[var(--gold)]"
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}