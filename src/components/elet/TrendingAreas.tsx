"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { trendingAreas } from "@/data/content";
import { AreaCard } from "./AreaCard";
import { ScrollFadeIn } from "./ScrollFadeIn";

export function TrendingAreas() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.7), behavior: "smooth" });
  };

  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <ScrollFadeIn>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <div className="elet-eyebrow text-teal">the city</div>
              <h2 className="mt-3 font-display text-4xl leading-tight sm:text-6xl">trending in karachi</h2>
              <p className="mt-4 text-ink-soft">
                where to eat, walk, and linger. our neighbourhood picks around each elet property.
              </p>
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              <button
                onClick={() => scroll(-1)}
                className="grid h-11 w-11 place-items-center border border-ink/20 text-ink transition-colors hover:bg-ink hover:text-cream"
                aria-label="scroll left"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => scroll(1)}
                className="grid h-11 w-11 place-items-center border border-ink/20 text-ink transition-colors hover:bg-ink hover:text-cream"
                aria-label="scroll right"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </ScrollFadeIn>

        <div
          ref={ref}
          className="mt-12 flex gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
        >
          {trendingAreas.map((a, i) => (
            <ScrollFadeIn key={a.name} delay={i * 80} className="min-w-[78%] snap-start sm:min-w-[46%] lg:min-w-[30%]">
              <AreaCard area={a} />
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
