"use client";

import { aboutStory } from "@/data/content";
import { ImageSlot } from "./ImageSlot";
import { ScrollFadeIn } from "./ScrollFadeIn";
import { comingSoonHandler } from "@/lib/coming-soon";

export function AboutStory() {
  return (
    <section className="bg-cream-warm py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <ScrollFadeIn>
            <ImageSlot slot={aboutStory.image} ratio="aspect-[4/5]" />
          </ScrollFadeIn>
          <ScrollFadeIn delay={120}>
            <div className="max-w-xl">
              <div className="elet-eyebrow text-teal">our story</div>
              <blockquote className="mt-6 font-display text-3xl leading-[1.15] text-ink sm:text-5xl">
                <span className="text-gold">&ldquo;</span>
                {aboutStory.quote}
                <span className="text-gold">&rdquo;</span>
              </blockquote>
              <div className="mt-6 elet-eyebrow text-ink-soft">— {aboutStory.attribution}</div>
              <a
                href="#"
                onClick={comingSoonHandler("the story")}
                className="mt-10 inline-flex items-center gap-1.5 border-b border-ink pb-1 text-xs font-medium uppercase tracking-[0.22em] text-ink hover:border-gold hover:text-teal"
              >
                read the story
              </a>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
