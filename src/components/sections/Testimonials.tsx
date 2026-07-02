"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Pause } from "lucide-react";

const videos = [
  "/testimonials/vid-1.mp4",
  "/testimonials/vid-2.mp4",
  "/testimonials/vid-3.mp4",
  "/testimonials/vid-4.mp4",
];

/**
 * Cover frame loads automatically once the card scrolls into view
 * (IntersectionObserver + preload="metadata" — a few KB, not the full
 * file), so thumbnails are always visible. The full video itself only
 * streams once the visitor presses play.
 */
function VideoCard({
  src,
  onPlayingChange,
}: {
  src: string;
  onPlayingChange: (playing: boolean) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const setPlayingState = (v: boolean) => {
    setPlaying(v);
    onPlayingChange(v);
  };

  const toggle = () => {
    const el = videoRef.current;
    if (!el) return;
    if (playing) {
      el.pause();
      setPlayingState(false);
    } else {
      setShouldLoad(true);
      el.play().catch(() => {});
      setPlayingState(true);
    }
  };

  return (
    <div
      ref={cardRef}
      onClick={toggle}
      className="group relative shrink-0 w-[82vw] sm:w-[min(46vw,620px)] aspect-video overflow-hidden rounded-2xl bg-[#2f3e3c] shadow-[0_8px_30px_rgba(47,62,60,0.12)] cursor-pointer touch-manipulation"
    >
      <video
        ref={videoRef}
        src={shouldLoad ? src : undefined}
        playsInline
        preload="metadata"
        controls={playing}
        className="h-full w-full object-cover"
        onEnded={() => setPlayingState(false)}
        onPause={() => setPlayingState(false)}
      />

      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 sm:bg-black/0 transition-colors duration-300 group-hover:bg-black/25">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbf9f1]/90 opacity-90 scale-100 sm:opacity-0 sm:scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
            <Play className="h-7 w-7 translate-x-0.5 text-[#2f3e3c]" fill="currentColor" />
          </div>
        </div>
      )}

      {playing && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            toggle();
          }}
          className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#fbf9f1]/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          <Pause className="h-4 w-4 text-[#2f3e3c]" fill="currentColor" />
        </button>
      )}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [playingCount, setPlayingCount] = useState(0);

  // Duplicate the track once for a seamless infinite scroll loop.
  const track = [...videos, ...videos];

  return (
    <section id="testimonials" className="bg-[#e7e9e3] py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16"
        >
          <span className="eyebrow">Patient Stories</span>
          <h2 className="font-display mt-3 text-[clamp(2.2rem,4vw,3.5rem)] leading-tight text-[#2f3e3c]">
            Recoveries that
            <br />
            <span className="font-light italic">speak for themselves</span>
          </h2>
          <div className="mt-4 h-0.5 w-16 rounded-full bg-[#bddbd1]" />
        </motion.div>
      </div>

      <div className="relative w-full">
        {/* Edge fades so the carousel feels contained, not clipped */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#e7e9e3] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#e7e9e3] to-transparent" />

        <div
          className="flex w-max animate-marquee gap-6 px-6 lg:px-12"
          style={playingCount > 0 ? { animationPlayState: "paused" } : undefined}
        >
          {track.map((src, i) => (
            <VideoCard
              key={i}
              src={src}
              onPlayingChange={(playing) =>
                setPlayingCount((c) => Math.max(0, c + (playing ? 1 : -1)))
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
