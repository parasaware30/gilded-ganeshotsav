import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { invitation } from "@/data/invitation";
import { Atmosphere } from "@/components/invite/Atmosphere";
import { Intro } from "@/components/invite/Intro";
import { Hero } from "@/components/invite/Hero";
import { Invitation } from "@/components/invite/Invitation";
import { Countdown } from "@/components/invite/Countdown";
import { Family } from "@/components/invite/Family";
import { Timeline } from "@/components/invite/Timeline";
import { Gallery } from "@/components/invite/Gallery";
import { Location } from "@/components/invite/Location";
import { Outro } from "@/components/invite/Outro";
import { FloatingNav } from "@/components/invite/FloatingNav";
import { MusicPlayer } from "@/components/invite/MusicPlayer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "गणपती बाप्पा मोरया — सप्रेम आमंत्रण | देशपांडे परिवार" },
      { name: "description", content: invitation.meta.description },
      { property: "og:title", content: invitation.meta.title },
      { property: "og:description", content: invitation.meta.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = introDone ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [introDone]);

  return (
    <main className="surface-royal relative min-h-screen overflow-x-hidden">
      <Atmosphere />
      {!introDone && <Intro onDone={() => setIntroDone(true)} />}

      <div
        className="relative z-10 transition-all duration-1000"
        style={{
          opacity: introDone ? 1 : 0,
          transform: introDone ? "none" : "scale(0.96)",
        }}
      >
        <Hero />
        <Countdown />
        <Invitation />
        <Family />
        <Timeline />
        <Gallery />
        <Location />
        <Outro />
      </div>

      {introDone && (
        <>
          <FloatingNav />
          <MusicPlayer armed={introDone} />
        </>
      )}
    </main>
  );
}
