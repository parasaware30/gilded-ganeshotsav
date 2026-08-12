import { useEffect, useRef, useState } from "react";
import { Disc3, Volume2, VolumeX } from "lucide-react";
import { invitation } from "@/data/invitation";

const KEY = "ganpati-music-pref";

export function MusicPlayer({ armed }: { armed: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(invitation.music.src);
    audio.loop = true;
    audio.volume = 0;
    audio.preload = "none";
    audioRef.current = audio;
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const fade = (to: number, done?: () => void) => {
    const audio = audioRef.current;
    if (!audio) return;
    const step = (to - audio.volume) / 24;
    const id = window.setInterval(() => {
      const next = audio.volume + step;
      if ((step > 0 && next >= to) || (step < 0 && next <= to)) {
        audio.volume = Math.min(1, Math.max(0, to));
        window.clearInterval(id);
        done?.();
      } else {
        audio.volume = Math.min(1, Math.max(0, next));
      }
    }, 40);
  };

  const start = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      await audio.play();
      setPlaying(true);
      fade(0.45);
      sessionStorage.setItem(KEY, "on");
    } catch {
      setPlaying(false);
    }
  };

  const stop = () => {
    setPlaying(false);
    sessionStorage.setItem(KEY, "off");
    fade(0, () => audioRef.current?.pause());
  };

  // Session preference: auto-resume after the user has opened the invitation.
  useEffect(() => {
    if (!armed) return;
    if (sessionStorage.getItem(KEY) === "on") void start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [armed]);

  return (
    <button
      onClick={() => (playing ? stop() : void start())}
      aria-label={playing ? "संगीत बंद करा" : "संगीत सुरू करा"}
      title={invitation.music.label}
      className="fixed right-4 bottom-5 z-50 grid h-12 w-12 place-items-center rounded-full border border-[var(--gold)]/50 bg-[var(--ink)]/70 text-[var(--gold)] backdrop-blur-md transition-transform duration-300 hover:scale-110 sm:right-6 sm:bottom-7"
      style={{ boxShadow: playing ? "var(--glow-gold)" : undefined }}
    >
      {playing ? (
        <Disc3 className="animate-spin-slow h-5 w-5" />
      ) : sessionStorage?.getItem?.(KEY) === "off" ? (
        <VolumeX className="h-5 w-5" />
      ) : (
        <Volume2 className="h-5 w-5" />
      )}
    </button>
  );
}