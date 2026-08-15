"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { properties } from "@/data/content";
import { ImageSlot } from "./ImageSlot";

const slides = properties.map((p) => ({
  image: p.heroImage,
  location: p.location,
  name: p.name,
  tagline: p.tagline,
}));

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, [paused]);

  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + slides.length) % slides.length);

  return (
    <section
      id="top"
      className="relative h-[92vh] min-h-[640px] w-full overflow-hidden bg-ink"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((s, i) => (
        <div
          key={s.image.slot}
          className={cn(
            "absolute inset-0 transition-opacity duration-[1400ms] ease-in-out",
            i === index ? "opacity-100" : "opacity-0",
          )}
          aria-hidden={i !== index}
        >
          <ImageSlot slot={s.image} ratio="aspect-auto" className="h-full w-full" eager={i === 0} />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/20 to-ink/70" />
        </div>
      ))}

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-4 pb-40 sm:px-8 sm:pb-44 lg:pb-52">
        <div className="max-w-3xl">
          <div className="elet-eyebrow mb-4 text-gold">
            karachi / {slides[index].location.toLowerCase()}
          </div>
          <h1 className="font-display text-5xl leading-[1.02] tracking-tight text-cream sm:text-7xl lg:text-[92px]">
            an <em className="italic">unhurried</em> karachi,
            <br />
            room by room.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
            {slides[index].tagline} three properties across clifton, dha, and shahrah-e-faisal.
          </p>
        </div>
      </div>

      <div className="absolute bottom-40 right-4 z-10 flex items-center gap-2 sm:bottom-44 sm:right-8 lg:bottom-52">
        <button
          onClick={() => go(-1)}
          className="grid h-11 w-11 place-items-center border border-cream/40 text-cream transition-colors hover:bg-cream hover:text-ink"
          aria-label="previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => go(1)}
          className="grid h-11 w-11 place-items-center border border-cream/40 text-cream transition-colors hover:bg-cream hover:text-ink"
          aria-label="next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="absolute bottom-32 left-4 z-10 flex gap-1.5 sm:left-8 sm:bottom-36">
        {slides.map((s, i) => (
          <button
            key={s.image.slot}
            onClick={() => setIndex(i)}
            className={cn("h-0.5 transition-all", i === index ? "w-10 bg-gold" : "w-6 bg-cream/40")}
            aria-label={`go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
